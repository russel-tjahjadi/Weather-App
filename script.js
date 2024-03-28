const apiKey = "c3a5b42d8862970baf24aa9b3285037a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(cityName) {
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    // The .city is the div class created in the html file, remember?
    document.querySelector(".city").innerHTML = data.name; //.name is from the data itself (when we console log it, we can clearly see it!)
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C"; // Math.round rounds up/down the number so no decimals are present
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // From JSON format
    if (data.weather[0].main == "Clouds") {
      // Add cloud image
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      // Add cloud image
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      // Add cloud image
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      // Add cloud image
      weatherIcon.src = "images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  // Sends the user input into the function to update the details of the weather
  checkWeather(searchBox.value);
});
