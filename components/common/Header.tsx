import React from "react";
import { FileText } from "lucide-react";
import NavLink from "./Nav-link";

const Header = () => {
  return (
    <nav className="container flex items-center  justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex ">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="h-5 w-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Digital MR{" "}
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
