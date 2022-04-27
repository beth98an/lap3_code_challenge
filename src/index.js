import React from 'react';
<<<<<<< HEAD
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
=======
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>,
document.getElementById("root"));
>>>>>>> 02987e5776e46426a0035eb237f085c97e803614

