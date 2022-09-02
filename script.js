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
      return tempObj
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
      return humidity
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
      return windSpeed
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
      return clouds
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
      return cityName
   }
   catch (err) {
      console.log(err)
   }
}

// grouping all weather data

async function getAllWeather(city) {
   try {
      let cityName = await getCity(city)
      let clouds = await getClouds(city)
      let wind = await getWind(city)
      let humidity = await getHumidity(city)
      let tempObj = await getTemp(city)

      const weatherObject = {
         cityName, clouds, wind, humidity, tempObj
      }
      // createApp(weatherObject)
      console.log(weatherObject)

   } catch (err) {
      console.log(err)
   }
}

getAllWeather('paris')

const searchForm = document.forms.search

searchForm.addEventListener('submit', async (e) => {
   e.preventDefault()
   let tempParagraph = document.querySelector('.current-temp p')
   let temp = await getTemp('minsk')
   tempParagraph.textContent = `${temp.temperature}°C`
})


function createApp(weatherObject) {

   let currentTemp = document.querySelector('.current-temp p')
   currentTemp.innerText = ` ${weatherObject.tempObj.temperature}°C`

}
