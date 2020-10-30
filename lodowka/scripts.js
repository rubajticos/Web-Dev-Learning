(function () {
  let todoId = 0;
  let todoLists = [];

  function handleActionButtonsDisplaying() {
    const generalActionButton = document.querySelector(
      "div.action-button.action-button__general.always-visible"
    );
    const actionButtonContainer = document.querySelector(
      "div.action-button__container"
    );

    generalActionButton.addEventListener("mouseover", showActionButtons);
    actionButtonContainer.addEventListener("mouseleave", hideActionButtons);
  }

  function showActionButtons() {
    const actionButtonContainer = document.querySelector(
      "div.action-button__container"
    );
    const actionButtons = actionButtonContainer.querySelectorAll(
      ".action-button"
    );

    actionButtons.forEach((btn) => btn.classList.remove("hidden"));
  }

  function hideActionButtons() {
    const actionButtonContainer = document.querySelector(
      "div.action-button__container"
    );
    const actionButtons = actionButtonContainer.querySelectorAll(
      ".action-button"
    );

    actionButtons.forEach((btn) => {
      if (!btn.classList.contains("always-visible")) {
        btn.classList.add("hidden");
      }
    });
  }

  function setAddTodoButton() {
    const actionButtonContainer = document.querySelector(
      "div.action-button__container"
    );
    const addTodoCardButton = actionButtonContainer.querySelector(
      "div.action-button__todo"
    );

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
      title: "TO-DO",
      items: [],
    };

    const todoCard = document.createElement("div");
    todoCard.classList.add("box", "todo-list");
    todoCard.setAttribute("todo-id", todoList.id);

    const todoTitle = document.createElement("span");
    todoTitle.classList.add("todo-list__title");
    todoTitle.innerHTML = todoList.title;
    todoTitle.setAttribute("contenteditable", true);
    todoTitle.addEventListener("focusout", updateTodoListTitle);
    todoCard.append(todoTitle);

    const todoListItemsNode = document.createElement("ul");
    todoListItemsNode.classList.add("todo-list__items");
    todoCard.append(todoListItemsNode);

    const addItemForm = document.createElement("form");
    addItemForm.classList.add("todo_list__addItem");
    addItemForm.innerHTML =
      '<input autofocus type="text" aria-label="Wprowadź nowy element listy" placeholder="Np. Kup mleko!" class="todo_list__addItem--input">';
    addItemForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const todoListNode = event.target.parentElement;
      const todoListId = todoListNode.getAttribute("todo-id");
      const index = todoLists.findIndex(
        (list) => list.id === Number(todoListId)
      );
      const todoList = todoLists[index];
      const formInput = addItemForm.querySelector(".todo_list__addItem--input");
      const newItemTxt = formInput.value.trim();

      const todoItem = {
        id: Date.now(),
        parentId: todoList.id,
        text: newItemTxt,
        checked: false,
      };

      const itemNode = document.createElement("li");
      const itemCheck = document.createElement("i");
      itemCheck.classList.add("icon-check-empty");
      const checkListener = function (e) {
        const itemNode = e.target.parentElement;
        const listNode = itemNode.parentElement.parentElement;
        const todoItemId = getTodoListItemId(itemNode);
        const todoListId = getTodoListId(listNode);

        if (todoListId != -1 && todoItemId != -1) {
          const todoListIndex = todoLists.findIndex(
            (list) => list.id === Number(todoListId)
          );
          const todoList = todoLists[todoListIndex];
          const todoItemIndex = todoList.items.findIndex(
            (item) => item.id === Number(todoItemId)
          );
          const todoItem = todoList.items[todoItemIndex];

          checkTodoItem(todoItem, itemNode);
        }
      };
      itemCheck.addEventListener("click", checkListener);
      itemNode.append(itemCheck);

      itemNode.append(todoItem.text);
      itemNode.setAttribute("todo-item-id", todoItem.id);

      const list = todoListNode.querySelector(".todo-list__items");
      list.appendChild(itemNode);
      todoList.items.push(todoItem);

      formInput.value = "";
      formInput.focus();
    });
    todoCard.append(addItemForm);

    todoLists.push(todoList);
    return todoCard;
  }

  function updateTodoListTitle(event) {
    const newTitle = event.target.textContent.trim();
    const todoListNode = event.target.parentElement;
    const todoListId = todoListNode.getAttribute("todo-id");
    const index = todoLists.findIndex((list) => list.id === Number(todoListId));
    const todoList = todoLists[index];

    todoList.title = newTitle;

    console.log(JSON.stringify(todoLists));
  }

  function getTodoListId(todoList) {
    const id = todoList.getAttribute("todo-id");
    if (id === null || id === undefined) {
      return -1;
    }

    return id;
  }

  function getTodoListItemId(item) {
    const id = item.getAttribute("todo-item-id");
    if (id === null || id === undefined) {
      return -1;
    }

    return id;
  }

  function checkTodoItem(todoItem, itemNode) {
    const checkedIcon = itemNode.parentElement.querySelector("i");
    console.log(checkedIcon);
    if (todoItem.checked === false) {
      todoItem.checked = true;
      itemNode.classList.add("checked");
      if (checkedIcon.classList.contains("icon-check-empty")) {
        checkedIcon.classList.remove("icon-check-empty");
        checkedIcon.classList.add("icon-check");
      }
    } else {
      todoItem.checked = false;
      itemNode.classList.remove("checked");
      if (checkedIcon.classList.contains("icon-check")) {
        checkedIcon.classList.remove("icon-check");
        checkedIcon.classList.add("icon-check-empty");
      }
    }

    function setTodoItemCheckIcon(checked, iconNode) {
      if (checked === true) {
        if (iconNode.classList.contains("icon-check-empty")) {
          iconNode.classList.remove("icon-check-empty");
        }

        iconNode.classList.add("icon-check");
      } else {
        if (iconNode.classList.contains("icon-check")) {
          iconNode.classList.remove("icon-check");
        }

        iconNode.classList.add("icon-check-empty");
      }
    }
  }

  handleActionButtonsDisplaying();
  setAddTodoButton();
})();
