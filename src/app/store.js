import { createStore, combineReducers } from '@reduxjs/toolkit'
import NotesReducer from '../features/notes/NotesSlice';

function saveToLocalStorage(state) {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState);
  } catch(e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializeState = localStorage.getItem('state');
    if(serializeState === null) return undefined;
    return JSON.parse(serializeState);
  } catch(e) {
    console.log(e);
     return undefined;
  }
}

const rootReducer = combineReducers({
  notes: NotesReducer
})

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState
)

store.subscribe(() => {
  saveToLocalStorage(store.getState());
})

export default store;
