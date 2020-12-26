var $status = $('.review_num');
var $slickElement = $('.review_slider');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.html('<p class="active_slid">' + i + '</p>' + '<span>/</span>' + '<p class="all_slid">' + slick.slideCount + '</p>');
});

$slickElement.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: $('.review_left'),
    nextArrow: $('.review_right'),
    customPaging: function(slider, i) {
        console.log(slider);
        return (i + 1) + '/' + slider.slideCount;
    }
});

$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

$(".menu_btn").on("click", function() {
    $("nav").toggleClass("active_menu");
});

$(".mob_box p").on("click", function() {
    $(this).siblings(".sub-menu").slideToggle(100);
});

$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});


$(".modal_feedback").submit(function(e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail.php",
        data: form_data,
        success: function(response) {
            console.log(response);
            $(".thank_click").click();
        },
        error: function(error) {
            $(".thank_click").click();
        }
    });
    return false;
});


$("#accordeon .acc-head").on("click", function() {
    $('#accordeon .acc-body').not($(this).next()).slideUp(150).parent().children(".acc-head").children(".acc_title").removeClass("red").siblings(".acc_btn").removeClass("plus");
    $(this).children(".acc_title").toggleClass("red").siblings(".acc_btn").toggleClass("plus").parent().next().slideToggle(150);
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});