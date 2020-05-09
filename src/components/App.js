import React, { useState } from 'react';
import Game from './Game'

export default function App({ initialData }) {
  const [gameId, setGameId] = useState(1);

  return <Game key={gameId} newGame={()=>setGameId(gameId+1)} starsInit={initialData.starInit} />
}
