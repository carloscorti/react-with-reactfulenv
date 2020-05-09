/* eslint-disable react/prop-types */
import React from 'react';
import colors from "../services/colors"

const PlayNumber = props => {
  return (
  <button 
    className="number" 
    onClick={() => props.handleClick(props.number, props.status)}
    style={{backgroundColor: colors[props.status]}}
    >
    {props.number}
  </button>
    );
};

export default PlayNumber;