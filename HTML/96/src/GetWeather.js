// import React from 'react'

// export default function GetWeather() {
//     const key = //'get your own key - but if you must you can use this'; //
//         '4d940566413cbb48ddbe156f2b502364';

//     const locationElem = $('#location');
//     const tempElem = $('#temp');
//     const descriptionElem = $('#description');
//     const iconElem = $('#icon');

//     const noWeather = $('#noWeather');
//     const hasWeather = $('.hasWeather').hide();
//     const errorElem = $('#error');

//     let theResponse;
//     function getWeather(zip) {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=imperial&lang=he`)
//             .then(response => {
//                 theResponse = response;
//                 return response.json();
//             })
//             .then(weatherData => {
//                 console.log(weatherData);

//                 if (!theResponse.ok) {
//                     throw new Error(`${theResponse.status} ${theResponse.statusText} ${weatherData.message}`);
//                 }

//                 noWeather.hide();
//                 hasWeather.show();

//                 locationElem.text(weatherData.name);
//                 iconElem.attr('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`);
//                 tempElem.text(weatherData.main.temp);
//                 descriptionElem.text(weatherData.weather[0].description);
//             })
//             .catch(e => {
//                 noWeather.show();
//                 hasWeather.hide();
//                 errorElem.text(e.message);
//             });
//     }

//     const zipInput = $('#zip');
//     zipInput.change(() => {
//         getWeather(zipInput.val());
//     });
// }


