import React from 'react';
import './Board.css';
import Ticket from '../Ticket/Ticket';
import { sounds } from '../data';

function Board({ tickets, isWon, playSound, setTickets, isMuted }) {
  const onTicketClicked = (index) => {
    const newTicketsArr = tickets.map((ticket, i) => {
      if (index === i) {
        return { ...ticket, checked: true };
      } else if (index === 12) {
        return { ...ticket, music: true };
      }
      return ticket;
    });
    setTickets(newTicketsArr);
    playSound(sounds[index].sound, isMuted);
  };

  const onClick = (index) => () => onTicketClicked(index);

  return (
    <div className={isWon ? 'board win' : 'board'}>
      {tickets.map((ticket, index) => {
        return (
          <Ticket
            ticket={ticket}
            key={index}
            index={index}
            isWon={isWon}
            onClick={onClick(index)}
          />
        );
      })}
    </div>
  );
}

export default Board;
