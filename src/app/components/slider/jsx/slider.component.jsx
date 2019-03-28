import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

import '../../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../../node_modules/slick-carousel/slick/slick-theme.css';


class Slider extends Component {

  static propTypes = {
    tabs: PropTypes.array,
    dotsLine: PropTypes.bool,
    autoplay: PropTypes.bool
  }

  render() {
    const { tabs, dotsLine, autoplay, arrows } = this.props;

    let settings = {
      className: 'slider',
      dots: true,
      infinite: true,
      speed: 1000,
      arrows: arrows || false,
    };

    if (dotsLine) {
      settings = Object.assign({}, settings, {
        dotsClass: 'slider__dots',
        customPaging:() => {
          return (
            <div className='slider__dots__line'>
              <div className='slider__dots__line__progress'/>
            </div>
          );
        }
      });
    }

    if (autoplay) settings = Object.assign({}, settings, { autoplay: true });

    return (
      <Slick {...settings}>
        {tabs.map((item, i) => {
          let style;

          if (item.background) {
            style = { backgroundImage: `url(${item.background})` };
          }

          return (
            <div key={i} className='slider__tab' style={style}>
              {item.content && item.content}
            </div>);
        })}
      </Slick>
    );
  }
}

export default Slider;
