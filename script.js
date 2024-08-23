const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const message = document.getElementById('message');

emailForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    message.textContent = 'Email is valid';
    message.style.color = 'green';
  } else {
    message.textContent = 'Please enter a valid email';
    message.style.color = 'red';
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}