cart = {}; // {stockName: {element, cnt}}

function renderStockText(stockType) {
    const stockText = stockType + 
        (cart[stockType].count > 1 ? " x" + String(cart[stockType].count) : "");

    $(cart[stockType].element).text(stockText);
}

function addStockClick(stockType) {
    $(cart[stockType].element).click(function() {
        if(cart[stockType].count == 1) {
            cart[stockType].element.remove();
            delete cart[stockType];
        }
        else {
            --cart[stockType].count;
            renderStockText(stockType);
        }
    });
}

$(".item").click(function() {
    if($(this).data().instock) {
        const stockType = this.innerHTML;

        if(cart[stockType]) {
            ++cart[stockType].count;
        }
        else {
            cart[stockType] = {
                element: $("<p'></p>"),
                count: 1
            };
            $('#cart').append(cart[stockType].element)
            addStockClick(stockType);
        }
        renderStockText(stockType);
    }
});