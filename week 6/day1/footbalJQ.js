var counter = 0;
function move(event) {

    var x = event.clientX - 50;
    var y = event.clientY - 50;
    $('#player').offset({ top: y, left: x })
};

$('body').on('click', move);


$('#stop').on('click', function () {

    if (counter % 2 == 0) {
        $('body').off('click', move);
    } else {
        event.stopPropagation();
        $('body').on('click', move);
    }
    counter++
});

// $('#kreni').on('click', function () {
//     event.stopPropagation();
//     $('body').on('click', move);
// });