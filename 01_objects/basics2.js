// const tinderUser = new Object() -->> singleton object

// non-singleton object
const tinderUser ={}

tinderUser.id ="12abc"
tinderUser.name = "uwaish"
tinderUser.isloggedin = false

// console.log(tinderUser);

//  object inside object
const regularuser = {
    email: "uwaish@gmail.com",
    fullname: {
        userfullname:{
            firstname: "uwaish",
            lastname: "gaur"
        }
    }
}

// accessing --->>
// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// joining
// {} -->> target (empty array) 
// all ojects are source
//  { {} -> trget , (obj1,obj2,obj4) -->> source}

// const obj3 = Object.assign({}, obj1 , obj2)
// console.log(obj3);

// another method for join
// const obj3 = {...obj1,...obj2}
// console.log(obj3);



// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log((tinderUser.hasOwnProperty('isloggedin')));



const course = {
    coursename: "js ",
    price: "999",
    courseinstructor: "uwaish"
}

const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);

