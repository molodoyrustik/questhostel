import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import Box from '../../box';
import MapPoint from './MapPoint.jsx';

class Contacts extends Component {

  renderMap() {
    const mapStyle = [
      {
        'stylers': [
          { 'hue': '#ff1a00' },
          { 'invert_lightness': true },
          { 'saturation': -100 },
          { 'lightness': 33 },
          { 'gamma':0.5 }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': [
          { 'color': '#2D333C' }
        ]
      }
    ];

    return (
      <div className='contacts--map'>
        <GoogleMap yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: 'AIzaSyCLW0jRi7yKxqg6Qs-DbeU40OTXH-vt6q0' }}
          defaultCenter={{ lat: 55.7531018, lng: 37.7683209 }}
          options={() => {
            return { styles: mapStyle, scrollwheel: false };
          }}
          zoom={15}
        >
          <MapPoint lat={55.748121} lng={37.754850} />
        </GoogleMap>
      </div>
    );
  }

  render() {
    const overlay = this.renderMap();
    const header = <img className='box__title box__title-image' src='/static/images/menu/menu__item--contacts.png' alt='Контакты'/>;

    return (
      <Box id='contacts' fullscreen overlay={overlay} header={header}>
        <div className='contacts--info'>
          <div className='contacts--info__section contacts--info__section-logo'>
            <img className='contacts__logo' src='/static/images/share/logo--slogan.png' alt='Квест Хостел | Остросюжетный перфоманс'/>
          </div>
          <div className='contacts--info__section contacts--info__section-address'>
            <i className='contacts__icon fa fa-map-marker' />
            <span className='contacts__text'>М.Нагатинская, Варшавское шоссе, д.33 БЦ Ви-Арт</span>
          </div>
          <div className='contacts--info__section contacts--info__section-mail'>
            <i className='contacts__icon fa fa-envelope' />
            <a className='contacts__link' href='mailto:info@horrorland.ru'>info@horrorland.ru</a>
          </div>
          <div className='contacts--info__section contacts--info__section-phone'>
            <i className='contacts__icon fa fa-phone' />
            <a className='contacts__link' href='tel:+7(925) 05-90-666'>+7(925) 05-90-666</a>
          </div>
          <div className='contacts--info__section contacts--info__section-social'>
            <i className='contacts__icon fa fa-vk' />
            <a className='contacts__link' href='https://vk.com/horrorquestland' target='_blank'>@horrorquestland</a>
          </div>
          <div className='contacts--info__section contacts--info__section-social contacts--info__section--last'>
            <i className='contacts__icon fa fa-instagram' />
            <a className='contacts__link' href='https://instagram.com/mirhorrorkvestov' target='_blank'>@mirhorrorkvestov</a>
          </div>
        </div>
      </Box>
    );
  }
}

export default Contacts;