function mergeArrays(arr1, arr2) 
{
    return arr1.concat(arr2);
}

function getUniqueElements(arr1, arr2) 
{

    const set2 = new Set(arr2);
    const result = arr1.filter((element) => !set2.has(element));
    return result;
}

function handleFormSubmit() 
{
    const ar1Input = document.getElementById('ar1-input').value;
    const ar2Input = document.getElementById('ar2-input').value;
    const ar1 = ar1Input.split(',').map(Number);
    const ar2 = ar2Input.split(',').map(Number);
    const uniqueElements = getUniqueElements(ar1, ar2);

    document.getElementById('result').textContent = uniqueElements.join(', ');
}

function capitalizeWords() 
{
    var inputString = document.getElementById('input-string').value;
    var words = inputString.split(" ");

    var capitalizedWords = words.map((word) => {
        var firstLetter = word.charAt(0).toUpperCase();
        var restOfWord = word.slice(1);
        return firstLetter + restOfWord;
    });

    var capitalizedString = capitalizedWords.join(" ");
    document.getElementById('capitalize-result').textContent = capitalizedString;
}

function getWeekendDate() 
{

    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var difference = currentDay > 6 ? 6 - currentDay + 7 : 6 - currentDay;
    var weekendDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + difference);

    document.getElementById('weekend-result').textContent = weekendDate.toDateString();
}

function calculateAge() 
{

    var birthdate = document.getElementById('birthdate').value;
    var currentDate = new Date();
    var birthDate = new Date(birthdate);
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var birthMonth = birthDate.getMonth();
    var currentMonth = currentDate.getMonth();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) 
    {
        age--;
    }

    document.getElementById('age-result').textContent = age;
}


function addStrings(num1, num2)
{

    var result = "";
    var carry = 0;
    var i = num1.length - 1;
    var j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        var digit1 = i >= 0 ? parseInt(num1.charAt(i)) : 0;
        var digit2 = j >= 0 ? parseInt(num2.charAt(j)) : 0;
        var sum = digit1 + digit2 + carry;
        var digit = sum % 10;
        carry = Math.floor(sum / 10);
        result = digit + result;
        i--;
        j--;
    }

    return result;
}

function addNumbers() 
{

    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var result = addStrings(num1, num2);
    document.getElementById('addition-result').textContent = result;
}

