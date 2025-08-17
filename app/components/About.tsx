import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8 bg-background text-text-primary max-w-2xl mx-auto text-center min-h-screen">
      <h2 className="text-3xl font-bold mb-6" style={{ color: '#ff7043' }}>
        About This App
      </h2>
      <p className="text-lg leading-relaxed mb-6 text-text-primary">
        This Pokemon search application was created by a student of The Rolling
        Scopes School as part of the React development course. The app
        demonstrates modern React patterns including functional components,
        hooks, routing, and comprehensive testing.
      </p>
      <p className="text-base leading-relaxed text-text-primary">
        Learn more about React development at{' '}
        <a
          href="https://rs.school/react/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:opacity-80 transition-colors"
          style={{ color: '#ff7043' }}
        >
          The Rolling Scopes School React Course
        </a>
        .
      </p>
    </div>
  );
};

export default About;
