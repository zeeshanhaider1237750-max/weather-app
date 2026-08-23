export let retrieveData = async (cityName) => {
  
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=GNPA433LLJ3R8HPCF7ENWFEU6`;

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
