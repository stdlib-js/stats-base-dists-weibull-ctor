<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Weibull

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Weibull distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
Weibull = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-ctor@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var Weibull = require( 'path/to/vendor/umd/stats-base-dists-weibull-ctor/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-ctor@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.Weibull;
})();
</script>
```

#### Weibull( \[k, lambda] )

Returns a [Weibull][weibull-distribution] distribution object.

```javascript
var weibull = new Weibull();

var mode = weibull.mode;
// returns 0.0
```

By default, `k = 1.0` and `lambda = 1.0`. To create a distribution having a different `k` (shape parameter) and `lambda` (scale parameter), provide the corresponding arguments.

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var mode = weibull.mode;
// returns ~2.828
```

* * *

## weibull

A [Weibull][weibull-distribution] distribution object has the following properties and methods...

### Writable Properties

#### weibull.k

Shape parameter of the distribution. `k` **must** be a positive number.

```javascript
var weibull = new Weibull();

var k = weibull.k;
// returns 1.0

weibull.k = 3.0;

k = weibull.k;
// returns 3.0
```

#### weibull.lambda

Scale parameter of the distribution. `lambda` **must** be a positive number.

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var lambda = weibull.lambda;
// returns 4.0

weibull.lambda = 3.0;

lambda = weibull.lambda;
// returns 3.0
```

* * *

### Computed Properties

#### Weibull.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var entropy = weibull.entropy;
// returns ~2.532
```

#### Weibull.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var kurtosis = weibull.kurtosis;
// returns ~-0.252
```

#### Weibull.prototype.mean

Returns the [expected value][expected-value].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var mu = weibull.mean;
// returns ~10.877
```

#### Weibull.prototype.mode

Returns the [mode][mode].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var mode = weibull.mode;
// returns ~11.167
```

#### Weibull.prototype.skewness

Returns the [skewness][skewness].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var skewness = weibull.skewness;
// returns ~-0.087
```

#### Weibull.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var s = weibull.stdev;
// returns ~3.051
```

#### Weibull.prototype.variance

Returns the [variance][variance].

```javascript
var weibull = new Weibull( 4.0, 12.0 );

var s2 = weibull.variance;
// returns ~9.311
```

* * *

### Methods

#### Weibull.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.cdf( 0.5 );
// returns ~0.016
```

#### Weibull.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (logCDF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.logcdf( 0.8 );
// returns ~-3.239
```

#### Weibull.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.logpdf( 0.8 );
// returns ~-2.343
```

#### Weibull.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.mgf( 0.5 );
// returns ~9.878
```

#### Weibull.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.pdf( 0.8 );
// returns ~0.096
```

#### Weibull.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var weibull = new Weibull( 2.0, 4.0 );

var y = weibull.quantile( 0.5 );
// returns ~3.33

y = weibull.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-ctor@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var weibull = new Weibull( 2.0, 4.0 );

var mu = weibull.mean;
// returns ~3.545

var mode = weibull.mode;
// returns ~2.828

var s2 = weibull.variance;
// returns ~3.434

var y = weibull.cdf( 0.8 );
// returns ~0.039

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-weibull-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-weibull-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-weibull-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-weibull-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-weibull-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-weibull-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-weibull-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-weibull-ctor/main/LICENSE

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
