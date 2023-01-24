import React, { useState } from 'react'
import './notes.css';
import {BsFillBookmarkFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'


const NoteForm = () => {
   
  const [title, setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [date, setDate] = useState('');
  

  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );


  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem('bookmarks')) || []
  );

  const handleAddNote = ({title, description, date}) => {
    const newNote = { title, description, date };
    setNotes([...notes, newNote]);
    localStorage.setItem('notes', JSON.stringify([...notes, newNote]));
  };

  const handleDeleteNote = (i) => {
    const newNotes = [...notes];
    newNotes.splice(i, 1);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };


  const handleBookmarkNote = (note) => {
    if (bookmarks.includes(note)) {
      setBookmarks(bookmarks.filter((i) => i !== note));
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks.filter((i) => i !== note)));
    } else {
      setBookmarks([...bookmarks, note]);
      localStorage.setItem('bookmarks', JSON.stringify([...bookmarks, note]));
    }
  }
  return (
    <div className="App">
      <h1>Make Your Notes</h1>
      <div className="input-section">
        <label>Title : </label>
        <input type="text" id="title" name="title" onChange={e=>setTitle(e.target.value)}/>
        <label>Description : </label>
        <input type="text" id="description" name="description" onChange={e=>setDescription(e.target.value)}/>
        <label>Date : </label>
        <input type="date" id="date" name="date"  onChange={e=>setDate(e.target.value)}/>
        <button type='submit'
          onClick={() =>
            handleAddNote({title,description,date}) }
        >
          Add Note
        </button>
      </div>
      <div className="card-container">
        {notes.map((note, i) => (
          <div className="card" key={i}>
             <div  className="bookmark-icon">
             <BsFillBookmarkFill  onClick={() => handleBookmarkNote(note)} />
             </div>
            
            <div className="card-title">{note.title}</div>
            <div className="card-description">{note.description}</div>
            <div className="card-date">{note.date}</div>
            <div className="delete-icon" onClick={() => handleDeleteNote(i)}>
             <AiFillDelete/>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteForm