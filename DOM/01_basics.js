// innertext --->>> 
// innertextcontent --->>> pura content milta h

// innerhtml -->>> full values like ,span,style

// document.getElementById('title')
// document.queryselector('h1')
// document.querySelector('input[type = "password"]')
// document.queryselector('p:first child')


// const myul = document.querySelector('ul')
// myul.querySelector('li')

// const turngreen = myul.querySelector('li')
// turngreen.style.backgroundColor = "green"

// console.log('hello');
// alert('hi')

// ++++++++++++++++++++++

// window object -->> created by browser
// console.log is also a part of window objext
// window.console.log()
//  window objct represents an open window in a browser..
// it is a global object with lots of properties and methods

// +++++++++++++



// DOCUMENT OBJECT MODEL


// console.log -->> print
// console.dir --->> document -> objects,prop,methods


// console.dir(window);
// console.log(document.body);
// console.log(document.head);


// document.body.style.background = "green"

// document.body.childNodes[1].innerText = "abcd";



// +++++++++++++++++++

// id =>> document.getelementbyid("")
// by cls==>> document.getelementsbyclass("")
// tag ==>> document.getElementsByTagName("")





// let para = document.getElementById('para1');
// console.log(para);



// let headings = document.getElementsByClassName('heading')
// console.log(headings);
// if not present -->>> otuput -- empty html collection


// let para = document.getElementsByTagName('p')
// console.log(para);
// if not present -->> output -- null



// let firstelement = document.querySelector("p")
// console.dir(firstelement)

// let allelements = document.querySelectorAll(".heading")
// console.log(allelements);


// +++++++++++++++++++++++++

// properties ------->>>

//  1. tagname -> return tag for elements node
// 2.innertext : returns the text content of the element nd all its children
//  3.innerHTML->returns the plain text or html contents in the elemnt
// 4.textcontent -> returns textual content even for hidden elements


// some more properties---->>>>>>>> firstchild .. lastchild

// let child = document.querySelector('div').children
// console.log(child);


// text , comment, element

// innertext -> only text related documents
// innerhtml -> html contents also with textual like tags

// texthidden -> shows hidden content also...like  with visibility proprty :hidden



// (


// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText = "new unique value 1"
// let idx = 1;
// for(div of divs){
//     console.log(div.innerText);
//     div.innerText = `new unique value ${idx}`
//     idx++
// }


// )





// getattribute

// let div = document.querySelector("div")
// let id = div.getAttribute("id")
// console.log(id);

// let id2 = div.getAttribute("name")
// console.log(id2);

// let para = document.querySelector("p")
// console.log(para.getAttribute("class"));


// setattribute

// let para = document.querySelector("p")
// console.log(para.setAttribute("class","newclass"));


// style

// let div = document.querySelector("div")
// console.log(div.style);

// div.style.backgroundColor = "green"
// div.style.fontSize = "26px"
// div.style.visibility = "hidden"


// insert elements
// 1. node.append(el) --->> adds at the end of node(inside)
// 2. node.prepend(el)-->>> adds at the start of the node(inside)
// 3. node.before(el) --->>> adds before the node(outside)
// 4.node.after(el) =-->> adds after the node(outside)


// delete element
// node.remove() -->> removes the node

// create new element
//  let el = document.createElement("div")


let newBtn = document.createElement("button")
newBtn.innerText = "clicke me!"
console.log(newBtn);
let div = document.querySelector("div")
div.append(newBtn)

// let newheading = document.createElement("h1");
// newheading.innerHTML = "HI"
// document.querySelector("body").prepend(newheading)

// para.remove();


// 1. appendchild() ....... 2. removechild()
//  classlist
// div.classList.add("another class")