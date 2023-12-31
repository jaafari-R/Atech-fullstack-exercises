const express = require("express");
const personRouter = require("./routes/personApi");
const { dbConnect } = require("./db/db-connect");

const PORT = 4200

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/people", personRouter);


async function main() {
    await dbConnect();

    app.listen(PORT, function () {
        console.log(`Running on port ${PORT}`)
    })
}

main();