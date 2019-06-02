/**
 *  This module provies that the Option type interface whose APIs are inspired
 *  by Rust's [`std::option::Option<T>`](https://doc.rust-lang.org/std/option/index.html).
 *
 *  We don't use a class to provides this module by these reason:
 *
 *  - Make treeshaking friendly.
 *      - Almost minifier cannot remove functions by default on `.prototype` even if they are unused.
 *  - Relax the incompatible problem by mixing multiple versions of this package
 *    in module dependency tree.
 *      - e.g. `instanceof` will be a problem. See ([#337](https://github.com/karen-irc/option-t/pull/337)).
 */

export {
    Option,
    Some,
    None,
    createSome,
    createNone,
    isSome,
    isNone,
} from './Option';

export { andForOption as and } from './and';
export { andThenForOption as andThen } from './andThen';
export { expectIsSome as expect } from './expect';
export { mapForOption as map } from './map';
export { mapOrForOption as mapOr } from './mapOr';
export { mapOrElseForOption as mapOrElse } from './mapOrElse';
export { orForOption as or } from './or';
export { orElseForOption as orElse } from './orElse';
export { transposeForOption as transpose } from './transpose';
export { tapOption as tap } from './tap';
export { unwrapOption as unwrap } from './unwrap';
export { unwrapOrFromOption as unwrapOr } from './unwrapOr';
export { unwrapOrElseFromOption as unwrapOrElse } from './unwrapOrElse';
