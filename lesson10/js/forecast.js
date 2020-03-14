

const apiURLf = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=de4d915acebca03c6051dc7bcf9d513d";
fetch(apiURLf)
  .then((response) => response.json())
  .then((jsObject) => {

    console.log(jsObject);

    const fivedayforecast = jsObject.list.filter(x => x.dt.txt.includes(`18:00:00`));
    console.log(fivedayforecast);

    for (let i=0; i<fivedayforecast.length; i++) {
            document.getElementById(`forecast${i+1}`).textContent = fivedayforecast[i].main.temp;

    }









});