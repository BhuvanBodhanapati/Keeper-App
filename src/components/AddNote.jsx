import React from 'react';

function AddNote(props){
    return (
        <div className='addNote'>
            <input type='text'
                placeholder='Title' 
                className='inputTitle'
                name='title'
                onChange={props.getNote}
                value={props.title}>
            </input> 
            <textarea cols='30' rows='5'
                    placeholder='Take a note...' 
                    className='inputNote'
                    name='content'
                    value={props.content}
                    onChange={props.getNote}>
            </textarea>
            <button className='addNoteBtn'
                    onClick={props.addNote}>
                     +
            </button>
        </div>
     )
}

export default AddNote;