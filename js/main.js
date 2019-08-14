(function() {
  console.log(1)
  var burger = document.querySelector('.mobile-menu-button');
  burger.addEventListener('click',function(e){
    document.body.classList.toggle('main-menu-opened')
  })
})();
