import React from 'react';
import { FaTrash } from "react-icons/fa";

function Note(props) {
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <FaTrash className='note-button' onClick={(id) => {
        return props.onDelete(props.id);
      }} />
    </div>
  )
};

export default Note;
