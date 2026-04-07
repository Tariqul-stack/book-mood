import React from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navStyle = ({ isActive }) =>
    isActive
      ? "px-5 py-2 rounded-xl border border-[#23BE0A] text-[#23BE0A] font-semibold"
      : "hover:text-[#131313] transition";

  const links = (
    <>
      <li>
        <NavLink to="/" className={navStyle}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/books" className={navStyle}>
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink to="/page-to-read" className={navStyle}>
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#F3F3F3]">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost px-2">
              <Menu className="w-6 h-6 text-[#1C1C1C]" />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-3 shadow bg-white rounded-2xl w-52 space-y-1"
            >
              {links}
            </ul>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#131313] cursor-pointer">
            Book Vibe
          </h1>
        </div>

        {/* Center nav (desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-6 xl:gap-10 text-lg font-medium text-[#131313CC]">
            {links}
          </ul>
        </div>

        {/* Right buttons */}
        <div className="navbar-end gap-3">
          <button className="hidden sm:inline-flex btn h-12 px-6 rounded-xl border-none bg-[#23BE0A] text-white text-lg font-semibold hover:bg-[#1faa0a]">
            Sign In
          </button>

          <button className="hidden sm:inline-flex btn h-12 px-6 rounded-xl border-none bg-[#59C6D2] text-white text-lg font-semibold hover:bg-[#46b7c4]">
            Sign Up
          </button>

          {/* Mobile */}
          <button className="sm:hidden btn h-10 px-4 rounded-xl border-none bg-[#23BE0A] text-white font-semibold hover:bg-[#1faa0a]">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
