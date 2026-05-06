console.log("Hello functions ");

// Function statement 
function fn(a){
    console.log("i am a fn ",a);
    return 10;
}
const rVal = fn("hello");// rval= return value 
 console.log("rVal ",rVal);


//function expression  
const refFunction = function(){
    console.log("i am a refFunction");

}
refFunction();

//arrow function or also called lambda function in some languages

const arrowFn = () =>{ //we dont have to write function keyword
    console.log("i am an arrow function");
}
arrowFn();
//immediate invoked function expression 
(function(){
    console.log("i am an IIFE");
} )();//we have to put the function in paranthesis and then call it using () at the end



