//========================================
//          HEADER ALERT FIXED
//========================================
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 50){
        $(".header-part").addClass("active");
    }else{
        $(".header-part").removeClass("active");
    }
});


//========================================
//        RESPONSIVE NAV SIDEBAR
//========================================
$('.header-menu').on('click', function(){
    $('body').css('overflow', 'hidden');
    $('.header-navbar').addClass('active');
    $('.navbar-close').on('click', function(){
        $('body').css('overflow', 'inherit');
        $('.header-navbar').removeClass('active');
    });
});
