# ESP32 Weather Station<br />
## Webpage view: <br />
![image](https://github.com/dominik-matysek/ESP32-Weather-Station-frontend/assets/63716538/1857276e-01a7-462e-85e9-8cfc7a1e2a09)
## Data loading view: <br />
![image](https://github.com/dominik-matysek/ESP32-Weather-Station-frontend/assets/63716538/4d1532ec-5724-4d04-aa6f-22f538fea0da)
## Error notification view: <br />
![image](https://github.com/dominik-matysek/ESP32-Weather-Station-frontend/assets/63716538/acb6a1c0-dc15-47d7-8825-3ec10bec93c8)
## Overview<br />
The ESP32 Weather Station is a project that combines data from an ESP32 microcontroller and external data from the OpenWeatherMap API to provide real-time weather and sensor data. This project serves as a weather monitoring system, displaying information such as 
temperature, humidity, air quality, sunrise, and sunset times. It is designed as a university project and as a basis for similar IoT applications. <br />
## Features <br />
- Real-time weather data from OpenWeatherMap API - display of sunrise and sunset times, weather icon and description, location for the measurements mentioned.
- Data retrieved from sensors connected to ESP32 - temperature, humidity, air quality, as well as the device name and timestamp of the measurement.
- Error notifications for data retrieval failures.
- Loading indicator showing the process of performing background tasks.
## Technologies used <br />
- HTML
- CSS
- JavaScript
## Configuration <br />
- OpenWeatherMap API - replace *apiKey* variable in **script.js** with your valid OpenWeatherMap API key, as well as *id* in *apiUrl* variable.
- ESP32 Data Endpoint - update *servUrl* variable in **script.js** with the correct endpoint where your device serves sensor data.
