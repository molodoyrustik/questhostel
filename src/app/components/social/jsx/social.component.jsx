import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Social extends Component {
  render() {
    /**
     * Detect kind of Social Network
     * @type {Array}
     **/
    const items = [];

    this.props.links.map(link => {
      let kind = link.split('//')[1].split('.')[0];

      kind = (kind === 'www' ? link.split('//')[1].split('.')[1] : kind);
      return items.push({
        href: link,
        kind
      });
    });

    return (
      <nav className={`social social-${this.props.position} social--${this.props.template}`}>
        {items && items.map((link, i) => {
          /**
          * Kind of Social Network
          * @type {string}
          */
          const kind = `social__link--${link.kind}`;

          /**
          * Link position
          * ex. First, Middle(default), Last or Single
          * @type {string}
          */
          let position = 'social__link-middle';


          if (items.length !== 1) {
            if (i === 0) position = 'social__link-first';
            if (i === items.length - 1) position = 'social__link-last';
          } else position = 'social__link-single';

          return (<a key={i} className={`social__link ${position} ${kind}`} target='_blank' href={link.href}>
            <i className={`fa fa-${(link.kind === 'facebook' ? 'facebook-official' : link.kind)}`}/>
          </a>);
        })}
      </nav>
    );
  }
}

Social.propTypes = {
  links: PropTypes.array,
  position: PropTypes.string,
  template: PropTypes.string
};

export default Social;
