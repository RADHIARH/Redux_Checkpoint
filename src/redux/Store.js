import { createStore } from "redux";
import rootreducers from "./reducer";
import { loadState } from "./LocalStorage";
import { saveState } from "./LocalStorage";


// load string from localStarage and convert into an Object
// invalid output must be undefined

const persistedState = loadState();
// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(rootreducers, persistedState);

// listen for store changes and use saveToLocalStorage to
// save them to localStorage

store.subscribe(() =>
  saveState(
    store.getState(),
  )
);

export default store;
