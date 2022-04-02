// Reducer là nơi khai báo state và tiếp nhận action để cập nhật state
const counterReducer = (state = 0, action) => {
  // Kiểm tra nếu action type khớp với case của reducer thì xử lý và trả ra state mới
  switch (action.type) {
    case "INCREASE":
      // Xử lý và return về new state, giá trị return sẽ được cập nhật cho state
      return action.data;
    default:
      return state;
  }
};

export default counterReducer;
