!(function($) {
  
    new Swiper(".cheaper__slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      watchOverflow: true,
      pagination: {
        el: ".cheaper__slider-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".cheaper__slider-next",
        prevEl: ".cheaper__slider-prev"
      },
      breakpoints: {
        1200: {
          slidesPerView: 2
        }
      }
    });
    new Swiper(".addoffer__slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      watchOverflow: true,
      pagination: {
        el: ".addoffer__slider-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".addoffer__slider-next",
        prevEl: ".addoffer__slider-prev"
      },
      breakpoints: {
        1200: {
          slidesPerView: 2
        }
      },
      
    });

    new Swiper(".recently__slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      watchOverflow: true,
      pagination: {
        el: ".recently__slider-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true
      },
      navigation: {
        nextEl: ".recently__slider-next",
        prevEl: ".recently__slider-prev"
      },

      breakpoints: {
        1200: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        }
      }
    });
})(window.jQuery);
