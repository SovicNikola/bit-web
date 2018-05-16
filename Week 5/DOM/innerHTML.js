
// function DropdownList(array, div) {
//     var dropdown = document.createElement('select');
//     div.appendChild(dropdown);
//     for (i = 0; i < array.length; i++) {
//         var option = document.createElement('option');
//         var text = document.createTextNode(array[i]);
//         option.appendChild(text);
//         dropdown.appendChild(option);
//     }
// };

function DropdownList(array, div) {
    div.innerHTML = "<select></select>";

    for (i = 0; i < array.length; i++) {
        div.firstChild.innerHTML += "<option>" + array[i] + "</option>";
    }
};
var prviDiv = document.querySelector('div');
var array = ['Barcelona', 'Real Madrid', 'Atletiko'];
var DrugiDiv = document.querySelector('div:last-of-type')
DropdownList(array, prviDiv);
DropdownList(array, DrugiDiv);


