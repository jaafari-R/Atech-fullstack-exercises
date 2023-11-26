$("button").click(function() {
    if($("input").val()) {
        $("ul").append("<li class='name'>" + $("input").val() + "</li>")
        $(".name").click(function() {
            this.remove();
        })
        $("input").val("")
    }
});