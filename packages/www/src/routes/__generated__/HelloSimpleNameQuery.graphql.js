/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HelloSimpleNameQueryVariables = {||};
export type HelloSimpleNameQueryResponse = {|
  +hello: ?string
|};
export type HelloSimpleNameQuery = {|
  variables: HelloSimpleNameQueryVariables,
  response: HelloSimpleNameQueryResponse,
|};
*/


/*
query HelloSimpleNameQuery {
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
    "name": "HelloSimpleNameQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HelloSimpleNameQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d851174a74693139e9d69f05118b6a2c",
    "id": null,
    "metadata": {},
    "name": "HelloSimpleNameQuery",
    "operationKind": "query",
    "text": "query HelloSimpleNameQuery {\n  hello(name: \"relay\")\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3122f38308ed59a57f7801af426b445e';

module.exports = node;
