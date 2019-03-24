import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Box extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    fullscreen: PropTypes.bool,
    overlay: PropTypes.element,
    header: PropTypes.element,
    children: PropTypes.node,
    footer: PropTypes.element
  }

  renderBackground() {
    const { overlay } = this.props;

    if (overlay) {
      return (
        <div className='box__background'>
          {overlay}
          <div className='box__background__overlay' />
        </div>
      );
    }
  }

  renderHeader() {
    const { header } = this.props;

    if (header) {
      return (
        <div className='box__section box__section-header'>
          { header }
        </div>
      );
    }
  }

  renderContent() {
    const { children } = this.props;

    if (children) {
      return (
        <div className='box__section box__section-content'>
          {children}
        </div>
      );
    }
  }

  renderFooter() {
    const { footer } = this.props;

    if (footer) {
      return (
        <div className='box__section box__section-footer'>
          {footer}
        </div>
      );
    }
  }

  render() {
    const { id, fullscreen } = this.props;
    const params = {
      id,
      className: `box box--${id} ${fullscreen ? 'box-fullscreen' : ''}`
    };

    return (
      <section {...params}>
        {this.renderBackground()}
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </section>
    );
  }
}

export default Box;
