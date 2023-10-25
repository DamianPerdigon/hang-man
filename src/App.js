import React, { useState, useEffect } from 'react';
import GameStatus from './components/GameStatus';
import Hangman from './components/Hangman';
import WordDisplay from './components/WordDisplay';
import KeyBoard from './components/KeyBoard';
import Help from './components/Help';
import "./App.css";

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(6);
  const [status, setStatus] = useState('Playing');

  useEffect(() => {
    fetchNewWord();
  }, []);

  const fetchNewWord = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      const [newWord] = await response.json();
      setWord(newWord.toUpperCase());
    } catch (error) {
      console.error('Error fetching word:', error);
    }
  };

  const handleKeyPress = (letter) => {
    if (status !== 'Playing' || guessedLetters.includes(letter)) return;

    setGuessedLetters(prevGuessedLetters => {
      const newGuessedLetters = [...prevGuessedLetters, letter];
      checkGameStatus(word, newGuessedLetters);
      return newGuessedLetters;
    });

    if (!word.includes(letter)) {
      setAttempts(prevAttempts => {
        const newAttempts = prevAttempts - 1;
        if (newAttempts <= 0) {
          setStatus('Lost');
        }
        return newAttempts;
      });
    }
  };

  const checkGameStatus = (word, guessedLetters) => {
    const isWin = word.split('').every(letter => guessedLetters.includes(letter));
    if (isWin) setStatus('Won');
  };

  const resetGame = () => {
    fetchNewWord();
    setGuessedLetters([]);
    setAttempts(6);
    setStatus('Playing');
  };

  return (
    <div className="app">
      <h1>Hangman Game</h1>
      <GameStatus attempts={attempts} status={status} />
      <Hangman attempts={attempts} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <KeyBoard onKeyPress={handleKeyPress} guessedLetters={guessedLetters} />
      <button className="resetButton" onClick={resetGame}>Reset Game</button>
      {status === 'Lost' && <p className="revealWord">The word was {word}!</p>}
      <Help />
    </div>
  );
}

export default App;