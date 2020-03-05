const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);	// temporary checking for valid response and data parsing
	const towns = jsonObject['towns'];
	
	let towndata = [towns[1], towns[4], towns[5]];

for (let i = 0; i < towndata.length; i++ ) {
let card = document.createElement('section');

let h2 = document.createElement('h2');
let p = document.createElement("p");
let motto = document.createElement("h3");
let year = document.createElement("p");
let pop = document.createElement("p");
let wtr = document.createElement("p");
let img = document.createElement("img");


h2.textContent = towndata[i].name; 
motto.textContent = towndata[i].motto;
year.textContent = "Year Founded: " + towndata[i].yearFounded;
pop.textContent = "Population: " + towndata[i].currentPopulation;
wtr.textContent = "Annual Rainfall: " + towndata[i].averageRainfall;

img.setAttribute('src', 'images/' + towndata[i].photo);
img.setAttribute('alt', towndata[i].name);

card.appendChild(h2);
card.appendChild(p);
card.appendChild(motto);
card.appendChild(year);
card.appendChild(pop);
card.appendChild(wtr);
card.appendChild(img);


  
document.querySelector('div.towns').appendChild(card);

}
  });