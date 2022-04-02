// Định nghĩa các actions

import { DECREASE, INCREASE, PLAY_GAME } from "../constants/baucua";

export const increase = (type) => {
  // action
  return {
    type: INCREASE,
    data: type,
  };
};

export const decrease = (type) => {
  return {
    type: DECREASE,
    data: type,
  };
};

export const playGame = () => {
  return {
    type: PLAY_GAME,
  };
};
