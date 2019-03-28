import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Box from '../../box';
import Container from '../../container';
import BookingBtn from '../../BookingBtn';

class Youtube extends Component {

  render() {
    const overlay = <img src='/static/images/box/box--youtube__background.jpg' />;
    // const header = <img className='box__title box__title-image' src='/static/images/menu/menu__item--history.png' alt='История' />;
    const header = <p className='history__title'>Варианты игры</p>;
    const footer = (
      <ScrollLink to='booking' smooth duration={500} offset={-70}>
        <BookingBtn/>
      </ScrollLink>
    );

    return (
      <Box id='history history-youtube' fullscreen overlay={overlay} header={header} footer={footer}>
        <Container>
          <div className='history history__youtube'>
            <div className="history__section history__section--youtube">
              <p className='history__section-title'>Классический хоррор (по мотивам фильма)</p>
              <p>На что ты способен ради спасения своей жизни? </p>
              <p>Беги или умри - сделай свой выбор!</p>
            </div>
            <div className="history__section history__section--youtube">
              <p className='history__section-title'>Экшн-игра с элементами пряток </p>
              <p>Готов ли ты окунуться в атмосферу животного страха и настоящего адреналина?</p>
              <p>Доплата: 1000 рублей</p>
            </div>
            <div className='history__section history__section--youtube'>
              <p className='history__section-title'>Вакханалия</p> 
              <p>Хочешь пройти испытания с максимальным погружением и огненным шоу? Весь персонал хостела соберётся для тебя. </p>
              <p>Доплата: 2500 рублей </p>
            </div>
            <div className='history__section history__section--youtube'>
              <p className='history__section-title'>Премиум 18+</p>
              <p>Испытай тонкую грань между обжигающей страстью и жестокостью</p>
              <p>Доплата: 4000 рублей</p>
            </div>
          </div>
        </Container>
      </Box>
    );
  }
}

export default Youtube;
