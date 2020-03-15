const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=de4d915acebca03c6051dc7bcf9d513d";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    //console.log(weatherInfo);
		
	let windchill = 35.74 + (0.6215 * weatherInfo.main.temp) - (35.75 * Math.pow(weatherInfo.wind.speed, 0.16)) + (0.4275 * weatherInfo.main.temp * Math.pow(weatherInfo.wind.speed, 0.16));
//	console.log(windchill);
	freeze = Math.round(windchill);
//	console.log(freeze);
	
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
	//console.log(iconcode);
	
	const icon_path="//openweathermap.org/img/w/" + iconcode + ".png";
	//console.log(icon_path);
		

	
 }); 
 
 

const d = date = new Date();

const todayDayNumber = d.getDay();
//console.log(todayDayNumber);

const myweekday = new Array(7);

myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

//console.log(myweekday[3]);

const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=de4d915acebca03c6051dc7bcf9d513d";
fetch(apiURLforecast)
	.then((response) => response.json())
	.then((weatherFore) => {
		//console.log(weatherFore);
		
		//console.log(weatherFore.city.name);
		
		// document.getElementById("townName").innerHTML=weatherFore.city.name;
		
let mylist = weatherFore.list;

let forecastDayNumber = todayDayNumber;
	//console.log(forecastDayNumber);

	for (i=0; i<mylist.length; i++) {
		
		let time = mylist[i].dt_txt;
		if(time.includes("18:00:00")) {
			//console.log("Found an entry with 18:00:00 in the time. It was report " +i+ " from the mylist of 40");
			forecastDayNumber +=1;
			if(forecastDayNumber ===7) {
				forecastDayNumber = 0;
			}
			
			
			let theDayName = document.createElement("h4");
			theDayName.textContent = myweekday[forecastDayNumber];
			//console.log(">"+myweekday[forecastDayNumber]);
			
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
	
