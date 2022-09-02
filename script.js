// general response
async function getWeather(city) {
   try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=db968690a857f3cea0bf82c3cf38f5ad`)
      return await response.json()
   } catch (err) {
      console.log(err)
   }
}


// temperature
async function getTemp(city) {
   try {
      const cityInfo = await getWeather(city)
      const tempObj = {
         temperature: Math.round(cityInfo.main.temp),
         feels_like: Math.round(cityInfo.main.feels_like),
         temp_max: Math.round(cityInfo.main.temp_max),
         temp_min: Math.round(cityInfo.main.temp_min),
      }
      console.log(tempObj)
   }
   catch (err) {
      console.log(err)
   }
}

//humidity
async function getHumidity(city) {
   try {
      const cityInfo = await getWeather(city);
      humidity = cityInfo.main.humidity;
      console.log(humidity)
   }
   catch (err) {
      console.log(err)
   }
}

//wind
async function getWind(city) {
   try {
      const cityInfo = await getWeather(city);
      const windSpeed = cityInfo.wind.speed;
      console.log(windSpeed)
   }
   catch (err) {
      console.log(err)
   }
}

//clouds
async function getClouds(city) {
   try {
      const cityInfo = await getWeather(city);
      clouds = cityInfo.weather[0].description;
      console.log(clouds)
   }
   catch (err) {
      console.log(err)
   }
}

//cityName
async function getCity(city) {
   try {
      const cityInfo = await getWeather(city)
      const cityName = cityInfo.name
      // console.log(cityName)
      console.log(cityName)
   }
   catch (err) {
      console.log(err)
   }
}

getTemp('Paris')
getHumidity('Paris')
getWind('Paris')
getClouds('Paris')
getCity('Paris')
