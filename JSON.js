const Object = '{ "name": "Chandra Sekhar Dutta", "age": 45, "Class": 12 }';
// the above line is a string which will be converted to an object with the help of JSON.parse(Object)

const User = JSON.parse(Object);

console.log(User.name);
console.log(User["age"]);
console.log(User["Class"]);

const Users = {
        "name": "Rajput Gharana",
        "age": 34,
        "class": 11
    }
    // the above line is a object which will be converted to a string with the help of JSON.stringify(Users)


const String = JSON.stringify(Users);
console.log(String);