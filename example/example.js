import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BasicTributeExample from './examples/BasicTributeExample';
import ControlledTributeExample from './examples/ControlledTributeExample';
import CustomTributeExample from './examples/CustomTributeExample';
import RefTributeExample from './examples/RefTributeExample';
import DynamicDataTributeExample from './examples/DynamicDataTributeExample';
import PromiseDataTributeExample from './examples/PromiseDataTributeExample';

import Tribute from '../src/Tribute';

console.log('Loading Tribute Examples');

class Example extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h1>Tribute Demo</h1>
          </div>
        </div>

        <BasicTributeExample />
        <ControlledTributeExample />
        <CustomTributeExample />
        <RefTributeExample />
        <DynamicDataTributeExample />
        <PromiseDataTributeExample />
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('render'));
