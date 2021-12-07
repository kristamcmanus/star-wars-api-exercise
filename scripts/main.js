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
                return `<div class='person col-2'>
                            <h5>${person.name}</h5>
                            <p class="item-list">Birth Year: ${person.birth_year}</p>
                            <p class="item-list">Height: ${person.height}</p>
                            <p class="item-list">Mass: ${person.mass}</p>
                            <p class="item-list" style="text-transform: capitalize;">Eye Color: ${person.eye_color}</p>
                            <p class="item-list">Film Count: ${person.films.length}</p>
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