const todosList = require("./MOCK_TODOS.json");

const SubTodos = require("./subTodos");
const subTodosStore = new SubTodos();

class Todos {
  constructor() {
    this.subTodos = subTodosStore.generateHashTableOfSubtodos();
    this.todos = this.mapTodosWithSubTodos(todosList);
  }
  list(count = 10) {
    return this.todos.slice(0, count);
  }
  get(id) {
    return this.todos.find((todo) => todo.id === Number(id));
  }
  mapTodosWithSubTodos(todos) {
    return todos.map((todo) => {
      return {
        ...todo,
        subTodos: this.subTodos[todo.id],
      };
    });
  }
}

module.exports = Todos;
