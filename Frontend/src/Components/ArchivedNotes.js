import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../Context/Notes/Notecontext";
import "../App.css";
import BasicModal from "./EditNoteModal";
const ArchivedNotes = () => {
  const context = useContext(noteContext);
  const { ArchivedNotes, getArchivedNotes } = context;
  useEffect(() => {
    getArchivedNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="NotesSection">
      <h2>Your Archived Notes</h2>
      {ArchivedNotes.length === 0 ? (
        <div>
          <h5>No Archived Notes to Display</h5>
        </div>
      ) : (
        <div className="NotesGrid">
          {ArchivedNotes.map((note) => {
            return (
              <BasicModal
                note_id={note._id}
                old_title={note.title}
                old_description={note.description}
                old_tag={note.tag}
                old_favourite={note.favourite}
                old_archived={note.archived}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ArchivedNotes;
