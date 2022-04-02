import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/actions/baucua";

const Symbol = ({ data }) => {
  const dispatch = useDispatch();
  const { totalScore } = useSelector((state) => state.baucua);

  const handleIncrease = () => {
    if (!totalScore) {
      return;
    }
    dispatch(increase(data.id));
  };

  const handleDecrease = () => {
    if (!data.score) {
      return;
    }
    dispatch(decrease(data.id));
  };

  return (
    <div>
      <img src={data.img} alt={data.id} width="250px" />
      <br />
      <br />
      <span className="bg-warning p-3">
        Cược:
        <button
          className="btn btn-success"
          onClick={handleDecrease}
          disabled={!data.score}
        >
          -
        </button>
        <span>{data.score}</span>
        <button
          className="btn btn-success"
          onClick={handleIncrease}
          disabled={!totalScore}
        >
          +
        </button>
      </span>
    </div>
  );
};

export default Symbol;
