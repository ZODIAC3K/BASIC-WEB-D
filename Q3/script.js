function calculateAge() {
  const inputDateElement = document.getElementById("inputDate");
  const selectedDate = new Date(inputDateElement.value);

  if (isNaN(selectedDate)) {
    // If the selected date is invalid, show an error message
    document.getElementById("result").textContent = "Please select a valid date.";
    return;
  }

  const today = new Date();
  const ageInMilliseconds = today - selectedDate;

  // Calculate the age in years
  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const ageInYears = Math.floor(ageInMilliseconds / millisecondsPerYear);

  // Display the age in the result element
  document.getElementById("result").textContent = "Your age is: " + ageInYears + " years";
}
