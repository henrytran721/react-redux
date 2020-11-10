import React from 'react';
import '../../sass/main.scss';
import AllNotesBlock from './AllNotesBlock';

const SideMenu = ({active, setActive, setTitle, setContent}) => {

    const resetText = () => {
        setActive()
        setTitle('')
        setContent('')
    }

    return (
        <div className='sideMenu'>
            <button type='button' onClick={resetText}>
                Add Note
            </button>
            <AllNotesBlock active={active} setActive={setActive} setTitle={setTitle} setContent={setContent}/>
        </div>
    )
}

export default SideMenu;