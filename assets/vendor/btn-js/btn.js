$(function () {
    $("#buttonCV").click(function () {
        $("#buttonCV").addClass("onclic", 250, validate);
    });

    function validate() {
        setTimeout(function () {
            $("#buttonCV").removeClass("onclic");
            $("#buttonCV").addClass("validate", 450, callback);
        }, 2250);
    }
    function callback() {
        setTimeout(function () {
            $("#buttonCV").removeClass("validate");
            window.open("https://drive.google.com/file/d/1uMSKclyBLQxi6ZsvLwTurzxMXXe1B-Vs/view?usp=sharing", '_blank')
        }, 1250);
    }
});