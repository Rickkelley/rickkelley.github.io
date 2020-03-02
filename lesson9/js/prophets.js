const requestURL = 'https://byui-cit230.github.io/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonobject) {
        console.table(jsonobject);
    });

    
