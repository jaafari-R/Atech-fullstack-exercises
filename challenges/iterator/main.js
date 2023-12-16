const myObject = {
    size: 0,
    [Symbol.iterator]: function*(){
        let i = 0;
        while(i < this.size) {
            if(this[i] % 2) {
                ++i;
                continue;
            }
            yield this[i++];
        }
    },
    // [Symbol.iterator]: function() {
    //     let i = 1;
    //     return {
    //         next: () => {
    //             if(i > this.size) {
    //                 return {
    //                     value: undefined,
    //                     done: true
    //                 }
    //             }
    //             return {
    //                 value: this[i++],
    //                 done: false
    //             }
    //         }
    //     }
    // },
    push: function(val) {
        this[this.size] = val;
        ++this.size;
    }
}

myObject.push(1);
myObject.push(2);
myObject.push(3);
myObject.push(55);
myObject.push(10008);
for (let x of myObject) {
    console.log(x);
}