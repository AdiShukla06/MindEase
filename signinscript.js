const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  
  // Perform validation
  if (email === '' || password === '') {
    const errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.textContent = 'Please enter a valid email and password.';
    form.appendChild(errorElement);
    return;
  }
  
  // Send login request to server
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Invalid email or password.');
    }
    return response.json();
  })
  .then(data => {
    // Redirect to dashboard page
    window.location.href = '/dashboard';
  })
  .catch(error => {
    const errorElement = document.createElement('p');
    errorElement.className = 'error';
    errorElement.textContent = error.message;
    form.appendChild(errorElement);
  });
});

