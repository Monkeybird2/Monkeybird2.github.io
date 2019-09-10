(function () {
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    var statistics = document.querySelector('.statistics');

    var burger = document.querySelector('.mobile-menu-button');
    burger.addEventListener('click', function (e) {
        document.body.classList.toggle('main-menu-opened')
    });
    var arrCount = [];
    var arrFunc = [];
    var statCount = document.querySelectorAll('.statistics__count');
    statCount.forEach(function (item, index) {
        arrCount.push(parseInt(item.innerHTML))
        item.innerHTML = 0;
        arrFunc.push(animateCount(item, arrCount[index]))
    });

    function animateCount(item, countArr) {
        var count = 0;
        var step = countArr / 80;
        return function () {
            requestAnimFrame(function timeId() {
                count += step;
                item.innerHTML = parseInt(count);

                if (countArr <= count) {
                    item.innerHTML = countArr;
                    cancelAnimationFrame(timeId)
                } else {
                    requestAnimFrame(timeId)
                }
            })
        }
    }
    var flag = true;
    window.addEventListener('scroll', function () {
        if (isFullyVisible(statistics)) {
            if (flag) {
                arrFunc.forEach(item => {
                    console.log(item)
                    item()
                })
            }
            flag = false;
        }
    });
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        flipEffect: {
            rotate: 30,
            slideShadows: false,
        },
        effect: 'flip',
        slidesPerView: 1,
        grabCursor: true,
        // slidesPerColumn: 1,
        // If we need paginatizon


        // Navigation arrows
        navigation:
            {
                nextEl: '.gallery__navigation-prev',
                prevEl:
                    '.gallery__navigation-next',
            }
        ,


    });

    function animate({timing, draw, duration}) {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;

            let progress = timing(timeFraction);
            draw(progress);
            if (timeFraction < 1) {
                requestAnimationFrame(animate);
            }
        })
    }

// animate({
    //     duration: 4000,
    //     timing(timeFraction) {
    //         return timeFraction;
    //     },
    //     draw(progress) {
    //         var count = 0;
    //         var step = countArr / 30;
    //         count += step;
    //         item.innerHTML = parseInt(count);
    //         // elem.style.width = progress * 100 + '%';
    //     }
    // });

    function isFullyVisible(el) {
        var elementBoundary = el.getBoundingClientRect();

        var top = elementBoundary.top;
        var bottom = elementBoundary.bottom;

        return ((top >= 0) && (bottom <= window.innerHeight));
    }
})();
