var inputElement = document.getElementsByClassName("foo")[0];
inputElement.addEventListener('input', doX);
function doX(event) {
    var element = event.target;
    console.log(element.value);
}
