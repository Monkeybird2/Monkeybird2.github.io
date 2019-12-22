!(function ($) {

       //google maps

     function initMap() {
       var map;
       var pos = {lat: 40.017731, lng:  -105.252123};
       var opt = {
           center: pos,
           zoom: 12
       };

       var popupContent = `<div class="contacts_popup"> Здесь могло быть что то написано </div>`
       map = new google.maps.Map(document.querySelector('#google-maps'), opt);
       var marker = new google.maps.Marker({
           position: pos,
           map: map,
           title: "Убери мышку прочь",
           icon: './images/map@2x.png',
           animation: google.maps.Animation.DROP
       });
       infowindow = new google.maps.InfoWindow({
           content: popupContent
       });
       marker.addListener('click', function() {
           infowindow.open(map, marker);
       });
       // $.getJSON("./json/style.json", function(data) {
       //     map.setOptions({styles: data});
       // });
   }
   if($('.google-map').length > 0){
       initMap();

   }
   var tab = $('.tabs-maps__item ');
   function tabs(){
    var attr = $(this).data('tabs');
    if(attr === 'list'){
        $('.map').fadeOut();
        $('.map-list').fadeIn();
    }
    if(attr === 'map'){
        $('.map').fadeIn();
        $('.map-list').fadeOut();
    }
    tab.removeClass('active');
    $(this).addClass('active')

   }
    if(tab.length > 0){
        tab.on('click',tabs);

    }



 })(window.jQuery);
