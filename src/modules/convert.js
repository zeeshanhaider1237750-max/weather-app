const cityInputtwo = document.getElementById("location");

export let  retrieveData = async (cityName) => {
    cityInputtwo.setCustomValidity("");

    const APIKEY = "GNPA433LLJ3R8HPCF7ENWFEU6";

      const url = `https://visualcrossing.com{cityName}?unitGroup=metric&key=${APIKEY}`;

    try{
        const response = await fetch(url);
        if(!response.ok){
            cityInputtwo.setCustomValidity("Pls, Input the Correct Location");
            cityInputtwo.reportValidity();

            throw new Error("Invalid Location");
        };
        const data = await response.json();
        return data;
    }
    catch(error){
      throw error;
    }
};
