/* eslint-disable react/prop-types */
import React from 'react';
import utils from '../services/utils';

const StarsDisplay = props => {
  if (props.isFinish) {
    return (
      <div className="game-done">
        <div 
          className="message"
          style={{color: props.isFinish === "timeout" ? "red" : "green"}}>
          {props.isFinish === "timeout" ? "Time Out :(" : "Nice¡¡¡"}
        </div>
        <button onClick={props.reset}>Play Again</button>
      </div>
    );
  }
  return (<>{utils.range(1, props.count).map(starId => (<div key={starId} className="star"></div>))}</>);
};

export default StarsDisplay;