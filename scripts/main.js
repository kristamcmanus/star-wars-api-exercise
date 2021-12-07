function fetchData() {
    fetch('https://swapi.dev/api/people/')
        .then(res => {
            if (!res.ok) {
                throw Error('ERROR');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            const html = data.results.map(person => {
                return `<div class='person'>
                            <h5>${person.name}</h5>
                            <p>Birth Year: ${person.birth_year}</p>
                            <p>Height: ${person.height}</p>
                            <p>Mass: ${person.mass}</p>
                            <p style="text-transform: capitalize;">Eye Color: ${person.eye_color}</p>
                            <p>Film Count: ${person.films.length}</p>
                        </div>
                        `;
            }).join('');
            console.log(html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
        })
        .catch(error => {
            console.log(error)
        });
}

fetchData();

$('.spinner-border')
    .hide()  // Hide it initially
    .ajaxStart(function () {
        $(this).show();
    })
    .ajaxStop(function () {
        $(this).hide();
    })
    ;