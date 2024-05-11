/* eslint sort-keys: ["error", "asc", { caseSensitive: true }] */

import test from 'ava';
import { testImportExposedPath } from './helper.mjs';

testImportExposedPath(
    test,
    Object.keys({
        './Nullable': null,
        './Nullable/Nullable': null,
        './Nullable/and': null,
        './Nullable/andThen': null,
        './Nullable/andThenAsync': null,
        './Nullable/experimental_ns': null,
        './Nullable/filter': null,
        './Nullable/filterAsync': null,
        './Nullable/inspect': null,
        './Nullable/map': null,
        './Nullable/mapAsync': null,
        './Nullable/mapOr': null,
        './Nullable/mapOrAsync': null,
        './Nullable/mapOrElse': null,
        './Nullable/mapOrElseAsync': null,
        './Nullable/namespace': null,
        './Nullable/okOr': null,
        './Nullable/okOrElse': null,
        './Nullable/okOrElseAsync': null,
        './Nullable/or': null,
        './Nullable/orElse': null,
        './Nullable/orElseAsync': null,
        './Nullable/toPlainResult': null,
        './Nullable/toUndefinable': null,
        './Nullable/unwrapOr': null,
        './Nullable/unwrapOrElse': null,
        './Nullable/unwrapOrElseAsync': null,
        './Nullable/xor': null,
        './Nullable/zip': null,
        './Nullable/zipWith': null,
        './Nullable/zipWithAsync': null,
    }),
);
