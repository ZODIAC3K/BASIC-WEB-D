
function capitalizeWords(sentence) {
    if (!sentence) return ""; 
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


function handleSubmit(event) {
    event.preventDefault();
    const inputText = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');
    const capitalizedSentence = capitalizeWords(inputText);
    resultElement.textContent = capitalizedSentence;
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
