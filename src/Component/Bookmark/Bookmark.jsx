

import React, { useEffect, useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
const Bookmarks = () => {

    const [bookmark,setBookmark] = useState(
        JSON.parse(localStorage.getItem("bookmarks")) || []
      );
    
      useEffect(() => {
        localStorage.setItem("bookmarks", JSON.stringify(bookmark));
      }, [bookmark]);
    
      const handleDeleteBookmark = (i) => {
        setBookmark(bookmark.filter((el, index) => index !== i));
      };

  return (
    <div className="card-container">
    {bookmark.map((note, i) => (
      <div className="card" key={i}>
        <div className="card-title">{note.title}</div>
        <div className="card-description">{note.description}</div>
        <div className="card-date">{note.date}</div>
        <div className="delete-icon" onClick={() => handleDeleteBookmark(i)}>
        <AiFillDelete/>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Bookmarks