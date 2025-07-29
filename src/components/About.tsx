import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8 text-white max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-pokemon-orange">
        About This App
      </h2>
      <p className="text-lg">
        This application was created by a student of The Rolling Scopes School.
        <a
          href="https://rs.school/react/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline ml-2"
        >
          Learn more here.
        </a>
      </p>
    </div>
  );
};

export default About;
