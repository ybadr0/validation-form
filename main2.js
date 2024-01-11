function validate() {
    event.preventDefault(); // to stop refresh page --> the error message doesn`t disappear
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var confirm_password=document.getElementById('confirm_password').value;


    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passworderror').innerHTML = "";
    document.getElementById('confirm_passworderror').innerHTML = "";

    if (username.length<5) {
        document.getElementById('nameError').innerHTML = "Name is required";
        return false;
    }

    if (email == "") {
        document.getElementById('emailError').innerHTML = "Email is required";
        return false;
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').innerHTML = "Invalid email format";
            return false;
        }
    
    } if (password.length<7){
        document.getElementById('passworderror').innerHTML = "please enter valid password";
        return false;

    } if (confirm_password!=password){
        document.getElementById('confirm_passworderror').innerHTML = "enter the same password";
        return false;
    }

    // If everything is valid, allow form submission
    return true;
}

