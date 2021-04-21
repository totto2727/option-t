import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
} from './ErrorMessage';
import { expectNotUndefined } from './expect';
import { RecoveryFn, TransformFn } from '../shared/Function';
import { Undefinable } from './Undefinable';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOrElse()`.
 *
 *  * `U` must not be `Undefinable<*>`.
 *      * If the result of _transformer_ is `undefined`, this throw an `Error`.
 *      * If the result of _recoverer_ is undefined`, this throw an `Error`.
 *  * If you'd like to accept `Undefinable<*>` as `U`, use a combination `andThen()` and `orElse()`.
 */
export function mapOrElseForUndefinable<T, U>(
    input: Undefinable<T>,
    recoverer: RecoveryFn<U>,
    transformer: TransformFn<T, U>
): U {
    let r: U;
    let msg = '';
    if (input !== undefined) {
        r = transformer(input);
        msg = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE;
    } else {
        r = recoverer();
        msg = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE;
    }
    return expectNotUndefined(r, msg);
}
