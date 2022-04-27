import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as ReactDOMClient from 'react-dom/client';
import App from './App';

import { Router } from 'react-router-dom';


// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

