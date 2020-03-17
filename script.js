const DWDailyWeather = (function(){
    const date = new Date();
    let day;
    let month;
    let time;

    function init(){
        getWeather("Charlotte,NorthCarolina");
        todaysDay();
        currentMonth();
        currentTime();
        setInterval(currentTime, 600);
        $("#dateText").html("<h6>" + day + "</h6>\n<h4>" + month + " " + date.getDate() + "</h4>");
    }

    function getWeather(place){
        const APIKey = "166a433c57516f51dfab1f7edaed8413";
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial&appid=" + APIKey;
    
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
    
            console.log(queryURL);
            console.log(response);
            $("#tempText").text(Math.round(response.main.temp) + "°F");
            $("#weatherText").text(response.weather[0].description);
    

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
        let currentHours = date.getHours();
        let currentMins = date.getMinutes();
        let nonMilitary = currentHours > 12 ? currentHours - 12 : currentHours;
        let ampm = currentHours >= 12 ? "pm" : "am";
        time = nonMilitary + ":" + currentMins + " " + ampm;
        $("#timeText").empty();
        $("#timeText").html("<h1>" + time + "</h1>");
    }

    return {
        init: init
    }
})();

$(function(){
    DWDailyWeather.init();
});