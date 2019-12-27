!(function($) {
  var videos = Array.prototype.slice.call(
    document.querySelectorAll("video.lazy-header")
  );

  var lazyloadThrottleTimeout;

  var mql = window.matchMedia("screen and (min-width: 768px)");

  mql.addListener(setup_for_width); 
  var lazyload = function(elements, elem, clazz) {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
      elements.forEach(function(video) {
        var source = document.createElement("source");
        source.src = video.getAttribute("data-src");
        source.type = "video/mp4";
        video.setAttribute("autoplay", "");
        video.appendChild(source);

        video.classList.remove(clazz);
        video.classList.add("lazy-opacity");
        // video.parentNode.play();
        elements = document.querySelectorAll(elem);
      });
      if (elements.length === 0) {
      }
    }, 520);
  };
  window.addEventListener("load", function() {
    setup_for_width(mql, lazyload)(videos, "video.lazy-header", "lazy-header");
  });

  window.addEventListener("resize", function() {
    setup_for_width(mql, lazyload)(videos, "video.lazy-header", "lazy-header");
  });

  function setup_for_width(mql, fn) {
    function wrapper() {
      if (mql.matches) {
        if (this.flag) return;
        this.flag = true;
        fn.apply(this, arguments);
      }
    }

    wrapper.flag = false;
    return wrapper;
  }
})(window.jQuery);
