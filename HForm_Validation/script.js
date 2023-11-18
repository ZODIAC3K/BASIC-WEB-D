function validateForm(event) {
    event.preventDefault()

    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    var namePattern = /^[a-zA-Z\s]+$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;

    if (!namePattern.test(fullName)) {
        alert("Please enter a valid full name.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert("Form submitted successfully!");
    document.getElementById("registrationForm").reset()
}
