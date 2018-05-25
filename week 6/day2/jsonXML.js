var button = document.querySelector('.button');
button.addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var unos = document.querySelector('input');
    request.open('GET', 'http://api.ipstack.com/' + unos.value + '?output=xml&access_key=66f0403b5870e87ee670adb5fa81c3a6');

    request.onload = function () {
        if (request.status >= 200 && request.status <= 300) {

            console.log(request.responseText);

        }
    };
    request.send();
});
