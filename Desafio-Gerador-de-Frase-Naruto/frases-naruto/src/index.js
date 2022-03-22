import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app/App';
import GlobalStyle from "./components/globalStyle"

ReactDOM.render(
  <GlobalStyle>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalStyle>,
  document.getElementById('root')
);
