
$("button").on("click", function () {
    const address = $("#addr-input").val()
    const minPrice = $("#min-p-input").val()
    const maxPrice = $("#max-p-input").val()
    const minRooms = $("#min-r-input").val()
    const maxRooms = $("#max-r-input").val()
    const immediate = $("#immed-y")
    const parking = $("#park-y")

    const relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    const apartmentsTemplate = $("#apartments-template").html();
    const template = Handlebars.compile(apartmentsTemplate);
    const apartmentsHTML = template({apartments});
    $("#results").append(apartmentsHTML);
}

renderApts(apartments) //renders apartments when page loads
