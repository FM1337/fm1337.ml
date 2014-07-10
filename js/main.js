var initial = 0;

$(function() {
    progressBar = setInterval(update, 500);
});

function update() {
    if (initial === 10) {
        $("#title").html("Preparing oven for printing...");
        $("#derp").html("10%");
        $("#sex").html("Lets do this Texan Style");
    }
    if (initial === 20) {
        $("#title").html("Heating oven...");
        $("#derp").html("20%");
        $("#sex").html("Move that gear up!");
    }
    if (initial === 30) {
        $("#title").html("Putting in bacon...");
        $("#derp").html("30%");
        $("#sex").html("Need a dispenser here!");
    }
    if (initial === 40) {
        $("#title").html("Adding spice...");
        $("#derp").html("40%");
        $("#sex").html("Spy sappin my sentry!");
    }
    if (initial === 50) {
        $("#title").html("Crispifying the bacon...");
        $("#derp").html("50%");
        $("#sex").html("Nope.avi");
    }
    if (initial === 60) {
        $("#title").html("Turning oven off...");
       $("#derp").html("60%");
       $("#sex").html("Dispenser down!");
    }
    if (initial === 70) {
        $("#title").html("Cooling down bacon...");
        $("#derp").html("70%");
        $("#sex").html("Drunk on the battlefield ain't no way to be, son");
    }
    if (initial === 80) {
        $("#title").html("Preparing to print bacon...");
        $("#derp").html("80%");
        $("#sex").html("Dispenser goin up!");
    }
    if (initial === 90) {
        $("#title").html("Printing bacon...");
        $("#derp").html("90%");
        $("#sex").html("Spy sappin my dispenser!");
    }
    if (initial === 100) {
        clearInterval(progressBar);
        $("#title").html("Bacon printed");
        $("#derp").html("100%");
        $("#sex").html("Dispenser down!");
        $("#bacon").html('<center><img src="../img/bacon.png" width="70%"></center>');
    }
    initial = initial + 5;
    $(".progress-bar").css("width", initial + "%");
}