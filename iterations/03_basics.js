const mynums = [1,2,3,4,5,6,7,8,9]

// const newNums = mycoding.map( (num) => num + 10)
// console.log(newNums);

// const newNums = mynums
//                 .map((num) => num*10)
//                 .map((num) => num + 1)
// console.log(newNums);


//  ++++++++++++++++++++

//  reduce --------

const array1 = [1,2,3,4]

const inititalValue = 0;

// const sum = array1.reduce( 
//     (accumulator,currentvalue) => accumulator + currentvalue,inititalValue

// );
// console.log(sum);


// const sum = array1.reduce( function
//     (accumulator,currentvalue) {
//     return accumulator + currentvalue
// },0)
// console.log(sum);


const mytotal = mynums.reduce((acc,curr) => acc+ curr,0)
console.log(mytotal);
