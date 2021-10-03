const API_KEY = "906b9fc92214d45a7c59b37311fbb626"

const imgWeather = document.querySelector("#weather div")



function  onGeoOK(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then((data) => {
    const weather = document.querySelector("#weather span:last-child")
    const city = document.querySelector("#weather span:nth-child(2)")
    weather.innerText = `
    ${data.weather[0].main}  ${Math.floor(data.main.temp)}°C`;
    console.log(data.weather)
    if(data.weather[0].main === "Clear") {
      imgWeather.innerHTML = "<img src='../img/sunny.png'>";
    }
    else if(data.weather[0].main === "Clouds") {
      imgWeather.innerHTML = "<img src='../img/cloud.png'>";
    }
    else if(data.weather[0].main === "Snow") {
      imgWeather.innerHTML = "<img src='../img/snow.png'>";
    }
    else if(data.weather[0].main === "Rain") {
      imgWeather.innerHTML = "<img src='../img/rain.png'>";
    }else{
      imgWeather.innerHTML = "<img src='../img/cheerup.png'>";
    }
    city.innerText = data.name

  });
}

function onGeoError() {
  alert("날씨정보를 찾을 수 없습니다.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);