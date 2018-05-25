var div = $('<div>');
$('body').append(div);
div.addClass('gallery')

var array = ['./1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
$.each(array, function (index, element) {
    var img = $('<img>');
    var randomWidth = parseInt(((500 - 250) * Math.random() + 250));
    img.attr('src', this);
    img.attr('width', randomWidth + 'px');
    $('img').css({
        'margin-right': '15px'
    })
    $('div.gallery').append(img);



})




$(document).ready(function () {
    var p = $('<p>');
    p.text('Gallery');
    $('div.gallery').before(p);
    $('p').css({
        'font-size': '33px',
        'text-align': 'center'
    });


    var size = $('img')
    $('img').each(function (index, element) {
        if ($(this).width() > 350) {
            $(this).css('border', '13px solid red');
            return false;
        }
    });
});