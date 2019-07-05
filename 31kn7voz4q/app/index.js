import { Store } from "cx/data";
import { startHotAppLoop } from "cx/ui";
import { TextField, HtmlElement } from "cx/widgets";
import "cx/dist/widgets.css";

startHotAppLoop(
  module,
  document.getElementById("app"),
  new Store(),
  <cx>
    <div>
      <h1>JSX</h1>
      <p>
        <i>For better understanding please read the source code.</i>
      </p>
      <p ws>
        JSX is an extension to the JavaScript language that allows XML like
        structures to appear in the code. JSX is very expressive and convenient
        for defining UI elements.
      </p>
      <h3>Compilation</h3>
      <p ws>
        JSX code needs to be compiled into plain JavaScript for browsers to
        understand it. This is commonly done using Babel and plugins like
        <code>babel-plugin-transform-react-jsx</code> and
        <code>babel-plugin-transform-cx-jsx</code>. CxJS code must be enclosed
        with a wrapper <code>cx</code> element for the complier to be able to
        separate between CxJS and React.
      </p>
      <p>Check the code snippet bellow.</p>
      <div>
        <TextField value-bind="person.name" required label="Name" />
      </div>
      <p>This code is compiled into plain JS with the same behaviour.</p>
      {{
        type: HtmlElement,
        tag: "div",
        children: [
          {
            type: TextField,
            value: {
              bind: "person.name"
            },
            required: true,
            label: "Name"
          }
        ]
      }}
      <h3>CxJS Superpowers</h3>
      <ul>
        <li>
          Special attribute suffixes (<code>-bind</code>, <code>-tpl</code>,
          <code>-expr</code>) enable super-simple data binding;
        </li>
        <li ws>
          Conditional rendering is controlled with <code>visible</code>/<code>
            if
          </code>
          attribute;
        </li>
        <li ws>
          White-space can be preserved using the <code>ws</code>
          attribute;
        </li>
        <li>
          <code>style</code> style can be a string;
        </li>
        <li ws>
          Both <code>class</code> and <code>className</code> attributes work and
          can be an object where all keys with truthy values get rendered;
        </li>
        <li ws>
          Element content can be set using the <code>text</code> or{" "}
          <code>innerHtml</code>
          properties.
        </li>
      </ul>

      <p ws>
        For more information check out
        <a href="https://docs.cxjs.io/intro/jsx">CxJS documentation</a>
        on the topic.
      </p>
    </div>
  </cx>
);
