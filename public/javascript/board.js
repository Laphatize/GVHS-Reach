var loggedInUser;

firebase.auth(function(user)) {
	loggedInUser = user; // Set the variable to what every the name of the user that is logged in According to firebase.
}

if (!user) {
	window.location.href = "./login.html"; // Redirect to login screen if not logged in yet.
}

if (user) {
	adjustPage();
}

function adjustPage() { 
	document.getElementById("user_1") = loggedInUser;
}
