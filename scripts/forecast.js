// this key is needed from AccuWeather.com in order to request weather information
const key = 'OZmlatqgr1gEHdxvKRDTwsWv7LGdR36o';

// get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

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
