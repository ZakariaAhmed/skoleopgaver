var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

function myFilter(array, callback){
    return callback(array);
}

function callbackFilter(arr){
    var resultArray = [];
    
    arr.forEach(element => {
       if (element.length <= 3){
           resultArray.push(element);
       } 
    });
    return resultArray;
}

//console.log(myFilter(names, callbackFilter));



function myMap(array, callback){
    return callback(array);
}

function myMapMapper(arr){
    var resultArray = [];
    arr.forEach(element => {
        var tempName = element.toUpperCase();
        resultArray.push(tempName);
    });
    return resultArray;
}

console.log(myMap(names, myMapMapper));