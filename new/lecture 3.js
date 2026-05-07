console.log("hello JS");
//variable scope
/*
let a = 10;
console.log("console 1", a);
function fn() {
let a = 20;
console.log("console 2", a);
a++;
console.log("console 3", a);
}
fn();
console.log("console 4", a);*/

//let->block scope
//if (true) {
//  let x = 10;
  //console.log(x); // ✅ works
//}
//console.log(x); // ❌ Error
/*
let a =10;
console.log("console 1", a);
function fn() {
let a = 20;
  console.log("console 2", a);
  a++;
  console.log("console 3", a);

if (a){
  let a = 30;
  a++;
  console.log("console 4", a);
}
  console.log("console 5", a);

}
fn();
console.log("console 6", a);
*/

/***
* EC :
* a.creation
* 1. global code
* -> access to it's own variable and function
* -> Hositing
* var -> undefined
* function -> memory
*
* 2. function code
* -> access to it's own variable and function
* -> Hositing
* var -> undefined
* function -> memory
* -> window object
* -> outer scope
* b.) execute
* *
In JS outer scope is defined by function defintion . In code the place where you have
function definition you will check for outer variable from there that is why outer
scope is also known as lexically scope
let a = 10;
console.log("value of a in global", a); // output : 10
function outer() {
console.log("value of a in outer", a); // outpu: 10 (from outer
scope)
function inner() {
let a = 20;
console.log("value of a in inner", a); // output : 20, from
current variables of inner
}
inner();
}
outer();
console.log("value of a in global", a); // output : 10
*/
let varName = 10;
// function definition
function a() {
console.log("inside ", varName); //10 because of function definition
//determines the outer scope
}
function b() {
let varName = 20;
console.log("value of varName in b", varName);
// function call
a();
console.log("value of varName in b again", varName);
}
b();



function x() {
  console.log("hello");
  };
  x();// func value will print
  console.log( x);// full function will print 



