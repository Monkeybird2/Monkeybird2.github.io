!(function($) {
  var mySwiper = new Swiper(".partners__slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    watchOverflow: true,
    loop: true,
    navigation: {
      nextEl: ".partners__slider-next",
      prevEl: ".partners__slider-prev"
    },
   

    breakpoints: {
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      
    }
  });
  var portFo = new Swiper(".portfolio__slider", {
    slidesPerView: 7,
    // spaceBetween: 2,
    watchOverflow: true,
    // loop: true,
    // autoHeight: true,
    navigation: {
      nextEl: ".portfolio__next",
      prevEl: ".portfolio__prev"
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      // hide: true,
      dragSize: 70,
    },

    breakpoints: {
      500: {
        slidesPerView: 3,
      },
      570: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      1000: {
        slidesPerView: 5,
      },
      1250: {
        slidesPerView: 6,
      },
      
    }
  });
  
  new Swiper(".top-slider", {
    slidesPerView: 1,
    // spaceBetween: 20,s
    watchOverflow: true,
    pagination: {
      el: ".top-slider__pagination",
      type: "bullets",
      clickable: true
      // dynamicBullets: true
    },
    navigation: {
      nextEl: ".top-slider__next",
      prevEl: ".top-slider__prev"
    }
  });

  new Swiper(".purchase-slider", {
    slidesPerView: 1,
    // spaceBetween: 20,s
    // watchOverflow: true,
    pagination: {
      el: ".purchase-slider__pagination",
      type: "bullets",
      clickable: true
      // dynamicBullets: true
    },
    navigation: {
      nextEl: ".purchase-slider__next",
      prevEl: ".purchase-slider__prev"
    }
  });

  //tabs-nav
  var tabItem = $(".tabs-nav__item");
  $(document).on("click", ".tabs-nav__item", function(e) {
    tabItem.removeClass("is-active");
    $(this).addClass("is-active");
  });
  // $('html ,body').animate({
  //     scrollTop: 0
  // },400);
  var $page = $("html, body");
  $('a[href*="#"]').click(function() {
    $page.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top
      },
      400
    );
    return false;
  });

  // lang
  var lang =$('.lang');
  var langList = $('.lang__list');
  function closeLang(){
      lang.removeClass('is-active');
      langList.fadeOut(20);
  }
 
  lang.on('click',function(){
    if(lang.hasClass('is-active')){
      lang.removeClass('is-active');
      langList.fadeOut(20);
      $(document).off('click',closeLang);
    } else {
      lang.addClass('is-active');
      langList.fadeIn(250);
      setTimeout(function(){
        $(document).one('click',closeLang);

      },100);
    }
    
  })
  // burger

    var burgerBtn = $('.menu__btn');
    var burgerItem = $('.menu__item');
    var burgerMenu  = $('.menu__box');
    function closeBurgerMenu(){
      $(document).off('click',closeBurgerMenu);
      burgerItem.off('click',closeBurgerMenu);
      if(burgerBtn.hasClass('is-active')){
        burgerBtn.removeClass('is-active');
        burgerMenu.removeClass('is-active');
      }
    }
    
    burgerBtn.on('click',function(){
      if(burgerBtn.hasClass('is-active')){
        burgerBtn.removeClass('is-active');
        burgerMenu.removeClass('is-active');
      } else {
        burgerBtn.addClass('is-active');
        burgerMenu.addClass('is-active');
        setTimeout(function(){
          $(document).one('click',closeBurgerMenu);
          burgerItem.one('click',closeBurgerMenu);
        },100);
      }
      
    });


    // popup ================
    function closeModalClick(e) {
      if (e.target === document.querySelector('.overlay')) {
        closePopup();
      }
    }
    function closeModalKey(e) {
      if(e.keyCode === 27){
        closePopup();
      }
    }
    var popup = $('.popup');
    
    function openPopup(){
      popup.addClass('is-active');
      $('body').addClass('overlay');
      $(document).on('click',closeModalClick);
      $(document).on('keydown',closeModalKey);
    }
    
    function closePopup(){
      popup.removeClass('is-active');
      $('body').removeClass('overlay');
      $(document).off('click',closeModalClick);
      $(document).off('keydown',closeModalKey);
    }

    

    $('.popup__cross').on('click',function(){
      closePopup()
    })
    openPopup()
   

    /// выравнивание высоты  у портфолио =======================
  function heightServiceTitle() {
    
    let block = $('.tabs-nav__item');
    let height = 0;
    block.css('height', '');

    block.each(function () {
      
        if ($(this).innerHeight() > height) {
            height = $(this).innerHeight();
        }
    });
    
    block.css('height', height + 'px');


}

window.addEventListener('load', heightServiceTitle);
window.addEventListener('resize', heightServiceTitle);
})(window.jQuery);
