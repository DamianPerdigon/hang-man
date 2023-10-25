// Importing React and its useState hook to manage component state.
import React, { useState } from 'react';
// Importing the CSS file for styling this component.
import './Help.css';

// Defining the Help functional component to display game rules and instructions.
const Help = () => {
  // isHelpVisible state to manage the visibility of the help content.
  // setHelpVisible function to toggle the isHelpVisible state.
  const [isHelpVisible, setHelpVisible] = useState(false);

  // toggleHelp function to invert the current state of isHelpVisible.
  // This function is triggered when the help button is clicked.
  const toggleHelp = () => {
    setHelpVisible(!isHelpVisible);
  };

  return (
    // Main container for the help section.
    <div className="help">
      {/* Button to toggle the visibility of the help content.
          The button text changes based on the isHelpVisible state. */}
      <button className="help-button" onClick={toggleHelp}>
        {isHelpVisible ? 'Hide Help' : 'Show Help'}
      </button>

      {/* Container for the help content.
          The content is conditionally rendered based on the isHelpVisible state.
          The 'show' class is dynamically applied to reveal the content. */}
      <div className={`help-content ${isHelpVisible ? 'show' : ''}`}>
        {/* Heading for the help content. */}
        <h2>How to Play</h2>
        {/* Paragraph explaining the general objective of the game. */}
        <p>Try to guess the word by suggesting letters within a certain number of guesses.</p>
        {/* Unordered list providing detailed game rules and instructions. */}
        <ul>
          <li>Each correct guess reveals the letter in the word.</li>
          <li>Each incorrect guess reduces the number of attempts left.</li>
          <li>You win if you can guess the word before running out of attempts.</li>
          <li>You lose if you run out of attempts before guessing the word.</li>
        </ul>
      </div>
    </div>
  );
};

// Exporting the Help component for use in other parts of the application.
export default Help;
