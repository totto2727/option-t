import test from 'ava';

import { filterWithEnsureTypeForUndefinable } from 'option-t/undefinable/filter';

test('input is T, and predicate return true', (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = filterWithEnsureTypeForUndefinable(INPUT, (inner) => {
        t.is(inner, INPUT);
        return true;
    });
    t.is(actual, INPUT);
});

test('input is T, and predicate return false', (t) => {
    t.plan(2);

    const INPUT = Math.random();
    const actual = filterWithEnsureTypeForUndefinable(INPUT, (inner) => {
        t.is(inner, INPUT);
        return false;
    });
    t.is(actual, undefined);
});

test('input is undefined', (t) => {
    t.plan(1);

    const actual = filterWithEnsureTypeForUndefinable(undefined, (_inner) => {
        t.fail();
        return true;
    });
    t.is(actual, undefined);
});
