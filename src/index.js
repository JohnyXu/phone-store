import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// import { StateProvider } from './context/StateContext';
import { StateProvider } from './contexts/state';

ReactDOM.render(
  <StateProvider>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById('root'),
);
