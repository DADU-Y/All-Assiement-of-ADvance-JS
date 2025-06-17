async function getWeather() {
    try {
          let city = document.getElementById("cityInput").value;
   let apiKey = "2ad73a362cd4ab99ea1688c71bcbb1b6";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();

  if (data.cod === "404") {
    alert("City not found! Please enter a valid city.");
    return;
  }

  let iconCode = data.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  let weather = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <img src="${iconUrl}" alt="weather icon">
    <p>🌡️ Temperature: ${data.main.temp} °C</p>
    <p>🌥️ Weather: ${data.weather[0].description}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>
    <p>🌬️ Wind: ${data.wind.speed} m/s</p>
  `;

  document.getElementById("weatherResult").innerHTML = weather;
    } catch (error) {
        console.log(error);
    }
}