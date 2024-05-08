import React from 'react';
import Dice from './Dice';
import { getTirades, sum } from './utils';

import React from 'react';

const LuckyN = ({ numDaus, suma }) => {
  const [dice, setDice] = useState(getTirades(numDaus));

  const isWinner = sum(dice) === suma;

  return <div>LuckyN</div>;
};

export default LuckyN;
