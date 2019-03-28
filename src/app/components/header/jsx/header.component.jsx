import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link as ScrollLink } from 'react-scroll';

import Box from '../../box';
import Container from '../../container';
import Logo from '../../logo';
import Menu from '../../menu';
import Social from '../../social';

class Header extends Component {

  componentDidMount() {
    window.onscroll = () => {
      const element = ReactDOM.findDOMNode(this.element);
      const windowScroll = window.scrollY;

      if (windowScroll > element.offsetHeight) {
        element.classList.add('box-background');
      } else {
        element.classList.remove('box-background');
      }
    };
  }

  renderLogo() {
    const scrollParams = {
      to: 'welcome',
      duration: 500,
      smooth: true
    };

    return (
      <ScrollLink {...scrollParams}>
        <Logo type='big' size={90} />
      </ScrollLink>
    );
  }

  renderMenu() {
    const params = {
      type: 'header',
      position: 'center',
      template: 'white',
      items: [
        { href: '#history', title: <img className='menu__item__img' src='/static/images/menu/menu__item--history.png' alt='История' /> },
        { href: '#testimonials', title: <img className='menu__item__img' src='/static/images/menu/menu__item--testimonials.png' alt='Отзывы' /> },
        { href: '#rules', title: <img className='menu__item__img' src='/static/images/menu/menu__item--rules.png' alt='Правила' /> },
        { href: '#booking', title: <img className='menu__item__img' src='/static/images/menu/menu__item--booking.png' alt='Забронировать' /> },
        { href: '#contacts', title: <img className='menu__item__img' src='/static/images/menu/menu__item--contacts.png' alt='Контакты' /> }
      ]
    };

    return <Menu {...params} />;
  }

  renderSocial() {
    const params = {
      position: 'right',
      template: 'white',
      links: [
        'https://vk.com/questhostel2',
        'https://www.instagram.com/quest_hostel2/'
      ]
    };

    return <Social {...params} />;
  }

  render() {
    const params = {
      id: 'header',
      ref: (e) => { this.element = e; }
    };

    return (
      <Box {...params}>
        <Container>
          {this.renderLogo()}
          {this.renderMenu()}
          {this.renderSocial()}
        </Container>
      </Box>
    );
  }
}

export default Header;
