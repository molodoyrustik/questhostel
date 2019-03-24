import React, { Component } from 'react';

import './boot.css';

import Layout from './components/layout';
import HomePage from './pages/home';

class Boot extends Component {
  render() {
    return (
      <Layout>
        <HomePage />
      </Layout>
    );
  }
}

export default Boot;
