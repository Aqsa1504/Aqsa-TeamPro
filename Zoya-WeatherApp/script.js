document.getElementById("getWeather").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    const API_KEY = "ed4f5eb48138adece53f6f54e241d259";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherInfo").innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Condition: ${data.weather[0].description}</p>
                `;
            } else {
                document.getElementById("weatherInfo").innerHTML = "City not found!";
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});