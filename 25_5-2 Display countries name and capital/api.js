fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => {
        displayCountry(data);
    })

    const countryDetails = country => {
        const countryDiv = document.getElementById('countryDetails');
        countryDiv.innerHTML = `
        <h1>Country Name : ${country.name}</h1>
        <h1>Population :${country.population}</h1>
        <h1>Area : ${country.area}</h1>
        <img class="flag" src="${country.flag}">
        `
    }

    function showDetails(name) {
        const url = `https://restcountries.eu/rest/v2/name/${name}`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => countryDetails(data[0]))
    }

const displayCountry = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryInfo =`
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="showDetails('${country.name}');">Show Details</button>
        `
        
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });




    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className ='country'
    //     const countryInfo = `
    //         <h3 class="country-name">${country.name}</h3>
    //         <p>${country.capital}</p>
    //     `;
    //     countryDiv.innerHTML = countryInfo; //Not Use InnerTEXT
    //     countriesDiv.appendChild(countryDiv);
    // }
}