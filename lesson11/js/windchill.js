const temperature = parseFloat(document.getElementById("current-temp").textContent);

const windspeed = parseFloat(document.getElementById("speed").textContent);

let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));

windchill = Math.round(windchill);

if (temperature <51 && windspeed >3) {
    document.getElementById("chill").textContent = "Wind Chill Temperature:  " + windchill + " ℉";
    
}

else 
{
    document.getElementById("chill").textContent = "Wind Chill Temperature: N/A ";

        

}
