import React from 'react';
import './Hangman.css';

function Hangman({ attempts }) {
  const totalAttempts = 10; // 10 attempts
  const hangmanState = totalAttempts - attempts + 1; // +1 because are 11 states
  const hangmanImage = `${process.env.PUBLIC_URL}/images/state${hangmanState}.gif`;

  return (
    <div className="hangman">
      <img src={hangmanImage} alt={`Hangman State ${hangmanState}`} />
      <p>Attempts left: {attempts}</p>
    </div>
  );
}

export default Hangman;
