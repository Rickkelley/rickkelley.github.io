const d = date = new Date();

const todayDayNumber = d.getDay();
console.log(todayDayNumber);

const myweekday = new Array(7);

myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

console.log(myweekday[3]);

const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=de4d915acebca03c6051dc7bcf9d513d";
fetch(apiURLforecast)
  .then((response) => response.json())
  
  .then((jsObject) => {
    console.log(jsObject);

 const fivedayforecast = jsObject.list.filter(x =>
  x.dt_txt.includes('18:00:00'));
console.log(fivedayforecast)

for (let i=0; i<fivedayforecast.length; i++) {
  document.getElementById('forecast${i+1}')
textContent = fivedayforecast[i].main.temp

const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;  
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

}





});