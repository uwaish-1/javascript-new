const name = "hitesh"
const repocount = 50

// console.log(name + repocount + "Value");

console.log(`hello my name is ${name} and my repocount is ${repocount}`);


// ++++++++++++++++++++

const gamename = new String('rider')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('d'));


const newstring = gamename.substring(0,4)
console.log((newstring));


const anotherstring = gamename.slice(-4,4)
console.log(anotherstring);


const newstringone = "  uwaish  "
console.log(newstringone);
console.log(newstringone.trim());


 const url = "https://uwaish.com/uwaish%20"

 console.log(url.replace('%20', '-'))

console.log(url.includes('uwaish'));

