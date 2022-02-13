const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
        console.log("sign in succesfull")
      } else {
        alert(response.statusText);
        console.log("sign in fail")
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('.nameS').value.trim();
    const email = document.querySelector('.emailS').value.trim();
    const password = document.querySelector('.passS').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#loginBtn')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#signUpBtn')
    .addEventListener('submit', signupFormHandler);
  