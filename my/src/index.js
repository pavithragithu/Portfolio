import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import {BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Projects from './Project2';
import App from './App';


// import Body1 from './Body1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
  <React.StrictMode>
  {/* <BrowserRouter> */}
  <App/>
{/* </BrowserRouter> */}
 </React.StrictMode>
 </div>
);



