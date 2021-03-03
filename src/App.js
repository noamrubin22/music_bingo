import './App.css';
import './Board/Board.css';
import Board from './Board/Board.js';
import MuteButton from './MuteButton/MuteButton';
import React, { useState, useEffect } from 'react';
import { Howl, Howler } from 'howler';
import { sounds, winningCombinations, ticketNames } from './data';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [winningArray, setWinningArray] = useState(
    Array(winningCombinations.length).fill(false)
  );

  useEffect(() => {
    let shuffled = [...ticketNames.sort(() => Math.random() - 0.5)];
    shuffled.splice(12, 0, 'CONF CALL MUSIC BINGO');

    setTickets(
      shuffled.map((name, index) => {
        if (index !== 12) {
          return { ticket: name, checked: false };
        } else {
          return { ticket: name, checked: true, music: false };
        }
      })
    );

    Howler.volume(1.0);
  }, []);

  useEffect(() => {
    setIsWon(true);
    setTimeout(function () {
      setIsWon(false);
    }, 2000);
    playAllSounds(isMuted);
  }, [winningArray]);

  useEffect(() => {
    checkWin();
  }, [tickets]);

  const checkWin = () => {
    winningCombinations.forEach((winningCombination, index) => {
      const isWinningCombination = winningCombination.every(
        (winningIndex) =>
          tickets[winningIndex] && tickets[winningIndex].checked === true
      );

      if (isWinningCombination && !winningArray[index]) {
        const newWinningArr = winningArray.map((el, i) => {
          if (index === i) {
            return true;
          }
          return el;
        });
        setWinningArray(newWinningArr);
      }
    });
  };

  function playAllSounds(isMuted) {
    if (!isMuted) {
      tickets.forEach((ticket, index) => {
        if (ticket.checked == true) {
          playSound(sounds[index].sound);
        }
      });
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const playSound = (src, isMuted) => {
    if (isMuted) return;
    const sound = new Howl({ src });
    sound.play();
  };

  return (
    <div className="App">
      <Board
        isWon={isWon}
        tickets={tickets}
        setTickets={setTickets}
        checkWin={checkWin}
        playSound={playSound}
        isMuted={isMuted}
      />
      <MuteButton isMuted={isMuted} toggleMute={toggleMute} />
    </div>
  );
};

export default App;
