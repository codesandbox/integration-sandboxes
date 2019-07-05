import 'aurelia-polyfills';
import { initialize } from 'aurelia-pal-browser';
import { Aurelia } from 'aurelia-framework';
import { Origin } from 'aurelia-metadata';
import { Loader, TemplateRegistryEntry, LoaderPlugin } from 'aurelia-loader';
import { DOM, PLATFORM } from 'aurelia-pal';
import { join } from 'aurelia-path';

// IMPORTANT
// The code in this file is not needed in a real Aurelia app.
// It is only needed to configure CodeSandbox.io for Aurelia.
// Aurelia application code begins in the src/main.ts file.
// ORIGINAL AUTHOR: Bazyli Brzóska https://github.com/niieani

class TextTemplateLoader {
  async loadTemplate(loader, entry) {
    const text = await loader.loadText(entry.address);
    entry.template = DOM.createTemplateFromMarkup(text);
  }
}

function ensureOriginOnExports(moduleExports, moduleId) {
  let target = moduleExports;
  let key;
  let exportedValue;

  if (!moduleExports) {
    return moduleExports;
  }

  if (target.__useDefault) {
    target = target.default;
  }

  Origin.set(target, new Origin(moduleId, 'default'));

  if (typeof target === 'object') {
    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        Origin.set(exportedValue, new Origin(moduleId, key));
      }
    }
  }

  return moduleExports;
}

async function getModule(moduleName) {
  if (moduleName.includes('/')) {
    moduleName = join('src', moduleName);
  }

  const hasJS = moduleName.endsWith('.js');

  try {
    return await import(`${moduleName}` /* webpackMode: 'eager' */);
  } catch (e) {}

  try {
    return await import(`./${moduleName}` /* webpackMode: 'eager' */);
  } catch (e) {}

  try {
    return await import(`${moduleName}/dist/amd/${moduleName}` /* webpackMode: 'eager' */);
  } catch (e) {}

  try {
    return await import(`./src/${moduleName}` /* webpackMode: 'eager' */);
  } catch (e) {}

  if (moduleName.includes('/')) {
    try {
      const [dep, ...path] = moduleName.split('/');
      return import(`${dep}/dist/amd/${path.join(
        '/'
      )}` /* webpackMode: 'eager' */);
    } catch (e) {}
  }

  if (!hasJS) {
    return await getModule(`${moduleName}.js`);
  }
}

class SandboxLoader extends Loader {
  moduleRegistry = Object.create(null);
  loaderPlugins = Object.create(null);
  modulesBeingLoaded = new Map();

  templateLoader: TextTemplateLoader;

  constructor() {
    super();

    this.useTemplateLoader(new TextTemplateLoader());
    this.addPlugin('template-registry-entry', {
      fetch: async moduleId => {
        const entry = (this as any).getOrCreateTemplateRegistryEntry(moduleId);
        if (!entry.templateIsLoaded) {
          await this.templateLoader.loadTemplate(this, entry);
        }
        return entry;
      }
    });
  }

  async _import(address, defaultHMR = true) {
    const addressParts = address.split('!');
    const moduleId = addressParts.splice(addressParts.length - 1, 1)[0];
    const loaderPlugin = addressParts.length === 1 ? addressParts[0] : null;

    if (loaderPlugin) {
      const plugin = this.loaderPlugins[loaderPlugin];
      if (!plugin) {
        throw new Error(
          `Plugin ${loaderPlugin} is not registered in the loader.`
        );
      }
      return await plugin.fetch(moduleId);
    }

    const m = await getModule(moduleId);
    return m;
  }

  map(id, source) {}

  normalizeSync(moduleId, relativeTo) {
    return moduleId;
  }

  normalize(moduleId, relativeTo) {
    return Promise.resolve(moduleId);
  }

  useTemplateLoader(templateLoader) {
    this.templateLoader = templateLoader;
  }

  loadAllModules(ids) {
    return Promise.all(ids.map(id => this.loadModule(id)));
  }

  async loadModule(moduleId, defaultHMR = true) {
    let existing = this.moduleRegistry[moduleId];
    if (existing) {
      return existing;
    }
    let beingLoaded = this.modulesBeingLoaded.get(moduleId);
    if (beingLoaded) {
      return beingLoaded;
    }
    beingLoaded = this._import(moduleId, defaultHMR);
    this.modulesBeingLoaded.set(moduleId, beingLoaded);
    const moduleExports = await beingLoaded;
    this.moduleRegistry[moduleId] = ensureOriginOnExports(
      moduleExports,
      moduleId
    );
    this.modulesBeingLoaded.delete(moduleId);
    return moduleExports;
  }

  loadTemplate(url) {
    return this.loadModule(
      this.applyPluginToUrl(url, 'template-registry-entry'),
      false
    );
  }

  async loadText(url) {
    const result = await this.loadModule(url, false);
    if (result.default && 'string' == typeof result.default) {
      // we're dealing with a file loaded using the css-loader:
      return result.default;
    }
    return result;
  }

  applyPluginToUrl(url, pluginName) {
    return `${pluginName}!${url}`;
  }

  addPlugin(pluginName, implementation) {
    this.loaderPlugins[pluginName] = implementation;
  }
}

(async () => {
  try {
    console.log('here');
    initialize();
    const aurelia = new Aurelia(new SandboxLoader());
    await getModule('./main').then(m => m.configure(aurelia));
  } catch (ex) {
    console.error(ex);
    document.body.textContent = ex;
  }
})();
