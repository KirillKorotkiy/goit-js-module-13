import refs from './js/refs';
import SearchRequire from './js/fetch';
import clearArticles from './js/clear-articles';
import intersectionObject from './js/intersecting-object';
import Notiflix from 'notiflix';
import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import '../node_modules/photoswipe/dist/photoswipe.css';
import createElements from './js/create-elements';



refs.formRef.addEventListener('submit', seacrhImages);

export default seacrRequire = new SearchRequire();

function seacrhImages(event) {
  event.preventDefault();

  seacrRequire.searchQuey = event.currentTarget.elements.searchQuery.value;
  if (seacrRequire.searchQuey === '') {
    Notiflix.Notify.warning('Input some word');
    return;
  } else {
    seacrRequire
      .fetchArticles()
      .then(response => {
        Notiflix.Notify.info(
          '"Hooray! We found ' + response.total + ' images.'
        );
        createElements(response);
      })
      .catch(error => console.log(error))
      .finally(() => (seacrRequire.loading = false));
  }
  intersectionObject();
  clearArticles();
  seacrRequire.resetPage();
}

const lightbox = new PhotoSwipeLightbox({
  gallery: '.articles',
  children: 'a',
  pswpModule: () => import('photoswipe'),
});
lightbox.init();
