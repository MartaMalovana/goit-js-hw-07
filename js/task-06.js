const inputPlaceRef = document.querySelector('#validation-input');

const onInputTextCheck = function () {
    const addClassOnInput = function (cl) {
        inputPlaceRef.classList.add(cl);
    }

    const removeClassFromInput = function (cl) {
        inputPlaceRef.classList.remove(cl);
    }

    const toggleClassOnInput = function (cl) {
        inputPlaceRef.classList.toggle(cl);
    }
   
    if(inputPlaceRef.dataset.length === String(inputPlaceRef.value.length)) {
        toggleClassOnInput('valid');
        removeClassFromInput('invalid');

    } else {
        removeClassFromInput('valid');
        addClassOnInput('invalid');
    }
};

inputPlaceRef.addEventListener('blur', onInputTextCheck);