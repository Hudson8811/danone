$(document).ready(function () {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");
});

$(document).ready(function () {
    $("#next-section-button").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 700);
    });
});