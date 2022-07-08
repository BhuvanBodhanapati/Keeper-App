import React, { useState } from 'react';
import Header from './Header';
import AddNote from './AddNote';
import Note from './Note';
import Footer from './Footer';
import {v4 as uuidv4} from 'uuid';



function App(){

    const [allNotes, setAllNotes] = useState([]);

    function addNote(inputNote){
        if(inputNote.title.length!=0 || inputNote.content.length!=0){
            setAllNotes((prevValues) => (
                [
                    ...prevValues, 
                    inputNote
                ]
            ));
        }
    }

    function deleteNote(id){
        console.log(id);
        setAllNotes( (prevNotes) => {
            return (
                prevNotes.filter( (note, index) => {
                    return (index!=id);
                })
            )
        });
    }

    return (
        <div>
            <Header />
            <AddNote 
                addNote = {addNote}
            />
            <div className='allNotes'>
                {allNotes.map((note,index) => (
                        <Note 
                            key = {uuidv4()}
                            index = {index}
                            title = {note.title}
                            content = {note.content}
                            deleteNote = {deleteNote}
                        />
                    )
                )}
            </div>
            
            <Footer />
        </div>
        
    )
}

export default App;