var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");

myForm.addEventListener(
    "submit", function (event) {
        event.preventDefault();
        createItem(myInput.value)
    })

function createItem(inputItems) {
    var item = `<li>${inputItems}   <button onclick = "deleteElement(this)" >Delete this item</button> </li>`
    
    myItem.insertAdjacentHTML("beforeend", item)
    myInput.value = ""
    myInput.focus()
}

function deleteElement(ElementToDelete) {
    ElementToDelete.parentElement.remove()
}