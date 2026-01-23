import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };


  return (
    <div className="container flex items-center justify-between py-4">
      {/* Search */}
      <form onSubmit={handleSubmit} className="relative flex w-full max-w-2xl items-center overflow-hidden rounded-lg ">
        {/* <input
          type="search"
          placeholder="Search products & services"
          className="w-full px-4 py-3 text-base outline-none placeholder:text-gray-400"
        /> */}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            // Optional: Add debounced search as user types
            if (onSearch) {
              onSearch(e.target.value);
            }
          }}
          placeholder="Search for products..."
          className="w-full py-3 pl-4 pr-10 rounded-lg rounded-r-none border border-r-0 border-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* <svg 
          className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg> */}
        {query && (
          <button 
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
        <button
          type="submit"
          className="flex h- py-4 items-center justify-center bg-blue-600 px-4 text-white hover:bg-blue-700 transition"
        >
          <Search size={18} />
        </button>
      </form>

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