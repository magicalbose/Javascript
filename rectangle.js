let div = document.querySelector('.rect');

//buttons

function ChangeToCircle() {
    div.style.borderRadius = "50%"
}
function Hide() {
    div.style.display = "none";
}
function Show() {
    div.style.display = "block";
}

//div var

div.onmouseenter = function () {
    div.style.background = "red";
}
div.onmouseout = function () {
    div.style.background = "none";
}