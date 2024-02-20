function printStarSeries(num, count) {
    for(let i = 0; i < count; ++i) {
        for(let j = 0; j <= num; ++j)
            console.log("*".repeat(j));
        for(let j = num - 1; j >= 0; --j)
            console.log("*".repeat(j));
    }
}

printStarSeries(4, 2);
printStarSeries(1, 3);
