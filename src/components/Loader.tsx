import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div
        className="w-16 h-16 border-8 border-border border-t-pokemon-orange rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      ></div>
      <span className="mt-8 text-text-secondary text-xs">Loading...</span>
    </div>
  );
};

export default Loader;
