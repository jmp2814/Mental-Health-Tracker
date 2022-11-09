import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import "./pages/styles.css"

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="py-4">
          <div className="row flex-nowrap justify-content-center align-items-center">
            <div className="col-6 text-center">
              <Link to="/" className="navbar-brand">
                <img
                  src="./Here With You-1.png"
                  alt="logo"
                  className={`${styles.Logo}`}
                />
              </Link>
            </div>
          </div>
          <div className={`${styles.navbar}`}>
            <Link to="/" className="btn btn-sm btn-outline-secondary">
              Sign-Up
            </Link>
            <Link
              to="/help"
              className="btn btn-sm btn-info btn-outline-secondary"
            >
              Need Help Now
            </Link>
            <Link to="/login" className="btn btn-sm btn-outline-secondary">
              Login
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
