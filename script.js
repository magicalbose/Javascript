function goDark() {
    document.body.className = "dark";
}

function TypeAndScream(){
    var personName = document.getElementById("name").value;
    alert("I told you not to click it " + personName);
}

function FinishTheStory(){
    document.getElementById("story").innerHTML = "So I carefully searched the damp basement. There you are!";
}