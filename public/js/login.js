const loginFormHandler = async (event) => {
  event.preventDefault();
  
    // Collect values from the login form
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log("login successful")
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
        console.log("login failed")
      }
    }
  };
  
  const takeSignUp = () =>{
    console.log('taking to signup page');
    document.location.replace('/signup');
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("test tes ")
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
        alert("yes")
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.getElementById("login").addEventListener("click", loginFormHandler);
  // document
  //   .querySelector('#login')
  //   .addEventListener('button', loginFormHandler);
  document.getElementById("signUpBtn").addEventListener("click", takeSignUp);
  // document
  //   .querySelector('#signUpBtn')
  //   .addEventListener('button', signupFormHandler);
  