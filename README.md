# option-t

[![npm](https://img.shields.io/npm/v/option-t.svg?style=flat)](https://www.npmjs.com/package/option-t)
[![CI on main branch](https://github.com/option-t/option-t/actions/workflows/ci_on_main.yaml/badge.svg)](https://github.com/option-t/option-t/actions/workflows/ci_on_main.yaml)

* **This library provides a toolkit for _nullable_ types in ECMAScript**.
    - `T | null`
    - `T | undefined`
    - `T | null | undefined`
    - [_Result type_](https://en.wikipedia.org/wiki/Result_type)
    - Tagged [_Option type_](https://en.wikipedia.org/wiki/Option_type)
* **APIs are inspired by Rust Language's [`Option<T>`](https://doc.rust-lang.org/std/option/) and [`Result<T, E>`](https://doc.rust-lang.org/std/result/)**.
* **This library helps to sort the "nullable" convention in your project**.
* **TypeScript friendly APIs**.
    * We recommend to use this with some static type systems like TypeScript.
* **Zero dependency**.
    * We use only a pure [ECMAScript](https://tc39.es/ecma262/) feature to implement this library as possible
      except a packaging system or a legacy module system.
    * This library is designed to be portable to any [host environments](https://tc39.es/ecma262/#host-environment)
      supporting a set of ECMAScript features which we use, _at implementation code level (not at packaging level)_.
    * We might provide a feature using [host defined](https://tc39.es/ecma262/#host-defined) facilities
      but they would be a __opt-in__.
* **Tree shakable completely**.
* **ES Module first**.
    * Of course, we provide CommonJS too for backward compatibility.
* **Enable to use with a programming styles that mixes an execution context between server and client across the boundary (e.g. [Qwik](https://github.com/BuilderIO/qwik)).**


## Motivation

This library provides these conventions for your project:

1. Uniform an expression of _"none"_ value in JavaScript.
2. Uniform a way to carry error information instead of throwing an error by _result type_.
3. Provide various utility functions to handle _1_ and _2_ easily.

And Rust's [`std::option`](https://doc.rust-lang.org/std/option/) and [`std::result`](https://doc.rust-lang.org/std/result/) are
suggestive to achieve these conventions in practice. Thus this package is inspired by their design.


### Uniform the expression of "none" value.

In JavaScript world, there are many ways to express "there is no value".
At least in ECMA262, There are some ways to represent them:

* `undefined` (e.g. `Map.prototype.get()`)
* `null` (e.g. `RegExp.prototype.exec()`)
* `-1` (e.g. `String.prototype.indexOf()`)

In addition, ECMA262 interacts with [DOM binding](https://heycam.github.io/webidl/),
Node.js standard modules, and others. There are additional various ways to represent "none" value.

In practice, we write some _glue code_ to tame their various ways in our project to uniform their expression style.
This library contributes to uniform the convention to write it.


### Uniform the way to carry error information instead of throwing an error.

_Exception_ is useful but it has some terrible aspects.
It's easy that _try-catch_ statement to be a jump instruction by large scoped _try-catch_ statement.
It's hard to find where to throw an error, it's also hard to handle a penetrated exception from a lower layer.
Especially, _exception_ mechanism mis-matches with an async programming model.
ECMA262 7th' _async-await_ relaxes the problem about an exception with async programming,
but there is still the problem about exceptions in traditional synchronous programming.
Furthermore, if you interact with `setTimeout()` and other async APIs built with callback style on event loop,
this problem faces you.

And some async-push based paradigm like `Rx.Observable<T>` does not allow throw any exceptions
in their _Observable_ stream. If you throw an error in it, only _catch()_ operator can catch the error.
But a programmer would sometimes forget to use its operator. This means that throwing an Error in Rx's _Observable_
is pretty mis-matched action. _Promise<T>_ also has a similar problem.

And exception in ECMA262 is not friendly with static typing model
because ECMA262's _throw_ can throw not only `Error` but also other object types.

In Rust which is a programming language designed for parallel and seftiness, it treats errors in two category:

> Rust groups errors into two major categories: _recoverable_ and _unrecoverable_ errors.
> For a recoverable error, such as a file not found error,
> it’s reasonable to report the problem to the user and retry the operation.
> Unrecoverable errors are always symptoms of bugs, like trying to access a location beyond the end of an array.

This categorization is pretty useful to relax the problem about exception in ECMA262 which this section described.

Thus this library provides a way to express _recoverable_ error and also recommends
to use throwing an error only if you intend to throw an _unrecoverable_ error.
This categorization introduces a convenient convention for you:

* If the code uses _throw_, you should be careful about _unrecoverable_ error.
* If the code returns `Result<T, E>` provided this library, then you should handle it correctly.

This convention is clear as error handling style and it's static typing friendly by _generics_.


### Provide a utility function to handle these uniformed expression easily.

Some static type checking tools also provide a way to check nullability and provide these conventions.

- Flowtype's semantics has [a built-in "Maybe" types](https://flow.org/en/docs/types/maybe/),
- TypeScript has [a non-nullable type check](https://github.com/Microsoft/TypeScript/issues/185),
- Google Closure Compiler also can check a non-nullable type via JSDoc style annotations in some compilation mode.

Flowtype and TypeScript checks with their control flow analysis
(Sorry, I'm not sure about the details of Google Closure Compiler's behavior).

However, these compilers do not provide a way to handle their value easily like `map` or `flatMap` operations.

Rust's `std::option` and `std::result` have some utility operation methods to handle them easily.
This library also provides a convenient way to handle them and its way is inspired by Rust's ones.



## Supported Environments

We target to run in following environments.

- Language
    - [ECMA262 2017 edition](https://262.ecma-international.org/8.0/).
    - TypeScript's latest version.
- Module system
    - ES Module ([ES2015](https://262.ecma-international.org/6.0/) level).
    - CommonJS
    - A runtime environment or module bundler must support Node.js' [package.json's `exports` field](https://nodejs.org/api/packages.html#package-entry-points) (Newer is better).


### Caution

1. Your code may work with this package even if your project does not supports all of these requirements.
   But we may not be able to support such environments officially. We recommend to update your environment generally.
2. If you would like to work this packages for a more legacy environment (e.g. ES2016 or earlier)
   we recommend to transform whole of codes including your dependencies in your build pipeline.
    - If you need to support ES5 environment, you can use [**`v37`**](https://github.com/option-t/option-t/tree/v37.3.0) too.
3. If your project still use TypeScript's `--moduleResolution` with `node/node10` setting, please use [**`v35`**](https://github.com/option-t/option-t/tree/v35.0.0).



## Installation

```sh
npm install --save option-t

# If you need to supports an environment that does not support ES2017
# without any transform whole of programs including dependencies.
npm install --save option-t@^37

# If your project still...
#   1. Use TypeScript with `--moduleResolution node` or `--moduleResolution node10` setting.
#   2. Or use some other tools that does not support Node.js's package.json's `exports` field.
#       - For example, `eslint-plugin-import@2.27.5`'s `import/no-unresolved` rule would be affected.
npm install --save option-t@^35
```




## Usage & APIs

All APIs are TypeScript ready.

* _Utility functions for these types_. These are designed for more tree shaking friendly and more usable for JavaScript common world.
    * [`Nullable<T>` (`T | null`)](./docs/public_api_list.md#nullable)
    * [`Undefinable<T>` (`T | undefined`)](./docs/public_api_list.md#undefinable)
    * [`Maybe<T>` (`T | null | undefined`)](./docs/public_api_list.md#maybe)
    * plain objects
        * [`Result<T, E>` (`{ ok: true; val: T } | { ok: false; err: E; }`)](./docs/public_api_list.md#plainresult)
        * [`Option<T>` (`{ ok: true; val: T } | { ok: false; }`)](./docs/public_api_list.md#plainoption) (_deprecated_)
* [Wrapper objects](./docs/wrapper_objects.md) ([__*deprecated*__](https://github.com/option-t/option-t/issues/459)).

Additional documents are in [`docs/`](./docs/).


### How to import

**You can use [these paths](./docs/public_api_list.md) in both of CommonJS style and ES Module style.**
This package provides some sub directories to import various functions (e.g. `option-t/PlainResult`).

If you're project cannot import by their path, please read [this guide](./docs/how_to_import.md) to know more details.

#### Examples

```js
import { isNotNull } from 'option-t/Nullable';
import { unwrapNullable } from 'option-t/Nullable/Nullable';
import { createOk, isOk } from 'option-t/PlainResult';
```


### Deprecation

All deprecated items including "not recommended" are marked as `@deprecated` in JSDoc.
Please read [this guide](./docs/deprecated_apis.md) to know more details.


## See also

These documents would provide more information about `Option<T>` and `Result<T, E>`.
These are written for Rust, but the essence is just same.

- [Error Handling - Rust by Example](https://doc.rust-lang.org/rust-by-example/error.html)
- [Error Handling - The Rust Programming Language](https://doc.rust-lang.org/book/second-edition/ch09-00-error-handling.html)
- [`std::option` - Rust](https://doc.rust-lang.org/std/option/)
- [`std::result` - Rust](https://doc.rust-lang.org/std/result/)




## License

[MIT License](./LICENSE.MIT)






## Contribution

- Use npm v9 or later to install dev-dependency toolchains.



## Related works: Comparison with other similar packages

### [fp-ts (v2.13.1)](https://github.com/gcanti/fp-ts/tree/2.13.1)

_fp-ts_ is a package that provides various tools to write a functional programming style code including _Either_ and _Option_ type.

our design’ origin is Rust language, so we also contains an essence of functional programming style which Rust language contains.
In this point, features that we provide would be similar to fp-ts’ one.

However, However, we do not aim to provide a feature to write a functional programming language code unlike fp-ts.
Our design goal is that we provide more specialized tools to handle an absence of values.


### [neverthrow (v6.0.0)](https://github.com/supermacro/neverthrow/tree/v6.0.0)

_neverthrow_ is a package that provides _Result_ type implementation.
At this point, we think that we and they share the same spirits.

However, we think there are some different design decisions between neverthrow and us.


#### option-t does not provide a method chain style but have a perfect "tree-shakability"

We do not provide class based implementation and method chaining style.
Historically, we had provided a method-chain style APIs and data types as tier 1.

- [`ClassicOption`](./packages/option-t/src/classic_option/classic_option.ts)
- [`ClassicResult`](./packages/option-t/src/classic_result/classic_result.ts)

But we gave up method chain style as primary style and switched our primary APIs
to current simple functions combination style for various reasons.

First, there was a problem with [dead code elimination](https://en.wikipedia.org/wiki/Dead-code_elimination).
Dead code elimination (as known as DCE or “tree shaking” in JavaScript toolchain context) is important optimization.
It reduces a final bundled code size after linking codes by a module bundler (linker).

However, it’s hard to remove unused object property methods in JavaScript.
To remove them _safely_, an optimizer should know whether an object property is used or not over a whole of programs.
But this kind of optimization requires perfect call graph information too.
This kind of optimization is easy relatively with a static language like C++ or Rust
but JavaScript is a dynamic language essentially.
JavaScript has a multiple way to prevent a this kind of optimization like a reflection (e.g. `Object.keys(obj)`).
So it’s hard.

Under this condition, we cannot add a feature as property methods without increase the final code size.
We would like to add a popular feature as a part of this package to reuse it or would like to fill a gap with Rust's original feature set.
But a user project does not use all features at all times.
They use a partial of this package generally. Even if an user project does not use them,
features provided as an object property method are not removed, so it increases a final application size.
This might be a big problem for client-side applications, especially to implement SDK libraries.
Thus we would like to avoid it sincerely.

Exceptionally, as our memory, Google Closure Compiler’s advanced optimization mode can do such aggressive dead code elimination
about an unused object property as a part of static optimization.
But it’s not a popular toolchain choice in the 2010s later.
We could not expect that a user project accept it as a popular choice rather than UglyfyJS, terser,
or other code minifier lacking an analysis whole of programs statically.

Second, there was a problem with TypeScript’s type inference.
In 2016~2018, our method chain style implementation sometimes fall into that
a type parameter for generics fallback to `any` or `unknown`
in the middle of a long (relatively complex) method chain in our user project.
This causes to break a type integrity whole of a project and causes a bad developer experience.

Third, there was a problem making it hard to keep a consistent behavior with mixing multiple versions in a project dependency.
A class based object implementation often supports `instanceof` check naturally as a part of APIs implicitly.
However, if there are multiple versions of same name package in a project dependencies
by aggregating them with semantic versioning, `instanceof` behavior might be inconsistent as contrary to expectations of a developer.

For example,  the following code will result as `false`. This is just unsound.

```js
// This is some_package@v2 actually.
import { SomeClass } from 'some_package';
// This package uses some_package@v1 as dependency.
import { getBar } from 'other_package';

// This value is some_package@v1's instance
// that have the same type shape with some_package@v2's same named class instance.
const bar = getBar();
// Developers think this should be `true`, but the actual is `false`.
console.log(bar instanceof SomeClass); // false
```

You may think TypeScript’s static type system can fix this problem,
but it cannot do. TypeScript’s type system uses structural subtyping.
This example is valid if the `bar`  and `SomeClass`  (instance) have the same type shape.
As a result, it’s bad behavior. To fix above problems,
we gave up method chain style and made it deprecated.

Fourth, a new programming style for web application in JavaScript is emerging that
mixes a code execution context either with a client or a server  (e.g. [Qwik](https://github.com/BuilderIO/qwik)).
With their style, each of objects are required to be serializable to allow to transfer a data
from the server to the client across boundaries. We cannot use method chains in such a case.

Finally, we shifted to provide a set of minimum types and various standalone "operator" functions.
This design allows us to "tree-shaking" perfectly to remove unused functions.

Of course, we know this design style is a boring programming style.
If [pipeline operator proposal](https://github.com/tc39/proposal-pipeline-operator) advance to the part of ECMA262 spec,
this boring style problem might be relaxed.

Furthermore, we think that it happens many times reading the code but writing one is fewer than it.
We believe that this style is tiring but not a problem in the long term.
