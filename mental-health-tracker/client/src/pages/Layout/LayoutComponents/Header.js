import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="py-4">
          <div className="row flex-nowrap justify-content-center align-items-center">
            <div className="col-6 text-center">
              <Link to="/" className="navbar-brand">
                <img
                  src="./HereWithYou-1.png"
                  alt="logo"
                  className={`${styles.Logo}`}
                />
              </Link>
            </div>
          </div>
          <div className={`${styles.navbar}`}>
            <Link to="signup" className="btn btn-sm bg-light">
              Sign Up
            </Link>
            <Link to="/profile" className="btn btn-sm bg-light">
              Profile
            </Link>
            <Link to="/today" className="btn btn-sm bg-light">
              Entry List
            </Link>
            <Link to="/help" className="btn bg-danger text">
              Need Help Now
            </Link>
            <Link to="/login" className="btn btn-sm bg-light">
              Login
            </Link>
            <Link to="logout" className="btn btn-sm bg-light">
              Log Out
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
