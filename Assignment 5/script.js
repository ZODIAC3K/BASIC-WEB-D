function getWeekendDate() {
    const inputDate = new Date(document.getElementById('inputDate').value);
    if (isNaN(inputDate)) {
      alert('Please enter a valid date.');
      return;
    }
  
    const weekendDate = calculateWeekendDate(inputDate);
    displayResult(weekendDate);
  }
  
  function calculateWeekendDate(date) {
    const dayOfWeek = date.getDay();
    const daysUntilWeekend = 6 - dayOfWeek; // 6 represents Saturday (Saturday is the 7th day of the week)
  
    // Clone the input date to avoid modifying it directly
    const weekendDate = new Date(date);
    weekendDate.setDate(date.getDate() + daysUntilWeekend);
  
    return weekendDate;
  }
  
  function displayResult(date) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Next weekend date: ${date.toDateString()}`;
  }
  