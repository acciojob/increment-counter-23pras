let count = 0;

const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
  // Show alert with current value before increment
  alert(`Current value before increment: ${count}`);
  
  // Increment the count after alert
  count++;
  counter.textContent = count;
});
