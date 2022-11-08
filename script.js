

let weather = {
    fetchApi: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=af62c7e824f77f1632ecc3bb04889cde"
        ).then((response) => response.json())
        .then((data) => this.showWeather(data));
            
    },
    showWeather: function (data) {
        const { name } = data;
        const { icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, temp, humidity, speed);
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    },
    find: function() {
        this.showWeather(document.querySelector("#search").value);
    }
    };

    document.querySelector("#button").addEventListener("click", function () {
        weather.find();
    })


