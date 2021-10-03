const url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';
const getResponse = (url) => { 
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`, url, false); 
    xhr.send();
    return xhr.response; 
};
const json = getResponse(url);
export const data = JSON.parse(json)
    .sort((a, b) => a.id - b.id);



