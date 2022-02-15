import './styles.css';
import 'react-app-polyfill/ie11';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { materialTheme, NavBar, PoweredBy } from '../.';
import { App } from './App';

const Footer: React.FC = () => (
  <footer>
    <PoweredBy />
  </footer>
);

const Wrapper = () => {
  return (
    <ThemeProvider theme={materialTheme}>
      <CssBaseline />
      <Router>
        <>
          <NavBar title="lib" />
          <App />
          <Footer />
        </>
      </Router>
    </ThemeProvider>
  );
};

ReactDOM.render(<Wrapper />, document.getElementById('root'));
