!(function ($) {
    var filterBlocks = $('.filters-mobile__form');
    var mql = window.matchMedia("screen and (max-width: 768px)");


    function checkClickOnSelect(e) {
        var filterBlock = document.querySelector('.filters');
        var box = filterBlock.getBoundingClientRect();

        return (e.clientX > box.right || e.clientX < box.left || e.clientY > box.bottom || e.clientY < box.top);
    }


    function closeFilter(e) {
        if (checkClickOnSelect(e)) {
            filterBlocks.removeClass('is-active');
            $('.filters').fadeOut(200);
            $(document).off('click', closeFilter);
        }

    }


    function toggleFilter() {
        filterBlocks.toggleClass('is-active');
        $('.filters').fadeToggle(200);
        $(document).on('click', closeFilter);
    }


    var selects = Array.prototype.slice.call(document.querySelectorAll('.js-sort-select'));
    if (selects.length > 0) {

        selects.forEach(function (select) {
            easydropdown(select, {
                behavior: {
                    useNativeUiOnMobile: false,
                    maxVisibleItems: 10,
                    // maxVisibleOptions: 10,
                },
                callbacks: {
                    onOpen: function () {
                        if (mql.matches) {
                            if (filterBlocks.hasClass('is-active')) {
                                filterBlocks.removeClass('is-active');
                                $('.filters').fadeOut(200);
                                $(document).off('click', closeFilter);
                            }
                        }
                    }
                },
                classNames: {
                    root: 'edd-root js-calc-select'
                },


            })
        })

    }

    function setupForwidth(mql) {
        if (mql.matches) {
            $(document).on('click', '.filters-mobile__form', toggleFilter);
            $('.filters').fadeOut(200);


        } else {
            filterBlocks.removeClass('is-active');
            $(document).off('click', closeFilter);
            $(document).off('click', '.filters-mobile__form', toggleFilter);
            $('.filters').fadeIn(200);
        }
    }


    mql.addListener(setupForwidth); // Добавим прослушку на смену результата

    setupForwidth(mql); // Вызовем нашу функцию

    // input range
    var filterForms = document.forms.filterForm;

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        skin: "round",
        hide_from_to: false,

        onStart: function (data) {
            // Called right after range slider instance initialised

            // console.log(data.input);        // jQuery-link to input
            // console.log(data.slider);       // jQuery-link to range sliders container
            console.log(data.min);          // MIN value
            // console.log(data.max);          // MAX values
            // console.log(data.from);         // FROM value
            // console.log(data.from_percent); // FROM value in percent
            // console.log(data.from_value);   // FROM index in values array (if used)
            // console.log(data.to);           // TO value
            // console.log(data.to_percent);   // TO value in percent
            // console.log(data.to_value);     // TO index in values array (if used)
            // console.log(data.min_pretty);   // MIN prettified (if used)
            // console.log(data.max_pretty);   // MAX prettified (if used)
            // console.log(data.from_pretty);  // FROM prettified (if used)
            // console.log(data.to_pretty);    // TO prettified (if used)
        },

        onChange: function (data) {
            // Called every time handle position is changed
            // debugger
            console.log(data.from);
        },

        onFinish: function (data) {
            // Called then action is done and mouse is released

            console.log(data.to);
        },

        onUpdate: function (data) {
            // Called then slider is changed using Update public method

            console.log(data.from_percent);
        }
    });


    var rangeField = $(".js-range-slider").data("ionRangeSlider"); // получаем экземпляр range inputa

    var filtersFromField = filterForms.filtersFrom;
    var filtersToField = filterForms.filtersTo;

    // инпуты
    filtersFromField.addEventListener('change', function () {
        rangeField.update({
            from: this.value,
        });
    });

    filtersToField.addEventListener('change', function () {
        rangeField.update({
            to: this.value,
        });
    });


    // counter for filters mobile
    var countChecked = 0;

    var countView = $('.js-filters-count');
    var btnReset = $('.js-filters-reset');
    for (var i = 0; i < filterForms.elements.length; i++) {
        if (filterForms.elements[i].type === "checkbox") {
            filterForms.elements[i].addEventListener('change', function () {
                if (this.checked) {
                    countChecked += 1;
                } else {
                    countChecked -= 1;
                }
                if (countChecked > 0) {
                    btnReset.css('display', 'block');
                    countView.text(countChecked).css('display', 'block');
                } else {
                    countView.css('display', 'none');
                    btnReset.css('display', 'none');
                }
            });

        }
    }


    function resetFilters() {
        btnReset.css('display', 'none');
        countView.css('display', 'none');
        countChecked = 0;
    }

    btnReset.on('click', resetFilters);

})(window.jQuery);
