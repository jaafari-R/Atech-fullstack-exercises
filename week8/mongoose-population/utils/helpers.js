function getNonDuplicatesByKey(original, extension, key) {
    const nonDuplicates = [];
    extension.forEach(item => {
        if(!original.some(oItem => oItem[key] === item[key]))
            nonDuplicates.push(item);
    })
    return nonDuplicates;
}

module.exports = {
    getNonDuplicatesByKey
}