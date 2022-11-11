import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
<link rel="stylesheet" type="text/css" href="custom.css"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>,
  </React.StrictMode>
);

