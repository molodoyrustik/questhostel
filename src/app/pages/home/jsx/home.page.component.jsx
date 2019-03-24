import React, { Component } from 'react';

import Welcome from '../../../components/welcome';
import Header from '../../../components/header';
import History from '../../../components/history';
import Youtube from '../../../components/youtube';
import Testimonials from '../../../components/testimonials';
import Booking from '../../../components/booking';
import Contacts from '../../../components/contacts';

class HomePage extends Component {
  render() {
    return (
      <section className='page page--home'>
        <Header />
        <Welcome />
        <History />
        <Youtube />
        <Testimonials />
        <Booking />
        <Contacts />
      </section>
    );
  }
}
export default HomePage;
