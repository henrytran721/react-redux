import { configureStore } from '@reduxjs/toolkit'
import NotesReducer from '../features/notes/NotesSlice';

export default configureStore({
  reducer: {
    notes: NotesReducer
  },
})
