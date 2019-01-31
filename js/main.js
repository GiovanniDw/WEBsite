console.log('hallo');

var filterknop = document.querySelector('.filters');

var formEl = document.querySelector('aside > form');

filterknop.addEventListener('click', function(){
  formEl.classList.toggle('show-filters');
});

var favoriteKnop =  document.querySelector('#favorite');
var favoriteList = document.querySelector('.fav');

favoriteKnop.addEventListener('click', function(){
favoriteList.classList.toggle('addedList')

});
