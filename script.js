
setInterval(changeColor, 2000);
function changeColor() {
    var x = document.getElementById("tittle");

    if (x.style.color == "red")
        x.style.color = "green";
        else if (x.style.color == "green")
        x.style.color = "blue";
        else if (x.style.color == "blue")
        x.style.color = "red";
    else x.style.color = "red"

}
