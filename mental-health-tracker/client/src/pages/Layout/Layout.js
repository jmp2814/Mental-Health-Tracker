import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./LayoutComponents/Footer";
import Header from "./LayoutComponents/Header";

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
