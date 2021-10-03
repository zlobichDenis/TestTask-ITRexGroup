import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { data } from './data/data.js'


ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

