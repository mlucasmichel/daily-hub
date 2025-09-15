API_KEY = 'ce4c675fdf79035dc6c6caf5da9bc384';

document.addEventListener('DOMContentLoaded', function() {
    const weatherForm = document.getElementById('weather-form');
    const citySelect = document.getElementById('city-select');
    const weatherResult = document.getElementById('weather-result');

    /**
     * Fetches weather data for the given city and updates the UI.
     */
    weatherForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedCity = citySelect.value;
        getWeather(selectedCity);
    });

});