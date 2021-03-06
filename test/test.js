/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isFunction = require( '@stdlib/assert-is-function' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var quantile = require( '@stdlib/stats-base-dists-weibull-quantile' );
var logcdf = require( '@stdlib/stats-base-dists-weibull-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-weibull-logpdf' );
var cdf = require( '@stdlib/stats-base-dists-weibull-cdf' );
var mgf = require( '@stdlib/stats-base-dists-weibull-mgf' );
var pdf = require( '@stdlib/stats-base-dists-weibull-pdf' );
var entropy = require( '@stdlib/stats-base-dists-weibull-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-weibull-kurtosis' );
var skewness = require( '@stdlib/stats-base-dists-weibull-skewness' );
var variance = require( '@stdlib/stats-base-dists-weibull-variance' );
var stdev = require( '@stdlib/stats-base-dists-weibull-stdev' );
var mode = require( '@stdlib/stats-base-dists-weibull-mode' );
var mean = require( '@stdlib/stats-base-dists-weibull-mean' );
var Weibull = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Weibull, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an `k` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Weibull( value, 2.0 );
		};
	}
});

tape( 'the function throws an error if provided a `lambda` argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			// eslint-disable-next-line no-new
			new Weibull( 2.0, value );
		};
	}
});

tape( 'if provided arguments, the function requires both `k` and `lambda`', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		// eslint-disable-next-line no-new
		new Weibull( 2.0 );
	}
});

tape( 'the function returns a new distribution instance (default parameters)', function test( t ) {
	var weibull = new Weibull();
	t.strictEqual( weibull instanceof Weibull, true, 'returns an instance' );
	t.end();
});

tape( 'the function returns a new distribution instance (custom parameters)', function test( t ) {
	var weibull = new Weibull( 2.0, 4.0 );
	t.strictEqual( weibull instanceof Weibull, true, 'returns an instance' );
	t.end();
});

tape( 'the function can be invoked without the new operator', function test( t ) {
	// eslint-disable-next-line new-cap
	var weibull = Weibull();
	t.strictEqual( weibull instanceof Weibull, true, 'returns an instance' );

	// eslint-disable-next-line new-cap
	weibull = Weibull( 2.0, 4.0 );
	t.strictEqual( weibull instanceof Weibull, true, 'returns an instance' );

	t.end();
});

tape( 'the created distribution has a property for getting and setting `k`', function test( t ) {
	var weibull;

	weibull = new Weibull( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( weibull, 'k' ), true, 'has property' );
	t.strictEqual( weibull.k, 2.0, 'returns expected value' );

	weibull.k = 3.0;
	t.strictEqual( weibull.k, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `k` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var weibull = new Weibull();
			weibull.k = value;
		};
	}
});

tape( 'the created distribution has a property for getting and setting `lambda`', function test( t ) {
	var weibull;

	weibull = new Weibull( 2.0, 4.0 );
	t.strictEqual( hasOwnProp( weibull, 'lambda' ), true, 'has property' );
	t.strictEqual( weibull.lambda, 4.0, 'returns expected value' );

	weibull.lambda = 3.0;
	t.strictEqual( weibull.lambda, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the created distribution throws an error if one attempts to set `lambda` to a value which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var weibull = new Weibull();
			weibull.lambda = value;
		};
	}
});

tape( 'the distribution prototype has a property for retrieving the distribution entropy', function test( t ) {
	var weibull;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'entropy' ), true, 'has property' );

	weibull = new Weibull();
	t.strictEqual( weibull.entropy, entropy( 1.0, 1.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution kurtosis', function test( t ) {
	var weibull;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'kurtosis' ), true, 'has property' );

	weibull = new Weibull( 2.0, 4.5 );
	t.strictEqual( weibull.kurtosis, kurtosis( 2.0, 4.5 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mean', function test( t ) {
	var weibull;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'mean' ), true, 'has property' );

	weibull = new Weibull( 2.0, 2.0 );
	t.strictEqual( weibull.mean, mean( 2.0, 2.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution mode', function test( t ) {
	var weibull;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'mode' ), true, 'has property' );

	weibull = new Weibull( 2.0, 3.0 );
	t.strictEqual( weibull.mode, mode( 2.0, 3.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution skewness', function test( t ) {
	var weibull;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'skewness' ), true, 'has property' );

	weibull = new Weibull( 0.5, 3.2 );
	t.strictEqual( weibull.skewness, skewness( 0.5, 3.2 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution standard deviation', function test( t ) {
	var weibull;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'stdev' ), true, 'has property' );

	weibull = new Weibull( 3.0, 5.0 );
	t.strictEqual( weibull.stdev, stdev( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a property for retrieving the distribution variance', function test( t ) {
	var weibull;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'variance' ), true, 'has property' );

	weibull = new Weibull( 3.0, 5.0 );
	t.strictEqual( weibull.variance, variance( 3.0, 5.0 ), 'returns expected value' );

	t.end();
});

tape( 'the distribution prototype has a method for evaluating the cumulative distribution function (CDF)', function test( t ) {
	var weibull;
	var y;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'cdf' ), true, 'has property' );
	t.strictEqual( isFunction( Weibull.prototype.cdf ), true, 'has method' );

	weibull = new Weibull();
	y = weibull.cdf( 0.5 );

	t.strictEqual( y, cdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the cumulative distribution function (logCDF)', function test( t ) {
	var weibull;
	var y;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'logcdf' ), true, 'has property' );
	t.strictEqual( isFunction( Weibull.prototype.logcdf ), true, 'has method' );

	weibull = new Weibull();
	y = weibull.logcdf( 0.5 );

	t.strictEqual( y, logcdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the natural logarithm of the probability density function (logPDF)', function test( t ) {
	var weibull;
	var y;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'logpdf' ), true, 'has property' );
	t.strictEqual( isFunction( Weibull.prototype.logpdf ), true, 'has method' );

	weibull = new Weibull();
	y = weibull.logpdf( 0.5 );

	t.strictEqual( y, logpdf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the moment-generating function (MGF)', function test( t ) {
	var weibull;
	var y;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'mgf' ), true, 'has property' );
	t.strictEqual( isFunction( Weibull.prototype.mgf ), true, 'has method' );

	weibull = new Weibull();
	y = weibull.mgf( 0.5 );

	t.strictEqual( y, mgf( 0.5, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the probability density function (PDF)', function test( t ) {
	var weibull;
	var y;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'pdf' ), true, 'has property' );
	t.strictEqual( isFunction( Weibull.prototype.pdf ), true, 'has method' );

	weibull = new Weibull();
	y = weibull.pdf( 0.2 );

	t.strictEqual( y, pdf( 0.2, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});

tape( 'the distribution prototype has a method for evaluating the quantile function', function test( t ) {
	var weibull;
	var y;

	t.strictEqual( hasOwnProp( Weibull.prototype, 'quantile' ), true, 'has property' );
	t.strictEqual( isFunction( Weibull.prototype.quantile ), true, 'has method' );

	weibull = new Weibull();
	y = weibull.quantile( 0.8 );

	t.strictEqual( y, quantile( 0.8, 1.0, 1.0 ), 'returns expected value' );
	t.end();
});
