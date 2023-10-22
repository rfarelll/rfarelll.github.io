function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorElement = document.getElementById("error");

    errorElement.innerHTML = "";

    if (name === "") {
        errorElement.innerHTML += "Name is required<br>";
    }

    if (email === "") {
        errorElement.innerHTML += "Email is required<br>";
    } else {

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            errorElement.innerHTML += "Invalid email address<br>";
        }
    }

    if (message === "") {
        errorElement.innerHTML += "Message is required<br>";
    }


    if (errorElement.innerHTML !== "") {
        return false;
    }
}