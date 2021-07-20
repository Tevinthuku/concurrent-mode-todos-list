var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

const PORT = process.env.PORT || 4000;
const PRODUCTION = process.env.NODE_ENV === "production";
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello(name: String!): String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: ({ name }) => {
    return `Hello there ${name}!`;
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: !PRODUCTION,
  })
);

module.exports = app;
