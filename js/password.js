const validPasswords = ["hello", "hi", "pw", "123456789", "password", "yenah", "jason", "gavin", "yippee"];


function validateLogin(event) {
    event.preventDefault();

    // get username & password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let loginForm = document.getElementById('login-form');
    let usernameOutput = document.getElementById('user-email');

    // check password
    if (validPasswords.includes(password)) {
        loginForm.classList.remove('d-flex');
        loginForm.classList.add('d-none');
        usernameOutput.innerHTML = "Welcome, " + username + "!";
    } else {
        // if incorrect, display error
        alert('Incorrect password. Please try again.');
    }
}

// Attach the validateLogin function to the form submit event
document.getElementById('login-form').addEventListener('submit', validateLogin);
