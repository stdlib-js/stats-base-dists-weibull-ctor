// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-entropy@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-kurtosis@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-mean@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-median@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-mode@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-skewness@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-stdev@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-variance@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-cdf@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-logcdf@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-logpdf@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-mgf@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-pdf@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-weibull-quantile@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function g(){var s,e;if(!(this instanceof g))return 0===arguments.length?new g:new g(arguments[0],arguments[1]);if(arguments.length){if(s=arguments[1],!i(e=arguments[0]))throw new TypeError(v("19h7d,HT",e));if(!i(s))throw new TypeError(v("19h7c,HN",s))}else e=1,s=1;return t(this,"k",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t))throw new TypeError(v("19h8k,HE",t));e=t}}),t(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t))throw new TypeError(v("19h8k,HE",t));s=t}}),this}e(g.prototype,"entropy",(function(){return n(this.k,this.lambda)})),e(g.prototype,"kurtosis",(function(){return r(this.k,this.lambda)})),e(g.prototype,"mean",(function(){return d(this.k,this.lambda)})),e(g.prototype,"median",(function(){return o(this.k,this.lambda)})),e(g.prototype,"mode",(function(){return m(this.k,this.lambda)})),e(g.prototype,"skewness",(function(){return l(this.k,this.lambda)})),e(g.prototype,"stdev",(function(){return p(this.k,this.lambda)})),e(g.prototype,"variance",(function(){return a(this.k,this.lambda)})),s(g.prototype,"cdf",(function(t){return h(t,this.k,this.lambda)})),s(g.prototype,"logcdf",(function(t){return b(t,this.k,this.lambda)})),s(g.prototype,"logpdf",(function(t){return u(t,this.k,this.lambda)})),s(g.prototype,"mgf",(function(t){return f(t,this.k,this.lambda)})),s(g.prototype,"pdf",(function(t){return j(t,this.k,this.lambda)})),s(g.prototype,"quantile",(function(t){return c(t,this.k,this.lambda)}));export{g as default};
//# sourceMappingURL=index.mjs.map
