import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
} from "../actions/counterActions";

const counterReducer = (state = { value: 2 }, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + action.data,
        total: state.value * action.data,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
  }
  return state;
};

export default counterReducer;
