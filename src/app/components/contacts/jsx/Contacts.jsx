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
          bootstrapURLKeys={{ key: 'AIzaSyB7XLDBaE0u-_pq5VLNgWPCPiZGTQyi57s' }}
          defaultCenter={{ lat: 55.697253, lng: 37.633042 }}
          options={() => {
            return { styles: mapStyle, scrollwheel: false };
          }}
          zoom={15}
        >
          <MapPoint lat={55.692403} lng={37.622679} />
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
            <img className='contacts__logo' src='/static/images/share/footer-logo.png' alt='Квест Хостел | Остросюжетный перфоманс'/>
          </div>
          <div className='contacts--info__section contacts--info__section-address'>
            <i className='contacts__icon fa fa-map-marker' />
            <span className='contacts__text'>м.Нагатинская, Варшавское шоссе, д.33</span>
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
            <a className='contacts__link' href='https://vk.com/questhostel2' target='_blank'>@questhostel2</a>
          </div>
          <div className='contacts--info__section contacts--info__section-social contacts--info__section--last'>
            <i className='contacts__icon fa fa-instagram' />
            <a className='contacts__link' href='https://instagram.com/quest_hostel2' target='_blank'>@quest_hostel2</a>
          </div>
        </div>
      </Box>
    );
  }
}

export default Contacts;
