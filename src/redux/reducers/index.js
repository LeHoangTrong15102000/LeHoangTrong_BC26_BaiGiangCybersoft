import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";
import baucua from "./baucua";

// Nơi khai báo tất cả reducer con
// combineReducers sẽ gộp tất cả các reducer con thành 1 reducer tổng và đưa vào trong store
const rootReducer = combineReducers({
  todos,
  counter,
  baucua,
});

export default rootReducer;
