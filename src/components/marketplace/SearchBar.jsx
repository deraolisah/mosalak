import React from "react";
import { Link } from "react-router-dom";
// import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="container flex items-center justify-between py-4">
      {/* Search */}
      <div className="flex w-full max-w-2xl items-center overflow-hidden rounded-lg border border-gray-300">
        <input
          type="search"
          placeholder="Search products & services"
          className="w-full px-4 py-3 text-base outline-none placeholder:text-gray-400"
        />

        <button
          type="submit"
          className="flex h-full items-center justify-center bg-blue-600 px-4 text-white hover:bg-blue-700 transition"
        >
          {/* <Search size={18} /> */}
        </button>
      </div>

      {/* Right links */}
      <div className="ml-6 hidden items-center gap-4.5 text-sm md:flex">
        <Link to="/help-center" className="text-gray-600 hover:text-gray-900 text-nowrap transition">
          Help Center
        </Link>
        <a href="#" className="text-gray-600 hover:text-gray-900 text-nowrap transition">
          Become a seller
        </a>
      </div>
    </div>
  );
};

export default SearchBar;