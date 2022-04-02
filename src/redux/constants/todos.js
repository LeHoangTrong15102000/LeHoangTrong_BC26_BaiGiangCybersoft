const PREFIX = "todos";

// Đối với 1 action bất đồng bộ, ta chia action types làm 3 giai đoạn
export const GET_TODO_REQUEST = `${PREFIX}/GET_TODO_REQUEST`;
export const GET_TODO_SUCCESS = `${PREFIX}/GET_TODO_SUCCESS`;
export const GET_TODO_FAILURE = `${PREFIX}/GET_TODO_FAILURE`;

export const SET_TODOS = `${PREFIX}/SET_TODOS`;
export const CHANGE_FILTER = `${PREFIX}/CHANGE_FILTER`;
export const CHANGE_SEARCH = `${PREFIX}/CHANGE_SEARCH`;
