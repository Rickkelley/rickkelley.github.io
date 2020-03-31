const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';



fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    //console.table(jsonObject);	// temporary checking for valid response and data parsing
	const guides = jsonObject['guides'];

for (let i = 0; i < guides.length; i++ ) {
let card = document.createElement('section');
let h2 = document.createElement('h2');
let cert = document.createElement("p");
let email = document.createElement("p");
let bio = document.createElement("p");



h2.textContent = guides[i].name + ' ' + guides[i].lastname;
cert.textContent = "IRF Certification Level: " + guides[i].cert;
email.textContent = "E-mail address: " + guides[i].email;
bio.textContent = "Biography: " + guides[i].biography;



card.appendChild(h2);
card.appendChild(cert);
card.appendChild(email)
card.appendChild(bio);


  
document.querySelector('div.guides').appendChild(card);

}
  });