/*
 * App
 */
// React core
import React from 'react';
// Styles
import GlobalStyle from './styles/theme';
// Components
import MainPage from './MainPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
}

export default App;
