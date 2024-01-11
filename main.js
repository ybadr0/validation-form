function formvalidate(){
    event.preventDefault();
    var email= document.getElementById("email").value; //yousef@gmail.com
    var password = document.getElementById("password").value;
     var error = document.getElementById("error"); // بدل ما نقعد نكتبها كل شويه
   

      if (email == "") {
            error.innerHTML = "Email is required";
            return false;
      } else {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                error.innerHTML = "Invalid email format";
                return false;
            }
      } if (password==""||password.length<7){
        error.innerHTML = "please enter valid password";
        return false;
      }
    
        alert("done");
        return true;

    
      
     }
