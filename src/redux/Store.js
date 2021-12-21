import { createStore } from "redux";
import rootreducers from "./reducer";
import { loadState } from "./LocalStorage";
import { saveState } from "./LocalStorage";


 
const statetoload = loadState();
const store = createStore(rootreducers, statetoload);
store.subscribe(() =>
  saveState(
  store.getState(),
  )
);

export default store;
