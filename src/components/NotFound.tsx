import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="p-8 text-white text-center">
      <h2 className="text-4xl font-bold mb-4 text-red-500">404 - Not Found</h2>
      <p className="text-xl">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="text-blue-400 hover:underline mt-6 inline-block text-lg"
      >
        Go back to the main page
      </Link>
    </div>
  );
};

export default NotFound;
