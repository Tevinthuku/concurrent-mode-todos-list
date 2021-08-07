var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");
var cors = require("cors");

const TodosStore = require("./todos");
const PORT = process.env.PORT || 4000;
const PRODUCTION = process.env.NODE_ENV === "production";
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
    subTodos: [SubTodo!]!
  }
  type SubTodo {
    id: ID!
    text: String!
    todo_id: ID!
    complete: Boolean!
  }
  type Query {
    hello(name: String!): String
    todo(id: ID!): Todo
    listTodos(count: Int): [Todo!]!
  }
`);

const todosStore = new TodosStore();
// The root provides a resolver function for each API endpoint
var root = {
  hello: ({ name }) => {
    return `Hello there ${name}!`;
  },
  listTodos({ count }) {
    return todosStore.list(count);
  },
  todo({ id }) {
    return todosStore.get(id);
  },
};

var app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: !PRODUCTION,
  })
);
app.listen(PORT);
