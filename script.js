

addEventListener('input', (event) => {
    let inputData = document.getElementById('passwordInput').value;
    console.log(inputData);
    lengthValidation(inputData);
});


function lengthValidation(string) {
    if (string.length >= 9) {
        string.classList.remove('cross');
        string.classList.add('tick');
        console.log('abc')
    }
}