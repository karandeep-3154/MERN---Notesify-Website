import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); //redirecting to login page
    window.location.reload(); //reloading page for refreshing components
  };

  return (
    <nav className="navbar">

    <div className="navbarContent">
        <div className="logo">
          <Link to="/">
            Noteify
          </Link>
        </div>
  
        <div className="NavbarLinks">
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
  
        {!localStorage.getItem("token")
        ?(
          <>
            <Link to="/login">
              Login
            </Link>
            <Link to="/signup">
              Sign Up
            </Link>
          </>
        )
        :(
          <Link onClick={HandleLogout}>
            Log out
          </Link>        
        )}
  
        </div>
    </div>

    </nav>
  );
};

export default Navbar;
