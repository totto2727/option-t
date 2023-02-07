function pathRedirectionTo(actualFilePath) {
    return Object.freeze({
        actualFilePath,
    });
}

const API_DESCRIPTOR = Object.freeze({});

export const apiTable = Object.freeze({
    '.': pathRedirectionTo('index'),

    'Maybe': pathRedirectionTo('Maybe/index'),

    'Maybe/and': API_DESCRIPTOR,
    'Maybe/andThen': API_DESCRIPTOR,
    'Maybe/andThenAsync': API_DESCRIPTOR,
    'Maybe/expect': API_DESCRIPTOR,
    'Maybe/inspect': API_DESCRIPTOR,
    'Maybe/map': API_DESCRIPTOR,
    'Maybe/mapAsync': API_DESCRIPTOR,
    'Maybe/Maybe': API_DESCRIPTOR,
    'Maybe/mapOr': API_DESCRIPTOR,
    'Maybe/mapOrAsync': API_DESCRIPTOR,
    'Maybe/mapOrElse': API_DESCRIPTOR,
    'Maybe/mapOrElseAsync': API_DESCRIPTOR,
    'Maybe/or': API_DESCRIPTOR,
    'Maybe/orElse': API_DESCRIPTOR,
    'Maybe/orElseAsync': API_DESCRIPTOR,
    'Maybe/toNullable': API_DESCRIPTOR,
    'Maybe/toUndefinable': API_DESCRIPTOR,
    'Maybe/unwrap': API_DESCRIPTOR,
    'Maybe/unwrapOr': API_DESCRIPTOR,
    'Maybe/unwrapOrElse': API_DESCRIPTOR,
    'Maybe/unwrapOrElseAsync': API_DESCRIPTOR,
    'Maybe/xor': API_DESCRIPTOR,

    'Nullable': pathRedirectionTo('Nullable/index'),

    'Nullable/and': API_DESCRIPTOR,
    'Nullable/andThen': API_DESCRIPTOR,
    'Nullable/andThenAsync': API_DESCRIPTOR,
    'Nullable/expect': API_DESCRIPTOR,
    'Nullable/inspect': API_DESCRIPTOR,
    'Nullable/map': API_DESCRIPTOR,
    'Nullable/mapAsync': API_DESCRIPTOR,
    'Nullable/mapOr': API_DESCRIPTOR,
    'Nullable/mapOrAsync': API_DESCRIPTOR,
    'Nullable/mapOrElse': API_DESCRIPTOR,
    'Nullable/mapOrElseAsync': API_DESCRIPTOR,
    'Nullable/Nullable': API_DESCRIPTOR,
    'Nullable/or': API_DESCRIPTOR,
    'Nullable/orElse': API_DESCRIPTOR,
    'Nullable/orElseAsync': API_DESCRIPTOR,
    'Nullable/toUndefinable': API_DESCRIPTOR,
    'Nullable/unwrap': API_DESCRIPTOR,
    'Nullable/unwrapOr': API_DESCRIPTOR,
    'Nullable/unwrapOrElse': API_DESCRIPTOR,
    'Nullable/unwrapOrElseAsync': API_DESCRIPTOR,
    'Nullable/xor': API_DESCRIPTOR,

    'PlainOption': pathRedirectionTo('PlainOption/index'),

    'PlainOption/and': API_DESCRIPTOR,
    'PlainOption/andThen': API_DESCRIPTOR,
    'PlainOption/andThenAsync': API_DESCRIPTOR,
    'PlainOption/asMut': API_DESCRIPTOR,
    'PlainOption/drop': API_DESCRIPTOR,
    'PlainOption/equal': API_DESCRIPTOR,
    'PlainOption/expect': API_DESCRIPTOR,
    'PlainOption/filter': API_DESCRIPTOR,
    'PlainOption/flatten': API_DESCRIPTOR,
    'PlainOption/inspect': API_DESCRIPTOR,
    'PlainOption/map': API_DESCRIPTOR,
    'PlainOption/mapAsync': API_DESCRIPTOR,
    'PlainOption/mapOr': API_DESCRIPTOR,
    'PlainOption/mapOrAsync': API_DESCRIPTOR,
    'PlainOption/mapOrElse': API_DESCRIPTOR,
    'PlainOption/mapOrElseAsync': API_DESCRIPTOR,
    'PlainOption/okOr': API_DESCRIPTOR,
    'PlainOption/okOrElse': API_DESCRIPTOR,
    'PlainOption/Option': API_DESCRIPTOR,
    'PlainOption/or': API_DESCRIPTOR,
    'PlainOption/orElse': API_DESCRIPTOR,
    'PlainOption/orElseAsync': API_DESCRIPTOR,
    'PlainOption/transpose': API_DESCRIPTOR,
    'PlainOption/toNullable': API_DESCRIPTOR,
    'PlainOption/toUndefinable': API_DESCRIPTOR,
    'PlainOption/unwrap': API_DESCRIPTOR,
    'PlainOption/unwrapOr': API_DESCRIPTOR,
    'PlainOption/unwrapOrElse': API_DESCRIPTOR,
    'PlainOption/unwrapOrElseAsync': API_DESCRIPTOR,
    'PlainOption/xor': API_DESCRIPTOR,

    'PlainResult': pathRedirectionTo('PlainResult/index'),

    'PlainResult/and': API_DESCRIPTOR,
    'PlainResult/andThen': API_DESCRIPTOR,
    'PlainResult/andThenAsync': API_DESCRIPTOR,
    'PlainResult/asMut': API_DESCRIPTOR,
    'PlainResult/drop': API_DESCRIPTOR,
    'PlainResult/equal': API_DESCRIPTOR,
    'PlainResult/expect': API_DESCRIPTOR,
    'PlainResult/flatten': API_DESCRIPTOR,
    'PlainResult/fromPromiseSettledResult': API_DESCRIPTOR,
    'PlainResult/inspect': API_DESCRIPTOR,
    'PlainResult/map': API_DESCRIPTOR,
    'PlainResult/mapAsync': API_DESCRIPTOR,
    'PlainResult/mapErr': API_DESCRIPTOR,
    'PlainResult/mapErrAsync': API_DESCRIPTOR,
    'PlainResult/mapOr': API_DESCRIPTOR,
    'PlainResult/mapOrAsync': API_DESCRIPTOR,
    'PlainResult/mapOrElse': API_DESCRIPTOR,
    'PlainResult/mapOrElseAsync': API_DESCRIPTOR,
    'PlainResult/or': API_DESCRIPTOR,
    'PlainResult/orElse': API_DESCRIPTOR,
    'PlainResult/orElseAsync': API_DESCRIPTOR,
    'PlainResult/Result': API_DESCRIPTOR,
    'PlainResult/toNullable': API_DESCRIPTOR,
    'PlainResult/toOption': API_DESCRIPTOR,
    'PlainResult/tryCatch': API_DESCRIPTOR,
    'PlainResult/tryCatchAsync': API_DESCRIPTOR,
    'PlainResult/transpose': API_DESCRIPTOR,
    'PlainResult/unwrap': API_DESCRIPTOR,
    'PlainResult/unwrapOr': API_DESCRIPTOR,
    'PlainResult/unwrapOrElse': API_DESCRIPTOR,
    'PlainResult/unwrapOrElseAsync': API_DESCRIPTOR,
    'PlainResult/unwrapOrThrowError': API_DESCRIPTOR,

    'Undefinable': pathRedirectionTo('Undefinable/index'),

    'Undefinable/and': API_DESCRIPTOR,
    'Undefinable/andThen': API_DESCRIPTOR,
    'Undefinable/andThenAsync': API_DESCRIPTOR,
    'Undefinable/expect': API_DESCRIPTOR,
    'Undefinable/inspect': API_DESCRIPTOR,
    'Undefinable/map': API_DESCRIPTOR,
    'Undefinable/mapAsync': API_DESCRIPTOR,
    'Undefinable/mapOr': API_DESCRIPTOR,
    'Undefinable/mapOrAsync': API_DESCRIPTOR,
    'Undefinable/mapOrElse': API_DESCRIPTOR,
    'Undefinable/mapOrElseAsync': API_DESCRIPTOR,
    'Undefinable/or': API_DESCRIPTOR,
    'Undefinable/orElse': API_DESCRIPTOR,
    'Undefinable/orElseAsync': API_DESCRIPTOR,
    'Undefinable/toNullable': API_DESCRIPTOR,
    'Undefinable/Undefinable': API_DESCRIPTOR,
    'Undefinable/unwrap': API_DESCRIPTOR,
    'Undefinable/unwrapOr': API_DESCRIPTOR,
    'Undefinable/unwrapOrElse': API_DESCRIPTOR,
    'Undefinable/unwrapOrElseAsync': API_DESCRIPTOR,
    'Undefinable/xor': API_DESCRIPTOR,
});

