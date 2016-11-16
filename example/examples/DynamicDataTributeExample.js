import React, { Component } from 'react';
import faker from 'faker';

import options from './options';
import Tribute from '../../src/Tribute';

export default class DynamicTributeExample extends Component {
  state = {
    values: options.values,
  }

  addUser = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const slug = firstName.toLowerCase();

    this.setState({
      values: [...this.state.values, {
        first_name: firstName,
        last_name: lastName,
        fullName: `${firstName} ${lastName}`,
        slug,
      }],
    });
  }

  removeUser = (index) => {
    this.setState({
      values: [...this.state.values.slice(0, index), ...this.state.values.slice(index + 1, this.state.values.length)],
    });
  }

  render() {
    return (
      <div className="row">
        <div className="large-8 columns">
          <div className="callout large">
            <h3>Tribute using changing data:</h3>
            <Tribute
              options={{
                ...options,
                values: this.state.values,
              }}
            >
              <textarea placeholder="Try to @mention someone…"></textarea>
            </Tribute>
            <button className="button" onClick={this.addUser}>Add another user</button>
            <ul>
              {this.state.values.map((value, index) => (
                <li key={index}>
                  {value.first_name} {value.last_name}
                  {' '}
                  <button
                    onClick={this.removeUser.bind(this, index)}
                    type="button"
                    className="alert button"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="callout">
              <pre>
              {
`<Tribute
  options={{
    ...options,
    values: this.state.values,
  }}
>
  <textarea placeholder="Try to @mention someone…"></textarea>
</Tribute>
<button className="button" onClick={this.addUser}>Add another user</button>
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
