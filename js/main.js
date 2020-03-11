$(document).ready(function () {
    $("header #open-menu").click(function (e) {
        e.preventDefault();
        $("#menu").css("z-index", "99999").addClass("active");;
        $("body").addClass("overflow-hidden");
    });
    $("#menu #close-menu").click(function (e) {
        e.preventDefault();
        $("#menu").css("z-index", "0").removeClass("active");;
        $("body").removeClass("overflow-hidden");
    })
    $("#contact-form form .input-wrapper .custom-input").focus(function (e) {
        e.preventDefault();
        for (let i = 0; i < 101; i++) {
            $(this).next().css("width", `${i}%`)
        }
    })
    $("#contact-form form .input-wrapper .custom-input").focusout(function () {
        $("#contact-form form .input-wrapper .bottom-line").css("width", `0%`)
    })
});