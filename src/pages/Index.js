// pages/index.js
import React, { useState, useEffect } from 'react';
import RichTextEditor from '../components/RichTextEditor';
import Note from '../components/TaskItem';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    setNotes([...notes, { content: rawContent }]);
    setEditorState(EditorState.createEmpty());
  };

  const moveNote = (fromIndex, toIndex) => {
    const updatedNotes = [...notes];
    const [movedNote] = updatedNotes.splice(fromIndex, 1);
    updatedNotes.splice(toIndex, 0, movedNote);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <RichTextEditor editorState={editorState} onChange={setEditorState} />
      <button onClick={addNote}>Add Note</button>
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note key={index} note={note} index={index} moveNote={moveNote} />
        ))}
      </div>
    </div>
  );
};

export default Home;
