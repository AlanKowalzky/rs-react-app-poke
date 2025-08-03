import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import { store } from './app/store';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <Provider store={store}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Provider>
      </ThemeProvider>
    </StrictMode>
  );
}
