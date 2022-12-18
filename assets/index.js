// TODO: Include packages needed for this application
var searchButton = document.getElementById("searchButton")
var userCity = document.querySelector('#cityName')
var openWeatherApi = '5d21e5ba4232f7c4c356ba55ff9657a1'
var apiCallUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity.value + "&appid=" + openWeatherApi

function cityFinder(event) {
    event.preventDefault();

    var userCityInput = document.getElementById("cityName").value;

    if (!userCityInput) {
        alert("Enter the name of a city!");
        return;
    }
}

function weatherForecast() {
    fetch(apiCallUrl)
        .then(response => {
            if (!response.ok) {
                throw response;
            }
            return response.json();

        }).then(data => {
            var lon = data.coord.lon
            var lat = data.coord.lat
            var updatedApiCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + '&lon=' + lon + '&units=imperial&appid=' + APIKey;
        });
};