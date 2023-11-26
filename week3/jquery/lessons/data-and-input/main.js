$("#my-input").val("Terabyte")

const color = $("div").data().color  
const name = $("div").data().name  
console.log(color) //prints #2980b9
console.log(name)


// ---------------------------------

const barcode = $('#item').data().barcode;
const expireDate = $('#item').data().expirationdate;
console.log(`The item with barcode ${barcode} will expire on ${expireDate}`);
