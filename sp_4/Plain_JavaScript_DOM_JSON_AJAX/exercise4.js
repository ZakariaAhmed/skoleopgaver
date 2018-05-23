var names = ['Lars', 'Peter', 'Jan', 'Bo'];
var listNames = '<ul>' + onlyNames.map(name => '<li>' + name + '</li>').join('') + '</ul>';


// reducer join to a string
var all = ["Lars", "Peter", "Jan", "Bo"];
var strJoined = all.join(', ');
console.log(strJoined);


