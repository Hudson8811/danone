$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");
});

$(document).ready(function () {
    $("#next-section-button").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});

new WOW().init();

$('.btn').click(function () {
    $('nav').toggleClass('active');
});

var swiper = new Swiper('.swiper-container', {
    init: false,
    direction: 'horizontal',
    spaceBetween: 200,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
    },
})

function resizeScrenn() {
    if ($(window).width() <= 751) {
        swiper.init()
    } else {
        swiper.destroy();
    }
}

resizeScrenn();
$(window).resize(resizeScrenn);