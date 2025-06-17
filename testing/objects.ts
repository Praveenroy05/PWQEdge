// Objects - Object are collection of key-value pair inside  {} - {key: value}

// Literal Object
// Using class


// Literal Object
// Syntax
// let obj : {datatype}  = { key : value, function :Function}

let person = {
    name: "Rahul",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
        },
}


// 1. object.key - return the value specific to the key
// 2. object["key"] - return the value specific to the key


console.log(person.name);
console.log(person.address.city);

console.log(person["age"]);

let abc = [1,2,3,4]

// for .. in loop - 

// Syntax:
// for (const item in object) {...}   

for(let key in person){
    console.log(key, " : ", person[key]);
}
