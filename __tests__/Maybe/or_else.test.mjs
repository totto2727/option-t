import test from 'ava';

import { orElseForMaybe } from '../../__dist/esm/Maybe/orElse.mjs';
import { nonNullableValue } from '../utils.mjs';

for (const value of nonNullableValue) {
    test('value:' + String(value), (t) => {
        const DEFAULT_VAL = Math.random();
        const EXPECTED = value;

        const result = orElseForMaybe(EXPECTED, () => {
            t.fail('should not call recover fn');
            return DEFAULT_VAL;
        });
        t.is(result, EXPECTED);
    });
}

test('pass null', (t) => {
    t.plan(2);

    const DEFAULT_VAL = Math.random();
    const result = orElseForMaybe(null, () => {
        t.pass('should call recover fn');
        return DEFAULT_VAL;
    });

    t.is(result, DEFAULT_VAL);
});

test('pass undefined', (t) => {
    t.plan(2);

    const DEFAULT_VAL = Math.random();
    const result = orElseForMaybe(undefined, () => {
        t.pass('should call recover fn');
        return DEFAULT_VAL;
    });

    t.is(result, DEFAULT_VAL);
});
