function login(){
    var username=document.getElementById("input_username");
    var email=document.getElementById("input_email");
    var password=document.getElementById("input_password");
    var confirm_password=document.getElementById("input_confirm_password");
    var username_regex= /^[a-zA-Z]{6}[0-9]{2,}$/;
    var email_regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password_regex=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=\[{\]}\|:;\"'<,>.?/])(?!.*\s).{8,}$/;
    if((username.value.trim()=="") || (email.value.trim()=="") || (password.value.trim()=="") || (confirm_password.value.trim()=="") ){
        window.alert("Fields shouldnot be left empty");
    }
    else{
        if(password.value.trim()==confirm_password.value.trim()){
            if(username_regex.test(username.value.trim())){
                if(email_regex.test(email.value.trim())){
                    if( (password_regex.test(password.value.trim())) && (password_regex.test(confirm_password.value.trim()))){
                        window.alert("User Successfully Registered")
                    }
                    else{
                        window.alert("Password should have atleast 8 characters. One capital letter, one number and one special character is must")
                    }

                }else{
                    window.alert("email not written properly");
                }
            }
            else{
                window.alert("username should have at least 8 characters. First 6 characters should be numbers followed by numbers. Special characters are not allowed");
                return false;
            }

        }
        else{
            window.alert("passwords are not matching")
        }

    }
}