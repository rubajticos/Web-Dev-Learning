(function() {

    function handleActionButtonsDisplaying() {
        const generalActionButton = document.querySelector("div.action-button.action-button__general.always-visible");
        const actionButtonContainer = document.querySelector("div.action-button__container");

        console.log(generalActionButton);

        generalActionButton.addEventListener("mouseover", showActionButtons);
        actionButtonContainer.addEventListener("mouseleave", hideActionButtons);

    }

    function showActionButtons() {
        const actionButtonContainer = document.querySelector("div.action-button__container");
        const actionButtons = actionButtonContainer.querySelectorAll(".action-button")

        actionButtons.forEach(btn => btn.classList.remove("hidden"));
    }

    function hideActionButtons() {
        const actionButtonContainer = document.querySelector("div.action-button__container");
        const actionButtons = actionButtonContainer.querySelectorAll(".action-button")

        actionButtons.forEach(btn => {
            if (!btn.classList.contains("always-visible")) {
                btn.classList.add("hidden");
            }
        })
    }

    handleActionButtonsDisplaying();

})();