// Importing React and the CSS file for styling
import React from 'react';
import './GameStatus.css';

// Defining the GameStatus functional component
// This component is responsible for displaying the game status, including the number of attempts left and the current game status.
function GameStatus({ attempts, status }) {
  return (
    // The game status information is wrapped in a div with a class for styling
    <div className="gameStatus">
      {/* Displaying the number of attempts left. This helps players keep track of their progress and remaining chances. */}
      <p>Attempts left: {attempts}</p>
      {/* Displaying the current status of the game, which could be 'ongoing', 'won', or 'lost'. */}
      <p>Status: {status}</p>
    </div>
  );
}

// Exporting the GameStatus component to be used in other parts of the application
export default GameStatus;
