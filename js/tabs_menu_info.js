!(function ($) {

    
    // tabs
    function MyTabs(wrapper, tabActive) {
        this.tabMenu = Array.prototype.slice.call(document.querySelector(wrapper).querySelector('.tabs-nav').children);
        this.tabContext = Array.prototype.slice.call(document.querySelector(wrapper).querySelector('.tabs-content').children);
        this.tabActive = tabActive || 0;
    }

    MyTabs.prototype.startActiveTab = function () {
        if (this.tabActive > this.tabMenu.length) {
            this.tabActive = this.tabMenu.length - 1;
        }
        if (this.tabActive < 0) {
            this.tabActive = 0;
        }
        this.tabMenu[this.tabActive].classList.add('is-active');
        this.tabContext[this.tabActive].classList.add('is-active');
        $(this.tabContext[this.tabActive]).fadeIn(100)

    }

    MyTabs.prototype.activeTab = function (index) {
        
        
        this.tabMenu[index].classList.add('is-active');
        this.tabContext[index].classList.add('is-active');
        $(this.tabContext[index]).fadeIn(400)
    }

    MyTabs.prototype.removeTab = function () {
        this.tabMenu.forEach(function (item) {
            item.classList.remove('is-active');
            // $(item).fadeOut()
        });
        this.tabContext.forEach(function (item) {
            item.classList.remove('is-active');
            $(item).fadeOut(0)
        });
    }

    MyTabs.prototype.showTabs = function () {
        var self = this;
        this.tabMenu.forEach(function (item, index) {
            item.addEventListener('click', function () {
                self.removeTab();
                self.activeTab(index);
                
            })
        })
    }

    MyTabs.prototype.init = function () {
        this.startActiveTab();
        this.showTabs();
    }
    // function select(){
    //     var item = $('.tabs-content__wrapper');
    //     item.slideUp();
    //     var self = this;
    //     $(document).on('click','.tabs-nav-mobile',function(){
    //         self.next().slideDown();
    //     })
    // }
    new MyTabs('.tabs', 0).init();
    // function setup_for_width(mql) {
    //     if (mql.matches) {
    //         if ($('.tabs').length > 0) {
    //             new MyTabs('.tabs', 0).init();
    //         }
    //     } else {
    //         $('.tabs-content__item').fadein();
    //         select();
    //     }
    // }
    
    // var mql = window.matchMedia("screen and (min-width: 768px)"); 
    
    // mql.addListener(setup_for_width); 
    
    // setup_for_width(mql); // Вызовем нашу функцию
})(window.jQuery);