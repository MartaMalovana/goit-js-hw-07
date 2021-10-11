const inputRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');
const renderButtonRef = document.querySelectorAll('button');
const buttonRender = renderButtonRef[0];
const buttonDestroy = renderButtonRef[1];

const onInputGetValue = function () {
    const amount = inputRef.value; 
    const boxesArray = [];
  
    const createBoxes = function () {
        const randomColor = function () {
          return '#'+ Math.floor(Math.random()*1000000).toString();
        };
        for (let i=0; i<amount; i+=1) {
          const newBox = document.createElement('div');
          newBox.style.width = (30+10*i) + "px";
          newBox.style.height = (30+10*i) + "px";
          newBox.style.border = `1px solid ${randomColor()}`;
          newBox.style.margin = '10px';
          newBox.classList.add('new-box');
          boxesArray.push(newBox);
        };
        boxesRef.append(...boxesArray); 

        const destroyBoxes = function () {
            const newBoxesRef = document.querySelectorAll('.new-box');
            // console.log(newBoxesRef);
        }
        buttonDestroy.addEventListener('click', destroyBoxes);
    };

    buttonRender.addEventListener('click', createBoxes);
  };

inputRef.addEventListener('input', onInputGetValue);
