$(document).ready(function () {

//Hide every page of the form except the first one on load.
$("form").ready(function(){
$("#form2").hide();
});

//Activating form1
$("#page1").click(function(){
    $("#form1").show();
    $("#form2").hide();
});

//Activating form2
$("#page2").click(function(){
    $("#form1").hide();
    $("#form2").show();
});

});
