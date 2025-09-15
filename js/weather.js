document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = 'ce4c675fdf79035dc6c6caf5da9bc384';
    const weatherForm = document.getElementById('weather-form');
    const citySelect = document.getElementById('city-select');
    const weatherResult = document.getElementById('weather-result');

    weatherForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedCity = citySelect.value;
        getWeather(selectedCity);
    });


    /**
     * Fetches weather data for the selected city and updates the page.
     */
    function getWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const { main, weather, name } = data;
                weatherResult.innerHTML = `
                    <h3>Weather in ${name}</h3>
                    <p>Temperature: ${main.temp} °C</p>
                    <p>Condition: ${weather[0].description}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherResult.innerHTML = `<p>Error: ${error.message}</p>`;
            });

    }

});