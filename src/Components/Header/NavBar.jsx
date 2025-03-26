import React, { useState, useEffect } from "react";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MenuIcon from "@mui/icons-material/Menu";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
   
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); 

   
    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("token");
      setIsLoggedIn(!!updatedToken);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className={`navbar ${toggleMenu ? "open" : ""}`}>
      <div className="logo">
        <NavLink onClick={() => setToggleMenu(false)} to="/">
          Finexo
        </NavLink>
      </div>
      <div className="menu">
        <div className="menu-a">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#00bbf0" : "#eee",
            })}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#00bbf0" : "#eee",
            })}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/services"
            style={({ isActive }) => ({
              color: isActive ? "#00bbf0" : "#eee",
            })}
          >
            SERVICES
          </NavLink>
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/why"
            style={({ isActive }) => ({
              color: isActive ? "#00bbf0" : "#eee",
            })}
          >
            WHY US
          </NavLink>
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/team"
            style={({ isActive }) => ({
              color: isActive ? "#00bbf0" : "#eee",
            })}
          >
            TEAM
          </NavLink>

          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/crypto"
            style={({ isActive }) => ({
              color: isActive ? "#00bbf0" : "#eee",
            })}
          >
            CRYPTO
          </NavLink>

          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "#00bbf0" : "#eee",
            })}
          >
            CONTACT
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                onClick={() => setToggleMenu(false)}
                to="/dashboard"
                style={({ isActive }) => ({
                  color: isActive ? "#00bbf0" : "#eee",
                })}
              >
                DASHBOARD
              </NavLink>
              <button
                onClick={handleLogout}
                style={{
                  background: "none",
                  border: "none",
                  color: "#eee",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <button
              onClick={() => navigate("/login")}
              style={{
                background: "none",
                border: "none",
                color: "#eee",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <PersonRoundedIcon
                sx={{ marginRight: "8px", height: "100%" }}
              />
              LOGIN
            </button>
          )}
          <NavLink onClick={() => setToggleMenu(false)} to="/">
            <SearchRoundedIcon />
          </NavLink>
        </div>
      </div>
      <button className="btn-menu" onClick={() => setToggleMenu(!toggleMenu)}>
        <MenuIcon fontSize="large" />
      </button>
    </div>
  );
};

export default NavBar;
