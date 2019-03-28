import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Box from '../../box';
import Container from '../../container';
import Button from '../../button';

class History extends Component {

  render() {
    const overlay = <img src='/static/images/box/box--history__background.jpg' />;
    const header = <img className='box__title box__title-image' src='/static/images/menu/menu__item--history.png' alt='История' />;

    return (
      <Box id='history' fullscreen overlay={overlay} header={header} >
        <Container>
          <div className='history'>
            <div className="history__section">
              Квест основан на сюжете фильма Квентина Тарантино «Хостел»
            </div>
            <div className="history__section">
              Хоррор-версия (4 актера):
            </div>
            <div className='history__section'>
              Отправившись на встречу к другу, пригласившему вас, вы стали частью чужой игры. Игры, где ставка - ваша жизнь. Остановившись по его рекомендации в "HOSTEL ALL INCLUSIVE", вы сделали свой последний выбор. У персонала здесь свои правила, где каждый пункт прописан кровью, и теперь выбирать будут они. На что готов ты, ради спасения? Игра начинается...
            </div>
            <div className='history__section'>
              Экшн-версия (по предзаказу, 5 актеров):
            </div>
            <div className='history__section'>
              Вы - помощники следователя, которые получили информацию о страшных зверствах, творящихся в стенах одного хостела. Вам надо собрать доказательства преступлений персонала, проникнув на его территорию. Чтобы выбраться, нужно отыскать следы постояльцев, которые стали жертвами (или то, что от них осталось). Готов ли ты окунуться в атмосферу животного страха?
            </div>
          </div>
        </Container>
      </Box>
    );
  }
}

export default History;
