function login(){
    var username=document.getElementById("input_username");
    var email=document.getElementById("input_email");
    var password=document.getElementById("input_password");
    var confirm_password=document.getElementById("input_confirm_password");
    var username_regex= /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    var email_regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if((username.value.trim()=="") || (email.value.trim()=="") || (password.value.trim()=="") || (confirm_password.value.trim()=="") ){
        window.alert("Fields shouldnot be left empty");
    }
    else{
        if(password.value.trim()==confirm_password.value.trim()){
            if((username_regex.test(username.value.trim())) && (email_regex.test(email.value.trim()))){
              return true;
            }
            else{
                window.alert("username not valid");
                return false;

            }

        }
        else{
            window.alert("password no match")
        }

    }
}