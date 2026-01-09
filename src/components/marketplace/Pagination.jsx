import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 5;
  
  const getPageNumbers = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(currentPage - half, 1);
    let end = Math.min(start + maxVisiblePages - 1, totalPages);
    
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(end - maxVisiblePages + 1, 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <FiChevronLeft size={20} />
      </button>

      {getPageNumbers().map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg ${
            currentPage === page
              ? 'bg-primary text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <FiChevronRight size={20} />
      </button>

      <span className="text-gray-600 text-sm ml-4">
        Page {currentPage} of {totalPages}
      </span>
    </div>
  );
};

export default Pagination;