async function getWeather() {
  const city = document.getElementById("citySelect").value;
  const infoDiv = document.getElementById("weather-info");

  infoDiv.style.display = "block";
  infoDiv.innerHTML = `<div class="spinner"></div>`;

  const url = `https://api.weatherapi.com/v1/current.json?key=828a6baa2ad34f62a67201547251106&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const temp = data.current.temp_c;
    const text = data.current.condition.text;
    const icon = data.current.condition.icon;

    infoDiv.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}</h2>
      <p><strong>Temperature:</strong> ${temp} °C</p>
      <p><strong>Condition:</strong> ${text} <img src="${icon}" alt="${text}"></p>
    `;
  } catch (error) {
    console.error(error);
    infoDiv.innerHTML = "Error fetching weather data.";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
