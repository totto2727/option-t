import { Option, createSome, createNone, isNone, Some } from '../PlainOption/Option';
import { Result, Ok, Err, isErr, createOk, createErr } from './Result';

/**
 *  Transposes a `Result` of an `Option` into an `Option` of a `Result`.
 *
 *  - `Ok(Some(v))` -> `Some(Ok(v))`
 *  - `Ok(None)` -> `None`
 *  - `Err(e)` -> `Some(Err(e))`
 */
export function transposeForResult<T, E>(input: Result<Option<T>, E>): Option<Result<T, E>> {
    if (isErr(input)) {
        const e: E = input.err;
        const newErr: Err<E> = createErr(e);
        const r: Some<Err<E>> = createSome<Err<E>>(newErr);
        return r;
    }

    const inner: Option<T> = input.val;
    if (isNone(inner)) {
        const r = createNone();
        return r;
    }

    const innerInner: T = inner.val;
    const innerV: Ok<T> = createOk(innerInner);
    const r: Option<Ok<T>> = createSome(innerV);
    return r;
}
