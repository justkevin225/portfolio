$(function () {
    $("#button").click(function () {
        $("#button").addClass("onclic", 250, validate);
    });

    function validate() {
        setTimeout(function () {
            $("#button").removeClass("onclic");
            $("#button").addClass("validate", 450, callback);
        }, 2250);
    }
    function callback() {
        setTimeout(function () {
            $("#button").removeClass("validate");
            window.open("https://github.com/justkevin225/About-me/blob/main/MON%20CV.pdf", '_blank')
        }, 1250);
    }
});