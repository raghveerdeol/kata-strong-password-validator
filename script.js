

addEventListener('input', (event) => {
    let inputData = document.getElementById('passwordInput').value.trim();
    console.log(inputData);
    lengthValidation(inputData);
    capitalValidation(inputData);
    numberValidation(inputData);
});


// validation functions 

// length validation function 
function lengthValidation(element) {
    let ValidationElement = document.getElementById('lengthValidation');

    if (element.length >= 9) {
        ValidationElement.classList.remove('cross');
        ValidationElement.classList.add('tick');
    } else {
        ValidationElement.classList.remove('tick');
        ValidationElement.classList.add('cross');
    };
};

// capital validation function
function capitalValidation(element) {
    let ValidationElement = document.getElementById('capitalValidation');

    if (element.match(/[A-Z]/g)) {
        ValidationElement.classList.remove('cross');
        ValidationElement.classList.add('tick');
    } else {
        ValidationElement.classList.remove('tick');
        ValidationElement.classList.add('cross');
    };
};

// number validation function
function numberValidation(element) {
    let ValidationElement = document.getElementById('numberValidation');

    if (element.match(/[0-9]/g)) {
        ValidationElement.classList.remove('cross');
        ValidationElement.classList.add('tick');
    } else {
        ValidationElement.classList.remove('tick');
        ValidationElement.classList.add('cross');
    };
}