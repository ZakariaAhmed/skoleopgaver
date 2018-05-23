var names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myFilter = function (callback) {
    var resultArray = [];
    this.forEach(element => {
        if (callback(element) !== false) {
            resultArray.push(element);
        }
    });
    return resultArray;
}

Array.prototype.myMap = function (callback) {
    var resultArray = [];
    this.forEach(element => {
        resultArray.push(callback(element));
    });
    return resultArray;
}

console.log(names.myFilter(name => name.length <= 3));
console.log(names.myMap(name => name.toUpperCase()));