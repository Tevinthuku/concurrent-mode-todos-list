const todosList = require("./MOCK_TODOS.json");

class Todos {
  list(count = 10) {
    return todosList.slice(0, count);
  }

  get(id) {
    return todosList.find((todo) => todo.id === Number(id));
  }
}

module.exports = Todos;
