import React, { Component } from 'react';
import './App.css';
import { getData, postData } from './apiCalls';
import Card from './Card';
import Form from './Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      errorMessage: ''
    };
  }

  componentDidMount = async () => {
    const reservations = await getData();
    await this.setState({ reservations }, () =>
      console.log(this.state.reservations)
    );
  };

  onSubmit = ({ name, date, time, number }) => {
    const newReservation = {
      id: Date.now(),
      name,
      date,
      time,
      number
    };
    this.setState(
      {
        reservations: [...this.state.reservations, newReservation]
      },
      () => console.log('onSub', this.state.reservations.length)
    );
    postData(newReservation);
  };

  render() {
    return (
      <div className='App'>
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form onSubmit={this.onSubmit} />
        </div>
        <div className='resy-container'>
          <Card reservations={this.state.reservations} />
        </div>
      </div>
    );
  }
}

export default App;
