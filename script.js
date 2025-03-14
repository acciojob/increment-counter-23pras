// Initial counter value
let count = 0;

// Get the button and counter elements
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

// Function to handle increment
function incrementCounter() {
  alert(`Current value before increment: ${count}`); // Show alert with un-incremented value
  count++; // Increment the value
  counter.innerText = count; // Update the counter value in the DOM
}

// Add event listener to the button
incrementBtn.addEventListener('click', incrementCounter);
