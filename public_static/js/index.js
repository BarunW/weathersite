const hours = new Date().getHours()
const isDayTime = (hours > 5 && hours < 19 ? true : false);
console.log(hours);
if(isDayTime === true){
    console.log("day");
    document.querySelector(".sub-layout-one").style.backgroundImage = "url('/images/day.jpg')";
    document.querySelector(".sl-childSix-toogle").style.backgroundImage = "url('/images/sunny.png')";
}



fetch('js/weather.json')
    .then(function (response){
        return response.json()
    })
    .then(function(data){
        let dayCode = "";
        let dayHigh = "";
        let dayLow = "";
        if("title" in data["query"].results["channel"].item){
            let s= `${data["query"].results["channel"].item["title"]}`;
            document.querySelector(".location-heading").innerHTML = s;
    
        }
        if("condition" in data["query"].results["channel"].item){
            dayCode = data["query"].results["channel"].item["condition"].code
            document.querySelector(".sl-childTwo-currentTemp").innerHTML = `${data["query"].results["channel"].item["condition"].temp}&#176;`;
            document.querySelector(".sl-childThree-weatherCondition").innerHTML = `${data["query"].results["channel"].item["condition"].text}`
        }

   
        data["query"].results["channel"].item["forecast"].forEach(element => {
            if(element["code"] == dayCode){
                dayHigh = element["high"];
                dayLow  = element["low"];
            };
        });

        document.querySelector(".sl-childFour-dayHigh").innerHTML = `Day ${dayHigh}&#176;`;
        document.querySelector(".sl-childFive-nightLow").innerHTML = `Night ${dayLow}&#176;`;

        document.querySelector(".high-low").innerHTML = `${dayHigh}&#176; / ${dayLow}&#176;`;
        document.querySelector(".wind").innerHTML =`${data["query"].results["channel"].wind["speed"]} mph`;
        document.querySelector(".humidity").innerHTML = `${data["query"].results["channel"].atmosphere["humidity"]}`;
        document.querySelector(".visibility").innerHTML =`${data["query"].results["channel"].atmosphere["visibility"]}`;
        document.querySelector(".pressure").innerHTML = `${data["query"].results["channel"].atmosphere["pressure"]} in`;
        
        
       document.querySelector(".weather-feelsLike").innerHTML = `${data["query"].results["channel"].item["condition"].temp}&#176;`;
        
      
    })




// let s = locationObject["city"];


