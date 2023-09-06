# ESP32 Weather Station<br />
## Webpage view: <br />
![image](https://github.com/dominik-matysek/ESP32-Weather-Station-frontend/assets/63716538/21073035-1156-4ae9-bbef-afcef4ae4e73)
## Data loading view: <br />
![image](https://github.com/dominik-matysek/ESP32-Weather-Station-frontend/assets/63716538/e91d9ced-3081-42dd-b0ec-b301db7c1db3)
## Error notification view: <br />
![image](https://github.com/dominik-matysek/ESP32-Weather-Station-frontend/assets/63716538/367ca192-0acd-4ec9-8133-1f4bc3a8e4ec)
## Overview<br />
The ESP32 Weather Station is a project that combines data from an ESP32 microcontroller and external data from the OpenWeatherMap API to provide real-time weather and sensor data. This project serves as a weather monitoring system, displaying information such as 
temperature, humidity, pressure, sunrise, and sunset times. It is designed as a university project and as a basis for similar IoT applications. <br />
## Features <br />
- Real-time weather data from OpenWeatherMap API - display of sunrise and sunset times, weather icon and description, location for the measurements mentioned.
- Data retrieved from sensors connected to ESP32 - temperature, humidity, pressure, as well as the device name and timestamp of the measurement.
- Error notifications for data retrieval failures.
- Loading indicator showing the process of performing background tasks.
## Technologies used <br />
- HTML
- CSS
- JavaScript
## Configuration <br />
- OpenWeatherMap API - replace *apiKey* variable in **script.js** with your valid OpenWeatherMap API key, as well as *id* in *apiUrl* variable.
- ESP32 Data Endpoint - update *servUrl* variable in **script.js** with the correct endpoint where your device serves sensor data.
