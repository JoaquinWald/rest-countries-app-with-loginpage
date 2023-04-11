import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RestCountriesApp } from './src/RestCountriesApp';

ReactDOM.createRoot(document.getElementById('app')).render(
  // <React.StrictMode>
  <BrowserRouter>

    <RestCountriesApp />

  </BrowserRouter>
  // </React.StrictMode>
);

//----------------------------------------------
// import { createRoot } from 'react-dom/client';

// import { App } from './src/App';

// const root = createRoot(document.getElementById('app'));

// root.render(
//   <App />
// );
