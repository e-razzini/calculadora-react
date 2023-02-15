import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculadora from './main/Calculadora.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="row d-flex  justify-content-center p-3">
  <div className="Card" style={{width:'30rem'}} >
    <Calculadora />
  </div>
  </div>
);

// reportWebVitals();
