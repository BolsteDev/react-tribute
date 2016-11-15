import React, { Component } from 'react';

import options from './options';
import Tribute from '../../src/Tribute';

export default class BasicTributeExample extends Component {
  render() {
    return (
      <div className="row">
        <div className="large-8 columns">
          <div className="callout large">
            <h3>Tribute on <code>textarea</code> element:</h3>
            <Tribute
              options={options}
            >
              <textarea placeholder="Try to @mention someone…"></textarea>
            </Tribute>
            <div className="callout">
              <pre>
              {
`<Tribute options={options}>
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
