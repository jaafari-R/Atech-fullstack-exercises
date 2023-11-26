const hello = $("h1");
const redDiv = $(".red-div");
const brownDiv = $("#brown-div");
const firstLi = $('ul li:first-child');
const secondLi = $('ul li:nth-child(2)');

hello.css({
    'color': 'blue'
});

redDiv.css({
    'color': 'red'
});

brownDiv.css({
    'color': 'brown'
});

firstLi.css({
    'color': 'green'
});

secondLi.css({
    'color': 'pink'
});


// ----------------------------------------

$(".b1").addClass("box");
$(".b2").addClass("box");
