import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './styles/NavBar.css';
import LogoutButton from './LogoutButton';

export function NavBar({ loggedInUser, logOut }) {
  const navigate = useNavigate();
  const ctx = useContext(UserContext);
  const [isDayMode, setIsDayMode] = useState(true); // Added state for day/night mode

  function handleLogOut() {
    logOut();
    navigate("/");
  }

  function toggleDayNightMode() {
    setIsDayMode((prevMode) => !prevMode);
  }

  const dayNightIcon = isDayMode
    ? `${process.env.PUBLIC_URL}/images/image-moon-icon.png`
    : `${process.env.PUBLIC_URL}/images/image-sun-icon.png`;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <NavLink className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/image-bank-logo-night.png`}
            alt="UpstateBridge Bank"
            className="logo-image"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to="/">
                Home
              </NavLink>
            </li>
            {!loggedInUser ? (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/create-account"
                  >
                    Create Account
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/login">
                    Log In
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/transaction">
                    Transaction
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/transfer">
                    Transfer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/resources">
                    Resources
                  </NavLink>
                </li>
                {loggedInUser.isEmployee && (
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/all-data">
                      All Data
                    </NavLink>
                  </li>
                )}
                {loggedInUser.isGoogle ? (
                  <LogoutButton logOut={logOut} loggedInUser={loggedInUser} />
                ) : (
                  <li className="nav-item">
                    <span className="nav-link" onClick={handleLogOut}>
                      {loggedInUser.name} | Logout
                    </span>
                  </li>
                )}
              </>
            )}
          </ul>
          <div className="navbar-icons">
            <img
              src={dayNightIcon}
              alt="Toggle Day/Night Mode"
              className="day-night-icon"
              onClick={toggleDayNightMode}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}