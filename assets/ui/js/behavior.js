$(document).ready(function () { 
    
        /*slider*/        
        $(".bxslider").bxSlider();
        /*slider galeri*/    
        $(".galeri-thumb").bxSlider({
            auto: false,            
            slideMargin: 15
        });
        $(".galeri1").bxSlider({
            pagerCustom: '#galeri1-thumb',
            auto: false,
            controls:false
        });
        $(".galeri2").bxSlider({
            pagerCustom: '#galeri2-thumb',
            auto: false,
            controls:false
        });
        
          
        $('#advert .adverts').click(function () {
                $('.more-item.advert').slideToggle("slow");
                $('.advert-mk .item-icon').click(function () {
                    $('.more-mk.advert').slideDown("slow");
                });
                $('.more-item.pr, .more-item.bc, .more-mk.pr, .more-mk.bc').slideUp("slow");
        });
    
        $('#bc .bcm').click(function () {
                $('.more-item.bc').slideToggle("slow");
                $('.advert-mk .item-icon').click(function () {
                    $('.more-mk.bc').slideDown("slow");
                });
                $('.more-item.pr, .more-item.advert, .more-mk.advert, .more-mk.pr').slideUp("slow");
        });
    
        $('#pr .prm').click(function () {
                $('.more-item.pr').slideToggle("slow");
                $('.advert-mk .item-icon').click(function () {
                    $('.more-mk.pr').slideDown("slow");
                });
                $('.more-item.advert, .more-item.bc,.more-mk.advert,.more-mk.bc').slideUp("slow");
        });
    
});