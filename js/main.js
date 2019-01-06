console.log('hallo');

var filterknop = document.querySelector('.filters');

var formEl = document.querySelector('aside > form');

filterknop.addEventListener('click', function(){
  formEl.classList.toggle('show-filters');
});
