import {
  GET_INDEX_USER,
  REMOVE_INDEX_USER,
  GET_CURRENT_INDEX_USER,
} from "../actions/indexUserAction";
// let data = [];

const indexUserReducer = (state = { indexChat: [], dataId: "" }, action) => {
  switch (action.type) {
    case GET_INDEX_USER:
      if (state.indexChat.length > 0) {
        var check = state.indexChat.findIndex(
          (res) => res.id === action.data.id
        );
        if (check === -1) {
          state.indexChat.push({
            index: action.data.index,
            fullName: action.data.fullName,
            id: action.data.id,
          });
        } else {
          console.log("now open chat room");
        }
        return {
          ...state,
          func: action.funcCard,
        };
      } else {
        state.indexChat.push({
          index: action.data.index,
          fullName: action.data.fullName,
          id: action.data.id,
        });
        return {
          ...state,
          // indexChat: state.indexChat.push({
          //   index: action.data.index,
          //   id: action.data.id,
          // }),
        };
      }
    case REMOVE_INDEX_USER:
      if (state.indexChat.length > 0) {
        var index = state.indexChat
          .map((res) => res.id)
          .indexOf(action.data.id);
        if (index > -1) {
          state.indexChat.splice(index, 1);
          return {
            ...state,
          };
        }
      }
    // const newArr = [...state.indexChat, data];
    case GET_CURRENT_INDEX_USER: {
      return {
        ...state,
        dataId: action.data,
      };
    }
    default:
  }
  return state;
};

export default indexUserReducer;
