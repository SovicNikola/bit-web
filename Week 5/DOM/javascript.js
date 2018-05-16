(
    function () {
        document.getElementById("second").className = "sc";
    }

)();
(
    function () {
        var array = document.querySelectorAll("li");
        for (i = 0; i < array.length; i++) {
            array[i].className = "gold";
        }
    }
)();
(
    function () {
        var array = document.querySelectorAll("#last li");
        for (i = 0; i < array.length; i++) {
            array[i].className = "red";
        }
    }
)();