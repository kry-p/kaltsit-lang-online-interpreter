/*
 * App
 */
// React core
import * as React from 'react';
// Styles
import GlobalStyle from './styles/theme';
// Components
import MainPage from './MainPage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
};

export default App;
