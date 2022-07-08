import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { style } from '@mui/system';


function AddNote(props){
    const [expand , setExpand] = useState(false);

    const [inputNote, setInputNote] = useState({
        title : "" ,
        content : ""
    });

    function takeNote(){
        setExpand(true);
    }

    function getNote(event){
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setInputNote((prevValue)=>(
            {
                ...prevValue,
                 [inputName] : inputValue
            }
        ));
    }

    function submitNote(event){
        props.addNote(inputNote);
        setInputNote({
            title : "" ,
            content : ""
        });
        setExpand(false);
        event.preventDefault();
    }


    return (
        <form className='addNote' >
            <input type='text'
                placeholder='Title' 
                className='inputTitle'
                name='title'
                onChange={(event) => (getNote(event))}
                value={inputNote.title}
                style = {{display: expand ? 'block' : 'none'}}>
            </input> 
            <textarea rows={ !expand ?  0 : 4}
                placeholder='Take a note...' 
                className='inputNote'
                name='content'
                value={inputNote.content}
                onFocus= {()=>{ takeNote()}}
                onChange={(event)=> {getNote(event)}}>
            </textarea>
            <Zoom in={ expand ? true : false}>
                <Fab className='addNoteBtn'
                        onClick={(event)=> {submitNote(event)}}>
                        <AddIcon />
                </Fab>
            </Zoom>
        </form>
     )
}

export default AddNote;