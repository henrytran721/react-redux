import React from 'react';
import {useSelector} from 'react-redux';

const AllNotesBlock = ({setActive, setTitle, setContent}) => {
    const notes = useSelector(state => state.notes);
    const renderNoteBlock = notes.map((note) => {
        return(
        <section key={note.id} onClick={() => {
            setActive(note)
            setTitle(note.title)
            setContent(note.content)
        }}>
            <h4>{note.title}</h4>
            <p>{note.content.substring(0, 15)}...</p>
        </section>
        )
    })

    return (
        <div className='allNotesBlock'>
            {renderNoteBlock}
        </div>
     );
}
 
export default AllNotesBlock;
