import test from 'ava';

import { andThenForNullable } from '../../__dist/esm/Nullable/andThen.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    const EXPECTED = value;

    test(`pass : ${String(value)}`, (t) => {
        t.plan(3);

        const result = andThenForNullable(EXPECTED, (v) => {
            t.pass();
            t.is(v, EXPECTED);
            return v;
        });

        t.is(result, EXPECTED);
    });
}

test('pass null', (t) => {
    t.plan(1);

    const DEFAULT_VAL = Symbol('');
    const result = andThenForNullable(null, (_v) => {
        t.fail();
        return DEFAULT_VAL;
    });

    t.is(result, null);
});

test('pass undefined', (t) => {
    t.plan(2);

    const result = andThenForNullable(undefined, (v) => {
        t.pass();
        return v;
    });

    t.is(result, undefined);
});
