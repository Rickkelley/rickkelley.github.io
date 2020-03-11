const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=de4d915acebca03c6051dc7bcf9d513d";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });



