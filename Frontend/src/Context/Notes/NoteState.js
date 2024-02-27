import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:8080";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [FavouriteNotes, setFavouriteNotes] = useState([]);

  // Get all Notes

  const getNotes = async () => {
    // API Call
    //console.log(localStorage.getItem("token"))
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    // eslint-disable-next-line
    const json = response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // Edit a Note
  const addtoFavourite = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, favourite: true }),
    });
    // eslint-disable-next-line
    const json = await response.json();
    console.log(json);
    // let newNotes = JSON.parse(JSON.stringify(notes));
    // // Logic to edit in client
    // for (let index = 0; index < newNotes.length; index++) {
    //   const element = newNotes[index];
    //   if (element._id === id) {
    //     newNotes[index].title = title;
    //     newNotes[index].description = description;
    //     newNotes[index].tag = tag;
    //     break;
    //   }
    // }

    // const favouriteNotes = newNotes.filter((note) => note.favourite);
    // setFavouriteNotes(favouriteNotes);
    getFavouriteNotes();
  };
  const removefromFavourite = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag, favourite: false }),
    });
    // eslint-disable-next-line
    const json = await response.json();
    console.log(json);
    // let newNotes = JSON.parse(JSON.stringify(FavouriteNotes));

    // const favouriteeNotes = newNotes.filter((note) => note.favourite);
    // setFavouriteNotes(favouriteeNotes);

    getFavouriteNotes();

  };

  const getFavouriteNotes = async () => {
    // API Call
    //console.log(localStorage.getItem("token"))
    const response = await fetch(`${host}/api/notes/fetchfavouritenotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setFavouriteNotes(json);
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        FavouriteNotes,
        addNote,
        deleteNote,
        editNote,
        addtoFavourite,
        removefromFavourite,
        getNotes,
        getFavouriteNotes,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
