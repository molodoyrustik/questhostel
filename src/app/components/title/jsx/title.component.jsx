import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {

  static propTypes = {
    size: PropTypes.number.isRequired,
    block: PropTypes.bool,
    template: PropTypes.string.isRequired,
    paragraph: PropTypes.number,
    children: PropTypes.node
  }

  static defaultProps = {
    size: 20,
    block: false,
    template: 'black',
    paragraph: 2,
    children: 'Hey guys!'
  }

  render() {
    const { size, block, template, paragraph, children } = this.props;
    const className = `title title-${size} ${block ? 'title-block' : ''} title--${template}`;

    switch (paragraph) {
      case 1:
        return (
          <h1 className={className}>
            {children}
          </h1>
        );
      case 2:
      default:
        return (
          <h2 className={className}>
            {children}
          </h2>
        );
    }
  }
}

export default Title;
