import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Video extends Component {

  static propTypes = {
    overlay: PropTypes.string,
    settings: PropTypes.object,
    source: PropTypes.array
  };

  render() {
    const { overlay, settings, source } = this.props;

    return (
      <div className={`video ${overlay ? 'video--overlay' : ''}`}>
        <video className='video__src'  {...settings}>
          {source.map((item, i) => (
            <source key={i} src={item.src} type={item.type ? item.type : `video/${item.src.split('.').pop()}`}/>
          ))};
        </video>
        {overlay && <div className='video__overlay'/>}
      </div>
    );
  }
}

export default Video;
