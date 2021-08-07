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
  +subTodos: $ReadOnlyArray<{|
    +text: string,
    +id: string,
  |}>,
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
      "concreteType": "SubTodo",
      "kind": "LinkedField",
      "name": "subTodos",
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
  ],
  "type": "Todo",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '0274d7fe77e094f3b8b0e41faa689226';

module.exports = node;
