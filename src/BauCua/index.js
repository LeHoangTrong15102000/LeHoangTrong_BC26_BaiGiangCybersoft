import React from "react";
import { useSelector } from "react-redux";
import Board from "./Board";
import Dice from "./Dice";
import "./style.css";

const BauCua = () => {
  const { totalScore } = useSelector((state) => state.baucua);
  return (
    <div className="baucua container-fluid bg-secondary">
      <h1 className="text-center text-danger">Game bầu cua Cybersoft</h1>
      {/* Hiển thị tiền thưởng */}
      <div className="row mt-5">
        <div className="col-sm-3 mx-auto text-center">
          <span className="p-3 bg-warning">
            <span>Tiền thưởng:</span>
            <span className="text-success">{totalScore}</span>
          </span>
        </div>
      </div>
      {/* Hiển bị bảng chơi và xúc xắc */}
      <div className="row mt-5">
        <div className="col-sm-10">
          <Board />
        </div>
        <div className="col-sm-2">
          <Dice />
        </div>
      </div>
    </div>
  );
};

export default BauCua;
