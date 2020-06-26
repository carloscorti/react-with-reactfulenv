/* eslint-disable react/prop-types */
import React from 'react';
import colors from "../services/colors"

const PlayNumber = props => {
  return (
  <button 
    className="number"  
    // className={`number ${props.status == "used" && 'usedanimation'}`}  
    onClick={() => props.handleClick(props.number, props.status)}
    // style={{backgroundColor: colors[props.status], textShadow: `0 0 15px ${colors[props.status]}, 0 0 15px ${colors[props.status]}`}}
    style={{backgroundColor: colors[props.status],
            boxShadow: props.status != "avaiable" && `0 0 10px ${colors[props.status]}, 0 0 20px ${colors[props.status]}`,
            color: props.status != "avaiable" && 'white',
            textShadow: props.status != "avaiable" && `0 0 10px white`}}
    >
    {props.number}
  </button>
    );
};

export default PlayNumber;