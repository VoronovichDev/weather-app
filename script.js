
async function getWeather() {
   try {
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=minsk&units=metric&appid=db968690a857f3cea0bf82c3cf38f5ad')
      console.log(await response.json())
   } catch (err) {
      console.log(err)
   }
}

getWeather()