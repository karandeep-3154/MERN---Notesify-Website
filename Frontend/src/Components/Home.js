import React from "react";
import Notes from "./Notes";
import Login from "./Login";
import Sidebar from "./Sidebar";
const Home = () => {
  
  return (
    <>
      {!localStorage.getItem("token") ? (
        <Login  />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Notes  />
        </div>
      )}
    </>
  );
  
};

export default Home;
