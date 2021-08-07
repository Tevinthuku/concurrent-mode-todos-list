/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Subtodos_todo$ref: FragmentReference;
declare export opaque type Subtodos_todo$fragmentType: Subtodos_todo$ref;
export type Subtodos_todo = {|
  +id: string,
  +$refType: Subtodos_todo$ref,
|};
export type Subtodos_todo$data = Subtodos_todo;
export type Subtodos_todo$key = {
  +$data?: Subtodos_todo$data,
  +$fragmentRefs: Subtodos_todo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Subtodos_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '0a74108f3b943f10b29915895d78c4f8';

module.exports = node;
