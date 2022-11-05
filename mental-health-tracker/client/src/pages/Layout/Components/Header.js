import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="py-4">
          <div className="row flex-nowrap justify-content-center align-items-center">
            <div className="col-3">
              <Link to="/" className="text-muted">
                Home
              </Link>
            </div>
            <div className="col-6 text-center">
              <Link to="/" className="navbar-brand">
                <img
                  src="./Here With You-1.png"
                  alt="logo"
                  className={`${styles.Logo}`}
                />
              </Link>
            </div>
            <div className="col-1"></div>
            <div className="col-2 d-flex justify-content-around alight-items-center">
              <Link to="/login" className="btn btn-sm btn-outline-secondary">
                Login
              </Link>
              <Link to="/signup" className="btn btn-sm btn-outline-secondary">
                Sign Up
              </Link>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
