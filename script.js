$(document).ready(function(){
    $("#hideButton").click(function(){
        $("#image").hide();
        $("#title").text("¡No tenemos ninguna imagen!");
        $("#titulo").text("¡No tenemos ninguna imagen!");
    });
    $("#showButton").click(function(){
        $("#image").show();
        $("#title").text("¡Mirá la siguiente imagen!");
        $("#titulo").text("¡Mirá la siguiente imagen!");
    });
});