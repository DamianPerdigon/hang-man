// Importing React for component creation.
import React from 'react';
// Importing the CSS file for styling the KeyBoard component.
import './KeyBoard.css';

// Defining the KeyBoard functional component.
// It receives two props: onKeyPress (a function to handle key presses) and guessedLetters (an array of letters that have been guessed).
function KeyBoard({ onKeyPress, guessedLetters }) {
  // Defining an array of letters from A to Z.
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  return (
    // Main container for the keyboard.
    <div className="keyboard">
      {/* Mapping over the letters array to create a button for each letter. */}
      {letters.map(letter => (
        <button
          // Setting a unique key for each button to help React identify which items have changed, are added, or are removed.
          key={letter}
          // Triggering the onKeyPress function when a letter button is clicked, passing the letter as an argument.
          onClick={() => onKeyPress(letter)}
          // Disabling the button if the letter has already been guessed.
          disabled={guessedLetters.includes(letter)}
          // Applying the 'guessed' class for styling if the letter has been guessed, otherwise applying the 'key' class.
          className={guessedLetters.includes(letter) ? "key guessed" : "key"}
        >
          {/* Displaying the letter on the button. */}
          {letter}
        </button>
      ))}
    </div>
  );
}

// Exporting the KeyBoard component for use in other parts of the application.
export default KeyBoard;
