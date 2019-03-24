import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Box from '../../box';
import Container from '../../container';
import Button from '../../button';

class History extends Component {

  render() {
    const overlay = <img src='/static/images/box/box--history__background.jpg' />;
    const header = <img className='box__title box__title-image' src='/static/images/menu/menu__item--history.png' alt='История' />;
    const footer = (
      <ScrollLink to='youtube' smooth duration={500} offset={-70}>
        <Button size={16}>
          <i className='fa fa-play' />
          Смотреть видео
        </Button>
      </ScrollLink>
    );

    return (
      <Box id='history' fullscreen overlay={overlay} header={header} footer={footer}>
        <Container>
          <div className='history'>
            <div className='history__section'>
              Контактный экшн-перфоманс "Хостел: Все Включено" с элементами хоррора и черного юмора от организаторов одноименного первого контактного квеста Москвы.
            </div>
            <div className='history__section'>
              В каждой эпохе существовали свои разновидности элитных клубов охоты за чужими жизнями, создатели которых - влиятельные маньяки-садисты.
              Такие клубы до сих пор есть, только никто не знает где...и что там творится тоже никому не известно.
            </div>
            <div className='history__section'>
              Вы сделали свой последний неверный выбор, остановившись в хостеле, где продолжают свои игры богатые и безжалостные психопаты...
              Их главное развлечение- страдания и мучения тех, кто рискнул заселиться в этом хостеле.
            </div>
            <div className='history__section'>
              Ваши документы сожжены, никакой информации о вас нет в базе данных, вы уже не существуете.
              Охота начинается... Не ошибись с выбором.
            </div>
          </div>
        </Container>
      </Box>
    );
  }
}

export default History;
