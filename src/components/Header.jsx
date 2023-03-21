import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <h1 className="text-[#1c1d1c] text-3xl font-bold">Patika Notes App</h1>
      <Search />
    </div>
  );
};

export default Header;
