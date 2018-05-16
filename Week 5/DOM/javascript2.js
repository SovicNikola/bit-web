(
    function () {

        var crveni = document.querySelector(".active");
        crveni.className = "";
        var prvi = crveni.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.nextElementSibling;
        prvi.className = "active";
    }
)();