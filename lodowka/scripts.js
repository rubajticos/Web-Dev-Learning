(function() {

    function handleActionButtonsDisplaying() {
        const generalActionButton = document.querySelector("div.action-button.action-button__general.always-visible");
        const actionButtonContainer = document.querySelector("div.action-button__container");

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

    function setAddTodoButton() {
        const actionButtonContainer = document.querySelector("div.action-button__container");
        const addTodoCardButton = actionButtonContainer.querySelector("div.action-button__todo");

        addTodoCardButton.addEventListener("click", addTodoCard);
    }

    function addTodoCard() {
        const actionButtonContainer = document.querySelector("#content");
        const todoCard = createTodoCard();
        todoCard.classList.add('box', 'todo-list');

        actionButtonContainer.appendChild(todoCard);
        console.log(todoCard);
    }

    function createTodoCard() {
        const todoCard = document.createElement("div");
        todoCard.classList.add('box', 'todo-list');

        const cardTitle = document.createElement("span");
        cardTitle.classList.add("todo-list__title");
        cardTitle.innerHTML = "Title"

        const itemsList = document.createElement("ul");

        const newItemButton = document.createElement("button");
        newItemButton.innerHTML = "+";

        todoCard.appendChild(cardTitle);
        todoCard.appendChild(itemsList);
        todoCard.appendChild(newItemButton);

        return todoCard;
    }

    handleActionButtonsDisplaying();
    setAddTodoButton();

})();