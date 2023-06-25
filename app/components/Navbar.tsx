import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <nav className={"bg-green-600 py-10 m-20 w-full max-w-[80%]"}>
        <Search />
      </nav>
    </>
  );
};

export default Navbar;
