$('li:first').addClass('bottomBorder');
// $('li').addClass('upperText');
$('li.active').addClass('fontColor');
// $('li:eq(2)').addClass('backColor');
var list = $('li');
var middleIndex = (list.length - 1) / 2;
$($('li')[middleIndex]).addClass('backColor');
var upperText = $('li:first').text().toUpperCase();
$('li:first').text(upperText);
$('li:last').hide().delay(1500).fadeIn(3000);