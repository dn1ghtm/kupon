function checkPassword() {
    var password = document.getElementById("text");
    var passwordText = password.value;
    var lenght = passwordText.lenght;
    if(passwordText == "kjb3e96sw2") {
     location = 'pages/doji/index.html';
     noerror();
 }else{
     error();
 }
 if(passwordText == "uwu") {
     location = 'pages/hi.html';
     noerror();
  }else{
     if(passwordText == "kjb3e96sw2"){
         noerror();
     }
     error();
  }
     }

    function error(){
     var p = document.getElementById("error");
     p.classList.add("active");
    }
    function noerror(){
     var pe = document.getElementById("error");
     pe.classList.remove("active");
    }
