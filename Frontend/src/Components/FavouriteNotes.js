import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../Context/Notes/Notecontext";
import Navbar from "./Navbar";
import "../App.css";
import BasicModal from "./EditNoteModal";
const FavouriteNotes = () => {
  const context = useContext(noteContext);
  const { FavouriteNotes, getFavouriteNotes } = context;
  useEffect(() => {
    getFavouriteNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="NotesSection">
      <h2>Your Favourite Notes</h2>
      {FavouriteNotes.length === 0 ? (
        <div>No notes to display</div>
      ) : (
        <div className="NotesGrid">
          {FavouriteNotes.map((note) => {
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

export default FavouriteNotes;
