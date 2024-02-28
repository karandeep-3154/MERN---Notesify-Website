import React, { useContext, useEffect} from "react";
import noteContext from "../Context/Notes/Notecontext";
import AddModal from "../Components/AddNote";
import "../App.css";
import BasicModal from "./EditNoteModal";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="NotesSection">
      <AddModal />
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <div>No notes to display</div>
      ) : (
        <div className="NotesGrid">
          {notes.map((note) => {
            return (
              <BasicModal
                note_id={note._id}
                old_title={note.title}
                old_description={note.description}
                old_tag={note.tag}
                old_favourite={note.favourite}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Notes;
