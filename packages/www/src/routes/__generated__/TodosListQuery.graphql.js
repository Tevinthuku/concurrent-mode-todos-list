/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodosListQueryVariables = {||};
export type TodosListQueryResponse = {|
  +listTodos: ?$ReadOnlyArray<?{|
    +text: string
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
    "cacheID": "efa6a8cd80efb2eb5d20d2d069e4ea42",
    "id": null,
    "metadata": {},
    "name": "TodosListQuery",
    "operationKind": "query",
    "text": "query TodosListQuery {\n  listTodos {\n    text\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a728d3a66f56b227a928387c0963721f';

module.exports = node;
