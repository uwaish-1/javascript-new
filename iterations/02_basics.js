//  for of


// objects in array
// [{},{}]


// const arr =[1,2,3,4,5]

// for(const i of arr){
//     console.log(i);
    
// }


//  Maps

// const map = new Map()

// map.set('IN',"INDIA")
// map.set('US',"USA")
// map.set('SA',"SAUTH AFRICA")
// console.log(map);


// for(const [key,value] of map){
//     console.log(key,value);n
// }




// const myObject = {
//     'game1' : 'bgmi',
//     'game2' : 'cod'
// }


// no work
// for (const [key,value] of myObject) {
    
// }

// for (const key in myObject) {
//     console.log(`${key} ------ ${myObject[key]}`);
// }

//  for in loop use for objects


// ++++++++++++++++++



// for each

const coding = ["js","ruby","java","py"]

// callback functions -> no name
// coding.forEach( function (i) {
//     console.log(i);
    
// })


// coding.forEach( (i) => {
//     console.log(i);
    
// })



// function printMe(i){
//     console.log(i);
    
// }
// coding.forEach(printMe)


// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })


const mycoding = [
    {
        languagename: "js",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "py"
    }

]

// mycoding.forEach( (i) =>{
//     console.log(i.languagename);
    
// })


//  foreach loop don't return any value -------
// const values = mycoding.forEach( (i) => {
//         console.log(i);
//         // return i;
// })

// console.log(values);









const mynums = [1,2,3,4,5,6,7,8,9]

// const values = mynums.filter( (num) => {
//     return num>5
// })

// console.log(values);


const newNums = []

mynums.forEach( (num)=> {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);
