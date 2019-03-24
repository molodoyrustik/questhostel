import React, { Component } from 'react';

import Box from '../../box';

class Booking extends Component {

  render() {
    const header = <img className='box__title box__title-image' src='/static/images/menu/menu__item--booking.png' alt='Бронирование' />;
    const frameParams = {
      className: 'booking__frame',
      src: 'https://booking.questcompass.ru/hostel-all-inclusive/book?metrika=&style=',
      frameBorder: 'no',
      scrolling: 'no',
      seamless: true
    };

    return (
      <Box id='booking' header={header}>
        <div className='booking__blood booking__blood--first'>
          <img className='booking__blood__image' src='/static/images/content/booking__blood--splash.png' alt='blood'/>
        </div>
        <div className='booking__blood booking__blood--second'>
          <img className='booking__blood__image' src='/static/images/content/booking__blood--splash.png' alt='blood'/>
        </div>
        <div className='booking__blood booking__blood--third'>
          <img className='booking__blood__image' src='/static/images/content/booking__blood--splash.png' alt='blood'/>
        </div>
        <iframe {...frameParams} />
      </Box>
    );
  }
}

export default Booking;
