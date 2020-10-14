(function () {

    function showToolTip() {
        console.log("Show Tooltip");
    }

    function removeToolTip() {
        console.log("Remove Tooltip");
    }

    function registerTooltipListener() {
        const title = document.querySelectorAll("[title]");

        for (let i = 0; i < title.length; i++) {
            title[i].addEventListener("mouseenter", showToolTip, false);
            title[i].addEventListener("mouseleave", removeToolTip, false)
        }
    }

    registerTooltipListener()

})();