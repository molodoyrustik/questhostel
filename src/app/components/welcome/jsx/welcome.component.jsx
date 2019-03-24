import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Box from '../../box';
import Slider from '../../slider';

class Welcome extends Component {
  render() {
    const tabs = [
      { background: '/static/images/slider/slider__image--six.jpg' },
      { background: '/static/images/slider/slider__image--seven.jpg' },
      { background: '/static/images/slider/slider__image--eight.jpg' }
    ];

    const overlay = <Slider tabs={tabs} dotsLine autoplay />;

    return (
      <Box id='welcome' fullscreen overlay={overlay}>
        <div className='welcome__section welcome__section--image'>
          <img className='welcome__image' src='/static/images/share/logo--big.png'/>
        </div>
        <div className='welcome__section welcome__section--description'>
          <img className='welcome__description' src='/static/images/content/welcome--description.png' alt='Остросюжетный перфоманс по мотивам фильма Стань героем настоящего хоррора!' />
        </div>
        <div className='welcome__section welcome__section--button'>
          <ScrollLink className='welcome__scroll-link' to='history' duration={500} offset={-50} smooth>
            <i className='fa fa-angle-down' />
          </ScrollLink>
        </div>
      </Box>
    );
  }
}

export default Welcome;
