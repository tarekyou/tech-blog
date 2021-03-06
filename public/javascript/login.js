async function signupFormHandler(event) {
    event.preventDefault();
    

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();



    if (username &&  password) {
      try{
        const response = await fetch('/api/users', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });
        // console.log(response);
    
              // check the response status
              if (response.ok) {
                document.location.replace('/dashboard/');
              } else {
                alert(response.statusText);
              }
            } catch(err){
              alert('duplicate user')
            }
      }
}
  
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);


async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
}
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);