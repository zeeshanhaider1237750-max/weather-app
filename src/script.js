import { retrieveData } from "./modules/convert.js";

const btn = document.getElementById("location-btn");
const cityInput = document.getElementById("location");
const weatherData = document.getElementById("data-body");
let city;

btn.addEventListener("click", async (event) => {
  event.preventDefault();
  
  if (cityInput.value.trim() !== "") {
    city = cityInput.value.trim();
  } else if (cityInput.value.trim() === "") {
    cityInput.setCustomValidity("Pls, Enter the location");
    return;
  }
  
  try{
    const dataFetched = await retrieveData(city);
    return dataFetched;
  }
  catch (error) {
    console.error("Data tracking failed:", error);
  }
 
});

const currentTemperature = document.createElement("")