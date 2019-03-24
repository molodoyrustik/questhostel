import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logo extends Component {

  static propTypes = {
    size: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }

  static defaultProps = {
    size: 20,
    type: 'single',
    position: 'left'
  }

  render() {
    const className = `logo logo-${this.props.size} logo--${this.props.position}`;

    return (
      <div className={className}>
        <img className='logo__src' src={`/static/images/share/logo--${this.props.type}.png`} alt='Квест Хостел | Реалистичный хоррор квест' />
      </div>
    );
  }
}

export default Logo;
