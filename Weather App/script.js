const weatherData = {
    "New York": { temperature: 25, description: "Clear sky" },
    "London": { temperature: 18, description: "Partly cloudy" },
    "Tokyo": { temperature: 30, description: "Sunny" },
    "Sydney": { temperature: 22, description: "Rainy" },
    "Paris": { temperature: 20, description: "Overcast" }
};

function getWeather() {
    const city = document.getElementById('city').value;
    if (weatherData[city]) {
        displayWeather(city, weatherData[city]);
    } else {
        alert('City not found');
    }
}

function displayWeather(city, data) {
    document.getElementById('cityName').innerText = city;
    document.getElementById('temperature').innerText = `Temperature: ${data.temperature}°C`;
    document.getElementById('description').innerText = data.description;

    document.getElementById('weatherInfo').style.display = 'block';
}
