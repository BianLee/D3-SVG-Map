# D3.js USA - A Front-end Map Renderer

## Overview
An interactive map that takes user input of US cities, and renders a SVG map using D3.js library and svg-pan-zoom.

## Flow
`components/homepage.js` is the parent component, and defines the process of looking up a user input city and adding it to an array if found. The function `handleCityAdded` is passed down to the child component `CityInput`, for the child component to use it by calling `onCityAdded` (reference name of the same function at the child level). The `HomePage` has a second child component `USMap` and passes down cities array as its prop, for the child to use the data to render on screen.

Using the `useState` hook, the code keeps track of all the cities in an array strucutre. The `handleCityAdded` function adds a city to a list if the city's coordinates are found in a dataset (fetched from `data.json`). It checks if the city's latitude and longitude are not both equal to 0 and if the city is found with valid coordinates, it creates a city object with the name and coordinates and adds it to the list of cities.

```
function test() {
    const handleCityAdded = (city) => {
    if (getCityCoordinates(city)[0] != 0 && getCityCoordinates(city)[1] != 0) {
      const newCity = { name: city, coordinates: getCityCoordinates(city) };
      setCities((prevCities) => [...prevCities, newCity]);
      console.log(newCity);
    }
  };
}
```


The `getCityCoordinates` function takes a city name as input and attempts to find its latitude and longitude in the citiesData dataset, which is in JSON format. If found, it sets latitude and longitude based on the city's data. It also sets a flag, indicating a valid city was found `(setNewCityFound(true))`. It returns an array [longitude, latitude]. If the city isn't found, it returns [0, 0] as default coordinates (a condition checked in `handleCityAdded`).

```
const getCityCoordinates = (cityName) => {
    const city = citiesData.find((city) => city.city === cityName);
    
    if (city) {
      //  const { latitude, longitude } = city.coordinates;
      const latitude = city.latitude;
      const longitude = city.longitude;
      console.log(latitude);
      setNewCityFound(true);
      return [longitude, latitude];
    } else {
      return [0, 0];
    }
};
```



