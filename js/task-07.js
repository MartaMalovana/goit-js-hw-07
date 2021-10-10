const inputRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRangeRef.min = '10';
inputRangeRef.max = '30';
inputRangeRef.step = '1';
console.log(inputRangeRef);


const onRangeMoveTextSizeChange = function () {
    textRef.style.fontSize = `${inputRangeRef.value}px`;
};

inputRangeRef.addEventListener('input', onRangeMoveTextSizeChange);