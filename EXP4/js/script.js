function validate() {
    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z]+(\s*[A-Za-z]*)*$/;
    if (!name) {
        alert('Name is required.');
        return false;
    }
    if (!nameRegex.test(name)) {
        alert('Name must contain only alphabets and spaces.');
        return false;
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
        alert('Please select a gender.');
        return false;
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
        alert('Please select a language.');
        return false;
    }

    const district = document.getElementById('district');
    if (district.selectedIndex === 0) {
        alert('Please select a district.');
        return false;
    }

    const address = document.getElementById('address').value;
    if (!address) {
        alert('Address is required.');
        return false;
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^([A-z0-9]+\.?)+@[A-z]+(\.[A-z)]{2,4})+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return false;
    }


    const mobile = document.getElementById('mobile').value;
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert('Invalid mobile number');
        return false;
    }

    const username = document.getElementById('username').value;
    const usernameRegex = /^[A-Za-z0-9]+$/;
    if (!usernameRegex.test(username)) {
        alert('Username must contain only alphabets and numbers');
        return false;
    }

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_$])(?=.*[A-z])[a-zA-Z0-9!@_$%]{8,16}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be 8-16 characters with at least one number and special character');
        return false;
    }

    return true;
}
