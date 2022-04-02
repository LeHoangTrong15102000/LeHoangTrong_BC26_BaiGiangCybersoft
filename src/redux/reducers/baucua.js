import { DECREASE, INCREASE, PLAY_GAME } from "../constants/baucua";

const DICES = ["gourd", "fish", "crab", "deer", "rooster", "prawn"];
const BOARD = [
  { id: "crab", img: "/img/crab.png", score: 0 },
  { id: "deer", img: "/img/deer.png", score: 0 },
  { id: "rooster", img: "/img/rooster.png", score: 0 },
  { id: "prawn", img: "/img/prawn.png", score: 0 },
  { id: "fish", img: "/img/fish.png", score: 0 },
  { id: "gourd", img: "/img/gourd.png", score: 0 },
];

const initialState = {
  totalScore: 500,
  board: BOARD,
  dices: ["gourd", "gourd", "gourd"],
};

const baucuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE: {
      // Nếu data bên trong state là 1 array hay object, ta cần tiếp tục sao chép nó ra 1 array hoăc object mới
      const newBoard = state.board.map((item) => {
        if (item.id === action.data) {
          return { ...item, score: item.score + 100 };
        }
        return item;
      });

      return {
        ...state,
        board: newBoard,
        totalScore: state.totalScore - 100,
      };
    }
    case DECREASE: {
      const newBoard = state.board.map((item) => {
        if (item.id === action.data) {
          return { ...item, score: item.score - 100 };
        }
        return item;
      });

      return { ...state, board: newBoard, totalScore: state.totalScore + 100 };
    }
    case PLAY_GAME: {
      // B1: random xúc xắc
      const newDices = state.dices.map(() => {
        // Random từ x -> y => Math.random() * (y - x) + x
        const random = Math.floor(Math.random() * 6);
        return DICES[random];
      });

      // B2: Lọc ra danh sách những biểu tượng có đặt cược
      const scores = state.board.filter((item) => item.score);

      // B3: Tính điểm
      let score = 0;
      // B3.1: Hoàn cược
      score += scores.reduce((total, item) => {
        if (newDices.includes(item.id)) {
          return total + item.score;
        }
        return total;
      }, 0);
      // B3.2: Tính tiền thắng cược
      score += newDices.reduce((total, dice) => {
        const matchedItem = scores.find((item) => item.id === dice);
        if (matchedItem) {
          return total + matchedItem.score;
        }
        return total;
      }, 0);
      // B4: reset board

      return {
        ...state,
        board: BOARD,
        dices: newDices,
        totalScore: state.totalScore + score,
      };
    }
    default:
      return state;
  }
};

export default baucuaReducer;
