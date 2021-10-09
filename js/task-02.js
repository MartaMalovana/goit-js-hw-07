const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const createLiForEachIngredient = function () {
    const ar = [];
    const liForEachIngredient = ingredients.map(ingredient => {
      const liEl = document.createElement('li');
      liEl.textContent = ingredient;
      ar.push(liEl);
    });
    console.log(ar);
    const ingredientsList = document.querySelector('ul');
    ingredientsList.append(...ar);
   
  };
createLiForEachIngredient();

