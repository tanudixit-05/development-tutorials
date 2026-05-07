console.log("inside intro.js");
console.log("This is a simple JavaScript file.");

let varchar;
console.log(varchar);
varchar = "Hello, World!";
console.log(varchar); 
let e= undefined;
e=e+5;
console.log(e);           //NaN not a number(edge case)


//conditional statements
let number= 10;
if(number % 2 ==0){
    console.log("even number");
}else{
    console.log("odd number");
}

let day= "wednesday";
//else if ladder
if(day=="monday"){
    console.log("working day");
} else if(day=="tuesday"||day=="wednesday"||day=="thursday"||day=="friday")
    {
        console.log("today is an off")
    }else if(day=="saturday"||day=="sunday"){
        console.log("weekend");
    }else {
        console.log("invalid day");
    }
    //same thing using switch case
   switch(day){ 
    case "tuesday":
   console.log("today is an off");
   break;     
   case "monday":
    case "wednesday":
    case "thursday":
    case "friday":  
    console.log("working day"); 
    break;
    case "saturday":
    case "sunday":
   console.log("weekend");
   break;
   default: 
   console.log("invalid day");
   break;
   }

for(let i=1;i<=5;i++){
    console.log(i);
}
//practice problem

let target= 20;
for(let i=1;i<=target;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(i);
    }}

//functions=reusable block of code created to perform a specific task
console.log("hello");
function fn (){
    console.log("i am a function");
}
console.log("bye");
fn(); //function call or invocation
//input in functions
function fn(a,b) {
   // console.log("a",a);
   // console.log("b",b);
   let d =a+b;
   
    return d;
}
let sumResult =fn(10,20);
console.log("result",sumResult);
//fn(100,200);                                                
//fn(1); //b will be undefined
//fn(); //both a and b will be undefined


//strings and its methods in js
let str1= "Hello, World!";
let str2= 'Hello, World!';
let str3= `i am also a string 
but i can span multiple lines`;
console.log(str1);
console.log(str2);
console.log(str3);

//concatenation in js= appending a value to a string
function greet(firstName){
   console.log("Hi" + firstName +"!");
    console.log('Hi' + firstName +'!');
    console.log(`Hi ${firstName}!`); //template literal
}
    let firstName= "John";
greet(firstName);

//ARRAYS IN JS
let arr = [1,2,3,4,5];
console.log(arr);
//itreating an array\
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

/* **********IMPORTANT METHODS************** */

//push()= add an element at the end of the array
arr.push(6);
console.log(arr);
//pop()= removes the last element from the array
arr.pop();
console.log(arr);
//shift()= removes the first element from the array
arr.shift();
console.log(arr);
//unshift()= adds an element at the beginning of the array
arr.unshift(9);
console.log(arr);  
//slice()= returns a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array
let newArr= arr.slice(1,4);
console.log(newArr);
console.log(arr); //original array remains unchanged
//splice()= changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
arr.splice(1,2);
console.log(arr);
//indexOf()= returns the first index at which a given element can be found in the array, or -1 if it is not present
let index= arr.indexOf(5);
console.log(index);
//includes()= determines whether an array includes a certain value among its entries, returning true or false as appropriate
let isPresent= arr.includes(4);
console.log(isPresent);

//join()= creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
let str= arr.join("+");
console.log(str);

//question (it will only work when the above methods are commented)
/*
function advanceManipulation(words){
    let firstWord= words.shift();
    words.unshift("new");
   words.unshift(firstWord);
//remove 
words.splice(2,1);

//join
let joinedstr= words.join("-");
return joinedstr;
}
let words= ["hello","world","this","is","javascript"];
let result =advanceManipulation(words); //["HELLO","WORLD","THIS","IS","JAVASCRIPT"]  
console.log(result);
*/



