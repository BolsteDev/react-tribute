import React, { Component } from 'react';
import TextArea from 'react-textarea-autosize';

import options from './options';
import Tribute from '../../src/Tribute';

export default class RefTributeExample extends Component {
  render() {
    return (
      <div className="row">
        <div className="large-8 columns">
          <div className="callout large">
            <h3>Tribute on nested textareas:</h3>
            <p>If you have a nested textarea, you can use custom refs to indicate
              which component to bind to. Remember that customRefs expects you to
              return an array of refs.</p>
            <Tribute options={options} customRefs={() => { return [this.refs.textarea]; }}>
              <div style={{ padding: '20px', backgroundColor: '#333' }}>
                <div>
                  <TextArea ref="textarea" placeholder="Try to @mention someone…"></TextArea>
                </div>
              </div>
            </Tribute>
            <div className="callout">
              <pre>
              {
`import TextArea from 'react-textarea-autosize';

// ...

<Tribute options={options} customRefs={() => { return [this.refs.textarea]; }}>
  <div style={{ padding: '20px', backgroundColor: '#333' }}>
    <div>
      <TextArea ref="textarea"></TextArea>
    </div>
  </div>
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
