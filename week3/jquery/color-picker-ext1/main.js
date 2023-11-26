for(let span of $("span")) {
    console.log(span)
    const color = $(span).data().color;
    span.style.backgroundColor = color;
}

$("span").click(function() {
    const color = $(this).data().color;
    $(".box")[0].style.backgroundColor = color;
});