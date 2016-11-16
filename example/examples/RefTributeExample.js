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
            <p>If you have a nested textarea, you can use custom ref to indicate
              which component to bind to.</p>
            <p>If your container can scroll, you can supply a function that uses
            the ref to your container.</p>
            <Tribute
              options={{
                ...options,
                menuContainer: () => { return this.refs.container; }
              }}
              customRef={() => { return this.refs.textarea; }}
            >
              <div style={{ padding: '20px', backgroundColor: '#333', height: '100px', 'overflow': 'auto' }} ref="container">
                <div>
                  <textarea ref="textarea" placeholder="Try to @mention someone…" style={{ height: '250px' }}></textarea>
                </div>
              </div>
            </Tribute>
            <div className="callout">
              <pre>
              {
`<Tribute
  options={{
    ...options,
    menuContainer: () => { return this.refs.container; }
  }}
  customRef={() => { return this.refs.textarea; }}
>
  <div style={{ padding: '20px', backgroundColor: '#333', height: '100px', 'overflow': 'auto' }} ref="container">
    <div>
      <textarea ref="textarea" placeholder="Try to @mention someone…" style={{ height: '250px' }}></textarea>
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
