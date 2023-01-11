// 1. Get the city value from the form
// 2. Pass the city to the geoCode function
// 3. Pass the Lat and Long to the GetWeather function
// 4. Build HTML with the Data we get from the weather



fetch('http://api.openweathermap.org/geo/1.0/direct?appid=a613e6367c3477b0de0c2f387081fa25&q=Orlando'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    getWeather(data[0].lat,data[0].lon)
  });

function getWeather(lat,lon){
  console.log(lat,lon);
  fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a613e6367c3477b0de0c2f387081fa25&units=imperial`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (weather) {
    console.log(weather)

    let btnText = weather.city.name;
    document.querySelector(".city").append(btnText);
    //getting the Icon and make an image with it..
    let iconData = weather.list[0].weather[0].icon
    console.log(iconData);
    let showTemp = weather.list[0].main.temp
    document.querySelector(".show-temp").append("Temperature: " +showTemp+ " ℉");
    let showWind = weather.list[0].wind.speed
    document.querySelector(".show-wind").append("Wind: " +showWind+ " MPH" )
    let showHumi = weather.list[0].main.humidity
    document.querySelector(".show-humi").append("Humidity: " +showHumi+ " %" )

    let showDate = weather.list[0].dt_txt
    document.querySelector(".show-date").append(" " +showDate+"")
    

    let icon =  document.createElement("img")

    icon.setAttribute("src", `http://openweathermap.org/img/wn/${iconData}@2x.png`)

    document.querySelector(".icon").append(icon);

    
  });
}