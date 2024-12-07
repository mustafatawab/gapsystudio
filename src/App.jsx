
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import './App.css';
import AppRouter from './pages/Router';
import * as THREE from 'three'
import ThreeScene from './components/ThreeScene';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
