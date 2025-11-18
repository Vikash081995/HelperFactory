import { useState } from "react";
import NotesList from "./components/NotesList";
import Note from "./models/note.model";

function App() {
  const [notes, setNotes] = useState([
    new Note("This is my first note!"),
    new Note("This is my second note!"),
    new Note("This is my third note!"),
  ]);

  const [totalDone, setTotalDone] = useState(0);
  const [displayCongratulations, setDisplayCongratulations] = useState(false);
  const [lastCreatedNote, setLastCreatedNote] = useState(undefined);

  const addNote = (text) => {
    const newNote = new Note(text);
    setLastCreatedNote(newNote);
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const updateCount = () => {
    setTotalDone(
      notes.reduce((prev, curr) => (curr.isDone ? prev + 1 : prev), 0)
    );
  };

  return (
    <div>
      <label>
        Total Done: <span>{totalDone}</span>
      </label>
      <div className="container">
        {displayCongratulations ? (
          <div className="congrats">
            <span>YOU DID IT!</span>
          </div>
        ) : (
          <></>
        )}
        {lastCreatedNote ? (
          <div className="last-created">
            <span>Last Created Note ID: {lastCreatedNote.id}</span>
          </div>
        ) : (
          <></>
        )}
        <NotesList
          updateTotalDoneCount={updateCount}
          notes={notes}
          handleAddNote={addNote}
          setDisplayCongratulations={setDisplayCongratulations}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
