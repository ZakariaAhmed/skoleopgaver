var myBtn = document.getElementById("fetchHour");


 myBtn.addEventListener("click", function(){
       var promise = fetch('https://studypoints.dk/jokes/api/jokes/period/hour');
       promise.then(function (response){
           return response.json();
       }).then(function (quote){
          document.getElementById("quoteHour").innerHTML = quote.joke; 
          console.log("fired");
       });
}, false);

