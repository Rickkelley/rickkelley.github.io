const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&units=imperial&APPID=de4d915acebca03c6051dc7bcf9d513d";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {

		
	let windchill = 35.74 + (0.6215 * weatherInfo.main.temp) - (35.75 * Math.pow(weatherInfo.wind.speed, 0.16)) + (0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16));

	freeze = Math.round(windchill);

	
	if(weatherInfo.main.temp<=50  &&  weatherInfo.wind.speed >3) {
		document.getElementById("chill").textContent = "Wind Chill: "+freeze+"\xB0F";
	}
		else {
		document.getElementById("chill").textContent = "Wind Chill: N/A"; 
        };
        
	

    document.getElementById("currently").innerHTML=weatherInfo.weather[0].main;
    
    document.getElementById("current-temp").innerHTML=weatherInfo.main.temp;
    document.getElementById("speed").innerHTML=weatherInfo.wind.speed;
    document.getElementById("soggy").innerHTML=weatherInfo.main.humidity;
	
	const iconcode = weatherInfo.weather[0].icon;
	
	
	const icon_path="//openweathermap.org/img/w/" + iconcode + ".png";

		

	
 }); 
 
 

const d = date = new Date();

const todayDayNumber = d.getDay();


const myweekday = new Array(7);

myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";



const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&units=imperial&APPID=de4d915acebca03c6051dc7bcf9d513d";
fetch(apiURLforecast)
	.then((response) => response.json())
	.then((weatherFore) => {

		
let mylist = weatherFore.list;

let forecastDayNumber = todayDayNumber;
	

	for (i=0; i<mylist.length; i++) {
		
		let time = mylist[i].dt_txt;
		if(time.includes("18:00:00")) {
			
			forecastDayNumber +=1;
			if(forecastDayNumber ===7) {
				forecastDayNumber = 0;
			}
			
			
			let theDayName = document.createElement("h4");
			theDayName.textContent = myweekday[forecastDayNumber];
		
			
			let theTemp = document.createElement("p");
			theTemp.textContent = weatherFore.list[i].main.temp + "\xB0";
				
			let iconcode = weatherFore.list[i].weather[0].icon;
			let iconPath = "//openweathermap.org/img/w/" +iconcode+".png";
			
			let theIcon = document.createElement("img");
			theIcon.src=iconPath;
			
			let theDay = document.createElement("div");
			theDay.appendChild(theDayName);
			theDay.appendChild(theIcon);
			theDay.appendChild(theTemp);
			
			
		document.getElementById("weatherforecast").appendChild(theDay);	
			
		} 
		
	} 
		
		
	});
	
