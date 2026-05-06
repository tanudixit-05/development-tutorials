/** rules 
1. everyline of code that you wrote in js file ->will only execute in call stack
2. for the callback coming from web api to execute -> callback should be 
empty in call stack
3.callback queue : as soon as the task of asynchronous function is
done there cb is immediately enqueued in that  queue
4. event loop : checks the same queue  and as soon as a cb arrived in the queue it continously  check if call stack is 
empty or not and pushed that cb in call stack
**/

let a = true ;
console.log("before ");
function fn (){
    a= false;
    console.log("i broke the while loop ");
}
setTimeout(fn, 1000);
console.log("after ");

let currentPlus6sec = Date.now() + 6000;
while(Date.now() < currentPlus6sec){

}
/*******************************************************/


console.log ("before");
function a(){
    console.log("i am a");

}
function b(){
    console.log("i am b");
}

setTimeout(a, 0);
console.log("after st 0sec  call")
setTimeout(a,1000);
console.log("after st 1sec  call")
setTimeout(b,2000);
console.log("after st 2sec  call")
console.log("after");
