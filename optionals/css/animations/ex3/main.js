const pages = $("#pages");

$("#expand").click(function() {
    console.log("HI")
    if(pages.hasClass("active")) {
        pages.addClass("inactive")
        pages.removeClass("active")
    }
    else {
        pages.addClass("active")
        pages.removeClass("inactive")
    }
})