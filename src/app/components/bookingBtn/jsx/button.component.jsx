import React, { Component } from 'react';
import Button from '../../button';

class BookingBtn extends Component {
  render() {
    return (
      <Button size={16} newClass='booking-btn'>
        Забронировать
      </Button>
    );
  }
}

export default BookingBtn;
