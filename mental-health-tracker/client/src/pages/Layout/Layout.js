import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </>
    );
  }
}

export default Layout;
