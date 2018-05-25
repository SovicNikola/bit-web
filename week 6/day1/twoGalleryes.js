var array1 = ['1.jpg', '2.jpg', '3.jpg'];
var array2 = ['4.jpg', '5.jpg', '6.jpg'];


// var div2 = $('<div>');
// $('body').append(div2);
// div2.addClass('drugiDiv');

function picturesIn(array, x) {
    var div = $('<div>');
    $('body').append(div);
    div.addClass(x + 'Div');
    $.each(array, function (index, element) {
        var img = $('<img>');
        img.attr('src', this);
        img.attr('width', '33%');
        $('div.' + x + 'Div').append(img);
    })

}




$(document).ready(function () {
    picturesIn(array1, 'prvi');
    $($('img')[1]).addClass('selected');
    picturesIn(array2, 'drugi');
    var newSelElement = $('.selected').parent().next().children();
    function remove() {
        $('.selected').removeClass('selected');
        $(newSelElement[1]).addClass('selected');
    }
    setTimeout(remove, 1000);
});
