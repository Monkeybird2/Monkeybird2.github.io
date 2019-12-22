!(function($) {
  console.log(1);
  var mySwiper = new Swiper(".partners__slider", {
    slidesPerView: 5,
    // initialSlide: 2,
    spaceBetween: 20,
    watchOverflow: true,
    loop: true,
    navigation: {
      nextEl: ".partners__slider-next",
      prevEl: ".partners__slider-prev"
    },
    // pagination: {
    //     el: ".partners__slider-pagination",
    //     type: "bullets",
    //     clickable: true,
    //     dynamicBullets: true
    // },

    breakpoints: {
      768: {
        slidesPerView: 2,
        centeredSlides: false
      },
      1200: {
        slidesPerView: 3,
        centeredSlides: false
      },
      1400: {
        slidesPerView: 4,
        // centeredSlides: true,
        initialSlide: 3
      }
    }
  });
 
  new Swiper(".top-slider", {
    slidesPerView: 1,
    // spaceBetween: 20,s
    // watchOverflow: true,
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
})(window.jQuery);
