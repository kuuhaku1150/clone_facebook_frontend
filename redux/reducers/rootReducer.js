import { combineReducers } from "redux";
import counterReducer from "./countReducer";
import indexUserReducer from "./indexUserReduce";

const rootReducer = combineReducers({
  counter: counterReducer,
  indexUser: indexUserReducer,
});

export default rootReducer;
