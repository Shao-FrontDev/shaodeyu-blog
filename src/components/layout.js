import * as React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Navbar></Navbar>
      <div className='content'>{children}</div>
    </div>
  );
};

export default Layout;
