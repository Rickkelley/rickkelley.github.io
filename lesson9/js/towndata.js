const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);	// temporary checking for valid response and data parsing
	const prophets = jsonObject['towndata'];

for (let i = 0; i < towndata.length; i++ ) {
let card = document.createElement('section');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let p = document.createElement("p");
let tyf = document.createElement("p");
let pop = document.createElement("p");
let arf = document.createElement("p");
let img = document.createElement("img");

h1.textContent = towndata[i].name;
h2.textContent = towndata[i].motto;
tyf.textContent = "Year Founded: " + towndata[i].yearFounded;
pop.textContent = "Current Population: " + towndata[i].currentPopulation;
arf.textContent = "Average Annual Rain Fall: " + towndata[i].averageRainfall;
img.setAttribute('src',towndata[i].photo);
img.setAttribute('alt',towndata[i].name + " Idaho")

card.appendChild(h1);
card.appendChild(h2);
card.appendChild(p);
card.appendChild(pop);
card.appendChild(tyf);
card.appendChild(arf);
card.appendChild(img);

document.querySelector('div.cards').appendChild(card);

}
  }); 
