import { observable, computed, action, autorun } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { render } from 'react-dom';

class ModelExample {
  @observable email = 'mattruby@gmail.com';
  @observable marketingOptIn = true;
  @observable mood = 'happy';
  @observable lifeStory = 'Cool story.';
  @observable shirtColor = 'green';

  @action.bound handleChange(event) {
    switch (event.target.type) {
      case 'checkbox':
        this[event.target.name] = event.target.checked;
        break;
      default:
        this[event.target.name] = event.target.value;
    }
  }
}

const FormGroupRenderer = observer(({ model }) => (
  <form>
    <div className="form-group">
      <label htmlFor="emailInput">Email address</label>
      <input
        name="email"
        type="email"
        id="emailInput"
        value={model.email}
        onChange={model.handleChange}
        className="form-control"
      />
    </div>
    <div className="form-check">
      <label className="form-check-label" htmlFor="marketingOptInInput">
        <input
          name="marketingOptIn"
          type="checkbox"
          id="marketingOptInInput"
          checked={model.marketingOptIn}
          onChange={model.handleChange}
          className="form-check-input"
        />
        Marketing opt-in
      </label>
    </div>
    <div className="form-group">
      <label htmlFor="moodInput">What's your mood?</label>
      <select
        name="mood"
        id="moodInput"
        value={model.mood}
        onChange={model.handleChange}
        className="form-control"
      >
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Glad">Glad</option>
        <option value="Mad">Mad</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="lifeStoryInput">Life Story</label>
      <textarea
        name="lifeStory"
        id="lifeStoryInput"
        value={model.lifeStory}
        onChange={model.handleChange}
        className="form-control"
      />
    </div>
    <fieldset class="form-group">
      <legend>Shirt Color</legend>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            className="form-check-input"
            name="shirtColor"
            id="shirtColorInput-grey"
            value="grey"
            onChange={model.handleChange}
            checked={model.shirtColor === 'grey'}
          />
          Grey
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="radio"
            className="form-check-input"
            name="shirtColor"
            id="shirtColorInput-green"
            value="green"
            onChange={model.handleChange}
            checked={model.shirtColor === 'green'}
          />
          Green
        </label>
      </div>
    </fieldset>
    <hr />
    <pre>
      {JSON.stringify(model, null, 4)}
    </pre>
  </form>
));

const model = new ModelExample('test@test.com');
window.model = model;
render(<FormGroupRenderer model={model} />, document.getElementById('root'));
