import { useState, useEffect } from 'react';
import utils from '../services/utils';

const useGameState = (starsInit) => {
    const [stars, setStars] = useState(starsInit);
    const [avaiableNumbs, setAvaiableNumbs] = useState(utils.range(1, 9));
    const [candidateNumbs, setCandidateNumbs] = useState([]);
    const [time, setTime] = useState(20);
    
    const timer = () => setTime(time - 1);
    useEffect(() => {
      if (!time || avaiableNumbs.length===0) {
        return;
      }
      const id = setTimeout(timer, 1000);
      return () => clearTimeout(id);
      },
      [time]
    );
    
     const setGameState = (pick) => {
        if (utils.sum(pick)===stars) {
          const newAvaiables = avaiableNumbs.filter(element=>!pick.includes(element))
          setAvaiableNumbs(newAvaiables);
          setCandidateNumbs([]);
          setStars(utils.randomSumIn(newAvaiables, 9));   
          return;
        }
        return setCandidateNumbs(pick);
      };
    
    return{stars, avaiableNumbs, candidateNumbs, time, setGameState};
  }

export default useGameState;
