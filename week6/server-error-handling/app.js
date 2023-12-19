const express = require("express");
const router = require("./api");

const PORT = 3002;

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, (req,res) => {
    console.log("Server is running on port", PORT);
})