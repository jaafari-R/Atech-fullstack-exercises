function displayObjectInHTML(obj) {
    let html = "";
    // closing tag
    html += "<" + obj.element + ">";

    if(Array.isArray(obj.content)) {
        for(let child of obj.content) {
            html += displayObjectInHTML(child);
        }
    }
    else if(typeof obj.content === "object") {
        html += displayObjectInHTML(obj.content);
    }
    else {
        html += obj.content;
    }

    // openning tag
    html += "</" + obj.element + ">";
    return html;
}

// Test with an object of your choice
const div = {
    element: "div",
    content: [
        {
            element: "h1",
            content: "Hello"
        },
        {
            element: "h2",
            content: "Bye"
        }
    ]
    ,
}

console.log(displayObjectInHTML(div));