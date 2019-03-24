import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MapPoint extends Component {

  static propTypes = {
    lat: PropTypes.number,
    lng: PropTypes.number
  }

  render() {
    return (
      <div className='contacts--map__point'>
        <i className='contacts--map__point__icon fa fa-map-marker' />
      </div>
    );
  }
}

export default MapPoint;
