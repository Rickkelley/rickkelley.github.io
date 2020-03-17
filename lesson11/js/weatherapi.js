const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=de4d915acebca03c6051dc7bcf9d513d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currenttemp = document.querySelector
    ('#current-temp');
    const weatherIcon = document.querySelector
    ('imagesrc');

    currenttemp.textContent = jsObject.main.temp;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

  });


