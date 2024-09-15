import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import "./navbar.scss";
import { AuthContext } from "../../context/AuthContext";
function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>LamerEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noava.png"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="/login" className="login">Sign In</a>
            <a href="/register" className="register">
              Sign Up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menuIcon"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
