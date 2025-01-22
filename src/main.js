import { querySearch } from './js/pixabay-api';
import { createMarkUp } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//get the elements from page
const searchFormEl = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loaderText = document.querySelector('.js-loading-indicator');
//the event of submited form
const onSearchFormSumbit = event => {
  event.preventDefault();
  //check the entered value
  const searchedQuery = event.currentTarget.elements.user_query.value.trim();

  if (searchedQuery === '') {
    iziToast.show({
      message: 'Input has to be filled!',
      color: 'red',
      position: 'bottomLeft',
    });
    return;
  }
  //show the loading sign
  loader.style.display = 'block';
//   loaderText.style.display = 'block';
  //start the search of the query
  querySearch(searchedQuery)
    .then(result => {
      gallery.innerHTML = '';

      loader.style.display = 'none';
    //   loaderText.style.display = 'none';

      if (result.total === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'bottomLeft',
        });
      }

      // reload the gallery
      const galleryTemplate = result.hits.map(el => createMarkUp(el)).join('');
      gallery.innerHTML = galleryTemplate;

      searchFormEl.reset();

      lightbox.refresh();
    })
    .catch(error => {
      loader.style.display = 'none';

      console.log(error);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSumbit);

let lightbox = new SimpleLightbox('.query-image-big', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
