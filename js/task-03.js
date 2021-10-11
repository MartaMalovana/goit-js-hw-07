const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

  const createGalleryElements = function () {
    const galleryList = document.querySelector('ul');
    const galleryElements = [];
    images.map(image => {
        const galleryElement = document.createElement('li');
        galleryElement.insertAdjacentHTML("afterbegin", `<img src='${image.url}' alt='${image.alt}' width='250px;'></img>`);
        galleryElements.push(galleryElement);
        galleryList.style.display = 'flex';
        galleryList.style.flexDirection = 'column';
        galleryList.style.alignItems = 'center';
        galleryList.style.listStyle = 'none';
    });
    galleryList.append(...galleryElements);
  };

  createGalleryElements();