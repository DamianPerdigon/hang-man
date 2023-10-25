// Importing React library for building the component and the CSS file for styling
import React from 'react';
import './Hangman.css';

// Defining the Hangman functional component
// This component is responsible for displaying the hangman graphic and the number of attempts left.
function Hangman({ attempts }) {
  return (
    // The hangman graphic and attempts information are wrapped in a div with a class for styling.
    <div className="hangman">
      {/* Displaying a text representation of the hangman game and the number of attempts left.
           This provides a visual cue to the player about their remaining chances. */}
      <p>Hangman - Attempts left: {attempts}</p>
    </div>
  );
}

// Exporting the Hangman component to be used in other parts of the application.
export default Hangman;
