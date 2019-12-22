!(function($) {
  new Swiper(".one-card__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    watchOverflow: true,
    pagination: {
      el: ".one-card__slider-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true
    }
  });

  
  function Counter(wrapper) {
    this.count = 1;
    this.wrapper = wrapper;
    this.input = this.wrapper.querySelector(".card-calc__field");
    this.add = this.wrapper.querySelector(".card-calc__btn-plus");
    this.value = this.wrapper.querySelector(".card-calc__value");
    this.fieldValue = this.wrapper.querySelector(".card-calc__field-value");
    this.firstCost = parseInt(this.fieldValue.value);
    this.remove = this.wrapper.querySelector(".card-calc__btn-minus");
    this.init();
  }
  Counter.prototype.addCount = function() {
    if (this.count >= 99) {
      return;
    }
    this.count++;
    this.fieldValue.value = parseInt(this.fieldValue.value) + this.firstCost;

    this.value.innerText = this.fieldValue.value + " ₽";
    this.input.value = this.count;
  };
  Counter.prototype.removeCount = function() {
    if (this.count <= 1) {
      return;
    }
    this.count--;
    this.fieldValue.value = parseInt(this.fieldValue.value) - this.firstCost;

    this.value.innerText = this.fieldValue.value + " ₽";
    this.input.value = this.count;
  };
  Counter.prototype.init = function() {
    this.add.addEventListener("click", this.addCount.bind(this));
    this.remove.addEventListener("click", this.removeCount.bind(this));
  };

  var cardCalc = Array.prototype.slice.call(
    document.querySelectorAll(".js-card-calc")
  );

  if (cardCalc.length > 0) {
    cardCalc.forEach(function(calc) {
      new Counter(calc);
    });
  }
  // var count = new Counter('.one-card__calc');
})(window.jQuery);
