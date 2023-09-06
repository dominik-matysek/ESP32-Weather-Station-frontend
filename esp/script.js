// Define API key and URL for OpenWeatherMap
const apiKey = '7ba0824d82c5069c50bf122cd1a593ab';
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=7530857&appid=${apiKey}`;
  
  // Function to fetch weather data and update the DOM
async function fetchWeatherData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to connect with OpenWeather. Check out if apiUrl and apiKey are correct and try again.');
        }

        const data = await response.json();

        // Update the DOM elements with weather data
        let sunriseTime = new Date((data.city.sunrise) * 1000).toLocaleTimeString();
        let sunsetTime = new Date(data.city.sunset * 1000).toLocaleTimeString();
        document.getElementById('sunrise-time').textContent = sunriseTime;
        document.getElementById('sunset-time').textContent = sunsetTime;

        // Location data
        let city = data.city.name;
        let country = data.city.country;
        const location = city + ', ' + country; // Concatenate city and country to one html line
        document.getElementById('weather-location').textContent = location;

        // Weather description data, in case the icon is not available
        let description = data.list[0].weather[0].description;
        const upperDescription = description.charAt(0).toUpperCase() + description.slice(1); // Change first letter of the first word to upper case
        document.getElementById('weather-description').textContent = upperDescription;

        // Weather icon
        let weatherIcon = data.list[0].weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png" || 'default-image.png';
        const weatherImage = document.getElementById('weather-icon');
        weatherImage.src = iconUrl;

    } catch (error) {
        console.error('Error fetching data:', error);
        // Display error message to the user
        showErrorMessage('Error fetching data from OpenWeatherMap API. Please make sure the data is uploaded correctly and try again.');
    }
}

// Maximum number of rows in the table
const maxTableRows = 10; 
// URL for fetching data from backend
const servUrl = 'https://weathermeasure.azurewebsites.net/api/measurment';

// Function to fetch data from ESP32 and its sensors
async function updateSensorData() {
  // Load Indicator everytime this function is executed
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'flex';

    try {
        const response = await fetch(servUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch the data from the device. Make sure everything is connected correctly and try again.');
        }

        const data = await response.json();

        const tableBody = document.getElementById('table-body');

        // Clear existing rows
        tableBody.innerHTML = '';

        // Get the last 10 measurements in reverse order
        const dataToDisplay = data.slice(-maxTableRows).reverse();

        // Loop through the data array and create rows 
        for (let i = 0; i < dataToDisplay.length; i++) {
            const item = dataToDisplay[i];
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${i + 1}</td>
                <td>${item.deviceName}</td>
                <td>${item.temperature}</td>
                <td>${item.humidity}</td>
                <td>${item.pressure}</td>
                <td>${item.timeStamp}</td>
            `;

            // Insert the new row at the beginning of the table
            tableBody.appendChild(newRow);
        }

    } catch (error) {
        console.error('Error fetching sensor data:', error);
        // Display error message to the user
        showErrorMessage('Error fetching data from device connected. Please make sure the data is uploaded correctly and try again.');
    } finally {
        loadingIndicator.style.display = 'none';
    }
}

// Function to show error notifications
function showErrorMessage(message) {
    const errorContainer = document.querySelector('.error');

    errorContainer.querySelector('.error-content').textContent = message;
    errorContainer.classList.add('show');

    setTimeout(() => {
        errorContainer.classList.remove('show');
    }, 10000); // Remove notification after 10 seconds
}

// Execute functions
fetchWeatherData();
updateSensorData();

// Update sensor data every 5 mins, OpenWeather data every hour
setInterval(updateSensorData, 300000); 
setInterval(fetchWeatherData, 3600000)


