import React from "react";
import Link from "next/link"; 

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-between fixed w-full z-10 top-0">
      {/* Logo */}
      <div className="flex items-center mb-4 md:mb-0">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ALX Listing App
        </Link>
      </div>

      {}
      <div className="flex-grow mx-4 max-w-lg w-full">
        <input
          type="text"
          placeholder="Search for properties..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {}
      <nav className="flex items-center space-x-4">
        <Link href="/rooms" className="text-gray-600 hover:text-blue-500">
          Rooms
        </Link>
        <Link href="/mansions" className="text-gray-600 hover:text-blue-500">
          Mansion
        </Link>
        <Link href="/countryside" className="text-gray-600 hover:text-blue-500">
          Countryside
        </Link>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Sign Up
        </button>
        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 hover:text-blue-600">
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;