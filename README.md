# D3.js USA - A Front-end Map Renderer

## Overview
An interactive map that takes user input of US cities, and renders a SVG map using D3.js library and svg-pan-zoom.

## Flow
`components/homepage.js` is the parent component, and handles the input functionality and renders the input box along with the child component, USMap, while passing cities as a prop.
Using the `useState` hook, the code keeps track of all the cities in an array strucutre. The handleCityAdded function adds a city to a list if the city's coordinates are found in a dataset imported from `data.json`. It checks if the city's latitude and longitude are not both equal to 0 and if the city is found with valid coordinates, it creates a city object with the name and coordinates and adds it to the list of cities.

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



