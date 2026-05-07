/*console.log("stack and heap memory");
 //valjue type->ram(stack memory)
 let a =10;
 let str = "hello";
 let flag = true;
  //refrence type->heap memory
 //reference type = array,function
    let arr = [1,2,3,4];

let a =10;
a=20;
let str = "hello";
str = "hi";
console.log(a,str);
let arr = [10,20,30,];
let arr2 = [30,40,50];
arr=arr2 //arr2 and arr both are refrencing to same array in heap memory
console.log(arr);


//const keyword: it is used to declare a variable whose value cannot be changed
*/

let a =10;
console.log(a);
function fn(){
    console.log("function called");
    function inner(){
        console.log("inner function called");
    }
    inner();
}
fn();
console.log(a);
// js -> all the code  is executed on call stack 
//AN EXECUTION CONTEXT IS CREATED
// when  A function is called
//execution context -> it executes in two phases
//1. memory allocation phase->hoisting
//a.)variable ->undefined 
//b.)function -> memory allocation in the heap memory
//c.)this, window, outer scope
//2. code execution phase
//global execution context is created
//global ec is created when js file is loaded in browser

let b ;
console.log(b);
b=20;
console.log(b);

//do example from copy (memory allocation one )

console.log(window);
//window is the global object in the browser
//in node ->global

