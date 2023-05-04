

// function mainFunc(){
// let url = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf';
// fetch(url).then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })


// }


// mainFunc()

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});