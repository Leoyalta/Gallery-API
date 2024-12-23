import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const optionsLight = {
  captionsData: 'alt',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery-link', optionsLight);

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
iziToast.settings({
  resetOnHover: true,
  timeout: 2500,
  color: 'red',
  position: 'topRight',
  safesearch: true,
});

import fetchImages from './js/pixabay-api.js';
import renderGalleryMurkup from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const galleyList = document.querySelector('.gallery-list');
const loaderVisibilty = document.querySelector('.loader');

searchForm.addEventListener('submit', onRenderGalleyItems);
function onRenderGalleyItems(evt) {
  evt.preventDefault();
  const seachQuery = evt.target.elements.searchWord.value.trim();

  if (seachQuery === '') {
    iziToast.show({
      title: 'Hay',
      message: 'Enter some value please.',
    });
    evt.target.reset();
    return;
  }
  galleyList.innerHTML = '';
  loaderVisibilty.classList.remove('is-hiden');

  fetchImages(seachQuery)
    .then(images => {
      if (!images.hits[0]) {
        iziToast.show({
          title: 'Hay',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        evt.target.reset();
      }
      return images.hits;
    })
    .then(images => {
      galleyList.innerHTML = renderGalleryMurkup(images);
      lightbox.refresh();
    })
    .catch(error =>
      iziToast.show(
        iziToast.show({
          title: 'Hay',
          message: `${error}`,
        })
      )
    )
    .finally(() => {
      loaderVisibilty.classList.add('is-hiden');
      evt.target.reset();
    });
}
