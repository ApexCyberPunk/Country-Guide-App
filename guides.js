const searchBtn = document.getElementById('search-btn');
const result = document.querySelector('#result')
const countryInp = document.getElementById('country-inp');

searchBtn.addEventListener('click', () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true
    `;

   
    fetch(finalURL)
        .then((x) => x.json())
        .then((y) => {
           result.innerHTML = `<img src="${y[0].flags.svg}" class="flag-img">
            <h2>${y[0].name.common}</h2>
            <div class="wrapper">
                    <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${y[0].capital[0]}</span>
            </div>
            </div>
            <div class="wrapper">
            <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${y[0].continents[0]}</span>
    </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
    <h4>Population:</h4>
    <span>${y[0].population}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
<h4>Currencies:</h4>
<span>${Object.keys(y[0].currencies)[0]} - ${y[0].currencies[Object.keys(y[0].currencies)].name}</span>
</div>
</div>

<div class="wrapper">
<div class="data-wrapper">
<h4>Language:</h4>
<span>${Object.values(y[0].languages).toString().split(",").join(",")}</span>
</div>
</div>

            `
        
        
        }) 
        .catch(() => {
        if (countryName.length == 0) {
            result.innerHTML = `<h3>Input can't be empty</h3>`
        } else {
            result.innerHTML = `<h3>Enter valid country name.</h3>`
        }
       })
})




