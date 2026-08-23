# Weather Application

## Overview
This application provides weather data for Real-Time through the usage of Weather API.

## Tech Stack
* HTML5 & CSS3
* Vanilla JavaScript
* Webpack 5 & Node Package Manager (npm)
* API Integration
* Windows Subsystem for Linux (Ubuntu 24.04)

## Installation
1. Clone the repository through GitHub source code:
   ```bash
   git clone https://github.com
   ```
2. Download Webpack 5 and the Packages as same used by the Developer:
   ```bash
   npm ci
   ```
3. Run the local Test Development Server:
   ```bash
   npm run start
   ```
4. Run the website version available through Internet:
   ```bash
   npm run start
   ```

## Project Structure
```text
weather-app/
├── node_modules/
├── src/
│   ├── assets/
│   │   └── image/
│   │       ├── clear-day.png
│   │       ├── clear-night.png
│   │       ├── cloudy.png
│   │       ├── fog.png
│   │       ├── partly-cloudy-day.png
│   │       ├── partly-cloudy-night.png
│   │       ├── rain.png
│   │       ├── snow.png
│   │       └── wind.png
│   ├── modules/
│   │   ├── API.js
│   │   ├── convert.js
│   ├── index.html
│   ├── script.js
│   └── style.css
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── webpack.config.js
```

## Features
1. Users can select the location to gain real-time weather data, such as Temperature, Predicted weather, humidity, Pressure, Sunrise & Sunset etc.
2. The Background shows the current weather.
3. Units used in the application are MOSTLY Standard International (SI) units.
4. Users can save location which would only be able on that device. In addition, users can move between their saved location where each act as a tab.

## Author / For-Contact
* **Author:** Zeeshan Haider
* **Email:** zeeshanhaider.1237750@gmail.com

## License & Copyrights
Copyrights © Zeeshan Haider - 2026

This project is open-sourced and licensed under the MIT License.

### What does this means for you:
1. You are 100% allowed to fork this repository.
2. You are 100% allowed to clone this repository.
3. You are 100% allowed to download and run this repository locally on your computer.
4. You are allowed to take parts out of this code, and use/modify them in your own code, **BUT YOU HAVE TO REFER BACK TO THIS DEVELOPER**.
