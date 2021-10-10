let counterValue = 0;
const counterRef = document.querySelector('#value');    

const buttonsListRef = document.querySelectorAll('button');
const incrementButtonRef = buttonsListRef[1];
const decrementButtonRef = buttonsListRef[0];

const onButtonClickIncrement = function () {
    counterValue += 1;
    console.log(counterValue);
    counterRef.textContent = counterValue;
}

const onButtonClickDecrement = function () {
    counterValue -= 1;
    console.log(counterValue);
    counterRef.textContent = counterValue;
}

incrementButtonRef.addEventListener('click', onButtonClickIncrement);
decrementButtonRef.addEventListener('click', onButtonClickDecrement);
