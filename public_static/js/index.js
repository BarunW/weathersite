

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
            
        
        
       
        
      
    })




// let s = locationObject["city"];


