const subTodos = require("./MOCK_SUB_TODOS.json");

class SubTodos {
  getSubTodosFor(aTodo) {
    return subTodos.filter((subTodo) => subTodo.todo_id === Number(aTodo));
  }
}

module.exports = SubTodos;
