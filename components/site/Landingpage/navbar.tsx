import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full z-50">
      <div className="bg-purple-300/90 flex items-center h-14 md:px-6 px-4">
        <Link
          className="flex hover:animate-pulse mr-6 items-center space-x-2"
          href={"/"}
        >
          <span className="font-bold md:text-2xl text-lg ml-auto tracking-wide">
            trello
          </span>
        </Link>
        <div className="flex ml-auto items-center">
          <Link href={"/auth"} className="font-medium hover:underline  text-sm">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
