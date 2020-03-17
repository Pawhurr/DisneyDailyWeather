const DWDailyWeather = (function(){
    function init(){
        getWeather("Charlotte,NorthCarolina");
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

    return {
        init: init
    }
})();

$(function(){
    DWDailyWeather.init();
});