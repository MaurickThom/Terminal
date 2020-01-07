var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = request => {
  return new Promise((resolve,reject)=>{{
    const xhttp = new XMLHttpRequest();
    xhttp.open(request.method, request.url, true);
    xhttp.send();
    xhttp.onreadystatechange = function (event) {
      if (xhttp.readyState === 4) { // primer error la triple igualdad
        if (xhttp.status == 200)
          return resolve(JSON.parse(xhttp.responseText)); // segundo error parseo
        return reject(request.url);
      }
    };
  }})
};

// fetchData({
//   method:'GET',
//   url:API
// })
// .then(data=>{
//   console.log(data)
//   fetchData({
//     method:'GET'
//   })
// })
// .catch(err=>console.log(`Error 1 ${err}`))

(async()=>{
  try{
Tue Jan  7 17:25:33 -05 2020
