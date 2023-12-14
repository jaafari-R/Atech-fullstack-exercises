const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
];

const priceCheck = (itemName) => {
    item = store.find(item => item.name == itemName);
    return item ? item.price : null;
}

const buyItem = (itemName) => {
    const item = store.find(item => item.name == itemName);
    if(item && item.inventory) {
        item.inventory--;
        return `Congratulations, you’ve just bought ${itemName} for ${item.price}.`;
    }
    return `No ${itemName} left in stock :(`;
}

const applySale = (admin) => {
    if(!admin) {
        return;
    }
    store.forEach(item => item.price = item.inventory > 10 ? item.price / 2 : item.price);
    console.log(store);
}

module.exports = {
    priceCheck,
    buyItem,
    applySale
};