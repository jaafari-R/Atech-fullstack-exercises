const posts = [
    {
        name: "Foofoo",
        text: "I am Foofoo"
    },
    {
        name: "Soosoo",
        text: "I am Soosoo"
    },
    {
        name: "Tootoo",
        text: "I am Tootoo"
    },
    {
        name: "Hoohoo",
        text: "I am Hoohoo"
    },
    {
        name: "Steve",
        text: "I am Steve"
    },
];

const render = () => {
    $("#posts").empty();
    for(let post of posts) {
        const post_content = `
            <div>
                <h4> ${post.name} </h4>
                <p> ${post.text} </p>
            </div>
        `;
        $("#posts").append(post_content);
    }
}

$("button").click(function() {
    posts.push({
        name: $("#name").val(),
        text: $("#text").val()
    })

    render()
});

render();