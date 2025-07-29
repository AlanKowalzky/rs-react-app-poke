import React from 'react';

const About: React.FC = () => {
  return (
    <div
      style={{
        padding: '32px',
        color: 'white',
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '24px',
          color: '#FF7043',
        }}
      >
        About This App
      </h2>
      <p
        style={{
          fontSize: '1.125rem',
          lineHeight: '1.6',
          marginBottom: '24px',
        }}
      >
        This Pokemon search application was created by a student of The Rolling
        Scopes School as part of the React development course. The app
        demonstrates modern React patterns including functional components,
        hooks, routing, and comprehensive testing.
      </p>
      <p
        style={{
          fontSize: '1rem',
          lineHeight: '1.6',
        }}
      >
        Learn more about React development at{' '}
        <a
          href="https://rs.school/react/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#FF7043',
            textDecoration: 'underline',
            fontWeight: '600',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FF8A65';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#FF7043';
          }}
        >
          The Rolling Scopes School React Course
        </a>
        .
      </p>
    </div>
  );
};

export default About;
