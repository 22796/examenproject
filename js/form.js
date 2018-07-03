$(document).ready(function () {

//date picker
  $(document).ready(function(){
  $('.datepicker').datepicker();
});

//form 2 leerwegen
$('#leerwegOptions').change(function() {
    $selectValue = $('#leerwegOptions').val();
    $('.form2Option').slideUp();
    $('.form2Option').eq($selectValue).slideDown();
});

//Form 3 pickers
$(document).ready(function(){
  $('select').formSelect();
});

//mouse pointer
$('.sideNav>p').css('cursor', 'pointer');

//Hide every page of the form except the first one on load.
$("form").ready(function(){
$("#page1").css("color", "black");
$("#form2").hide();
$("#form3").hide();
$("#form4").hide();
$("#form5").hide();
$("#nextButton2").hide();
$("#nextButton3").hide();
$("#nextButton4").hide();
$("#nextButton5").hide();
});

$goToPage2 = function(){
  $("#form1").show();
  $("#form2").hide();
  $("#form3").hide();
  $("#form4").hide();
  $("#form5").hide();
  $("#page1").css("color", "black");
  $("#page2").css("color", "white");
  $("#page3").css("color", "white");
  $("#page4").css("color", "white");
  $("#page5").css("color", "white");
  $("#nextButton1").show();
  $("#nextButton2").hide();
  $("#nextButton3").hide();
  $("#nextButton4").hide();
  $("#nextButton5").hide();
}

$goToPage1 = function(){
  $("#form1").hide();
  $("#form2").show();
  $("#form3").hide();
  $("#form4").hide();
  $("#form5").hide();
  $("#page1").css("color", "white");
  $("#page2").css("color", "black");
  $("#page3").css("color", "white");
  $("#page4").css("color", "white");
  $("#page5").css("color", "white");
  $("#nextButton1").hide();
  $("#nextButton2").show();
  $("#nextButton3").hide();
  $("#nextButton4").hide();
  $("#nextButton5").hide();
}

$goToPage3 = function(){
  $("#form1").hide();
  $("#form2").hide();
  $("#form3").show();
  $("#form4").hide();
  $("#form5").hide();
  $("#page1").css("color", "white");
  $("#page2").css("color", "white");
  $("#page3").css("color", "black");
  $("#page4").css("color", "white");
  $("#page5").css("color", "white");
  $("#nextButton1").hide();
  $("#nextButton2").hide();
  $("#nextButton3").show();
  $("#nextButton4").hide();
  $("#nextButton5").hide();
}

$goToPage4 = function(){
  $("#form1").hide();
  $("#form2").hide();
  $("#form3").hide();
  $("#form4").show();
  $("#form5").hide();
  $("#page1").css("color", "white");
  $("#page2").css("color", "white");
  $("#page3").css("color", "white");
  $("#page4").css("color", "black");
  $("#page5").css("color", "white");
  $("#nextButton1").hide();
  $("#nextButton2").hide();
  $("#nextButton3").hide();
  $("#nextButton4").show();
  $("#nextButton5").hide();
}

$goToPage5 = function(){
  $("#form1").hide();
  $("#form2").hide();
  $("#form3").hide();
  $("#form4").hide();
  $("#form5").show();
  $("#page1").css("color", "white");
  $("#page2").css("color", "white");
  $("#page3").css("color", "white");
  $("#page4").css("color", "white");
  $("#page5").css("color", "black");
  $("#nextButton1").hide();
  $("#nextButton2").hide();
  $("#nextButton3").hide();
  $("#nextButton4").hide();
  $("#nextButton5").show();
}

//going to next page with the buttons.
$("#nextButton1").click(function(){
  $goToPage1();
});

$("#nextButton2").click(function(){
  $goToPage3();
});

$("#nextButton3").click(function(){
  $goToPage4();
});

$("#nextButton4").click(function(){
  $goToPage5();
});

//Activating form1 with the navigation.
$("#page1").click(function(){
  $goToPage2();
});

//Activating form2
$("#page2").click(function(){
  $goToPage1();
});

//Activating form3 with the navigation.
$("#page3").click(function(){
  $goToPage3();
});

//Activating form4 with the navigation.
$("#page4").click(function(){
  $goToPage4();
});

//Activating form5 with the navigation.
$("#page5").click(function(){
  $goToPage5();
});

});
