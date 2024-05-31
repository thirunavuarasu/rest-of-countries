function reqListener() {
    const countriesArr = JSON.parse(this.responseText);
    console.log(countriesArr);
    const countriesWithSmallPopulation = countriesArr.filter(country => country.population < 200000);
    console.log(countriesWithSmallPopulation.map(country => country.name.common));

    const asianCountries = countriesArr.filter(country => country.continent === "Asia");
    console.log(asianCountries.map(country => country.name.common));

    const totalPopulation = countriesArr.reduce((accumulator, country) => accumulator + country.population, 0);
     console.log("Total population of all countries:", totalPopulation);

    countriesArr.forEach(country => {
        console.log("Name:", country.name.common);
        console.log("Flag:", country.flags.svg);
        console.log("------------------------");
    });
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();