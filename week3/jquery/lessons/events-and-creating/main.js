$("#blue-div").hover(function() {
    $(this).css('color', 'blue')
})

$("button").click(() => {
    alert($("#my-input").val());
})

$(".box").hover(function() {
    $(this).css('background-color', 'blue')
})

const testP = $('<p>a paragraph</p>');
testP.css('color', 'red');
// for(let i = 0; i < 5; ++i) {
//     $(".box").append(testP)
// }
$(".box").click(function() {
    // $(this).append(testP)
    $(this).append("<p>a paragraph</p>")
});