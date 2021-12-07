const results = document.querySelector('#results');

async function asyncFetch(value) {
    const res = await fetch(`https://swapi.dev/api/${value}/`);
    const data = await res.json();
    displayResults(data, value)
}

function displayResults(data, value) {
    let output = "";
    console.log(data);
    if (value === 'people') {
        data.results.forEach(item => {
            output += `
            <div class="card p-3 m-3" style="width: 16rem">
                <h4 class="card-title text-center">${item.name}</h4>
                <div class="card-content">
                    <span>Birth Year</span>: ${item.birth_year}<br> 
                    <span>Height</span>: ${item.height}<br>
                    <span>Mass</span>: ${item.mass}<br>
                    <span style="text-transform:capitalize">Eye Color</span>: ${item.eye_color}<br>
                    <span>Number of Films</span>: ${item.films.length}<br>
                </div>
            </div>    
            `
        })
    }
    results.innerHTML = output;
}

document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());
})

