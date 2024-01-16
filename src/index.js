import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import Global from './styles/Global';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/customers-dashbord-react">
    <ThemeProvider theme={theme}>
      <App />

      <Global />
    </ThemeProvider>
  </BrowserRouter>
);
