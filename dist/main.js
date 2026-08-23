/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/convert.js"
/*!********************************!*\
  !*** ./src/modules/convert.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retrieveData: () => (/* binding */ retrieveData)
/* harmony export */ });
let retrieveData = async (cityName) => {
  const APIKEY = "GNPA433LLJ3R8HPCF7ENWFEU6";
  
  const url = `https://visualcrossing.com{cityName}?unitGroup=metric&key=${APIKEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Invalid Location");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_convert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/convert.js */ "./src/modules/convert.js");


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
    dataFetched = await (0,_modules_convert_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)(city);
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

    const sunSet = document.createElement("div");
    weatherData.appendChild(sunSet);

    const sSTxt = document.createElement("p");
    sunSet.appendChild(sSTxt);
    sSTxt.textContent = "Sunset:";

    const sSValue = document.createElement("div");
    sunSet.appendChild(sSValue);
    sSValue.textContent = dataFetched.currentConditions.sunset;

    cityInput.value = "";
    return dataFetched;
  } catch (error) {
    console.error("Data tracking failed:", error);

    weatherData.textContent = `Error: ${error.message}. Please check your browser Inspect console.`;
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLDBDQUEwQyxTQUFTLHdCQUF3QixPQUFPOztBQUVsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05vRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGlFQUFZO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUEsd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jb252ZXJ0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBsZXQgcmV0cmlldmVEYXRhID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XG4gIGNvbnN0IEFQSUtFWSA9IFwiR05QQTQzM0xMSjNSOEhQQ0Y3RU5XRkVVNlwiO1xuICBcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vdmlzdWFsY3Jvc3NpbmcuY29te2NpdHlOYW1lfT91bml0R3JvdXA9bWV0cmljJmtleT0ke0FQSUtFWX1gO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgTG9jYXRpb25cIik7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmV0cmlldmVEYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy9jb252ZXJ0LmpzXCI7XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24tYnRuXCIpO1xuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IHdlYXRoZXJEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRhLWJvZHlcIik7XG5cbmxldCBkYXRhRmV0Y2hlZDtcbmxldCBjaXR5O1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNpdHlJbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcblxuICBpZiAoY2l0eUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xuICAgIGNpdHkgPSBjaXR5SW5wdXQudmFsdWUudHJpbSgpO1xuICB9IGVsc2UgaWYgKGNpdHlJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICBjaXR5SW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbHMsIEVudGVyIHRoZSBsb2NhdGlvblwiKTtcbiAgICBjaXR5SW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGRhdGFGZXRjaGVkID0gYXdhaXQgcmV0cmlldmVEYXRhKGNpdHkpO1xuICAgIHdlYXRoZXJEYXRhLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCByZXNvbHZlZEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJEYXRhLmFwcGVuZENoaWxkKHJlc29sdmVkQXJlYSk7XG5cbiAgICBjb25zdCByQVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJlc29sdmVkQXJlYS5hcHBlbmRDaGlsZChyQVR4dCk7XG4gICAgckFUeHQudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uOlwiO1xuXG4gICAgY29uc3QgckFWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzb2x2ZWRBcmVhLmFwcGVuZENoaWxkKHJBVmFsdWUpO1xuICAgIHJBVmFsdWUudGV4dENvbnRlbnQgPSBkYXRhRmV0Y2hlZC5yZXNvbHZlZEFkZHJlc3M7XG5cbiAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyRGF0YS5hcHBlbmRDaGlsZChjdXJyZW50Q29uZGl0aW9uKTtcblxuICAgIGNvbnN0IGNDVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3VycmVudENvbmRpdGlvbi5hcHBlbmRDaGlsZChjQ1R4dCk7XG4gICAgY0NUeHQudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQtQ29uZGl0aW9uczpcIjtcblxuICAgIGNvbnN0IGNDVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRDb25kaXRpb24uYXBwZW5kQ2hpbGQoY0NWYWx1ZSk7XG4gICAgY0NWYWx1ZS50ZXh0Q29udGVudCA9IGRhdGFGZXRjaGVkLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XG5cbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJEYXRhLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZSk7XG5cbiAgICBjb25zdCBjVHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGN1cnJlbnRUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChjVHR4dCk7XG4gICAgY1R0eHQudGV4dENvbnRlbnQgPSBcIkN1cnJlbnQtVGVtcGVyYXR1cmU6XCI7XG5cbiAgICBjb25zdCBjVFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjdXJyZW50VGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoY1RWYWx1ZSk7XG4gICAgY1RWYWx1ZS50ZXh0Q29udGVudCA9IGRhdGFGZXRjaGVkLmN1cnJlbnRDb25kaXRpb25zLnRlbXA7XG5cbiAgICBjb25zdCBhcHBhcmVudFRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyRGF0YS5hcHBlbmRDaGlsZChhcHBhcmVudFRlbXBlcmF0dXJlKTtcblxuICAgIGNvbnN0IGFUVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYVRUeHQudGV4dENvbnRlbnQgPSBcIkFwcGFyZW50IFRlbXBlcmF0dXJlOlwiO1xuICAgIGFwcGFyZW50VGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoYVRUeHQpO1xuXG4gICAgY29uc3QgYVRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwYXJlbnRUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZChhVFZhbHVlKTtcbiAgICBhVFZhbHVlLnRleHRDb250ZW50ID0gZGF0YUZldGNoZWQuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlO1xuXG4gICAgY29uc3Qgc3VuUmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlckRhdGEuYXBwZW5kQ2hpbGQoc3VuUmlzZSk7XG5cbiAgICBjb25zdCBzUlR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHN1blJpc2UuYXBwZW5kQ2hpbGQoc1JUeHQpO1xuICAgIHNSVHh0LnRleHRDb250ZW50ID0gXCJTdW5yaXNlOlwiO1xuXG4gICAgY29uc3Qgc1JWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VuUmlzZS5hcHBlbmRDaGlsZChzUlZhbHVlKTtcbiAgICBzUlZhbHVlLnRleHRDb250ZW50ID0gZGF0YUZldGNoZWQuY3VycmVudENvbmRpdGlvbnMuc3VucmlzZTtcblxuICAgIGNvbnN0IHN1blNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlckRhdGEuYXBwZW5kQ2hpbGQoc3VuU2V0KTtcblxuICAgIGNvbnN0IHNTVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgc3VuU2V0LmFwcGVuZENoaWxkKHNTVHh0KTtcbiAgICBzU1R4dC50ZXh0Q29udGVudCA9IFwiU3Vuc2V0OlwiO1xuXG4gICAgY29uc3Qgc1NWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VuU2V0LmFwcGVuZENoaWxkKHNTVmFsdWUpO1xuICAgIHNTVmFsdWUudGV4dENvbnRlbnQgPSBkYXRhRmV0Y2hlZC5jdXJyZW50Q29uZGl0aW9ucy5zdW5zZXQ7XG5cbiAgICBjaXR5SW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIHJldHVybiBkYXRhRmV0Y2hlZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRGF0YSB0cmFja2luZyBmYWlsZWQ6XCIsIGVycm9yKTtcblxuICAgIHdlYXRoZXJEYXRhLnRleHRDb250ZW50ID0gYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9LiBQbGVhc2UgY2hlY2sgeW91ciBicm93c2VyIEluc3BlY3QgY29uc29sZS5gO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==