import React, {useState} from 'react';
import Footer from './footer.jsx';
import Header from './Header.jsx';
import UserStored from './UserStored.jsx';
import Note from './Note.jsx'
import ProgressBar from './ProgressBar.jsx';




function App() {
  const [notes, setNotes] = useState([]);
  const [progress, setProgress] = useState(0)



  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setProgress(progress - 1);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

function increase() {
  setProgress(progress + 1);
}




  return (
    <div>
      <Header />
      <UserStored onAdd={addNote} onIncrease={increase} />
      <ProgressBar totalPercent={progress} />
      <Footer />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}

           />
        );
      })}


    </div>
  )
}

export default App;
