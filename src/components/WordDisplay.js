// Importing React for component creation.
import React from 'react';
// Importing the CSS file for styling the WordDisplay component.
import './WordDisplay.css';

// Defining the WordDisplay functional component.
// It receives two props: word (the word to be guessed) and guessedLetters (an array of letters that have been guessed).
function WordDisplay({ word, guessedLetters }) {
  // Creating a display version of the word. 
  // For each letter in the word, if it has been guessed, show the letter; otherwise, show an underscore.
  // Join the array of letters and underscores into a string, separating each with a space.
  const displayWord = word.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');

  return (
    // Rendering the display version of the word inside a div with the class "wordDisplay" for styling.
    <div className="wordDisplay">{displayWord}</div>
  );
}

// Exporting the WordDisplay component for use in other parts of the application.
export default WordDisplay;
