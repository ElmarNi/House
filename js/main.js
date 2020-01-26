$(document).ready(function () {
    $("header #open-menu").click(function (e) { 
        e.preventDefault();
        $("#menu").css("z-index", "99999").addClass("active");;
        $("body").addClass("overflow-hidden");
    });
    $("#menu #close-menu").click(function(e){
        e.preventDefault();
        $("#menu").css("z-index", "0").removeClass("active");;
        $("body").removeClass("overflow-hidden");
    })
});