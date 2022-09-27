// Action type

export const GET_INDEX_USER = "GET_INDEX_USER";
export const GET_CURRENT_INDEX_USER = "GET_CURRENT_INDEX_USER";
export const REMOVE_INDEX_USER = "REMOVE_INDEX_USER";

// Action Create
export const handleCardChat = (index, id, fullName, funcCard) => ({
  type: GET_INDEX_USER,
  data: { index, id, fullName },
  func: funcCard,
});

export const handleRemoveCardChat = (index, id) => ({
  type: REMOVE_INDEX_USER,
  data: { index, id },
});
export const handleCurrentId = (id) => ({
  type: GET_CURRENT_INDEX_USER,
  data: id,
});
