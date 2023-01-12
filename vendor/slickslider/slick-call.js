// FOR PRICE CARD SLIDER
$('.price-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    fade: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-right dandik"></i>',
    nextArrow: '<i class="fas fa-arrow-left bamdik"></i>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.price-slider').slick('setPosition');
});


$('.blog-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    fade: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-arrow-right dandik"></i>',
    nextArrow: '<i class="fas fa-arrow-left bamdik"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
            }
        }
    ]
});