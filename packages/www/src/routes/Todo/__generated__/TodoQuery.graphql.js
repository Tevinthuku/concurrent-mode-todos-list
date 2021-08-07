/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Subtodos_todo$ref = any;
export type TodoQueryVariables = {|
  id: string
|};
export type TodoQueryResponse = {|
  +todo: ?{|
    +text: string,
    +id: string,
    +$fragmentRefs: Subtodos_todo$ref,
  |}
|};
export type TodoQuery = {|
  variables: TodoQueryVariables,
  response: TodoQueryResponse,
|};
*/


/*
query TodoQuery(
  $id: ID!
) {
  todo(id: $id) {
    text
    id
    ...Subtodos_todo
  }
}

fragment Subtodos_todo on Todo {
  subTodos {
    text
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "text",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Subtodos_todo"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SubTodo",
            "kind": "LinkedField",
            "name": "subTodos",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5b9c512932d665809bcdd610ded27dad",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": "query TodoQuery(\n  $id: ID!\n) {\n  todo(id: $id) {\n    text\n    id\n    ...Subtodos_todo\n  }\n}\n\nfragment Subtodos_todo on Todo {\n  subTodos {\n    text\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '426a39efd43d3720ee7161a7cebe33cd';

module.exports = node;
