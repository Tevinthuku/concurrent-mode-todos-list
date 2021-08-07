const subTodos = require("./MOCK_SUB_TODOS.json");

class SubTodos {
  getSubTodosFor(aTodo) {
    return subTodos.filter((subTodo) => subTodo.todo_id === Number(aTodo));
  }

  generateHashTableOfSubtodos() {
    const result = {};
    subTodos.forEach((subTodo) => {
      if (!result[Number(subTodo.todo_id)]) {
        result[Number(subTodo.todo_id)] = [];
      }
      result[Number(subTodo.todo_id)].push(subTodo);
    });
    return result;
  }
}

module.exports = SubTodos;
