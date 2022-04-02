import React from "react";
import { useSelector } from "react-redux";
import Symbol from "./Symbol";

const Board = () => {
  const { board } = useSelector((state) => state.baucua);
  return (
    <div className="row">
      {board.map((item) => {
        return (
          <div key={item.id} className="mt-4 col-sm-4 text-center">
            <Symbol data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Board;
