//1.select everything that will be required 

const input = document.querySelector("input");
const button = document.querySelector("button");
const tasklist = document.querySelector(".list");

//2. user interaction 
const inputHandler = function (){

    //click ->text get -> add to list
    const newtask = input.value;
    if(newtask.length === 0){
        alert("please enter a task");
        return;
    }
   // alert("task"+ newtask)
/****add task****/
//element create 
const taskElememt = createTask(newtask);
  //  const taskelement = document.createElement("li"); 
//data add 
 //  taskelement.textContent = newtask;
//append to the list
  tasklist.appendChild(taskElememt);
 //clear the input field
    input.value = "";
    //ese toh code kabhi exit hi nnhi hoga
    //remove task on click se
   // taskelement.addEventListener("click",function(){
  //      taskelement.remove();
  //  });
  const Deletebtn = taskElememt.children[1];// [1]IS CHILD 
 Deletebtn.addEventListener("click",function(){
    taskElememt.remove();
  });
}


function createTask(newtask){
    const div =document.createElement("div");
    const li =document.createElement("li");
    const button =document.createElement("button");
    button.innerText="Delete";
    li.textContent = newtask;

    div.appendChild(li);
    div.appendChild(button);
    return div;
  

}
button.addEventListener("click",inputHandler);