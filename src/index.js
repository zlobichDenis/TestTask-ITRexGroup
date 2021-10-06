import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/app/App';
import { AppWrapper } from './components/app-wrapper/app-wrapper';

function getData() {
  const url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';
  const getResponse = (url) => { 
      const xhr = new XMLHttpRequest();
      xhr.open(`GET`, url, false); 
      xhr.send();
      return xhr.response; 
  };
  const json = getResponse(url);
  const data = JSON.parse(json)
      .sort((a, b) => a.id - b.id);
  return data;
};

const data = getData();

// ReactDOM.render(
//   <React.StrictMode>
//     <App data={data}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <AppWrapper data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

