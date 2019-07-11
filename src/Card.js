import React from 'react';
import './Card.css';

const Card = ({ reservations }) => {
  console.log(reservations);
  const toShow = reservations.map(rez => {
    return(
      <article className='card'>
        <h3>{rez.name}</h3>
        <p>{rez.date}</p>
        <p>{rez.time}</p>
        <p>{rez.number}</p>
        <button className ='ui button' type='button' >Cancel Rezzy</button>
      </article>
    )
  })
  return <div className='all-cards'>{toShow}</div>;
};

export default Card;
