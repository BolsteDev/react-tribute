import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TributeJS from 'tributejs';
import deepEqual from 'deepequal';

const { arrayOf, func, node, object, shape } = PropTypes;

export default class Tribute extends Component {
  static propTypes = {
    customRef: func,
    children: node,
    onChange: func,
    options: shape({
      collections: arrayOf(arrayOf(object)),
      values: arrayOf(object),
      lookup: func,
    }).required,
  }

  static defaultProps = {
    onChange: () => {},
  }

  children = []
  listeners = []
  tribute = null

  componentDidMount() {
    this.bindToChildren();
  }

  componentDidUpdate() {
    if (this.tribute) {
      // TODO handle the case where other options have changed

      if (this.props.options.values) {
        this.tribute.append(0, this.props.options.values, true /* replace */);
      } else if (this.props.options.collections) {
        this.props.options.collections.forEach((collection, index) => {
          this.tribute.append(index, collection, true /* replace */);
        });
      }
    } else {
      this.bindToChildren();
    }
  }

  shouldComponentUdpdate(nextProps) {
    return (!deepEqual(nextProps, this.props));
  }

  bindToChildren = () => {
    const { customRef, options } = this.props;

    (customRef ? [customRef()] : this.children).forEach((child) => {
      const node = ReactDOM.findDOMNode(child);

      const t = new TributeJS({
        ...options,
      });

      t.attach(node);

      this.tribute = t;

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
    const { children, options: _, customRef: __, onChange: ___, ...props } = this.props;

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
