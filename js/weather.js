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
      imgWeather.innerHTML = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb6nV4A%2FbtrgMy7uxnW%2FpzD8YOVuAJyXnlvFvjrxi1%2Fimg.png'>";
    }
    else if(data.weather[0].main === "Clouds") {
      imgWeather.innerHTML = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbe56U1%2FbtrgCD3lHNo%2FW3CO4MemZzRAdukKbtakX1%2Fimg.png'>";
    }
    else if(data.weather[0].main === "Snow") {
      imgWeather.innerHTML = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmyDOa%2FbtrgCGF7ReK%2Fw3bTyKjQi25mYhqBDRczdK%2Fimg.png'>";
    }
    else if(data.weather[0].main === "Rain") {
      imgWeather.innerHTML = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr0Ar4%2FbtrgOtZgwgM%2F8VhOQWm8fUwln7EwFZ78AK%2Fimg.png'>";
    }else{
      imgWeather.innerHTML = "<img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcCIjh8%2FbtrgB2WE0PC%2Fpn7rWn91Tbs3HdD79HGXIK%2Fimg.png'>";
    }
    city.innerText = data.name

  });
}

function onGeoError() {
  alert("날씨정보를 찾을 수 없습니다.")
}


navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);