const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    // making a variable = the cityDets and weather properties we passed from updateCity
    const cityDets = data.cityDets;
    const weather = data.weather;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
    `;

    // remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) => {
    
    // We can call functions from different files because forecast.js is defined before app.js in index.html

    // because getCity is an async function, it will return a promise
    // because it returns a promise, we can use await to make sure getCity is finished before assigning a value to cityDets
    const cityDets = await getCity(city);
    // same situation as cityDets
    const weather = await getWeather(cityDets.Key);

    // weather response an object about the weather. As such, we will return an object
    return {
        // we are calling a property named "cityDets" and assigning its value as the cityDets const, which we got earlier, and the same goes for weather
        // the commented properties are the traditional long handed way of making object properties, but we can use a shortcut just use the words cityDets and weather once each, since the properties and values are the exact same name
        // cityDets: cityDets,
        // weather: weather
        cityDets,
        weather
    };
}

cityForm.addEventListener('submit', e => {
    // prevent default action
    e.preventDefault();
    
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    // updateCity will return the object as the data, so we call the result from the function "data"
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})