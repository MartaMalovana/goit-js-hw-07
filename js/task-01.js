const categoriesList = document.querySelectorAll('.item');

const getCategoriesList = function () {
    console.log(`В списке ${categoriesList.length} категории.`);
};
// getCategoriesList();

const getCategoriesTitlesAndQuantityOfElements = function () {
    [...categoriesList].map(el => {
  return console.log(`Категория: ${el.firstElementChild.textContent}
Количество элементов: ${el.lastElementChild.children.length}`);
  });
};
// getCategoriesTitlesAndQuantityOfElements();