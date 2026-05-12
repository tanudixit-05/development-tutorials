// Get the button and paragraph elements
const button = document.getElementById("counter-btn");
const display = document.getElementById("count-display");

// Initialize count
let count = 0;

// Add click event listener
button.addEventListener("click", () => {
  count++; // increment the count
  display.textContent = count; // update the paragraph
});
