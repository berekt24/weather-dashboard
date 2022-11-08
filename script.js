

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
        this.fetchApi(document.querySelector("#search").value);
    }

    
    };
    function getDays () {
        const city = document.getElementById("search");
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&units=imperial&appid=af62c7e824f77f1632ecc3bb04889cde")
    .then(response => response.json())
    .then(data =>{
        for(i=0; i<5; i++){
            document.querySelector(".day" + (i+1) + ".temp-card").innerHTML = "Temp: " + Number(data.list[i].main.temp -75.54).toFixed(1) + "°F";
        }
        for(i=0; i<5; i++){
            document.querySelector(".day" + (i+1) + ".wind-card").innerHTML = "Wind speed: " + Number(data.list[i].wind.speed -21.61).toFixed(1) + "km/h";
        }
        for(i=0; i<5; i++){
            document.querySelector(".day" + (i+1) + ".humidity-card").innerHTML = "Humidity: " + Number(data.list[i].main.humidity -86) + "%";
        }
    })
    }

    // const days = new Date();
    // const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    // function Checkday(day){
    //     if (day +days.getDay() > 6) {
    //         return day +days.getDay()-7;
    //     } else {
    //         return day +days.getDay();
    //     }
    //     for (i=0; i<5; i++) {
    //         document.querySelector
    //     }
    // }

    
    document.querySelector("#button").addEventListener("click", function () {
        weather.find();
        getDays();
    })


