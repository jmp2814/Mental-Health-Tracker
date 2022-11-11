import React from "react";
import styles from "./Footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="text-center mt-5 flex-grow-0 flex-shrink-0">
          <img src="./HWYAbrvtd5.png" alt="logo" className={`${styles.Logo}`} />
        </footer>
      </>
    );
  }
}

export default Footer;
