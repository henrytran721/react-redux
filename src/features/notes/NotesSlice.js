import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState =  [
    {id: '1', title: 'First Note', content: 'Hello World', date: '2020-11-10T16:00:32.681Z'},
    {id: '2', title: 'Second Note', content: 'Hello Jupiter', date: '2020-11-10T19:45:32.681Z'}
]

const NotesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        noteAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                    }
                }
            }
        },
        noteUpdated(state, action) {
            const { id, title, content } = action.payload;
            const existingPost = state.find(note => note.id === id);
            if(existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        noteDeleted(state, action) {
            const { id } = action.payload;
            console.log(id);
            return state.filter(note => note.id !== id);
        }
    }
})

export const { noteAdded, noteUpdated, noteDeleted } = NotesSlice.actions;
export default NotesSlice.reducer;