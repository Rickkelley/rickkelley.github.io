const temperature = parseFloat(document.getElementById("temp").textContent);

const windspeed = parseFloat(document.getElementById("speed").textContent);

let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));

windchill = Math.round(windchill);

document.getElementById("chill").textContent = "Wind Chill Temperature:  " + windchill + " ℉";

