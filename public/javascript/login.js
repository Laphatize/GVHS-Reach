


function login() {
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        return document.getElementById('error_message').innerHTML = error.message;
    })

    return window.location.href = "./index.html";
    

    
}



