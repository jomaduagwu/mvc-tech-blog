const signupFormHandler = async (event) => {
    event.preventDefault();
  
    console.log('sign up!');

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      console.log(response);

      if (response.ok) {
        console.log(response);
        document.location.replace('/dashboard');
      } else {
        const errorMessage = await response.json(); // Log the response body
        console.log(errorMessage);

        if (errorMessage.errors && errorMessage.errors.length > 0) {
          const errorMessages = errorMessage.errors.map((error) => error.message);
          const errorMessageString = errorMessages.join('\n');
          alert(errorMessageString);
        } else {
          alert(response.statusText);
        }
      }
    }
  };

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
