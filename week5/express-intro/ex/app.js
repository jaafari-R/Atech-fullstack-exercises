const express = require('express');
const { priceCheck, buyItem, applySale } = require('./store');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.get('/priceCheck/:itemName', function(request, response) {
    const itemName = request.params.itemName;
    response.send({price: priceCheck(itemName)});
});

app.get('/buy/:itemName', function(request, response) {
    console.log(request)
    const itemName = request.params.itemName;
    response.send(buyItem(itemName));
});

app.get('/sale', function(request, response) {
    const admin = request.query.admin === "true";
    applySale(admin)
    response.redirect('/')
});


app.listen(PORT, function() {
    console.log("Running server on port " + PORT);
});

