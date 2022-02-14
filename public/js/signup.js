const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log("test test ")
    const name = document.querySelector('.nameS').value.trim();
    const email = document.querySelector('.emailS').value.trim();
    const password = document.querySelector('.passS').value.trim();
    console.log(`saved ${name}`);
    if (name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(`saved ${email}`);
      if (response.ok) {
        document.location.replace('/dashboard');
        alert("yes")
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.getElementById("signup").addEventListener("click", signupFormHandler);