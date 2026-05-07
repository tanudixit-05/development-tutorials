//console.log(" hi dom");
// read the content of p tag\
//1. select the element first 

//html inside the second child 
/*console.log(document.children);
const html = document.children[0];
const body = html.children[1];

console.log("innerHTML",body.innerHTML);
*/
//query selector->selector -> first matching element return 
// const body =document.querySelector("body");
// console.log(body.innerhtml);
// const pTag = document.querySelector("p");
// console.log("content inside p:",pTag.textContent);
// const ptagArr= document.querySelectorAll("p");
// const textData=ptagArr[1].textContent;

//class
const classPtag = document.querySelector(".first");
console.log("first",classPtag.textContent);

//id
const idPtag = document.querySelector("#unique");
console.log("second",idPtag.textContent);

//update 
idPtag.textContent="i was updated by js";

//styling 
console.log(idPtag.style);
idPtag.style.color="red";

 const idvalue = idPtag.getAttribute("id");
 console.log("id value:",idvalue);

 //delete 

 idPtag.remove();

 //creation 
 const liElem=  document.createElement("li");
 //add text ,styling or properties
 liElem.innerText="i am a task";
// select there parent element
    const ulArr = document.querySelectorAll(".list");

    //append to that 
    ulArr[1].appendChild(liElem);
      