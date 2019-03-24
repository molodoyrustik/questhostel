import React, { Component } from 'react';

import Box from '../../box';

class Youtube extends Component {

  renderFrame() {
    const params = {
      className: 'youtube__frame',
      src: 'https://www.youtube.com/embed/hCNcPwW0uqQ?rel=0&amp;controls=0&amp;showinfo=0',
      frameBorder: 0,
      allowFullScreen: true
    };

    return <iframe {...params}/>;
  }

  render() {
    const params = {
      id: 'youtube',
      fullscreen: true,
      overlay: this.renderFrame()
    };

    return <Box {...params}/>;
  }
}

export default Youtube;
