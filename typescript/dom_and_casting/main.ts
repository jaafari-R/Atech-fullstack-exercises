const inputElement = document.getElementsByClassName("foo")[0] as HTMLInputElement;

inputElement.addEventListener('input', doX);

function doX(event: any) {
    const element = event.target as HTMLInputElement;
    console.log(element.value);
}
