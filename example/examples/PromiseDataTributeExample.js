import React, { Component } from 'react';
import faker from 'faker';

import options from './options';
import Tribute from '../../src/Tribute';

export default class DynamicTributeExample extends Component {
  state = {
    loading: true,
    values: [],
  }

  componentDidMount() {
    this.reload();
  }

  reload = () => {
    this.setState({
      loading: true,
      values: [],
    });

    setTimeout(() => {
      const values = Array(10).fill().map(() => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const slug = firstName.toLowerCase();

        return {
          first_name: firstName,
          last_name: lastName,
          fullName: `${firstName} ${lastName}`,
          slug,
        };
      });

      this.setState({
        loading: false,
        values,
      })
    }, 1000);
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
            <h3>Tribute delayed data:</h3>
            <p>You don't have to do anything special to load in delayed data</p>
            <Tribute
              options={{
                ...options,
                values: this.state.values,
              }}
            >
              <textarea placeholder="Try to @mention someone…"></textarea>
            </Tribute>
            <button className="button" onClick={this.reload}>Re-Load</button>
            <ul>
              {this.state.loading ? <li>Loading...</li> : null}
              {this.state.values.map((value, index) => (
                <li key={index}>
                  {value.first_name} {value.last_name}
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
