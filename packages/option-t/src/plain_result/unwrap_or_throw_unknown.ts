import { type Result, isOk, unwrapOk, unwrapErr } from './result.js';

/**
 *  Unwraps _input_, returns the content of an `Ok(T)`.
 *  Otherwise, this function throw the contained `unknown` __directly__ in `Err(unknown)`.
 *
 *  __We DO NOT RECCOMEND TO USE THIS function generally__.
 *
 *  This function is provided only to improve an interoperability with the world using "throw error" convention.
 *  __We do not recommend to use this function__.
 *
 *  @throws {unknown}
 *      This throws an inner value wrapped by Err(unknown)` __directly__.
 */
export function unwrapOrThrowUnknownDirectlyForResult<T>(input: Result<T, unknown>): T {
    if (isOk(input)) {
        const val: T = unwrapOk<T>(input);
        return val;
    }

    const e: unknown = unwrapErr(input);
    throw e;
}
