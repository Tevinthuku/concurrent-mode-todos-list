/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoQueryVariables = {||};
export type TodoQueryResponse = {|
  +listTodos: $ReadOnlyArray<?{|
    +text: string,
    +id: string,
  |}>
|};
export type TodoQuery = {|
  variables: TodoQueryVariables,
  response: TodoQueryResponse,
|};
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
    {
      alias: null,
      args: null,
      concreteType: "Todo",
      kind: "LinkedField",
      name: "listTodos",
      plural: true,
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "text",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
      ],
      storageKey: null,
    },
  ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "TodoQuery",
      selections: (v0 /*: any*/),
      type: "Query",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "TodoQuery",
      selections: (v0 /*: any*/),
    },
    params: {
      cacheID: "e2c8bc3862acd51fdd9fe55d0e9ae8b9",
      id: null,
      metadata: {},
      name: "TodoQuery",
      operationKind: "query",
      text: "query TodoQuery {\n  listTodos {\n    text\n    id\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '5bbbf867f0a771606edf8ce860d28dfb';

module.exports = node;
