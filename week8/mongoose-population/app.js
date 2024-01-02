const { connectMongo } = require("./db/dbConnect");

async function main() {
    await connectMongo();
}

main();