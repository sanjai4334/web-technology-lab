function validate() {

    let allOk = true;

    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z]+(\s*[A-Za-z]*)*$/;
    if (!name) {
        document.getElementById("nameError").innerHTML = 'Name is required.';
        allOk = false;
    } else {
        document.getElementById("nameError").innerHTML = '';
    }
    if (!nameRegex.test(name)) {
        document.getElementById("nameError").innerHTML = 'Name must contain only alphabets and spaces.';
        allOk = false;
    } else {
        document.getElementById("nameError").innerHTML = '';
    }

    const genders = document.getElementsByName('gender');
    let flag = false;
    for (let i of genders) {
        if (i.checked) {
            console.log(i);
            flag = true;
        }
    }
    if (!flag) {
        document.getElementById("genderError").innerHTML = 'Please select a gender.';
        allOk = false;
    } else {
        document.getElementById("genderError").innerHTML = '';
    }

    const languages = document.getElementsByName('language');
    let flag1 = false;
    for (let i of languages) {
        if (i.checked) {
            console.log(i);
            flag1 = true;
        }
    }
    if (!flag1) {
        document.getElementById("languageError").innerHTML = 'Please select a language.';
        allOk = false;
    } else {
        document.getElementById("languageError").innerHTML = '';
    }

    const district = document.getElementById('district');
    if (district.selectedIndex === 0) {
        document.getElementById("districtError").innerHTML = 'Please select a district.';
        allOk = false;
    } else {
        document.getElementById("districtError").innerHTML = '';
    }

    const address = document.getElementById('address').value;
    if (!address) {
        document.getElementById("addressError").innerHTML = 'Address is required.';
        allOk = false;
    } else {
        document.getElementById("addressError").innerHTML = '';
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^([A-z0-9]+\.?)+@[A-z]+(\.[A-z)]{2,4})+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = 'Invalid email format.';
        allOk = false;
    } else {
        document.getElementById("emailError").innerHTML = '';
    }


    const mobile = document.getElementById('mobile').value;
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        document.getElementById("mobileError").innerHTML = 'Invalid mobile number';
        allOk = false;
    } else {
        document.getElementById("mobileError").innerHTML = '';
    }

    const username = document.getElementById('username').value;
    const usernameRegex = /^[A-Za-z0-9]+$/;
    if (!usernameRegex.test(username)) {
        document.getElementById("usernameError").innerHTML = 'Username must contain only alphabets and numbers';
        allOk = false;
    } else {
        document.getElementById("usernameError").innerHTML = '';
    }

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_$])(?=.*[A-z])[a-zA-Z0-9!@_$%]{8,16}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById("passwordError").innerHTML = 'Password must be 8-16 characters with at least one number and special character';
        allOk = false;
    } else {
        document.getElementById("passwordError").innerHTML = '';
    }

    return ((allOk) ? document.body.innerHTML = "<h1 class='text-center'>Form submitted successfully!</h1><p class='h3 text-center '>New User registered :  " + username + " : " + email : false);
}
