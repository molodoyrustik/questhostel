import React, { Component } from 'react';

import Box from '../../box';
import Container from '../../container';
import Slider from '../../slider';
import Testimonial from '../../testimonial';

class Testimonials extends Component {

  constructor() {
    super();

    this.renderSlider = this.renderSlider.bind(this);

    this.state = {
      testimonials: [
        {
          name: 'Анна Шехватова',
          photo: '/static/images/testimonials/testimonial__photo--1.jpg',
          text: [
            'Квест супер! Всё на высшем уровне. Мы сначала даже не поняли как начался квест.',
            'Мы выбрали экш режим (все двери открыты бегай где хочешь куда хочешь, но и внимания от актёров больше).',
            'Вообщем всё было круто всем советую. Обязательно сходим и на классику.'
          ]
        },
        {
          name: 'Мария Моисеенко',
          photo: '/static/images/testimonials/testimonial__photo--2.jpg',
          text: [
            'Игра актеров была просто замечательная! Отлично передана атмосфера, все остались в восторге, спасибо огромное за эту игру'
          ]
        },
        {
          name: 'Настя Буланова',
          photo: '/static/images/testimonials/testimonial__photo--3.jpg',
          text: [
            'Мы потеряли жильё и, к сожалению, нам пришлось тоскаться и искать новое... Честно, я очень плохо помню, как нас занесло в этот, ИМЕННО в этот Хостел, но помню точно, что нам было не по себе...',
            'Вроде была табличка при входе Хостел-Всё включено... да, обстановка накалялась пока мы шли до ресепшена. Но когда мы дошли, до место назначения.. Нас встретила приветливая и доброжелательная девушка. Видимо она-директор заведения.',
            'Мы выбрали номер, взяли люкс, так как королевский обошёлся бы слишком дорого. Ну вот нам рассказали краткую историю этого хостела и затем нас отправили по номерам...',
            'Я пошла вторая заселяться.. Все произошло настолько быстро, что я оказалась прикованная и без движения, и мои друзья точно так же...',
            'Нам было безумно страшно, кричать нельзя было, грозились, что будет плохо... тишина- привыше всего.',
            'Ребята, на этом историю закончу, не буду и не нужно спойлерить, но скажу так- обязательно, не думая, идите на квест Хостел- Все включено!!!',
            'Нереальные эмоции, да, было немного больно, но актеры знают меру!',
            'Все было настолько захватывающе, что не описать словами!!!! Пока наверное лучший квест, на который мы ходили!',
          ]
        },
        {
          name: 'Наталья Таршилова',
          photo: '/static/images/testimonials/testimonial__photo--4.jpg',
          text: [
            'Получили незабываемые впечатления и море эмоций.',
            'Актёры на отлично справились со своей ролью, контакт выдали на ура. Администратор был очень приветлив. Было и страшно, и смешно, и неожиданно.',
            'И главное была очень крутая музыка!😂 советую всем кто любит контактные квесты! Молодцы ребята!'
          ]
        },
      ]
    };
  }

  renderSlider() {
    const { testimonials } = this.state;
    const tabs = [];

    testimonials.map((item) => {
      return tabs.push({
        content: <Testimonial {...item} />
      });
    });

    return <Slider tabs={tabs} />;
  }

  render() {
    const params = {
      id: 'testimonials',
      fullscreen: true,
      overlay: (<img src='/static/images/box/box--testimonials__background.jpg' alt='Отзывы' />),
      header: (<img className='box__title box__title-image' src='/static/images/menu/menu__item--testimonials.png' alt='Отзывы' />)
    };

    return (
      <Box {...params}>
        <Container>
          <div className='testimonials__slider'>
            {this.renderSlider()}
          </div>
        </Container>
      </Box>
    );
  }
}

export default Testimonials;
