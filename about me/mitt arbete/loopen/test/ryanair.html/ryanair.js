//let loggedIn = true;
let username = document.getElementById("username");
let password = document.getElementById("password");

document.getElementById('myButton').addEventListener('click', function() {
    let user = username.value.trim();
    let pass = password.value.trim();

    if (user.length >= 2 && pass.length >= 2) {
        console.log('User is logged in');
        this.textContent = 'Congratulations, you are logged in!';
    } if (user.length === 1) {
        console.log('Username is too short');
        this.textContent = 'Username must be at least 2 characters long.';
    } if (pass.length === 1) {
        console.log('Password is too short');
        this.textContent = 'Password must be at least 2 characters long.';
    }else {
        console.log('User is not logged in');
        this.textContent = 'Please enter a valid username and password.';
    }
});