import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducers/rootReducer";

const middleware = [thunk];
const composeEnhancers =
  (typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

const configureStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;

export const wrapper = createWrapper(makeStore);
