(function() {

    let todoId = 0;
    let todoLists = [];

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

        actionButtonContainer.appendChild(todoCard);
        console.log(todoCard);
    }

    function createTodoCard() {
        const todoList = {
            id: todoId++,
            title: 'TO-DO',
            items: []
        };

        const todoCard = document.createElement("div");
        todoCard.classList.add('box', 'todo-list');
        todoCard.setAttribute('todo-id', todoList.id);

        todoCard.innerHTML = `
        <span class="todo-list__title">${todoList.title}</span>
        <ul class="todo-list__items"></ul>`;

        const addItemButton = document.createElement("button")
        addItemButton.classList.add('todo_list__addItem');
        addItemButton.innerHTML = '+';
        addItemButton.addEventListener("click", event => {
            const todoListNode = event.target.parentElement;
            const todoListId = todoListNode.getAttribute("todo-id");
            const index = todoLists.findIndex(list => list.id === Number(todoListId));
            const todoList = todoLists[index];

            const todoItem = {
                id: Date.now(),
                parentId: todoList.id,
                text: "Item",
                checked: false
            };

            const itemNode = document.createElement("li");
            itemNode.innerHTML = todoItem.text;
            itemNode.setAttribute('todo-item-id', todoItem.id);

            const list = todoListNode.querySelector(".todo-list__items");
            list.appendChild(itemNode);
            todoList.items.push(todoItem);
            console.log(JSON.stringify(todoLists));
        });
        todoCard.append(addItemButton);

        todoLists.push(todoList);
        return todoCard;
    }

    handleActionButtonsDisplaying();
    setAddTodoButton();
})();