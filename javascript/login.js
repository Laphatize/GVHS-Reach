
check();
function check() {

    var user = firebase.auth().currentUser;
    console.log(user.uid);
}


/*

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        return document.getElementById('error_message').innerHTML = error.message;
    });

    check();
}

*/