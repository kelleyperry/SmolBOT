import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import GlobalStyle from './styles/global';

const Index = () => {
  return (
    <React.StrictMode>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));