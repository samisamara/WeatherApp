class Forecast {
    constructor() {
        this.key = 'FgBMxhw4W2KTIGVC4DK3AjuM6yDidAG5';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    // if we want to make a function inside a class asynchronis, all we have to do is type asynch in front of the function name, and make sure the code inside is formatted to work with async code
    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}

// this key is needed from AccuWeather.com in order to request weather information
const key = 'FgBMxhw4W2KTIGVC4DK3AjuM6yDidAG5';

/* This is the first way of coding this function. We changed the software to be object oriented.
// get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}
*/

/* This is the first way of coding this function. We changed the software to be object oriented.
// async function to get city key information
const getCity = async (city) => {
    // base URL to city search api end point
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    // city query to be combined with base
    // a ? is needed in front, because this means we are adding query parameters to the end of the URL
    // this is a template string so we can the key does not need to be hard coded everytime
    // city is a template grabbed from the getCity function, which allows us to choose different cities to search for
    const query = `?apikey=${key}&q=${city}`;
    // we are combining base and query into one URL
    // await is needed, because we are going to wait for the fetch to complete so we can use it
    const response = await fetch(base + query);
    // await is needed, because we are going to wait for the data from response to become usable
    const data = await response.json();
    return data[0];
}
*/
