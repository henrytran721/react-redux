import React, { useState } from 'react';
import SideMenu from './SideMenu';
import '../../sass/main.scss';
import { useDispatch } from 'react-redux';
import { noteUpdated, noteDeleted } from './NotesSlice';
import TimeAgo from './TimeAgo';
import AddNoteForm from './AddNoteForm';

const Note = () => {
    // logic
    // dispatch method to connect to global state 
    const dispatch = useDispatch()
    
    const [active, setActive] = useState();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [updated, setUpdated] = useState(false);

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);
    
    const onUpdateNoteClicked = (e) => {
        e.preventDefault();
        if(title && content && active) {
            dispatch(noteUpdated({id: active.id, title, content}))
        }
        setUpdated(true);
    }

    const onDeleteNoteClicked = (e) => {
        console.log('hello');
        if(active) {
            dispatch(noteDeleted({id: active.id}))
            setTitle('')
            setContent('')
        }
    }

    return(
        <div className='mainNote'>
            <SideMenu 
                active={active} 
                setActive={setActive} 
                setTitle={setTitle} 
                setContent={setContent} 
            />
            <div>
                {!active ? 
                    <AddNoteForm 
                        title={title}
                        content={content}
                        setTitle={setTitle}
                        setContent={setContent}
                    /> : 
                        <form className='noteForm'>
                        <label htmlFor='title'>Title</label>
                        <input
                        type='text'
                        id='noteTitle'
                        name='noteTitle'
                        value={title}
                        onChange={onTitleChange}
                        />
                        <TimeAgo timestamp={active.date} />
                        <label htmlFor='content'>Notes</label>
                        <textarea
                        type='text'
                        id='noteContent'
                        name='noteContent'
                        rows='10'
                        value={content}
                        onChange={onContentChange}
                        />
                        {!updated ? <button className='updateNote' type='button' onClick={onUpdateNoteClicked}>Update Note</button> : 
                        <button className='updateNote' type='button' onClick={e => e.preventDefault()}>Updated</button>
                        }
                        <button className='deleteNote' type='button' onClick={onDeleteNoteClicked}>Delete</button>
                        </form>
                    }
            </div>
        </div>
    )
}

export default Note;