import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    };
  }

  handleChange = e => {
    // console.log(e.target.value);
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  whenSubmitted = () => {
    if (this.state.name === '' || this.state.date === '' || this.state.time === '' || this.state.number === '') {
      alert('Please enter information for all fields')
    } else {
      this.props.onSubmit(this.state);
      this.formReset();
    }
  };

  formReset = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    });
  };

  render = () => {
    return (
      <div className='container'>
        <form className='ui input focus'>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='date'
            value={this.state.date}
            placeholder='Date'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='time'
            value={this.state.time}
            placeholder='Time'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='number'
            value={this.state.number}
            placeholder='Number of Guests'
            onChange={this.handleChange}
          />
        </form>
        <button
          className='ui button'
          type='button'
          onClick={this.whenSubmitted}
        >
          Make Rezzy
        </button>
      </div>
    );
  };
}

export default Form;
