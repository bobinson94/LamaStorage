import React, {useState} from 'react';
import lamaImage from '../images/PikPng.com_llama-png_283666.png';

function UserStored(props) {
  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    props.onIncrease();
    setNote({
      title: '',
      content: ''
    });

  }



  return (
    <div>
      <form className='create-note'>

          <input onChange={handleChange} name="title" value={note.title} placeholder='Title' />
          <textarea onChange={handleChange} name='content' value={note.content} placeholder='Enter your note here:' rows='3' />
        <button onClick={submitNote}>Add</button>
      </form>
        <div>
          <img src={lamaImage} alt='llama' />
        </div>

    </div>
  )
}


export default UserStored;
