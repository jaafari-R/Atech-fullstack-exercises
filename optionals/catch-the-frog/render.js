const FROG_HTML = '<i class="fa-solid fa-frog frog"></i>'

class Renderer {
    constructor() {
        this.frogContainer = $("#field");
    }

    renderFrog() {
        this.frogContainer.append($(FROG_HTML));
    }
}