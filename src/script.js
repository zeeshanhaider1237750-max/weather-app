import { retrieveData } from "./modules/convert.js";

const btn = document.getElementById("location-btn");
const cityInput = document.getElementById("location");
const weatherData = document.getElementById("data-body");

let dataFetched;
let city;

btn.addEventListener("click", async (event) => {
  event.preventDefault();

  if (cityInput.value.trim() !== "") {
    city = cityInput.value.trim();
  } else if (cityInput.value.trim() === "") {
    cityInput.setCustomValidity("Pls, Enter the location");
    cityInput.reportValidity();
    return;
  }

  try {
    dataFetched = await retrieveData(city);
    weatherData.innerHTML = "";

    const resolvedArea = document.createElement("div");
    weatherData.appendChild(resolvedArea);

    const rATxt = document.createElement("p");
    resolvedArea.appendChild(rATxt);
    rATxt.textContent = "Location:";

    const rAValue = document.createElement("div");
    resolvedArea.appendChild(rAValue);
    rAValue.textContent = dataFetched.resolvedAddress;

    const currentCondition = document.createElement("div");
    weatherData.appendChild(currentCondition);

    const cCTxt = document.createElement("p");
    currentCondition.appendChild(cCTxt);
    cCTxt.textContent = "Current-Conditions:";

    const cCValue = document.createElement("div");
    currentCondition.appendChild(cCValue);
    cCValue.textContent = dataFetched.currentConditions.conditions;

    const currentTemperature = document.createElement("div");
    weatherData.appendChild(currentTemperature);

    const cTtxt = document.createElement("p");
    currentTemperature.appendChild(cTtxt);
    cTtxt.textContent = "Current-Temperature:";

    const cTValue = document.createElement("div");
    currentTemperature.appendChild(cTValue);
    cTValue.textContent = dataFetched.currentConditions.temp;

    const apparentTemperature = document.createElement("div");
    weatherData.appendChild(apparentTemperature);

    const aTTxt = document.createElement("p");
    aTTxt.textContent = "Apparent Temperature:";
    apparentTemperature.appendChild(aTTxt);

    const aTValue = document.createElement("div");
    apparentTemperature.appendChild(aTValue);
    aTValue.textContent = dataFetched.currentConditions.feelslike;

    const sunRise = document.createElement("div");
    weatherData.appendChild(sunRise);

    const sRTxt = document.createElement("p");
    sunRise.appendChild(sRTxt);
    sRTxt.textContent = "Sunrise:";

    const sRValue = document.createElement("div");
    sunRise.appendChild(sRValue);
    sRValue.textContent = dataFetched.currentConditions.sunrise;
 
    cityInput.value = "";
    return dataFetched;
  } catch (error) {
    console.error("Data tracking failed:", error);
  }
});
