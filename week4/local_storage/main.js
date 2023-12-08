const wisdom = JSON.parse(localStorage.wisdom || "[]");
console.log(wisdom)
let wisdomIdCtr = 0;
initWisdom();

$("#add").click(function() {
    const userInput = $("input").val();

    addWisdom(userInput);

    if(wisdom.length % 2 === 0) {
        saveWisdom();
    }
});

$("#clear").click(function() {
    wisdom.splice(0);
    saveWisdom();
    $(".wisdom").remove();
})

$("body").on("click", "span", function() {
    const wisdomToRm = $(this).closest(".wisdom");
    wisdom.findIndex(w => w.id == wisdomToRm.attr("id"));
    wisdomToRm.remove();
})

function initWisdom() {
    wisdom.forEach(w => addWisdom(w.text));
}

function saveWisdom() {
    localStorage.wisdom = JSON.stringify(wisdom.map(w => { 
        return {text: w.text};
    }));
}

function addWisdom(text) {
    wisdom.push({id: ++wisdomIdCtr, text});
    console.log(wisdom)
    $("body").append($(`<div id=${wisdom[wisdom.length-1].id} class="wisdom"><h3><span>x </span>${text}</h3></div>`));
    $("span").css("color", "red")
}