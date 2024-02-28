import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //importing react router files
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./Context/Notes/NoteState"; //importing notestate from context
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import FavouriteNotes from "./Components/FavouriteNotes";
import ArchivedNotes from "./Components/ArchivedNotes";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Navbar /> <Home />
                </>
              }
            />
            <Route
              exact
              path="/favourites"
              element={
                <>
                  <Navbar />
                  <div style={{ display: "flex" }}>
                    <Sidebar />
                    <FavouriteNotes />
                  </div>
                </>
              }
            />
            <Route
              exact
              path="/archived"
              element={
                <>
                  <Navbar />
                  <div style={{ display: "flex" }}>
                    <Sidebar />
                    <ArchivedNotes />{" "}
                  </div>
                </>
              }
            />

            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
};

export default App;
