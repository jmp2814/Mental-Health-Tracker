import React from "react";
import styles from "./Footer.module.css";
import "./pages/styles.css"

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="text-center bg-dark mt-5 flex-grow-0 flex-shrink-0">
          <img
            src="./Here With You-1.png"
            alt="logo"
            className={`${styles.Logo}`}
          />
        </footer>
      </>
    );
  }
}

export default Footer;
