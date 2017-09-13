var galToLiter = function(number1) {
  return number1 * 3.785;
};

var literToGal = function(number2) {
  return number2 / 3.785;
};

var lbsToOz = function(number1) {
  return number1 / 16;
};

var ozToLbs = function(number2) {
  return number2 * 16;
};

var cupsToPints = function(number1) {
  return number1 * 2;
};

var pintsToCups = function(number2) {
  return number2 / 2;
};

var teaToTable = function(number1) {
  return number1 * 3;
};

var tableToTea = function(number2) {
  return number2 / 3;
};

$(document).ready(function(){
  $("button#buttonOne").click(function(){
    $("form#gallonsLiters").submit(function(event){
      event.preventDefault();
      var number1 = parseFloat($("input#gallon").val());
      var number2 = parseFloat($("input#liter").val());
      var resultOne = galToLiter (number1);
      $("span#resultGallon").text(resultOne);

      var resultTwo = literToGal (number2);
      $("span#resultLiter").text(resultTwo);

      $("span#resultGallon").click(function(event){
        event.preventDefault();
        $("#gformula").slideToggle();
      });
    });
  });

  $("button#buttonTwo").click(function(){
    $("form#lbsToOz").submit(function(event){
      event.preventDefault();
      var number1 = parseFloat($("input#lbs").val());
      var number2 = parseFloat($("input#oz").val());
      var resultOne = lbsToOz (number1);
      $("span#resultPound").text(resultOne);

      var resultTwo = ozToLbs (number2);
      $("span#resultOunce").text(resultTwo);
    });
  });

  $("button#buttonThree").click(function(){
    $("form#cupsToPints").submit(function(event){
      event.preventDefault();
      var number1 = parseFloat($("input#cups").val());
      var number2 = parseFloat($("input#pints").val());
      var resultOne = cupsToPints(number1);
      $("span#resultPint").text(resultOne);

      var resultTwo = pintsToCups(number2);
      $("span#resultCup").text(resultTwo);
    });
  });
  $("button#buttonFour").click(function(){
    $("form#spoons").submit(function(event){
      event.preventDefault();
      var number1 = parseFloat($("input#teasp").val());
      var number2 = parseFloat($("input#tblsp").val());
      var resultOne = teaToTable(number1);
      $("span#resultTeaspoon").text(resultOne);

      var resultTwo = tableToTea(number2);
      $("span#resultTablespoon").text(resultTwo);
    });
  });
});
