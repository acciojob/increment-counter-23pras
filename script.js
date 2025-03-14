let count = 0;

const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
  // Display the alert with the current count before incrementing
  alert(`Current value before increment: ${count}`);
  
  // Increment after showing the alert
  count++;
  counter.textContent = count;
});
