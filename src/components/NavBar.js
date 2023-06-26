import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';

export function NavBar({ loggedInUser, logOut }) {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      const amPm = hours >= 12 ? 'PM' : 'AM';
      const twelveHourFormat = hours % 12 || 12;
      setCurrentTime(`${twelveHourFormat}:${minutes} ${amPm}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function handleLogOut() {
    logOut();
    navigate('/');
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <NavLink className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/image-bank-logo-night.png`}
            width="130px"
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
          z-index="3"
          color="white"
        >
          <span className="navbar-toggler-icon" z-index="3"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li><img src={`${process.env.PUBLIC_URL}/images/image-spacer.png`} alt="" width="475px" /></li>
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
                  <NavLink className="nav-link" activeClassName="active" to="/resources">
                    Resources
                  </NavLink>
                </li>
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
                {loggedInUser.isEmployee && (
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/all-data">
                      All Data
                    </NavLink>
                  </li>
                )}
                <img src={`${process.env.PUBLIC_URL}/images/image-spacer.png`} alt="" width="325px" />
                {loggedInUser.isGoogle ? (
                  <LogoutButton logOut={logOut} loggedInUser={loggedInUser} />
                ) : (
                  <li className="nav-item">
                    <span className="nav-link ml-auto" onClick={handleLogOut}>
                      {loggedInUser.name} | Logout
                    </span>
                  </li>
                )}
                <li className="nav-item">
                  <span className="current-time">
                    {currentTime}
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}