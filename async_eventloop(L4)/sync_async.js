//synchronous:the code that is executed line by line 
console.log("before");
setTimeout(fn,1000);//2 seconds 

function fn(){
    console.log(" i am function");
}
console.log("after");
//asynchronous :the code that is not executed line by line 
//example :callbacks ,promises ,async await