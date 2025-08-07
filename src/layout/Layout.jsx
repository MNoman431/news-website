
import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Fixed top */}
      <div className="flex-grow"> 
        <Outlet /> {/* Page content will appear here */}
      </div>
      <Footer /> {/* Stays at bottom */}
    </div>
  );
};

export default Layout;
