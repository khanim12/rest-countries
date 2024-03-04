const countryName = new URLSearchParams(location.search).get("name");
const flagImg = document.querySelector(".country-details img");
const countryNameH1 = document.querySelector(".country-details h1");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".lang");
const borderCountries = document.querySelector(".border-countries");
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([e]) => {
    console.log(e);
    flagImg.src = e.flags.svg;
    countryNameH1.innerText = e.name.common;
    population.innerText = e.population;
    region.innerText = e.region;
    topLevelDomain.innerText = e.tld.join(", ");
    if (e.capital) {
      capital.innerText = e.capital?.[0];
    }

    if (e.subregion) {
      subRegion.innerText = e.subregion;
    }

    if (e.name.nativeName) {
      nativeName.innerText = Object.values(e.name.nativeName)[0].common;
    }
    if (e, currencies) {
    currencies.innerText= Object.values(e.currencies).map((e)=> e.name).join(', ')
  }

    if (e.languages) {
      languages.innerTex =Object.values(e.languages).join(', ')
   }

    if (e.borders) {
      e.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) => res.json())
          .then(([borderCountry]) => {
          
            const borderCountryTag = document.createElement('a');
            borderCountryTag.innerText = borderCountry.name.common
            borderCountryTag.href=`country.html?name=${borderCountry.name.common}`
            borderCountries.append(borderCountryTag)
        })
     })
   }
  });
