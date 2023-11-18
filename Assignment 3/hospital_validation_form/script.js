function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].innerHTML = "";
    }

    // Validate name
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value.trim();
    if (nameValue === "") {
        displayError(nameInput, "Name is required");
        return;
    }

    // Validate age
    var ageInput = document.getElementById("age");
    var ageValue = ageInput.value;
    if (isNaN(ageValue) || ageValue <= 0) {
        displayError(ageInput, "Invalid age");
        return;
    }

    // Validate gender
    var genderSelect = document.getElementById("gender");
    var genderValue = genderSelect.value;
    if (genderValue === "") {
        displayError(genderSelect, "Gender is required");
        return;
    }

    // Validate email
    var emailInput = document.getElementById("email");
    var emailValue = emailInput.value.trim();
    if (!validateEmail(emailValue)) {
        displayError(emailInput, "Invalid email address");
        return;
    }

    // Validate phone
    var phoneInput = document.getElementById("phone");
    var phoneValue = phoneInput.value.trim();
    if (!validatePhone(phoneValue)) {
        displayError(phoneInput, "Invalid phone number");
        return;
    }

    var successElement = document.getElementById('error-data');
    successElement.style.color = 'green';
    successElement.innerHTML = "Form submitted!";

    // Form is valid, submit the form or perform further actions
    console.log("Form submitted!");
}

function displayError(inputElement, errorMessage) {
    var errorElement = document.getElementById('error-data');
    errorElement.style.color = 'red';
    errorElement.innerHTML = errorMessage;
    inputElement.parentNode.appendChild(errorElement);
    
}

function validateEmail(email) {
    // Email validation regular expression
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Phone number validation regular expression
    var phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}
