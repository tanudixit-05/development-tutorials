const button = document.querySelector('button');
const box = document.querySelector('.box');

//button.onclick = function() {
  //  alert('You clicked the button!');
//}
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
let i =0;
button.addEventListener('click', function() {
    i=i%(colors.length);
    box.style.backgroundColor = colors[i];
    i++;
});