const express = require("express");
const { connectMongo } = require("./db/dbConnect");
const solarSystemRouter = require("./routes/solarSystemApi");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use("/solar-system", solarSystemRouter);

async function main() {
    await connectMongo();

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    });
}

main();