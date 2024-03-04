const countries = document.querySelector(".countries-container");


function getCountries(url) {
  fetch(
    url
  )
    .then((response) => {
      response;
      return response.json();
    })
    .then((data) => {
      countries.innerHTML = " ";
      data.forEach((e) => {
        const countryCard = document.createElement('a')
        countryCard.classList.add('country-card')
        countryCard.href=`/country.html?name=${e.name.common}`
        countryCard.innerHTML += `
              <div class="country-card">
              <a href=""> <img src="${e.flags.png}" alt="${e.flags.alt}"> </a>
              <div class="card-text">
                  <h3 class="card-title">
                      ${e.name.common}
                  </h3>
                  <p><b>Population:</b>${e.population}</p>
                  <p><b>Region:</b>${e.region}</p>
                  <p><b>Capital:</b>${e.capital}</p>
      
      
              </div>
          </div>
      
              `;
        countries.append(countryCard)
      });
    });
}
getCountries("https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region")

const search = document.getElementById("search");
search.addEventListener("keyup", function () {
  if (search.value.length > 0) {
    getCountries(`https://restcountries.com/v3.1/name/${search.value}`)
  
  }
});

let filter = document.getElementById("filter")
filter.addEventListener("change", function () {
  if (filter.value === 'all') getCountries("https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region")
  else getCountries(`https://restcountries.com/v3.1/region/${filter.value}`)
  
})

const modeIcon = document.querySelector('.mode-icon')
modeIcon.addEventListener("click",  () => {
  document.body.classList.toggle('dark')
})