/* eslint-disable react/prop-types */
import React from 'react';
import utils from '../services/utils';

const StarsDisplay = props => {
  if (props.isFinish) {
    return (
      <div className="game-done">
        <div 
          className="message"
          style={{textShadow: props.isFinish === "timeout" ? 
          "0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 60px red" : "0 0 10px green, 0 0 20px green, 0 0 40px green, 0 0 60px green"}}>
          {props.isFinish === "timeout" ? "Time Out" : "Nice"}
        </div>
        <button className="play" onClick={props.reset}>Play Again</button>
      </div>
    );
  }
  return (<div className="starcontainer">{utils.range(1, props.count).map(starId => (<div key={starId} className="star"></div>))}</div>);
};

export default StarsDisplay;