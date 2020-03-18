const DWDailyWeather = (function(){
    const pics = ["cloud", "cloud-showers-heavy", "cloud-sun", "cloud-moon", "braille", "sun", "moon"];
    let date;
    let day;
    let month;
    let weatherBroad;
    let weatherDescription;
    let currentTemp;
    let highTemp;
    let lowTemp;
    let timeFunc;

    function init(){
        currentTime();
        getWeather("Charlotte,NorthCarolina");
        todaysDay();
        currentMonth();
        timeFunc = setInterval(currentTime, 3000);
        $("#dateText").html("<h6>" + day + "</h6>\n<h4>" + month + " " + date.getDate() + "</h4>");
    }

    function getWeather(place){
        const APIKey = "166a433c57516f51dfab1f7edaed8413";
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial&appid=" + APIKey;
    
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            currentTemp = Math.round(response.main.temp);
            highTemp = response.main.temp_max;
            lowTemp = response.main.temp_min;
            weatherDescription = (response.weather[0].description).toUpperCase();
            weatherBroad = response.weather[0].main;
            weatherPic = weatherBroad === "Clouds" ? pics[0] : weatherBroad === "Rain" ? pics[1] : weatherBroad === "Mist" ? pics[4] : 
                weatherBroad === "Clear" ? pics[5] : pics[2];

            if (date.getHours() < 6 || date.getHours() > 19){
                if (weatherPic === "cloud-sun"){
                    weatherPic = "cloud-moon";
                } else if (weatherPic === "sun"){
                    weatherPic = "moon";
                }
            };
            

            $("#tempText").html("<span id='tempTextTop'>Current Temperature</span>\n<h1>" + currentTemp + "°F</h1>");
            $("#weatherText").text(weatherDescription);
            $("#weatherPic").html("<h1><span class='fas fa-" + weatherPic + "'></span></h1>");

            console.log(queryURL);
            console.log(response);
          });
    }

    function todaysDay(){
        let dayOfWeek = date.getDay();
        day = dayOfWeek === 1 ? "Monday" : dayOfWeek === 2 ? "Tuesday" : dayOfWeek === 3 ? "Wednesday" : dayOfWeek === 4 ? "Thursday" :
            dayOfWeek === 5 ? "Friday" : dayOfWeek === 6 ? "Saturday" : "Sunday";
    }

    function currentMonth(){
        let currentMonth = date.getMonth();
        month = currentMonth === 1 ? "February" : currentMonth === 2 ? "March" : currentMonth === 3 ? "April" : currentMonth === 4 ? "May" :
            currentMonth === 5 ? "June" : currentMonth === 6 ? "July" : currentMonth === 7 ? "August" : currentMonth === 8 ? "September" :
            currentMonth === 9 ? "October" : currentMonth === 10 ? "November" : currentMonth === 11 ? "December" : "January";
    }

    function currentTime(){
        date = new Date();
        let currentHours = date.getHours();
        let currentMins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        let nonMilitary = currentHours > 12 ? currentHours - 12 : currentHours;
        let ampm = currentHours >= 12 ? "pm" : "am";
        let time = nonMilitary + ":" + currentMins + " " + ampm;
        $("#timeText").empty();
        $("#timeText").append("<h1>" + time + "</h1>");
    }

    return {
        init: init
    }
})();

$(function(){
    DWDailyWeather.init();
});