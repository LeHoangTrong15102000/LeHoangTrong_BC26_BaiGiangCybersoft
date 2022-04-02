import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Dice = () => {
  const dispatch = useDispatch();
  const { dices, board } = useSelector((state) => state.baucua);
  const score = board.reduce((total, item) => {
    return total + item.score;
  }, 0);

  const playGame = () => {
    if (!score) {
      return;
    }
    dispatch({ type: "PLAY_GAME" });
  };

  return (
    <div className="d-flex flex-column justify-content-center text-center">
      {dices.map((item, index) => {
        const source = `/img/${item}.png`;
        return (
          <div key={`dice-${item}-${index}`} className="mt-3">
            <img src={source} alt={item} width="50px" height="50px" />
          </div>
        );
      })}

      <button
        className="btn btn-success mt-5"
        onClick={playGame}
        disabled={!score}
      >
        Xốc
      </button>
    </div>
  );
};

export default Dice;
