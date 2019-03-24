import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {

  static propTypes = {
    size: PropTypes.number,
    template: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {
    size: 20,
    template: 'white',
    children: 'Click me',
    onClick: () => {}
  }

  render() {
    const { size, template, onClick, children } = this.props;

    const className = `button button-${size} button--${template}`;

    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