const COMPAT_DESCRIPTOR = Object.freeze({
});

export const legacyApiTable = Object.freeze({
    'cjs/ClassicOption': pathRedirectionTo('cjs/ClassicOption/index'),
    'cjs/ClassicResult': pathRedirectionTo('cjs/ClassicResult/index'),
    'cjs/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'cjs/Maybe/and': COMPAT_DESCRIPTOR,
    'cjs/Maybe/andThen': COMPAT_DESCRIPTOR,
    'cjs/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/expect': COMPAT_DESCRIPTOR,
    'cjs/Maybe/index': COMPAT_DESCRIPTOR,
    'cjs/Maybe/inspect': COMPAT_DESCRIPTOR,
    'cjs/Maybe': pathRedirectionTo('cjs/Maybe/index'),
    'cjs/Maybe/map': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/or': COMPAT_DESCRIPTOR,
    'cjs/Maybe/orElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/toNullable': COMPAT_DESCRIPTOR,
    'cjs/Maybe/toUndefinable': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Maybe/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Maybe/xor': COMPAT_DESCRIPTOR,
    'cjs/Nullable/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Nullable/Nullable': COMPAT_DESCRIPTOR,
    'cjs/Nullable/and': COMPAT_DESCRIPTOR,
    'cjs/Nullable/andThen': COMPAT_DESCRIPTOR,
    'cjs/Nullable/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/expect': COMPAT_DESCRIPTOR,
    'cjs/Nullable/index': COMPAT_DESCRIPTOR,
    'cjs/Nullable/inspect': COMPAT_DESCRIPTOR,
    'cjs/Nullable': pathRedirectionTo('cjs/Nullable/index'),
    'cjs/Nullable/map': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/or': COMPAT_DESCRIPTOR,
    'cjs/Nullable/orElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/toUndefinable': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Nullable/xor': COMPAT_DESCRIPTOR,
    'cjs/Option': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/Option': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/and': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/drop': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/equal': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/expect': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/filter': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/index': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/inspect': COMPAT_DESCRIPTOR,
    'cjs/PlainOption': pathRedirectionTo('cjs/PlainOption/index'),
    'cjs/PlainOption/map': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/or': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/toNullable': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/toUndefinable': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainOption/xor': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/Result': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/and': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/andThen': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/asMut': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/drop': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/equal': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/expect': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/flatten': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/fromPromiseSettledResult': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/index': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/inspect': COMPAT_DESCRIPTOR,
    'cjs/PlainResult': pathRedirectionTo('cjs/PlainResult/index'),
    'cjs/PlainResult/map': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapErr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapErrAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/or': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/orElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/transpose': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/toNullable': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/tryCatch': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/tryCatchAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/PlainResult/unwrapOrThrowError': COMPAT_DESCRIPTOR,
    'cjs/Result': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/and': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/expect': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/index': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/inspect': COMPAT_DESCRIPTOR,
    'cjs/Undefinable': pathRedirectionTo('cjs/Undefinable/index'),
    'cjs/Undefinable/map': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/or': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/toNullable': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'cjs/Undefinable/xor': COMPAT_DESCRIPTOR,
    'cjs/index': COMPAT_DESCRIPTOR,
    'esm/ClassicOption': pathRedirectionTo('esm/ClassicOption/index'),
    'esm/ClassicResult': pathRedirectionTo('esm/ClassicResult/index'),
    'esm/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'esm/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'esm/Maybe/and': COMPAT_DESCRIPTOR,
    'esm/Maybe/andThen': COMPAT_DESCRIPTOR,
    'esm/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/expect': COMPAT_DESCRIPTOR,
    'esm/Maybe/index': COMPAT_DESCRIPTOR,
    'esm/Maybe/inspect': COMPAT_DESCRIPTOR,
    'esm/Maybe': pathRedirectionTo('esm/Maybe/index'),
    'esm/Maybe/map': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/or': COMPAT_DESCRIPTOR,
    'esm/Maybe/orElse': COMPAT_DESCRIPTOR,
    'esm/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/toNullable': COMPAT_DESCRIPTOR,
    'esm/Maybe/toUndefinable': COMPAT_DESCRIPTOR,
    'esm/Maybe/unwrap': COMPAT_DESCRIPTOR,
    'esm/Maybe/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/Maybe/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/Maybe/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Maybe/xor': COMPAT_DESCRIPTOR,
    'esm/Nullable/ErrorMessage': COMPAT_DESCRIPTOR,
    'esm/Nullable/Nullable': COMPAT_DESCRIPTOR,
    'esm/Nullable/and': COMPAT_DESCRIPTOR,
    'esm/Nullable/andThen': COMPAT_DESCRIPTOR,
    'esm/Nullable/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/expect': COMPAT_DESCRIPTOR,
    'esm/Nullable/index': COMPAT_DESCRIPTOR,
    'esm/Nullable/inspect': COMPAT_DESCRIPTOR,
    'esm/Nullable': pathRedirectionTo('esm/Nullable/index'),
    'esm/Nullable/map': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/or': COMPAT_DESCRIPTOR,
    'esm/Nullable/orElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/toUndefinable': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Nullable/xor': COMPAT_DESCRIPTOR,
    'esm/Option': COMPAT_DESCRIPTOR,
    'esm/PlainOption/Option': COMPAT_DESCRIPTOR,
    'esm/PlainOption/and': COMPAT_DESCRIPTOR,
    'esm/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'esm/PlainOption/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'esm/PlainOption/drop': COMPAT_DESCRIPTOR,
    'esm/PlainOption/equal': COMPAT_DESCRIPTOR,
    'esm/PlainOption/expect': COMPAT_DESCRIPTOR,
    'esm/PlainOption/filter': COMPAT_DESCRIPTOR,
    'esm/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'esm/PlainOption/index': COMPAT_DESCRIPTOR,
    'esm/PlainOption/inspect': COMPAT_DESCRIPTOR,
    'esm/PlainOption': pathRedirectionTo('esm/PlainOption/index'),
    'esm/PlainOption/map': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/or': COMPAT_DESCRIPTOR,
    'esm/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'esm/PlainOption/toNullable': COMPAT_DESCRIPTOR,
    'esm/PlainOption/toUndefinable': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainOption/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainOption/xor': COMPAT_DESCRIPTOR,
    'esm/PlainResult/Result': COMPAT_DESCRIPTOR,
    'esm/PlainResult/and': COMPAT_DESCRIPTOR,
    'esm/PlainResult/andThen': COMPAT_DESCRIPTOR,
    'esm/PlainResult/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/asMut': COMPAT_DESCRIPTOR,
    'esm/PlainResult/drop': COMPAT_DESCRIPTOR,
    'esm/PlainResult/equal': COMPAT_DESCRIPTOR,
    'esm/PlainResult/expect': COMPAT_DESCRIPTOR,
    'esm/PlainResult/flatten': COMPAT_DESCRIPTOR,
    'esm/PlainResult/fromPromiseSettledResult': COMPAT_DESCRIPTOR,
    'esm/PlainResult/index': COMPAT_DESCRIPTOR,
    'esm/PlainResult/inspect': COMPAT_DESCRIPTOR,
    'esm/PlainResult': pathRedirectionTo('esm/PlainResult/index'),
    'esm/PlainResult/map': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapErr': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapErrAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapOr': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainResult/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/or': COMPAT_DESCRIPTOR,
    'esm/PlainResult/orElse': COMPAT_DESCRIPTOR,
    'esm/PlainResult/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/transpose': COMPAT_DESCRIPTOR,
    'esm/PlainResult/toNullable': COMPAT_DESCRIPTOR,
    'esm/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'esm/PlainResult/tryCatch': COMPAT_DESCRIPTOR,
    'esm/PlainResult/tryCatchAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/PlainResult/unwrapOrThrowError': COMPAT_DESCRIPTOR,
    'esm/Result': COMPAT_DESCRIPTOR,
    'esm/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'esm/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'esm/Undefinable/and': COMPAT_DESCRIPTOR,
    'esm/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'esm/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/expect': COMPAT_DESCRIPTOR,
    'esm/Undefinable/index': COMPAT_DESCRIPTOR,
    'esm/Undefinable/inspect': COMPAT_DESCRIPTOR,
    'esm/Undefinable': pathRedirectionTo('esm/Undefinable/index'),
    'esm/Undefinable/map': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/or': COMPAT_DESCRIPTOR,
    'esm/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/toNullable': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'esm/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'esm/Undefinable/xor': COMPAT_DESCRIPTOR,
    'esm/index': COMPAT_DESCRIPTOR,
    'lib/ClassicOption': pathRedirectionTo('lib/ClassicOption/index'),
    'lib/ClassicResult': pathRedirectionTo('lib/ClassicResult/index'),
    'lib/Maybe/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Maybe/Maybe': COMPAT_DESCRIPTOR,
    'lib/Maybe/and': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThen': COMPAT_DESCRIPTOR,
    'lib/Maybe/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/expect': COMPAT_DESCRIPTOR,
    'lib/Maybe/index': COMPAT_DESCRIPTOR,
    'lib/Maybe/inspect': COMPAT_DESCRIPTOR,
    'lib/Maybe': pathRedirectionTo('lib/Maybe/index'),
    'lib/Maybe/map': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOr': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/or': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/toNullable': COMPAT_DESCRIPTOR,
    'lib/Maybe/toUndefinable': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrap': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Maybe/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Maybe/xor': COMPAT_DESCRIPTOR,
    'lib/Nullable/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Nullable/Nullable': COMPAT_DESCRIPTOR,
    'lib/Nullable/and': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThen': COMPAT_DESCRIPTOR,
    'lib/Nullable/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/expect': COMPAT_DESCRIPTOR,
    'lib/Nullable/index': COMPAT_DESCRIPTOR,
    'lib/Nullable/inspect': COMPAT_DESCRIPTOR,
    'lib/Nullable': pathRedirectionTo('lib/Nullable/index'),
    'lib/Nullable/map': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOr': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/or': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/toUndefinable': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrap': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Nullable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Nullable/xor': COMPAT_DESCRIPTOR,
    'lib/Option': COMPAT_DESCRIPTOR,
    'lib/PlainOption/Option': COMPAT_DESCRIPTOR,
    'lib/PlainOption/and': COMPAT_DESCRIPTOR,
    'lib/PlainOption/andThen': COMPAT_DESCRIPTOR,
    'lib/PlainOption/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/asMut': COMPAT_DESCRIPTOR,
    'lib/PlainOption/drop': COMPAT_DESCRIPTOR,
    'lib/PlainOption/expect': COMPAT_DESCRIPTOR,
    'lib/PlainOption/equal': COMPAT_DESCRIPTOR,
    'lib/PlainOption/flatten': COMPAT_DESCRIPTOR,
    'lib/PlainOption/filter': COMPAT_DESCRIPTOR,
    'lib/PlainOption/index': COMPAT_DESCRIPTOR,
    'lib/PlainOption/inspect': COMPAT_DESCRIPTOR,
    'lib/PlainOption': pathRedirectionTo('lib/PlainOption/index'),
    'lib/PlainOption/map': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/okOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/or': COMPAT_DESCRIPTOR,
    'lib/PlainOption/orElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/transpose': COMPAT_DESCRIPTOR,
    'lib/PlainOption/toNullable': COMPAT_DESCRIPTOR,
    'lib/PlainOption/toUndefinable': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrap': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainOption/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainOption/xor': COMPAT_DESCRIPTOR,
    'lib/PlainResult/Result': COMPAT_DESCRIPTOR,
    'lib/PlainResult/and': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThen': COMPAT_DESCRIPTOR,
    'lib/PlainResult/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/asMut': COMPAT_DESCRIPTOR,
    'lib/PlainResult/drop': COMPAT_DESCRIPTOR,
    'lib/PlainResult/equal': COMPAT_DESCRIPTOR,
    'lib/PlainResult/expect': COMPAT_DESCRIPTOR,
    'lib/PlainResult/flatten': COMPAT_DESCRIPTOR,
    'lib/PlainResult/fromPromiseSettledResult': COMPAT_DESCRIPTOR,
    'lib/PlainResult/index': COMPAT_DESCRIPTOR,
    'lib/PlainResult/inspect': COMPAT_DESCRIPTOR,
    'lib/PlainResult': pathRedirectionTo('lib/PlainResult/index'),
    'lib/PlainResult/map': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapErrAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/or': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/transpose': COMPAT_DESCRIPTOR,
    'lib/PlainResult/toNullable': COMPAT_DESCRIPTOR,
    'lib/PlainResult/toOption': COMPAT_DESCRIPTOR,
    'lib/PlainResult/tryCatch': COMPAT_DESCRIPTOR,
    'lib/PlainResult/tryCatchAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrap': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/PlainResult/unwrapOrThrowError': COMPAT_DESCRIPTOR,
    'lib/Result': COMPAT_DESCRIPTOR,
    'lib/Undefinable/ErrorMessage': COMPAT_DESCRIPTOR,
    'lib/Undefinable/Undefinable': COMPAT_DESCRIPTOR,
    'lib/Undefinable/and': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThen': COMPAT_DESCRIPTOR,
    'lib/Undefinable/andThenAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/expect': COMPAT_DESCRIPTOR,
    'lib/Undefinable/index': COMPAT_DESCRIPTOR,
    'lib/Undefinable/inspect': COMPAT_DESCRIPTOR,
    'lib/Undefinable': pathRedirectionTo('lib/Undefinable/index'),
    'lib/Undefinable/map': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOr': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/mapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/or': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/orElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/toNullable': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrap': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOr': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElse': COMPAT_DESCRIPTOR,
    'lib/Undefinable/unwrapOrElseAsync': COMPAT_DESCRIPTOR,
    'lib/Undefinable/xor': COMPAT_DESCRIPTOR,
    'lib/index': COMPAT_DESCRIPTOR,
});
