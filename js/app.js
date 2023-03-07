jQuery('document').ready(function(e) {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    
    $(window).scroll(function() {
    if ($(this).scrollTop() > 0){
        $('.header').addClass("sticky");
        $('.section-header').addClass("sticky_section");
        $('.section-main-nav-items a').css("color", "black");
        $('.btn-white').addClass('btn-sticky')
        $('.section-logo-img img').attr("src", '../img/gymko_logo_transperent.webp')
        $('.underline-white').addClass('underline')
    } else{
        $('.header').removeClass("sticky");
        $('.section-header').removeClass("sticky_section");
        $('.section-main-nav-items a').css("color", "white");
        $('.btn-white').removeClass('btn-sticky')
        $('.section-logo-img img').attr("src", '../img/gymko_logo_white.webp')
        $('.underline-white').removeClass('underline')
    }
    });

    $('.logo-img img').click(function(){
        window.location.href = 'index.html'
    });
    $('.section-logo-img img').click(function(){
        window.location.href = 'index.html'
    });
})