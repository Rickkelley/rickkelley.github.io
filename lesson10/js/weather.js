const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=de4d915acebca03c6051dc7bcf9d513d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const currenttemp = document.querySelector
    ('#current-temp');

    const speed = document.querySelector
    ('#speed');
    const soggy = document.querySelector
    ('#soggy');
    const currently = document.querySelector
    ('#currently');

    currently.textContent = jsObject.weather[0].main;
    soggy.textContent = jsObject.main.humidity;
    speed.textContent = jsObject.wind.speed;
    currenttemp.textContent = jsObject.main.temp;
    



  });


