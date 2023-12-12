const complainTypes = require("./consts");

function handleComplaint(complaint) {
    switch(complaint.type) {
        case complainTypes.FINANCE:
            console.log("Money doesn’t grow on trees, you know.");
            break;
        case complainTypes.EMOTIONS:
            console.log("It’ll pass, as all things do, with time.");
            break;
        case complainTypes.WEATHER:
            console.log("It is the way of nature. Not much to be done.");
            break;
        }
}

module.exports = handleComplaint;