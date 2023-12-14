let Money = 1800;
displayMoney();

const PRICE_DIV_SELECTOR = "#price-check"
const BUY_DIV_SELECTOR = "#buy";

const findPriceButton = $(PRICE_DIV_SELECTOR + " > button");
const priceItemNameInput = $(PRICE_DIV_SELECTOR + " > input");
const priceHeader = $(PRICE_DIV_SELECTOR + " > h4");

const buyButton = $(BUY_DIV_SELECTOR + " > button");
const buyItemNameInput = $(BUY_DIV_SELECTOR + " > input");
const buyHeader = $(BUY_DIV_SELECTOR + " > h4");


findPriceButton.click(function() {
    const itemName = priceItemNameInput.val();
    $.get("/priceCheck/" + itemName)
    .then((item) => {
        priceHeader.text(`${item.price}`);
    });
})

buyButton.click(function() {
    const itemName = buyItemNameInput.val();
    // check if affordable
    $.get("/priceCheck/" + itemName)
    .then((item) => {
        const price = item.price;
        if(price > Money) {
            buyHeader.text("Get a job bruh, you broke af")
            return;
        }
        // buy
        $.get("/buy/" + itemName)
        .then((item) => {
            buyHeader.text(JSON.stringify(item))
            Money -= price;
            displayMoney();
        })
    });
})

////////////////////////////////////////

let lastPrice;
const ITEM_NAME = "chair";
$.get("/priceCheck/" + ITEM_NAME)
.then((item) => {
    lastPrice = item.price;
});
setInterval(() => {
    $.get("/priceCheck/" + ITEM_NAME)
    .then((item) => {
        const newPrice = item.price;

        // check price change
        if(newPrice === lastPrice) {
            console.log("still waiting for the price to drop...");
            return;
        }

        // buy item
        $.get("/buy/" + ITEM_NAME)
        .then((item) => {
            buyHeader.text(JSON.stringify(item))
            Money -= newPrice;
            console.log("bought chair for less");
            displayMoney();
        })
        lastPrice = newPrice;
    }); 
}, 3000);

////////////////////////////////////////

function displayMoney() {
    $("#money").text(`Money: ${Money}`);
}

