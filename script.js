

addEventListener('input', (event) => {
    let inputData = document.getElementById('passwordInput').value.trim();
    let loaded = document.getElementById('loaded');
    let loader = 0;
    console.log(inputData);

    let a = lengthValidation(inputData);
    let b = capitalValidation(inputData);
    let c = numberValidation(inputData);
    let d = specialCharacters(inputData);
    
    loader = a + b + c + d ;
    // change class depende on loader number  
    if (loader === 0) {
        loaded.classList.add('loaded_0');
        loaded.classList.remove('loaded_1', 'loaded_2', 'loaded_3', 'loaded_4');
    } else if (loader === 1) {
        loaded.classList.add('loaded_1');
        loaded.classList.remove('loaded_0', 'loaded_2', 'loaded_3', 'loaded_4');
    } else if (loader === 2) {
        loaded.classList.add('loaded_2');
        loaded.classList.remove('loaded_0', 'loaded_1', 'loaded_3', 'loaded_4');
    } else if (loader === 3) {
        loaded.classList.add('loaded_3');
        loaded.classList.remove('loaded_0', 'loaded_1', 'loaded_2', 'loaded_4');
    } else if (loader === 4) {
        loaded.classList.add('loaded_4');
        loaded.classList.remove('loaded_0', 'loaded_1', 'loaded_2', 'loaded_3');
    }
});


// validation functions 

// length validation function 
function lengthValidation(element) {
    let ValidationElement = document.getElementById('lengthValidation');

    if (element.length >= 9) {
        ValidationElement.classList.remove('cross');
        ValidationElement.classList.add('tick');
        return 1;
    } else {
        ValidationElement.classList.remove('tick');
        ValidationElement.classList.add('cross');
        return 0;
    };
};

// capital validation function
function capitalValidation(element) {
    let ValidationElement = document.getElementById('capitalValidation');

    if (element.match(/[A-Z]/g)) {
        ValidationElement.classList.remove('cross');
        ValidationElement.classList.add('tick');
        return 1;
    } else {
        ValidationElement.classList.remove('tick');
        ValidationElement.classList.add('cross');
        return 0;
    };
};

// number validation function
function numberValidation(element) {
    let ValidationElement = document.getElementById('numberValidation');

    if (element.match(/[0-9]/g)) {
        ValidationElement.classList.remove('cross');
        ValidationElement.classList.add('tick');
        return 1;
    } else {
        ValidationElement.classList.remove('tick');
        ValidationElement.classList.add('cross');
        return 0;
    };
};

// special characters validation 
function specialCharacters(element) {
    let ValidationElement = document.getElementById('specialCharactersValidation');
    
    if (element.match(/[~!@#$%^&*_\-+=`|\\(){}\[\]:;"'<>,.?\/]/g)) {
        ValidationElement.classList.remove('cross');
        ValidationElement.classList.add('tick');
        return 1;
    } else {
        ValidationElement.classList.remove('tick');
        ValidationElement.classList.add('cross');
        return 0;
    };
};