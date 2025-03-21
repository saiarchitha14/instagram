function log() {
    const username = document.getElementById("username").value;

    if (!validateUsername(username)) {
        alert("Username shouldn't have special characters");
        return false;
    }

    const password = document.getElementById("p").value;

    if (!validatePassword(password)) {
        return false;
    }

    alert("Log in was successful");
    return true;
}

function validateUsername(username) {
    const regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(username);
}

function validatePassword(password) {
    if (password.length > 10) {
        alert("Password shouldn't exceed 10 characters");
        return false;
    }

    const passwordRegex = /^[a-z0-9]+$/;
    if (!passwordRegex.test(password)) {
        alert("Password contains invalid characters.");
        return false;
    }

    return true;
}
