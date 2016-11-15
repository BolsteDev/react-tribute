import React, { Component } from 'react';

import options from './options';
import Tribute from '../../src/Tribute';

export default class ControlledTributeExample extends Component {
  state = {
    controlledInputValue: '',
  }

  handleControlledInputChange = (event) => {
    this.setState({
      controlledInputValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="row">
        <div className="large-8 columns">
          <div className="callout large">
            <h3>Tribute on <code>controlled input</code> element:</h3>
            <p>Make sure to listen for <code>onChange</code> from the
              <code>Tribute</code> component as well.</p>
            <Tribute
              onChange={this.handleControlledInputChange}
              options={options}
            >
              <input
                placeholder="Try to @mention someone…"
                onChange={this.handleControlledInputChange}
                value={this.state.controlledInputValue}
              />
            </Tribute>
            <p><code>{this.state.controlledInputValue}</code></p>
            <div className="callout">
              <pre>
              {
`<Tribute
  onChange={this.handleControlledInputChange}
  options={options}
>
  <input
    placeholder="Try to @mention someone…"
    onChange={this.handleControlledInputChange}
    value={this.state.controlledInputValue}
  />
</Tribute>
`
              }
            </pre>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
