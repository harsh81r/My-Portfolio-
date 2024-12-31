import React from 'react';
import './Groundwater.css';
// import './App.css';

import { useState } from 'react';


const GroundwaterLevel = ({ level }) => (
  <div className="groundwater-level">{level}%</div>
);

const WaterUsageMeter = ({ usage }) => (
  <div className="water-usage-meter" style={{ width: `${usage}%` }}></div>
);

const ScoreDisplay = ({ score }) => (
  <p>Your score: {score}</p>
);

const GameOverScreen = ({ finalScore }) => (
  <div className="game-over-screen">
    <h2>Game Over!</h2>
    <p>Your final score: {finalScore}</p>
  </div>
);

const Groundwater = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Game logic will go here

  return (
    <div className="game-container">
      <GroundwaterLevel level={score} />
      <WaterUsageMeter usage={50} /> {/* Placeholder usage */}
      <ScoreDisplay score={score} />
      {!gameOver && (
        <button onClick={() => {
          // Game logic here
          setScore(score + 1);
        }}>Conserve Water!</button>
      )}
      {gameOver && <GameOverScreen finalScore={score} />}
    </div>
  );
};

export default Groundwater;
