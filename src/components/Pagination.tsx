import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 4) pageNumbers.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 3) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 text-text-primary">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      {getPageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={`${page}-${index}`}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 rounded-md ${
              currentPage === page
                ? 'bg-pokemon-orange text-white font-bold'
                : 'bg-background-secondary'
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={`ellipsis-${index}`} className="px-3 py-2 text-text-secondary">
            ...
          </span>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md bg-background-secondary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
