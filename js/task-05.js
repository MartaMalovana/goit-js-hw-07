const textFromInputRef = document.querySelector('#name-output');
const inputPlaceRef = document.querySelector('#name-input');

const onTextInput = function () {
    textFromInputRef.textContent = inputPlaceRef.value;
    if(inputPlaceRef.value.length === 0) {
        textFromInputRef.textContent = 'незнакомец';
    }
}

inputPlaceRef.addEventListener('input', onTextInput);
