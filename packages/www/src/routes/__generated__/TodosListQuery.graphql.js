/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodosListQueryVariables = {||};
export type TodosListQueryResponse = {|
  +listTodos: $ReadOnlyArray<?{|
    +text: string,
    +id: string,
  |}>
|};
export type TodosListQuery = {|
  variables: TodosListQueryVariables,
  response: TodosListQueryResponse,
|};
*/


/*
query TodosListQuery {
  listTodos {
    text
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "listTodos",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodosListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodosListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5148dabcccb2f21c17a5b95c29772b01",
    "id": null,
    "metadata": {},
    "name": "TodosListQuery",
    "operationKind": "query",
    "text": "query TodosListQuery {\n  listTodos {\n    text\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bafc614702366d31f24d37237867733e';

module.exports = node;
