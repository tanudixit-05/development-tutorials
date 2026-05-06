// nonprimitive =>functions ,arrays ,objects

// Creating an Empty Object
let obj = {};

// Adding Key-Value Pairs
obj.name = "Jasbir";
obj.age = 28;
//Updating Values
obj.age = 25;
// Printing an Object
console.log(obj);

// object :key value pair
// key :string
// value :any js data type 

let cap ={
     firstName:"Steve",
        lastName:"Rogers",
        movies:["First Avenger","Winter Soldier","Civil War"],
        address: {
            state:"new york",
            district:"Manhattan"

        },
        isAvenger:true,
        age:35,
        sayHi :function(){
            console.log("Cap say's Hi");
        }   
}
//print 
console.log(cap);
//get 

console.log( "first name",cap.firstName);
console.log("second movie is ",cap.movies[1]);
console.log("state",cap.address.state);

//update\
cap.isAvenger=false;
cap.friends=["Natasha","Tony","Bruce"];
console.log("=================")
console.log(cap);
//delete 
delete cap.movies;
console.log("after deleting movies");
console.log(cap);



//looping through an objects 
for (let key in cap) {
console.log("key:", key, "value:", cap[key]);
}