import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link as ScrollLink } from 'react-scroll';

class Menu extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    template: PropTypes.string,
    position: PropTypes.string,
    items: PropTypes.array
  }

  static defaultProps = {
    type: 'default',
    position: 'left'
  }

  render() {
    const { type, position, items } = this.props;
    const params = {
      type,
      className: `menu menu-${position} menu--${type}`
    };

    return (
      <section {...params}>
        <nav className='menu__container'>
          {items.map((item, i) => {
            let order = 'middle';

            if (i === 0) order = 'first';
            else if (i === items.length - 1) order = 'last';

            if (item.href.split('#').length - 1) {
              const scrollParams = {
                to: item.href.split('#')[1],
                className: `menu__item menu__item--${order}`,
                activeClass: 'menu__item-active',
                smooth: true,
                spy: true,
                duration: 500,
                offset: -70
              };

              return (
                <ScrollLink key={i} {...scrollParams}>
                  {item.title}
                </ScrollLink>
              );
            }

            return <a key={i} href={item.href} className={`menu__item menu__item--${order}`}>{item.title}</a>;
          })}
        </nav>
      </section>
    );
  }
}

export default Menu;
