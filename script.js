const weatherForm = document.querySelector("form");
const searchInput = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchBtn");

const cityName = document.querySelector(".cityName");
const temperature = document.querySelector(".temperature");
const feelsLike = document.querySelector(".feelsLike");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", async () => {
  if (searchInput.value === "") return;
  const weatherData = await getWeather(searchInput.value);
  cityName.textContent = weatherData.location.name;
  temperature.textContent = `Temperature: ${weatherData.current.temp_f}°F`;
  feelsLike.textContent = `Feels Like: ${weatherData.current.feelslike_f}°F`;
  humidity.textContent = `Humidity: ${weatherData.current.humidity}%`;
  wind.textContent = `Wind Speed: ${weatherData.current.wind_mph} mph`;
});

async function getWeather(location) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=a6b6872db0ce44788f1205959232104&q=${location}`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  return weatherData;
}

getWeather("Boerne");
