$(".item").click(function() {
    if($(this).data().instock) {
        $('#cart').append("<p>" + this.innerHTML + "</p>")
    }
})