const categoriesListEl = document.querySelectorAll('.item');

const getCategoriesList = function () {
    console.log(`В списке ${categoriesListEl.length} категории.`);
};
getCategoriesList();

const getCategoriesTitlesAndQuantityOfElements = function () {
    [...categoriesListEl].map(el => {
  return console.log(`Категория: ${el.firstElementChild.textContent}
Количество элементов: ${el.lastElementChild.children.length}`);
  });
};
getCategoriesTitlesAndQuantityOfElements();