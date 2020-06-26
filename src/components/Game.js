/* eslint-disable react/prop-types */
import React from 'react';
import useGameState from './UseGameState';
import utils from '../services/utils';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';

const Game = (props) => {
  const { stars, avaiableNumbs, candidateNumbs, time, setGameState } = useGameState(props.starsInit);

  const candidateAreWrong = (cadidateArray, numbStars = stars) => {
    return utils.sum(cadidateArray) > numbStars ? 'wrong' : 'candidate';
  }

  const numberStatus = (number) => {
    if (!avaiableNumbs.includes(number)) {
      return 'used';
    }
    if (candidateNumbs.includes(number)) {
      return candidateAreWrong(candidateNumbs);
    }
    return 'avaiable';
  }

  const isFinish = (() => {
    if (!time) {
      return "timeout"
    }
    if (avaiableNumbs.length === 0) {
      return "finish"
    }
    return ""
  })();

  const handleClick = (number, numberStatus) => {
    if (isFinish || numberStatus === 'used') {
      return;
    }
    if (candidateNumbs.includes(number)) {
      setGameState(candidateNumbs.filter(element => element !== number));
      return;
    }
    setGameState(candidateNumbs.concat(number));
  }

  return (

    <div className="game">
      <div className="help">
        <p className="neon" 
            data-text="Pick one or more numbers that sum to the number of stars">
              Pick one or more numbers that sum to the number of stars
        </p>
      </div>
      <div className="body">
        <div className="left">
            <StarsDisplay
              count={stars}
              isFinish={isFinish}
              reset={props.newGame}
            />
        </div>
        <div className="right">
          {utils.range(1, 9).map(number =>
            <PlayNumber
              key={number}
              status={numberStatus(number)}
              number={number}
              handleClick={handleClick}
            />
          )}
        </div>
      </div>
      <div className="timer">
        <p className="neon usedanimation" data-text={`Time Remaining: ${time}`}>
          Time Remaining: {time}
        </p></div>
    </div>
  );
};

export default Game;