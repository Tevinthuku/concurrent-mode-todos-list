/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoQueryVariables = {|
  id: string
|};
export type TodoQueryResponse = {|
  +todo: ?{|
    +text: string,
    +id: string,
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todo",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "495d4c6e28e222832cbfcd89246b6665",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": "query TodoQuery(\n  $id: ID!\n) {\n  todo(id: $id) {\n    text\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a9eac68c18a367111c7027d7520a97a5';

module.exports = node;
