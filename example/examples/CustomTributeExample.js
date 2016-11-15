import React, { Component } from 'react';
import TextArea from 'react-textarea-autosize';

import options from './options';
import Tribute from '../../src/Tribute';

export default class CustomTributeExample extends Component {
  render() {
    return (
      <div className="row">
        <div className="large-8 columns">
          <div className="callout large">
            <h3>Tribute on custom textareas:</h3>
            <Tribute options={options}>
              <TextArea placeholder="Try to @mention someone…"></TextArea>
            </Tribute>
            <div className="callout">
              <pre>
              {
`import TextArea from 'react-textarea-autosize';

// ...

<Tribute options={options}>
  <TextArea></TextArea>
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
