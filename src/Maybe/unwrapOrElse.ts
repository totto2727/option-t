import { RecoveryFn } from '../internal/Function.js';
import { isNotNullAndUndefined, Maybe, NotNullAndUndefined } from './Maybe.js';
import { expectNotNullAndUndefined } from './expect.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './ErrorMessage.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Maybe<*>`.
 *  * If the result of _recoverer_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrElseFromMaybe<T>(
    input: Maybe<T>,
    recoverer: RecoveryFn<NotNullAndUndefined<T>>
): NotNullAndUndefined<T> {
    if (isNotNullAndUndefined(input)) {
        return input;
    }

    const fallback: T = recoverer();
    const passed = expectNotNullAndUndefined(
        fallback,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE
    );
    return passed;
}
