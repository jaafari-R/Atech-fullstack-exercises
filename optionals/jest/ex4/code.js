function validate(boolsArr) {
    let [trues, falses] = [0, 0];
    
    for(const b of boolsArr) {
        if(typeof b === "boolean") {
            if(b) {
                ++trues;
            }
            else {
                ++falses;
            }
        }
    }

    if(falses === 0 && trues === 0) {
        return {error: "Need at least one boolean"};
    }
    else if(trues > falses) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = {
    validate
}