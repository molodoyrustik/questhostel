import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Box from '../../box';
import Slider from '../../slider';
import BookingBtn from '../../bookingBtn';

class Welcome extends Component {
  render() {
    const tabs = [
      { background: '/static/images/slider/slider__image--1.jpg' },
      { background: '/static/images/slider/slider__image--2.jpg' },
      { background: '/static/images/slider/slider__image--3.jpg' },
      { background: '/static/images/slider/slider__image--4.jpg' },
      { background: '/static/images/slider/slider__image--5.jpg' },
    ];

    const overlay = <Slider tabs={tabs} dotsLine arrows={true}/>;

    return (
      <Box id='welcome' fullscreen overlay={overlay}>
        <div className='welcome__section welcome__section--image'>
          <img className='welcome__image' src='/static/images/share/new-logo--big.png'/>
        </div>
        <div className='welcome__section welcome__section--button'>
          <ScrollLink className='welcome__scroll-link' to='booking' duration={500} offset={-50} smooth>
            <BookingBtn />
          </ScrollLink>
        </div>
      </Box>
    );
  }
}

export default Welcome;
