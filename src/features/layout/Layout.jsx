import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <div className="flex w-screen h-screen">
        <nav className="w-20 sm:w-60 h-full">
          <Navbar />
        </nav>
        <main className="w-full h-full bg-[#F9F9FA]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
