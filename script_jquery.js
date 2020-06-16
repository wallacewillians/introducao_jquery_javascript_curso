/* Outro maneira para saber se o documento esta pronto é,
substituindo o codigo abaixo pelo o $(function(){ */

$(function(params) {
    $("#l1").click(function (params) {
        $("#i1").hide();
        $("#i2").hide();
        $("#i3").hide();
        $("#i4").hide();
        $("#i1").show();
    })

    $("#l2").click(function (params) {
        $("#i1").hide();
        $("#i2").hide();
        $("#i3").hide();
        $("#i4").hide();
        $("#i2").show();
    })

    $("#l3").click(function (params) {
        $("#i1").hide();
        $("#i2").hide();
        $("#i3").hide();
        $("#i4").hide();
        $("#i3").show();
    })

    $("#l4").click(function (params) {
        $("#i1").hide();
        $("#i2").hide();
        $("#i3").hide();
        $("#i4").hide();
        $("#i4").show();
    })
})

$(document).ready(function(){
    $("#azul").click(function(){
        $("p").css("color", "blue");
        $("p").fadeOut("slow");
        $("p").delay(3000);
        $("p").fadeIn("slow");
    });

    $("#vermelho").click(function(){
        $("p").css("color", "red");
        $("#mensagem").text("Cor alterada!");
        $("#mensagem").css("color", "red");
        $("#mensagem").css("border", "1px solid red");
       // $("p").fadeOut();
       // $("p").delay(3000);
       // $("p").fadeIn();
    });
});