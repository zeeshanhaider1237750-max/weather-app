import { retrieveData } from "./modules/convert.js";

const btn = document.getElementById("location-btn");
const cityInput = document.getElementById("location");
const weatherData = document.getElementById("data-body");

let dataFetched;
let city;

btn.addEventListener("click", async (event) => {
  event.preventDefault();

  cityInput.setCustomValidity("");

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
    resolvedArea.className = "element";

    const rATxt = document.createElement("p");
    resolvedArea.appendChild(rATxt);
    rATxt.textContent = "Location:";

    const rAValue = document.createElement("div");
    resolvedArea.appendChild(rAValue);
    rAValue.textContent = dataFetched.resolvedAddress;
    rAValue.className = "elementItem";

    const currentCondition = document.createElement("div");
    weatherData.appendChild(currentCondition);
    currentCondition.className = "element";

    const cCTxt = document.createElement("p");
    currentCondition.appendChild(cCTxt);
    cCTxt.textContent = "Current-Conditions:";

    const cCValue = document.createElement("div");
    currentCondition.appendChild(cCValue);
    cCValue.textContent = dataFetched.currentConditions.conditions;
    cCValue.className = "elementItem";

    const currentTemperature = document.createElement("div");
    weatherData.appendChild(currentTemperature);
    currentTemperature.className = "element";

    const cTtxt = document.createElement("p");
    currentTemperature.appendChild(cTtxt);
    cTtxt.textContent = "Current-Temperature:";

    const cTValue = document.createElement("div");
    currentTemperature.appendChild(cTValue);
    cTValue.textContent = dataFetched.currentConditions.temp;
    cTValue.className = "elementItem";

    const apparentTemperature = document.createElement("div");
    weatherData.appendChild(apparentTemperature);
    apparentTemperature.className = "element";

    const aTTxt = document.createElement("p");
    aTTxt.textContent = "Apparent Temperature:";
    apparentTemperature.appendChild(aTTxt);

    const aTValue = document.createElement("div");
    apparentTemperature.appendChild(aTValue);
    aTValue.textContent = dataFetched.currentConditions.feelslike;
    aTValue.className = "elementItem";

    const sunRise = document.createElement("div");
    weatherData.appendChild(sunRise);
    sunRise.className = "element";

    const sRTxt = document.createElement("p");
    sunRise.appendChild(sRTxt);
    sRTxt.textContent = "Sunrise:";

    const sRValue = document.createElement("div");
    sunRise.appendChild(sRValue);
    sRValue.textContent = dataFetched.currentConditions.sunrise;
    sRValue.className = "elementItem";

    const sunSet = document.createElement("div");
    weatherData.appendChild(sunSet);
    sunSet.className = "element";

    const sSTxt = document.createElement("p");
    sunSet.appendChild(sSTxt);
    sSTxt.textContent = "Sunset:";

    const sSValue = document.createElement("div");
    sunSet.appendChild(sSValue);
    sSValue.textContent = dataFetched.currentConditions.sunset;
    sSValue.className = "elementItem";

    const ultravioletRays = document.createElement("div");
    weatherData.appendChild(ultravioletRays);
    ultravioletRays.className = "elements";

    const uRTxt = document.createElement("p");
    uRTxt.appendChild(ultravioletRays);
    uRTxt.textContent = "Ultraviolet Ray Index:";

    const uRValue = document.createElement("div");
    uRValue.appendChild(ultravioletRays);
    uRValue.textContent = dataFetched.currentConditions.uvindex;
    uRValue.className = "elementItem";

    const humiditys = document.createElement("div");
    weatherData.appendChild(humiditys);
    humiditys.className = "element";

    const hTxt = document.createElement("p");
    humiditys.appendChild(hTxt);
    hTxt.textContent = "Humidity:";

    const hValue = document.createElement("div");
    humiditys.appendChild(hValue);
    hValue.textContent = dataFetched.currentConditions.humidity;
    hValue.className = "elementItem";

    const windSpeed = document.createElement("div");
    weatherData.appendChild(windSpeed);
    windSpeed.className = "element";

    const wSTxt = document.createElement("p");
    windSpeed.appendChild(wSTxt);
    wSTxt.textContent = "Wind Speed:";

    const wSValue = document.createElement("div");
    windSpeed.appendChild(wSValue);
    wSValue.textContent = dataFetched.currentConditions.windspeed;
    wSValue.className = "elementItem";

    const visibility = document.createElement("div");
    weatherData.appendChild(visibility);
    visibility.className = "element";

    const vTxt = document.createElement("p");
    visibility.appendChild(vTxt);
    vTxt.textContent = "Visibility:";

    const vValue = document.createElement("div");
    visibility.appendChild(vValue);
    vValue.textContent = `${dataFetched.currentConditions.visibility}`;
    vValue.className = "elementItem";

    const pressure = document.createElement("div");
    weatherData.appendChild(pressure);
    pressure.className = "element";

    const pTxt = document.createElement("p");
    pressure.appendChild(pTxt);
    pTxt.textContent = "Pressure";

    const pValue = document.createElement("div");
    pressure.appendChild(pValue);
    pValue.textContent = dataFetched.currentConditions.pressure;
    pValue.className = "elementItem";

    const solarRadiation = document.createElement("div");
    weatherData.appendChild(solarRadiation);
    solarRadiation.className = "element";

    const sRcTxt = document.createElement("p");
    solarRadiation.appendChild(sRcTxt);
    sRcTxt.textContent = "Solar Radiation:";

    const sRcValue = document.createElement("div");
    solarRadiation.appendChild(sRcValue);
    sRcValue.textContent = dataFetched.currentConditions.solarradiation;
    sRcValue.className = "elementItem";

    const solarEnergy = document.createElement("div");
    weatherData.appendChild(solarEnergy);
    solarEnergy.className = "element";

    const sETxt = document.createElement("p");
    solarEnergy.appendChild(sETxt);
    sETxt.textContent = "Solar-Energy";

    const sEValue = document.createElement("div");
    solarEnergy.appendChild(sEValue);
    sEValue.textContent = dataFetched.currentConditions.solarenergy;
    sEValue.className = "elementItem";

    const maxWindSpeed = document.createElement("div");
    weatherData.appendChild(maxWindSpeed);
    maxWindSpeed.className = "element";

    const mWSTxt = document.createElement("p");
    maxWindSpeed.appendChild(mWSTxt);
    mWSTxt.textContent = "Max Wind Speed:";

    const mWSValue = document.createElement("div");
    maxWindSpeed.appendChild(mWSValue);
    mWSValue.textContent = dataFetched.currentConditions.windgust;
    mWSValue.className = "elementItem";
 
    cityInput.value = "";
    return dataFetched;
  } catch (error) {
    console.error("Data tracking failed:", error);

    weatherData.textContent = `Error: ${error.message}. Please check your browser Inspect console.`;
  }
});
