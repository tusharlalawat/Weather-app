let weather = {

    // apikey: API_KEY,
    apikey: "e64390a602e22f6363af02f7ce636e11",
    fetchWeather: function(city) {
        fetch(
             "http://api.openweathermap.org/data/2.5/weather?q=" 
             + city 
             + "&units=metric&appid=" 
             + this.apikey
             )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".temprature").innerHTML = temp + "°C";
        document.querySelector(".image").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind-Speed : " + speed + "KM/H";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    search: function() {
        let x = document.querySelector(".search-bar").value;
        this.fetchWeather(x);
    }
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter"){
        weather.search();
    }
})
