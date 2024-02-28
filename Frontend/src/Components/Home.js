import React from "react";
import Notes from "./Notes";
import Login from "./Login";
import BasicModal from "./EditNoteModal";
import Sidebar from "./Sidebar";
const Home = (props) => {
  return (
    <>
      {!localStorage.getItem("token") ? (
        <Login showAlert={props.showAlert} />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Notes showAlert={props.showAlert} />
        </div>
      )}
    </>
  );
  
};

export default Home;
