// general response
async function getWeather(city) {

   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=db968690a857f3cea0bf82c3cf38f5ad`)
   return await response.json()

}


// temperature
async function getTemp(city) {

   const cityInfo = await getWeather(city)
   const tempObj = {
      temperature: Math.round(cityInfo.main.temp),
      feels_like: Math.round(cityInfo.main.feels_like),
      temp_max: Math.round(cityInfo.main.temp_max),
      temp_min: Math.round(cityInfo.main.temp_min),
   }
   return tempObj

}

//humidity
async function getHumidity(city) {

   const cityInfo = await getWeather(city);
   const humidity = cityInfo.main.humidity;
   return humidity

}

//wind
async function getWind(city) {

   const cityInfo = await getWeather(city);
   const windSpeed = cityInfo.wind.speed;
   return windSpeed

}

//clouds
async function getClouds(city) {

   const cityInfo = await getWeather(city);
   const clouds = cityInfo.weather[0].description;
   return clouds

}

//cityName
async function getCity(city) {

   const cityInfo = await getWeather(city)
   const cityName = cityInfo.name
   return cityName

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
      createApp(weatherObject)

   } catch (err) {
      createError()
   }
}


const searchForm = document.forms.search

searchForm.addEventListener('submit', async (e) => {
   e.preventDefault()
   const searchInput = document.getElementById('search-input')
   const cityName = searchInput.value
   await getAllWeather(cityName)
})


// fill our app with data from api
function createApp(weatherObject) {

   const cityName = document.getElementById('city')
   cityName.textContent = weatherObject.cityName

   const currentTemp = document.querySelector('.current-temp p')
   currentTemp.textContent = `${weatherObject.tempObj.temperature}°C`

   const maxTemp = document.querySelector('.max-temp p')
   maxTemp.textContent = `${weatherObject.tempObj.temp_max}°C`

   const minTemp = document.querySelector('.min-temp p')
   minTemp.textContent = `${weatherObject.tempObj.temp_min}°C`

   const feelsLike = document.querySelector('.info-feel p')
   feelsLike.textContent = `Feels like: ${weatherObject.tempObj.feels_like}°C`

   const clouds = document.querySelector('.info-clouds p')
   clouds.textContent = `Clouds: ${weatherObject.clouds}`

   const humidity = document.querySelector('.info-humidity p')
   humidity.textContent = `Humidity: ${weatherObject.humidity}%`

   const wind = document.querySelector('.info-wind p')
   wind.textContent = `Wind: ${weatherObject.wind} m/s`

}

// error handling layout 
function createError() {

   const cityName = document.getElementById('city')
   cityName.textContent = 'Check city name'

   const currentTemp = document.querySelector('.current-temp p')
   currentTemp.textContent = 'n/d'

   const maxTemp = document.querySelector('.max-temp p')
   maxTemp.textContent = 'n/d'

   const minTemp = document.querySelector('.min-temp p')
   minTemp.textContent = 'n/d'

   const feelsLike = document.querySelector('.info-feel p')
   feelsLike.textContent = 'n/d'

   const clouds = document.querySelector('.info-clouds p')
   clouds.textContent = 'n/d'

   const humidity = document.querySelector('.info-humidity p')
   humidity.textContent = 'n/d'

   const wind = document.querySelector('.info-wind p')
   wind.textContent = 'n/d'

}
// call function to initialize app 
getAllWeather('paris')
