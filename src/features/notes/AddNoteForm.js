import React from 'react';
import { noteAdded } from './NotesSlice';
import { useDispatch } from 'react-redux';

const AddNoteForm = ({title, content, setContent, setTitle}) => {

    const dispatch = useDispatch();

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const onSaveNoteClicked = () => {
        if(title && content) {
            dispatch(noteAdded(title, content))

            setTitle('')
            setContent('')
        }
    }
    return (
        <form className='noteForm'>
        <label htmlFor='title'>Title</label>
        <input
        type='text'
        id='noteTitle'
        name='noteTitle'
        value={title}
        onChange={onTitleChange}
        />
        <label htmlFor='content'>Notes</label>
        <textarea
        type='text'
        id='noteContent'
        name='noteContent'
        rows='10'
        value={content}
        onChange={onContentChange}
        />
        <button type='button' onClick={onSaveNoteClicked}>Save Note</button>
        </form>
    )
}

export default AddNoteForm;