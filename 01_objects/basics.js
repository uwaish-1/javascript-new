// singleton
// object.create

// object literals
const mySym = Symbol("key1")


const jsUser ={
    name: "uwaish",
    [mySym]: "mykey1",
    age: 21,
    location: "mzn",
    email: "uwaish@gmail.com"
}
// 1st method to access object --->>> not used as much
// console.log(jsUser.email);

// 2nd method by using square brackets
// console.log(jsUser["email"])

// console.log(jsUser[mySym])


// jsUser.email = "gaur@gmail.com"

// to freeze -->> so that value do not chnge
// Object.freeze(jsUser)
// jsUser.email ="gaur@gmail.com"
// console.log(jsUser);


// adding functions ====>>>> functions treat as variables in js
jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

