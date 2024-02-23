function print_numbers(phoneNumbers) {
    if (Array.isArray(phoneNumbers)) {
        console.log("Array:", phoneNumbers);
    }
    else if (typeof phoneNumbers == "number") {
        console.log("number:", phoneNumbers);
    }
    else {
        console.log("string:", phoneNumbers);
    }
}
print_numbers("0521231122");
print_numbers(["0521231122", "0523212211"]);
print_numbers(972521231122);
print_numbers([972521231122, 972523212211]);
