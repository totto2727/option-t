import test from 'ava';

import { toNullableFromMaybe } from '../../__dist/esm/Maybe/toNullable.mjs';
import { nonNullableValueCaseListForSync } from '../utils.mjs';

for (const [INPUT, , EXPECTED] of nonNullableValueCaseListForSync) {
    test('pass the value' + String(INPUT), (t) => {
        const actual = toNullableFromMaybe(INPUT);
        t.is(actual, EXPECTED, 'should the expected result');
    });
}

for (const NULL_VALUE of [undefined, null]) {
    test(`pass ${NULL_VALUE}`, (t) => {
        const actual = toNullableFromMaybe(NULL_VALUE);
        t.is(actual, null);
    });
}
