"use client";

import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <nav className={"bg-green-200 py-5 w-full flex items-center justify-center "}>
        <Search />
      </nav>
    </>
  );
};

export default Navbar;
