var lastTargetId = "NONE";

function getApiCall(targetId) {
    var APIURL = "https://restcountries.eu/rest/v1/alpha?codes=";
    if (targetId.length <= 2) {
        APIURL += targetId;
    } else {
        APIURL += targetId.substring(0, targetId.indexOf('-'));
    }
    return APIURL;
}

function setInfoToDiv(country) {
    var borders;
    if (country[0].borders.length === 0) {
        borders = "No-one";
    } else {
        borders = country[0].borders.join(", ");
    }
    return "<p>"
            + "Country: " + country[0].name
            + "<br/>Population: " + country[0].population
            + "<br/>Area: " + country[0].area
            + "<br/>Borders: " + borders
            + "<br/>"
            + "</p>";
}


if (document.addEventListener){
    document.addEventListener("click", function(event){
        var targetId = event.target.id;
        var targetPos = document.getElementById(event.target.id);
        
        if (targetPos.style.fill === "rgb(192, 192, 192)"){
                var targetId = event.target.id;
                if (lastTargetId !== "NONE") {
                    document.getElementById(lastTargetId).style.fill = "rgb(192, 192, 192)";
                }
                lastTargetId = targetId;
                document.getElementById(targetId).style.fill = "red";
                
                var myHeaders = new Headers();
                myHeaders.set('Content-Type', 'application/json');
                myHeaders.append("X-Custom-Header", "getApiInfo");
                var str = getApiCall(targetId);
                var data = JSON.stringify(str);


                var promise = fetch("WebProxyServlet", {
                    method: "POST",
                    headers: myHeaders,
                    body: data
                });
                
                
                promise.then(function (response) {
                    return response.json();
                }).then(function (country) {
                    document.getElementById("infoList").innerHTML = setInfoToDiv(country).toString();
                });
                
                
        } else {
          
            targetPos.style.fill = "rgb(192, 192, 192)";
            document.getElementById("infoList").innerHTML = "";
        }
        
    });
} 

// #c0c0c0