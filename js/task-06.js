const inputPlaceRef = document.querySelector('#validation-input');

const onInputTextCheck = function () {
    if(inputPlaceRef.dataset.length === String(inputPlaceRef.value.length)) {
        inputPlaceRef.classList.remove('invalid');
        inputPlaceRef.classList.toggle('valid');
    } else {
        inputPlaceRef.classList.remove('valid');
        inputPlaceRef.classList.add('invalid');
    }
};

inputPlaceRef.addEventListener('blur', onInputTextCheck);