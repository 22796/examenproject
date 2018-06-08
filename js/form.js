$(document).ready(function () {

//Hide every page of the form except the first one on load.
$("form").ready(function(){
$("#page1").css("color", "black");
$("#form2").hide();
$("#form3").hide();
$("#nextButton2").hide();
$("#nextButton3").hide();
});

$goToPage2 = function(){
  $("#form1").show();
  $("#form2").hide();
  $("#form3").hide();
  $("#page1").css("color", "black");
  $("#page2").css("color", "white");
  $("#page3").css("color", "white");
  $("#nextButton1").show();
  $("#nextButton2").hide();
  $("#nextButton3").hide();
}

$goToPage1 = function(){
  $("#form1").hide();
  $("#form2").show();
  $("#form3").hide();
  $("#page1").css("color", "white");
  $("#page2").css("color", "black");
  $("#page3").css("color", "white");
  $("#nextButton1").hide();
  $("#nextButton2").show();
  $("#nextButton3").hide();
}

$goToPage3 = function(){
  $("#form1").hide();
  $("#form2").hide();
  $("#form3").show();
  $("#page1").css("color", "white");
  $("#page2").css("color", "white");
  $("#page3").css("color", "black");
  $("#nextButton1").hide();
  $("#nextButton2").hide();
  $("#nextButton3").show();
}

//going to next page with the buttons.
$("#nextButton1").click(function(){
  $goToPage1();
});

$("#nextButton2").click(function(){
  $goToPage3();
});

//Activating form1 with the navigation.
$("#page1").click(function(){
  $goToPage2();
});

//Activating form2
$("#page2").click(function(){
  $goToPage1();
});

$("#page3").click(function(){
  $goToPage3();
});

});
