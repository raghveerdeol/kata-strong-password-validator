

addEventListener('input', (event) => {
    let inputData = document.getElementById('passwordInput').value;
    console.log(inputData);
    lengthValidation(inputData);
});


function lengthValidation(element) {
    let ValidationElement = document.getElementById('lengthValidation');

    if (element.length >= 9) {
        ValidationElement.classList.remove('cross');
        ValidationElement.classList.add('tick');
    } else {
        ValidationElement.classList.remove('tick');
        ValidationElement.classList.add('cross');
    }
}