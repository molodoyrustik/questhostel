import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {

  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className='layout'>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
