import React, { useState } from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes'



function App(){
    const [inputNote, setInputNote] = useState({
        title : "" ,
        content : ""
    })

    const [allNotes, setAllNotes] = useState([]);

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

    function addNote(){
        if(inputNote.title.length!=0 || inputNote.content.length!=0){
            setAllNotes((prevValues) => (
                [
                    ...prevValues, 
                    inputNote
                ]
            ));
        }
        setInputNote( { title : "" ,content : "" } )
    }

    return (
        <div >
            <Header />
            <AddNote 
                title = {inputNote.title}
                content = {inputNote.content}
                getNote = {getNote}
                addNote = {addNote}
            />
            <div className='allNotes'>
                {allNotes.map((note,index) => (
                        <Note 
                            key = {index}
                            title = {note.title}
                            content = {note.content}
                        />
                    )
                )}
            </div>
            
            <Footer />
        </div>
        
    )
}

export default App;