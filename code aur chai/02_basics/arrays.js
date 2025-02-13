// array 


const arr = [0,1,3,true,"uwaish"]

// shallow copy - changes also reflect in main array
// deep copy - changes do not reflect in main array

console.log(arr[0]);

// 2nd method

const arr2 = new Array(1, 2 , 3 , 4)
console.log(arr[0]);

// array methods

// 1.
arr.push(6)
arr.push(7)
console.log(arr);

// 2.pop
arr.pop()
console.log(arr);

console.log(arr.indexOf(3));


// 

const newarr = arr.join()

console.log(arr);
console.log(newarr);

//  slice, splice  

console.log("A" , arr);

const myn1 = arr.slice(1,3)
console.log(myn1);

console.log("B" , arr);


const myn2 = arr.splice(1 , 3)
console.log("C" , arr);
console.log(myn2);










