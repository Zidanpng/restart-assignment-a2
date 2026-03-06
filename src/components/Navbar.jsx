import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <header className="pt-2 bg-white shadow-lg">
      <Container>
        <div className="navbar">
          <div className="flex-1">
            <a className="font-bold text-xl text-gray-900">
              CS — Ticket System
            </a>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-gray-700 hover:text-purple-600">Home</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-purple-600">FAQ</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-purple-600">Changelog</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-purple-600">Download</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-purple-600">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex">
            <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  text-white">
              + New Ticket
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost text-gray-900 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <a className="text-gray-700 hover:text-purple-600">Home</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-purple-600">FAQ</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-purple-600">Changelog</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-purple-600">Download</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-purple-600">Contact</a>
              </li>
              <li>
                <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  text-white">
                  + New Ticket
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
