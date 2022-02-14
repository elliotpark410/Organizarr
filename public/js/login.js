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

  
  
  document.getElementById("login").addEventListener("click", loginFormHandler);
 
  document.getElementById("signUpBtn").addEventListener("click", takeSignUp);

  
  // carousel js
var myCarousel = document.querySelector('##carouselProjects')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  wrap: false
})