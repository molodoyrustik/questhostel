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
          name: 'Анастасия',
          photo: '/static/images/testimonials/testimonial__photo--first.jpg',
          text: [
            'Мы только что с квеста)))) Что могу сказать я и мои девчонки просто в полном восторге!!! Актёры Андрей, Ваня огонь, ничего лишнего, все как надо!!!',
            'Сначала ппц как страшно..я пока ждала свою очередь, девчонки Таааааак орали... я в ужасе была, думала что я здесь делаю...ох уж эти пытки...надеюсь Вам понравились мои танцы)))) я очень старалась)))',
            'Квест просто обязательно надо посетить (у ребят хороший подход к каждому игроку у нас уровень был хард и хард с болью, все в восторге все получили, что хотели))) Девочка Лена ты классная!!!))) Вела игру очень здорово!',
            'Очень дружелюбная обстановка))) Ребята ещё раз спасибо и респект)))'
          ]
        },
        {
          name: 'Даня Валеев',
          photo: '/static/images/testimonials/testimonial__photo--second.jpg',
          text: [
            'С ребятами ходили на этот квест!) Ребят,это бомба) Для тех кто любит контактные квесты,это именно тот вариант!',
            'Загадки не сильно сложные,но когда ты видишь,как маньяки наблюдают за тобой, и понимаешь, что сейчас снова отхватишь, мозг просто отказывается думать)',
            'Ходили с девчонками,и актеры отнеслись к ним с пониманием) Квест отличный,всем советую сходить.',
            'Актерам особый респект!10 из 10'
          ]
        },
        {
          name: 'Лера',
          photo: '/static/images/testimonials/testimonial__photo--third.jpg',
          text: [
            'Это был мой первый квест и я осталась очень довольна!! После окончания осталось куча эмоций.',
            'Было страшно , но в тоже время хотелось быстрей пройти его. Если забыть о том, что это всего лишь игра, то сердце готово выпрыгнуть от страха!',
            'Актеры делали все на 100% , подсказки были. Жаль , что второй раз будет идти не интересно(('
          ]
        }
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
