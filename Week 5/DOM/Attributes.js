var input = document.querySelectorAll("input");

function OnClick() {
    for (i = 0; i < input.length; i++) {
        if (input[i].hasAttribute("required") && input[i].value == "") {
            input[i].classList.add("red");
        }
    }
}