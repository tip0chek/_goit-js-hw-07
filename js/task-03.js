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



const galleryContainer = document.querySelector('#gallery');
const styleContainer = document.querySelector('style');

const galeryMaker = images.map(image => {
  return `<li class="gallery__box"><img class="galery__img" src="${image.url} alt="${image.alt} width = "300" height = "200"
></li>`
})

galleryContainer.insertAdjacentHTML('afterbegin', galeryMaker.join(''));

styleContainer.insertAdjacentHTML('beforeend', `#gallery {display: flex; flex-wrap: wrap; justify-content: center;}
  .galery__img {display: block;} .gallery__box{ list-style: none; margin: 15px;}`);

