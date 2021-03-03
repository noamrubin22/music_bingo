import React from 'react';
import './Ticket.css';

const Ticket = ({ ticket, onClick, isWon, index }) => {
  let ticketName = '';

  if (index === 12) {
    ticketName = 'music';
  } else if (isWon) {
    ticketName = 'win';
  } else if (ticket.checked) {
    ticketName = 'active';
  }

  return (
    <button className={`ticket ${ticketName}`} onClick={onClick}>
      <p>{ticket.ticket}</p>
    </button>
  );
};

export default Ticket;
