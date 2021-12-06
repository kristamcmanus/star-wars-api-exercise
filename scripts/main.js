// URL to retrieve people data
let peopleUrl = "https://swapi.dev/api/people/1";
let person = document.getElementById("person-info");

fetch(peopleUrl).then(response => response.json())
    .then(json => {
        console.log(json)
        person.innerHTML = `<h5>${json.name}<h5>`
    })