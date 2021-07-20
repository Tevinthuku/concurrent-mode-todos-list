/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppSimpleNameQueryVariables = {||};
export type AppSimpleNameQueryResponse = {|
  +hello: ?string
|};
export type AppSimpleNameQuery = {|
  variables: AppSimpleNameQueryVariables,
  response: AppSimpleNameQueryResponse,
|};
*/


/*
query AppSimpleNameQuery {
  hello(name: "relay")
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "name",
        "value": "relay"
      }
    ],
    "kind": "ScalarField",
    "name": "hello",
    "storageKey": "hello(name:\"relay\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppSimpleNameQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppSimpleNameQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b861b24bc6d68e21a4534bfec67b18c8",
    "id": null,
    "metadata": {},
    "name": "AppSimpleNameQuery",
    "operationKind": "query",
    "text": "query AppSimpleNameQuery {\n  hello(name: \"relay\")\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '86e4008c6b4f2d629dd3098312fed433';

module.exports = node;
