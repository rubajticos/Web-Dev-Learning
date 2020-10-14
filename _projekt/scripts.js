(function () {
    let tooltip = null;

    function registerTooltipListener() {
        const title = document.querySelectorAll("[title]");

        for (let i = 0; i < title.length; i++) {
            title[i].addEventListener("mouseenter", showToolTip, false);
            title[i].addEventListener("mouseleave", removeToolTip, false)
        }
    }

    function showToolTip(e) {
        const title = e.target.getAttribute("title");

        createTooltip(title, {
            w: e.target.offsetWidth,
            x: e.target.offsetLeft,
            y: e.target.offsetTop
        });
    }

    function createTooltip(text, options) {
        const div = document.createElement("div")

        div.textContent = text;
        div.className = "tooltip";
        document.body.appendChild(div);

        div.style.top = options.y + "px";
        div.style.left = options.x + "px";


        tooltip = div;
    }

    function removeToolTip() {
        tooltip.parentNode.removeChild(tooltip);
    }

    registerTooltipListener()

})();