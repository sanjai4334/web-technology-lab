if (window.location.href.endsWith("admin.html") && localStorage.getItem("userEmail") != "admin@booking.com") {
    console.log(window.location.href);
    logoutUser();
    alert("You must be an admin to access this page!");
    window.location.href = "./login_signup.html";
}

if (localStorage.getItem("userLoggedIn") === "false") {
    localStorage.setItem(localStorage.getItem("userEmail"), "");
    alert("You are not logged in!\nPlease login to continue.");
    window.location.href = "./login_signup.html";
}


function logoutUser() {
    localStorage.setItem("userLoggedIn", "false");
    localStorage.setItem("userEmail", "");
    window.location.href = "./login_signup.html";
};
