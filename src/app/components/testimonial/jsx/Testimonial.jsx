import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Testimonial extends Component {

  static propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.node
  }

  render() {
    const { photo, name, text } = this.props;

    return (
      <div className='testimonial'>
        <div className='testimonial__section testimonial__section-photo'>
          <img className='testimonial__photo' src={photo} alt={name} />
          <div className='testimonial__name'>{name}</div>
          <div className='testimonial__from'>
            <a href='http://mir-kvestov.ru/quests/quest-666-hostel#reviews_block' target='_blank' className='testimonial__from__link'>
              <img className='testimonial__from__logo' src='/static/images/share/mir-kvestov__logo.png' alt='Квест Хостел | Отзывы на Мире Квестов'/>
            </a>
          </div>
        </div>
        <div className='testimonial__section testimonial__section-text'>
          {text.map((item, i) => {
            return <div key={i} className='testimonial__paragraph'>{item}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default Testimonial;
