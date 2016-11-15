import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TributeJS from 'tributejs';
import deepEqual from 'deepequal';

const { arrayOf, func, node, object, shape } = PropTypes;

export default class Tribute extends Component {
  static propTypes = {
    customRefs: func,
    children: node,
    onChange: func,
    options: shape({
      values: arrayOf(object),
      lookup: func,
    })
  }

  static defaultProps = {
    onChange: () => {},
  }

  children = []
  listeners = []

  componentDidMount() {
    this.bindToChildren();
  }

  componentDidUpdate() {
    this.bindToChildren();
  }

  shouldComponentUdpdate(nextProps) {
    return (!deepEqual(nextProps, this.props));
  }

  bindToChildren = () => {
    const { customRefs, options } = this.props;

    (customRefs ? customRefs() : this.children).forEach((child) => {
      const node = ReactDOM.findDOMNode(child);

      const t = new TributeJS({
        ...options,
      });

      t.attach(node);

      const listener = this.handleTributeReplaced.bind(this);
      node.addEventListener(
        'tribute-replaced',
        listener
      );
      this.listeners.push(listener);
    });
  }

  handleTributeReplaced = (event) => {
    this.props.onChange(event);
  }

  render() {
    const { children, options: _, ...props } = this.props;

    return (
      <div {...props}>
        {
          React.Children.map(children, (element, index) => {
            return React.cloneElement(element, {
              ref: (ref) => { this.children[index] = ref; }
            })
          })
        }
      </div>
    );
  }
}
