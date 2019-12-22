!(function ($) {
   var mql = window.matchMedia("screen and (min-width: 1024px)");


   var label = $('.drop-menu__label');
   var item = $('.drop-menu__item');
   var drop = $('.drop-menu');
   var list = $('.drop-menu__sub-list');


   function dropMenuMobile() {

      var $this = $(this).parent().find(list);
      list.not($this).slideUp(300);
      $this.slideToggle(300);
   }
   $('.btn-catalog').on('click', function () {
      drop.fadeToggle(400)
   })
   $('.drop-menu__cross').on('click', function () {
      drop.fadeOut(400)
   })
   var timer;
   function dropMenuDesktop(e) {
      var self = this;
         // timer = setTimeout(function(){
            var $this = $(self).find(list);
            var clazz = $(self).find('.drop-menu__label')
            $('.drop-menu__label').removeClass('active');
            clazz.addClass('active')
            list.not($this).fadeOut(30)
            $this.fadeIn();

         // },100)

      }

   function clearTime(){
      // clearTimeout(timer);

   }

   function setup_for_width(mql) {

         if (mql.matches) {
            label.off('click', dropMenuMobile);
            list.css('display', '');
            item.on('mouseenter', dropMenuDesktop);
            item.on('mouseout',clearTime);
         } else {
            label.on('click', dropMenuMobile);
            item.off('mouseenter', dropMenuDesktop);
            item.off('mouseout',clearTime);
            $('.drop-menu__label').removeClass('active');
            list.css('display', '')
         }

      }
  mql.addListener(setup_for_width);
  setup_for_width(mql)

})(window.jQuery);
