import { createStore } from "redux";
import Reducer from "../reducers/ReducerTask";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
