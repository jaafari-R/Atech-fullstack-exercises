$(".generator").click(function() {
    const processorId = $(this).closest(".processor").attr("id");
    const computerId = $(this).closest(".computer").data("id");
    const bus = $(this).closest(".computer").find(".BUS").html();

    console.log("Processor ID:", processorId);
    console.log("Conputer's data-id:", computerId);
    console.log("BUS:", bus);
});

$(".validator").click(function() {
    const generatorText = $(this).closest(".computer").find(".generator").html();
    const mbText = $(this).closest(".computer").find(".MB").html();
    const qrs = [];
    $(this).closest(".computer").find(".QR").each((i, qr) => {
        qrs.push(qr.innerHTML);
    });

    console.log("Generator text:", generatorText);
    console.log("MB:", mbText);
    console.log("QRs:", qrs);
});