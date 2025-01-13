// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,u=n-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(u):t(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function o(r){var n,t,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!e(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(t=(-o).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(n),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):u.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var a=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,g=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":a(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,b,"$1e"),t=l.call(t,d,"e"),t=l.call(t,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,h,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function N(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var m=String.fromCharCode,k=Array.isArray;function A(r){return r!=r}function _(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function E(r){var n,e,t,u,f,a,c,s,l,p,v,h,y;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))a+=t;else{if(n=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,l=0;l<e.length;l++)switch(u=e.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,A(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=n?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!A(t.arg)){if((f=parseInt(t.arg,10))<0||f>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(f)?String(t.arg):m(f)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=w(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,h=t.padRight,y=void 0,(y=v-p.length)<0?p:p=h?p+N(y):N(y)+p)),a+=t.arg||"",c+=1}return a}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,e,t,i;for(e=[],i=0,t=U.exec(r);t;)(n=r.slice(i,U.lastIndex-t[0].length)).length&&e.push(n),e.push(S(t)),i=U.lastIndex,t=U.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function j(r){var n,e;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[I(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return E.apply(null,n)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,$=x.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,u,f;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(V.call(r,n)||$.call(r,n)?(t=r.__proto__,r.__proto__=x,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),u="get"in e,f="set"in e,i&&(u||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&F&&F.call(r,n,e.get),f&&O&&O.call(r,n,e.set),r};function P(r,n,e){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function W(r,n,e){G(r,n,{configurable:!1,enumerable:!1,get:e})}function C(r){return"number"==typeof r}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return H&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"",X=L()?function(r){var n,e,t,i,u;if(null==r)return R.call(r);e=r[q],u=q,n=null!=(i=r)&&M.call(i,u);try{r[q]=void 0}catch(n){return R.call(r)}return t=R.call(r),n?r[q]=e:delete r[q],t}:function(r){return R.call(r)},Y=Number,z=Y.prototype.toString,B=L();function D(r){return"object"==typeof r&&(r instanceof Y||(B?function(r){try{return z.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function J(r){return C(r)||D(r)}function K(r){return C(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function nr(r){return r!=r}P(J,"isPrimitive",C),P(J,"isObject",D),P(rr,"isPrimitive",K),P(rr,"isObject",Q);var er,tr="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,n,e;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(tr&&e instanceof Uint32Array||"[object Uint32Array]"===X(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,or=er,ar="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,sr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,n,e;if("function"!=typeof cr)return!1;try{n=new cr([1,3.14,-3.14,NaN]),e=n,r=(ar&&e instanceof Float64Array||"[object Float64Array]"===X(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=fr,vr="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,n,e;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,256,257]),e=n,r=(vr&&e instanceof Uint8Array||"[object Uint8Array]"===X(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr=lr,br="function"==typeof Uint16Array,wr="function"==typeof Uint16Array?Uint16Array:null,Nr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,n,e;if("function"!=typeof wr)return!1;try{n=new wr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(br&&e instanceof Uint16Array||"[object Uint16Array]"===X(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var mr,kr={uint16:gr,uint8:dr};(mr=new kr.uint16(1))[0]=4660;var Ar=52===new kr.uint8(mr.buffer)[0],_r=!0===Ar?1:0,Er=new pr(1),Ur=new or(Er.buffer);function Sr(r){return Er[0]=r,Ur[_r]}var Ir=!0===Ar?1:0,jr=new pr(1),xr=new or(jr.buffer);function Tr(r,n){return jr[0]=r,xr[Ir]=n>>>0,jr[0]}var Fr=1023,Or=Y.NEGATIVE_INFINITY,Vr=.6931471803691238,$r=1.9082149292705877e-10,Gr=0x40000000000000,Pr=.3333333333333333,Wr=1048575,Cr=2146435072,Hr=1048576,Lr=1072693248;function Rr(r){var n,e,t,i,u,f,o,a,c,s,l,p;return 0===r?Or:nr(r)||r<0?NaN:(u=0,(e=Sr(r))<Hr&&(u-=54,e=Sr(r*=Gr)),e>=Cr?r+r:(u+=(e>>20)-Fr|0,u+=(a=614244+(e&=Wr)&1048576|0)>>20|0,o=(r=Tr(r,e|a^Lr))-1,(Wr&2+e)<3?0===o?0===u?0:u*Vr+u*$r:(f=o*o*(.5-Pr*o),0===u?o-f:u*Vr-(f-u*$r-o)):(a=e-398458|0,c=440401-e|0,i=(l=(p=(s=o/(2+o))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),f=t+i,(a|=c)>0?(n=.5*o*o,0===u?o-(n-s*(n+f)):u*Vr-(n-(s*(n+f)+u*$r)-o)):0===u?o-s*(o-f):u*Vr-(s*(o-f)-u*$r-o))))}var Mr=.5772156649015329,Zr=Math.floor;function qr(r){return Zr(r)===r}function Xr(r){return Math.abs(r)}var Yr=2147483647,zr=2146435072;function Br(r,n){var e,t,i,u;return i=(u=r*r)*u,t=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(i=1-(e=.5*u))+(1-i-e+(u*t-r*n))}var Dr=-.16666666666666632,Jr=.00833333333332249,Kr=-.0001984126982985795,Qr=27557313707070068e-22,rn=-2.5050760253406863e-8,nn=1.58969099521155e-10;function en(r,n){var e,t,i;return e=Jr+(i=r*r)*(Kr+i*Qr)+i*(i*i)*(rn+i*nn),t=i*r,0===n?r+t*(Dr+i*e):r-(i*(.5*n-t*e)-n-t*Dr)}var tn,un,fn=1048575,on=!0===Ar?0:1,an=new pr(1),cn=new or(an.buffer);!0===Ar?(tn=1,un=0):(tn=0,un=1);var sn={HIGH:tn,LOW:un},ln=new pr(1),pn=new or(ln.buffer),vn=sn.HIGH,hn=sn.LOW;function yn(r,n){return pn[vn]=r,pn[hn]=n,ln[0]}var gn=Number.POSITIVE_INFINITY,dn=1023,bn=-1023,wn=-1074;function Nn(r){return r===gn||r===Or}var mn,kn,An=2147483648;!0===Ar?(mn=1,kn=0):(mn=0,kn=1);var _n={HIGH:mn,LOW:kn},En=new pr(1),Un=new or(En.buffer),Sn=_n.HIGH,In=_n.LOW;function jn(r,n,e,t){return En[0]=r,n[t]=Un[Sn],n[t+e]=Un[In],n}function xn(r){return jn(r,[0,0],1,0)}P(xn,"assign",jn);var Tn=[0,0];function Fn(r,n){var e,t;return xn.assign(r,Tn,1,0),e=Tn[0],e&=Yr,t=Sr(n),yn(e|=t&=An,Tn[1])}var On=22250738585072014e-324,Vn=4503599627370496;function $n(r,n,e,t){return nr(r)||Nn(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Xr(r)<On?(n[t]=r*Vn,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}P((function(r){return $n(r,[0,0],1,0)}),"assign",$n);var Gn=2220446049250313e-31,Pn=2148532223,Wn=[0,0],Cn=[0,0];function Hn(r,n){var e,t;return 0===n||0===r||nr(r)||Nn(r)?r:($n(r,Wn,1,0),r=Wn[0],n+=Wn[1],n+=function(r){var n=Sr(r);return(n=(n&zr)>>>20)-Fr|0}(r),n<wn?Fn(0,r):n>dn?r<0?Or:gn:(n<=bn?(n+=52,t=Gn):t=1,xn.assign(r,Cn,1,0),e=Cn[0],e&=Pn,t*yn(e|=n+Fr<<20,Cn[1])))}function Ln(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var Rn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Zn=16777216,qn=5.960464477539063e-8,Xn=Ln(20),Yn=Ln(20),zn=Ln(20),Bn=Ln(20);function Dn(r,n,e,t,i,u,f,o,a){var c,s,l,p,v,h,y,g,d;for(p=u,d=t[e],g=e,v=0;g>0;v++)s=qn*d|0,Bn[v]=d-Zn*s|0,d=t[g-1]+s,g-=1;if(d=Hn(d,i),d-=8*Zr(.125*d),d-=y=0|d,l=0,i>0?(y+=v=Bn[e-1]>>24-i,Bn[e-1]-=v<<24-i,l=Bn[e-1]>>23-i):0===i?l=Bn[e-1]>>23:d>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<e;v++)g=Bn[v],0===c?0!==g&&(c=1,Bn[v]=16777216-g):Bn[v]=16777215-g;if(i>0)switch(i){case 1:Bn[e-1]&=8388607;break;case 2:Bn[e-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=Hn(1,i)))}if(0===d){for(g=0,v=e-1;v>=u;v--)g|=Bn[v];if(0===g){for(h=1;0===Bn[u-h];h++);for(v=e+1;v<=e+h;v++){for(a[o+v]=Rn[f+v],s=0,g=0;g<=o;g++)s+=r[g]*a[o+(v-g)];t[v]=s}return Dn(r,n,e+=h,t,i,u,f,o,a)}}if(0===d)for(e-=1,i-=24;0===Bn[e];)e-=1,i-=24;else(d=Hn(d,-i))>=Zn?(s=qn*d|0,Bn[e]=d-Zn*s|0,i+=24,Bn[e+=1]=s):Bn[e]=0|d;for(s=Hn(1,i),v=e;v>=0;v--)t[v]=s*Bn[v],s*=qn;for(v=e;v>=0;v--){for(s=0,h=0;h<=p&&h<=e-v;h++)s+=Mn[h]*t[v+h];zn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=zn[v];for(n[0]=0===l?s:-s,s=zn[0]-s,v=1;v<=e;v++)s+=zn[v];return n[1]=0===l?s:-s,7&y}function Jn(r,n,e,t){var i,u,f,o,a,c,s;for((u=(e-3)/24|0)<0&&(u=0),o=e-24*(u+1),c=u-(f=t-1),s=f+4,a=0;a<=s;a++)Xn[a]=c<0?0:Rn[c],c+=1;for(a=0;a<=4;a++){for(i=0,c=0;c<=f;c++)i+=r[c]*Xn[f+(a-c)];Yn[a]=i}return Dn(r,n,4,Yn,o,4,u,f,Xn)}var Kn=Math.round,Qn=.6366197723675814,re=1.5707963267341256,ne=6077100506506192e-26,ee=6077100506303966e-26,te=20222662487959506e-37,ie=20222662487111665e-37,ue=84784276603689e-45,fe=2047;function oe(r,n,e){var t,i,u,f,o;return u=r-(t=Kn(r*Qn))*re,f=t*ne,o=n>>20|0,e[0]=u-f,o-(Sr(e[0])>>20&fe)>16&&(f=t*te-((i=u)-(u=i-(f=t*ee))-f),e[0]=u-f,o-(Sr(e[0])>>20&fe)>49&&(f=t*ue-((i=u)-(u=i-(f=t*ie))-f),e[0]=u-f)),e[1]=u-e[0]-f,t}var ae=0,ce=16777216,se=1.5707963267341256,le=6077100506506192e-26,pe=2*le,ve=3*le,he=4*le,ye=598523,ge=1072243195,de=1073928572,be=1074752122,we=1074977148,Ne=1075183036,me=1075388923,ke=1075594811,Ae=1094263291,_e=[0,0,0],Ee=[0,0];function Ue(r,n){var e,t,i,u,f,o,a;if((i=Sr(r)&Yr|0)<=ge)return n[0]=r,n[1]=0,0;if(i<=be)return(i&fn)===ye?oe(r,i,n):i<=de?r>0?(a=r-se,n[0]=a-le,n[1]=a-n[0]-le,1):(a=r+se,n[0]=a+le,n[1]=a-n[0]+le,-1):r>0?(a=r-2*se,n[0]=a-pe,n[1]=a-n[0]-pe,2):(a=r+2*se,n[0]=a+pe,n[1]=a-n[0]+pe,-2);if(i<=ke)return i<=Ne?i===we?oe(r,i,n):r>0?(a=r-3*se,n[0]=a-ve,n[1]=a-n[0]-ve,3):(a=r+3*se,n[0]=a+ve,n[1]=a-n[0]+ve,-3):i===me?oe(r,i,n):r>0?(a=r-4*se,n[0]=a-he,n[1]=a-n[0]-he,4):(a=r+4*se,n[0]=a+he,n[1]=a-n[0]+he,-4);if(i<Ae)return oe(r,i,n);if(i>=zr)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return an[0]=r,cn[on]}(r),a=yn(i-((t=(i>>20)-1046)<<20|0),e),f=0;f<2;f++)_e[f]=0|a,a=(a-_e[f])*ce;for(_e[2]=a,u=3;_e[u-1]===ae;)u-=1;return o=Jn(_e,Ee,t,u),r<0?(n[0]=-Ee[0],n[1]=-Ee[1],-o):(n[0]=Ee[0],n[1]=Ee[1],o)}var Se=1072243195,Ie=1045430272,je=[0,0],xe=3.141592653589793,Te=2.5066282746310007;function Fe(r){return qr(r/2)}function Oe(r){return Fe(r>0?r-1:r+1)}var Ve=Math.sqrt,$e=!0===Ar?0:1,Ge=new pr(1),Pe=new or(Ge.buffer);function We(r,n){return Ge[0]=r,Pe[$e]=n>>>0,Ge[0]}function Ce(r){return 0|r}var He=1072693247,Le=1e300,Re=1e-300,Me=1048575,Ze=1048576,qe=1072693248,Xe=536870912,Ye=524288,ze=20,Be=9007199254740992,De=.9617966939259756,Je=.9617967009544373,Ke=-7.028461650952758e-9,Qe=[1,1.5],rt=[0,.5849624872207642],nt=[0,1.350039202129749e-8],et=1.4426950408889634,tt=1.4426950216293335,it=1.9259629911266175e-8,ut=.6931471805599453,ft=1048576,ot=1071644672,at=20,ct=.6931471824645996,st=-1.904654299957768e-9,lt=1072693247,pt=1105199104,vt=1139802112,ht=1083179008,yt=1072693248,gt=1083231232,dt=3230714880,bt=31,wt=1e300,Nt=1e-300,mt=8008566259537294e-32,kt=[0,0],At=[0,0];function _t(r,n){var e,t,i,u,f,o,a,c,s,l,p,v,h,y;if(nr(r)||nr(n))return NaN;if(xn.assign(n,kt,1,0),f=kt[0],0===kt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ve(r);if(-.5===n)return 1/Ve(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Nn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(n===gn)?0:gn}(r,n)}if(xn.assign(r,kt,1,0),u=kt[0],0===kt[1]){if(0===u)return function(r,n){return n===Or?gn:n===gn?0:n>0?Oe(n)?r:0:Oe(n)?Fn(gn,r):gn}(r,n);if(1===r)return 1;if(-1===r&&Oe(n))return-1;if(Nn(r))return r===Or?_t(-0,-n):n<0?0:gn}if(r<0&&!1===qr(n))return(r-r)/(r-r);if(i=Xr(r),e=u&Yr|0,t=f&Yr|0,a=f>>>bt|0,o=(o=u>>>bt|0)&&Oe(n)?-1:1,t>pt){if(t>vt)return function(r,n){return(Sr(r)&Yr)<=He?n<0?Le*Le:Re*Re:n>0?Le*Le:Re*Re}(r,n);if(e<lt)return 1===a?o*wt*wt:o*Nt*Nt;if(e>yt)return 0===a?o*wt*wt:o*Nt*Nt;p=function(r,n){var e,t,i,u,f,o,a;return u=(i=n-1)*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333)),e=(o=i*it-u*et)-((t=We(t=(f=tt*i)+o,0))-f),r[0]=t,r[1]=e,r}(At,i)}else p=function(r,n,e){var t,i,u,f,o,a,c,s,l,p,v,h,y,g,d,b,w,N,m,k,A;return N=0,e<Ze&&(N-=53,e=Sr(n*=Be)),N+=(e>>ze)-Fr|0,e=(m=e&Me|0)|qe|0,m<=235662?k=0:m<767610?k=1:(k=0,N+=1,e-=Ze),f=We(i=(b=(n=Tr(n,e))-(c=Qe[k]))*(w=1/(n+c)),0),t=(e>>1|Xe)+Ye,a=Tr(0,t+=k<<18),d=(u=i*i)*u*(0===(A=u)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=We(a=3+(u=f*f)+(d+=(o=w*(b-f*a-f*(n-(a-c))))*(f+i)),0),l=We(l=(b=f*a)+(w=o*a+(d-(a-3-u))*i),0),p=Je*l,y=(v=Ke*l+(w-(l-b))*De+nt[k])-((h=We(h=p+v+(s=rt[k])+(g=N),0))-g-s-p),r[0]=h,r[1]=y,r}(At,i,e);if(v=(l=(n-(c=We(n,0)))*p[0]+n*p[1])+(s=c*p[0]),xn.assign(v,kt,1,0),h=Ce(kt[0]),y=Ce(kt[1]),h>=ht){if(0!=(h-ht|y))return o*wt*wt;if(l+mt>v-s)return o*wt*wt}else if((h&Yr)>=gt){if(0!=(h-dt|y))return o*Nt*Nt;if(l<=v-s)return o*Nt*Nt}return v=function(r,n,e){var t,i,u,f,o,a,c,s,l,p;return l=((s=r&Yr|0)>>at)-Fr|0,c=0,s>ot&&(i=Tr(0,((c=r+(ft>>l+1)>>>0)&~(fn>>(l=((c&Yr)>>at)-Fr|0)))>>>0),c=(c&fn|ft)>>at-l>>>0,r<0&&(c=-c),n-=i),r=Ce(r=Sr(a=1-((a=(u=(i=We(i=e+n,0))*ct)+(f=(e-(i-n))*ut+i*st))*(t=a-(i=a*a)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=f-(a-u))+a*o)-a))),(r+=c<<at>>>0)>>at<=0?Hn(a,c):Tr(a,r)}(h,s,l),o*v}var Et=Math.ceil;function Ut(r){return r<0?Et(r):Zr(r)}var St=.6931471803691238,It=1.9082149292705877e-10,jt=1.4426950408889634,xt=709.782712893384,Tt=-745.1332191019411,Ft=1/(1<<28),Ot=-Ft;function Vt(r){var n;return nr(r)||r===gn?r:r===Or?0:r>xt?gn:r<Tt?0:r>Ot&&r<Ft?1+r:function(r,n,e){var t,i,u,f;return Hn(1-(n-(t=r-n)*(u=t-(i=t*t)*(0===(f=i)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),e)}(r-(n=Ut(r<0?jt*r-.5:jt*r+.5))*St,n*It,n)}var $t=143.01608;function Gt(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Vt(r),e=r>$t?(t=_t(r,.5*r-.25))*(t/e):_t(r,r-.5)/e,Te*e*n}function Pt(r,n){return n/((1+Mr*r)*r)}function Wt(r){var n,e,t,i;if(qr(r)&&r<0||r===Or||nr(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===Or}(r)?Or:gn;if(r>171.61447887182297)return gn;if(r<-170.5674972726612)return 0;if((e=Xr(r))>33)return r>=0?Gt(r):(n=0==(1&(t=Zr(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*function(r){var n;if(n=Sr(r),(n&=Yr)<=Se)return n<Ie?r:en(r,0);if(n>=zr)return NaN;switch(3&Ue(r,je)){case 0:return en(je[0],je[1]);case 1:return Br(je[0],je[1]);case 2:return-en(je[0],je[1]);default:return-Br(je[0],je[1])}}(xe*i),n*xe/(Xr(i)*Gt(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Pt(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Pt(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}function Ct(r){return Fe(r>0?r-1:r+1)}var Ht=1072693247,Lt=1e300,Rt=1e-300,Mt=1048575,Zt=1048576,qt=1072693248,Xt=536870912,Yt=524288,zt=20,Bt=9007199254740992,Dt=.9617966939259756,Jt=.9617967009544373,Kt=-7.028461650952758e-9,Qt=[1,1.5],ri=[0,.5849624872207642],ni=[0,1.350039202129749e-8],ei=1.4426950408889634,ti=1.4426950216293335,ii=1.9259629911266175e-8,ui=1048576,fi=1071644672,oi=20,ai=.6931471824645996,ci=-1.904654299957768e-9,si=1072693247,li=1105199104,pi=1139802112,vi=1083179008,hi=1072693248,yi=1083231232,gi=3230714880,di=31,bi=1e300,wi=1e-300,Ni=8008566259537294e-32,mi=[0,0],ki=[0,0];function Ai(r,n){var e,t,i,u,f,o,a,c,s,l,p,v,h,y;if(nr(r)||nr(n))return NaN;if(xn.assign(n,mi,1,0),f=mi[0],0===mi[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ve(r);if(-.5===n)return 1/Ve(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Nn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(n===gn)?0:gn}(r,n)}if(xn.assign(r,mi,1,0),u=mi[0],0===mi[1]){if(0===u)return function(r,n){return n===Or?gn:n===gn?0:n>0?Ct(n)?r:0:Ct(n)?Fn(gn,r):gn}(r,n);if(1===r)return 1;if(-1===r&&Ct(n))return-1;if(Nn(r))return r===Or?Ai(-0,-n):n<0?0:gn}if(r<0&&!1===qr(n))return(r-r)/(r-r);if(i=Xr(r),e=u&Yr|0,t=f&Yr|0,a=f>>>di|0,o=(o=u>>>di|0)&&Ct(n)?-1:1,t>li){if(t>pi)return function(r,n){return(Sr(r)&Yr)<=Ht?n<0?Lt*Lt:Rt*Rt:n>0?Lt*Lt:Rt*Rt}(r,n);if(e<si)return 1===a?o*bi*bi:o*wi*wi;if(e>hi)return 0===a?o*bi*bi:o*wi*wi;p=function(r,n){var e,t,i,u,f,o,a;return u=(i=n-1)*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333)),e=(o=i*ii-u*ei)-((t=We(t=(f=ti*i)+o,0))-f),r[0]=t,r[1]=e,r}(ki,i)}else p=function(r,n,e){var t,i,u,f,o,a,c,s,l,p,v,h,y,g,d,b,w,N,m,k,A;return N=0,e<Zt&&(N-=53,e=Sr(n*=Bt)),N+=(e>>zt)-Fr|0,e=(m=e&Mt|0)|qt|0,m<=235662?k=0:m<767610?k=1:(k=0,N+=1,e-=Zt),f=We(i=(b=(n=Tr(n,e))-(c=Qt[k]))*(w=1/(n+c)),0),t=(e>>1|Xt)+Yt,a=Tr(0,t+=k<<18),d=(u=i*i)*u*(0===(A=u)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=We(a=3+(u=f*f)+(d+=(o=w*(b-f*a-f*(n-(a-c))))*(f+i)),0),l=We(l=(b=f*a)+(w=o*a+(d-(a-3-u))*i),0),p=Jt*l,y=(v=Kt*l+(w-(l-b))*Dt+ni[k])-((h=We(h=p+v+(s=ri[k])+(g=N),0))-g-s-p),r[0]=h,r[1]=y,r}(ki,i,e);if(v=(l=(n-(c=We(n,0)))*p[0]+n*p[1])+(s=c*p[0]),xn.assign(v,mi,1,0),h=Ce(mi[0]),y=Ce(mi[1]),h>=vi){if(0!=(h-vi|y))return o*bi*bi;if(l+Ni>v-s)return o*bi*bi}else if((h&Yr)>=yi){if(0!=(h-gi|y))return o*wi*wi;if(l<=v-s)return o*wi*wi}return v=function(r,n,e){var t,i,u,f,o,a,c,s,l,p;return l=((s=r&Yr|0)>>oi)-Fr|0,c=0,s>fi&&(i=Tr(0,((c=r+(ui>>l+1)>>>0)&~(fn>>(l=((c&Yr)>>oi)-Fr|0)))>>>0),c=(c&fn|ui)>>oi-l>>>0,r<0&&(c=-c),n-=i),r=Ce(r=Sr(a=1-((a=(u=(i=We(i=e+n,0))*ai)+(f=(e-(i-n))*ut+i*ci))*(t=a-(i=a*a)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=f-(a-u))+a*o)-a))),(r+=c<<oi>>>0)>>oi<=0?Hn(a,c):Tr(a,r)}(h,s,l),o*v}function _i(r,n){return nr(r)||nr(n)||r<=0||n<=0?NaN:n*Wt(1+1/r)}function Ei(r,n){var e;return nr(r)||nr(n)||r<=0||n<=0?NaN:(e=_i(r,n),n*n*Wt(1+2/r)-e*e)}function Ui(r){return Fe(r>0?r-1:r+1)}var Si=1072693247,Ii=1e300,ji=1e-300,xi=1048575,Ti=1048576,Fi=1072693248,Oi=536870912,Vi=524288,$i=20,Gi=9007199254740992,Pi=.9617966939259756,Wi=.9617967009544373,Ci=-7.028461650952758e-9,Hi=[1,1.5],Li=[0,.5849624872207642],Ri=[0,1.350039202129749e-8],Mi=1.4426950408889634,Zi=1.4426950216293335,qi=1.9259629911266175e-8,Xi=1048576,Yi=1071644672,zi=20,Bi=.6931471824645996,Di=-1.904654299957768e-9,Ji=1072693247,Ki=1105199104,Qi=1139802112,ru=1083179008,nu=1072693248,eu=1083231232,tu=3230714880,iu=31,uu=1e300,fu=1e-300,ou=8008566259537294e-32,au=[0,0],cu=[0,0];function su(r,n){var e,t,i,u,f,o,a,c,s,l,p,v,h,y;if(nr(r)||nr(n))return NaN;if(xn.assign(n,au,1,0),f=au[0],0===au[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ve(r);if(-.5===n)return 1/Ve(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Nn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(n===gn)?0:gn}(r,n)}if(xn.assign(r,au,1,0),u=au[0],0===au[1]){if(0===u)return function(r,n){return n===Or?gn:n===gn?0:n>0?Ui(n)?r:0:Ui(n)?Fn(gn,r):gn}(r,n);if(1===r)return 1;if(-1===r&&Ui(n))return-1;if(Nn(r))return r===Or?su(-0,-n):n<0?0:gn}if(r<0&&!1===qr(n))return(r-r)/(r-r);if(i=Xr(r),e=u&Yr|0,t=f&Yr|0,a=f>>>iu|0,o=(o=u>>>iu|0)&&Ui(n)?-1:1,t>Ki){if(t>Qi)return function(r,n){return(Sr(r)&Yr)<=Si?n<0?Ii*Ii:ji*ji:n>0?Ii*Ii:ji*ji}(r,n);if(e<Ji)return 1===a?o*uu*uu:o*fu*fu;if(e>nu)return 0===a?o*uu*uu:o*fu*fu;p=function(r,n){var e,t,i,u,f,o,a;return u=(i=n-1)*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333)),e=(o=i*qi-u*Mi)-((t=We(t=(f=Zi*i)+o,0))-f),r[0]=t,r[1]=e,r}(cu,i)}else p=function(r,n,e){var t,i,u,f,o,a,c,s,l,p,v,h,y,g,d,b,w,N,m,k,A;return N=0,e<Ti&&(N-=53,e=Sr(n*=Gi)),N+=(e>>$i)-Fr|0,e=(m=e&xi|0)|Fi|0,m<=235662?k=0:m<767610?k=1:(k=0,N+=1,e-=Ti),f=We(i=(b=(n=Tr(n,e))-(c=Hi[k]))*(w=1/(n+c)),0),t=(e>>1|Oi)+Vi,a=Tr(0,t+=k<<18),d=(u=i*i)*u*(0===(A=u)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=We(a=3+(u=f*f)+(d+=(o=w*(b-f*a-f*(n-(a-c))))*(f+i)),0),l=We(l=(b=f*a)+(w=o*a+(d-(a-3-u))*i),0),p=Wi*l,y=(v=Ci*l+(w-(l-b))*Pi+Ri[k])-((h=We(h=p+v+(s=Li[k])+(g=N),0))-g-s-p),r[0]=h,r[1]=y,r}(cu,i,e);if(v=(l=(n-(c=We(n,0)))*p[0]+n*p[1])+(s=c*p[0]),xn.assign(v,au,1,0),h=Ce(au[0]),y=Ce(au[1]),h>=ru){if(0!=(h-ru|y))return o*uu*uu;if(l+ou>v-s)return o*uu*uu}else if((h&Yr)>=eu){if(0!=(h-tu|y))return o*fu*fu;if(l<=v-s)return o*fu*fu}return v=function(r,n,e){var t,i,u,f,o,a,c,s,l,p;return l=((s=r&Yr|0)>>zi)-Fr|0,c=0,s>Yi&&(i=Tr(0,((c=r+(Xi>>l+1)>>>0)&~(fn>>(l=((c&Yr)>>zi)-Fr|0)))>>>0),c=(c&fn|Xi)>>zi-l>>>0,r<0&&(c=-c),n-=i),r=Ce(r=Sr(a=1-((a=(u=(i=We(i=e+n,0))*Bi)+(f=(e-(i-n))*ut+i*Di))*(t=a-(i=a*a)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=f-(a-u))+a*o)-a))),(r+=c<<zi>>>0)>>zi<=0?Hn(a,c):Tr(a,r)}(h,s,l),o*v}var lu=.34657359027997264,pu=709.782712893384,vu=.6931471803691238,hu=1.9082149292705877e-10,yu=1.4426950408889634,gu=38.816242111356935,du=1.0397207708399179;function bu(r){var n,e,t,i,u,f,o,a,c,s,l,p,v;if(r===gn||nr(r))return r;if(r===Or)return-1;if(0===r)return r;if(r<0?(t=!0,a=-r):(t=!1,a=r),a>=gu){if(t)return-1;if(a>=pu)return gn}if(f=0|Sr(a),a>lu)a<du?t?(i=r+vu,u=-hu,v=-1):(i=r-vu,u=hu,v=1):(v=t?yu*r-.5:yu*r+.5,i=r-(l=v|=0)*vu,u=l*hu),s=i-(r=i-u)-u;else{if(f<1016070144)return r;v=0}return o=1+(c=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((o-(l=3-o*n))/(6-r*l)),0===v?r-(r*p-c):(e=yn(Fr+v<<20,0),p=r*(p-s)-s,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(a=1-(p-r),1024===v?a=Tr(a,i=Sr(a)+(v<<20)|0):a*=e,a-1):(l=1,v<20?a=(l=Tr(l,i=1072693248-(2097152>>v)|0))-(p-r):(a=r-(p+(l=Tr(l,i=Fr-v<<20|0))),a+=1),a*=e))}function wu(r,n,e){return nr(r)||nr(n)||nr(e)||n<=0||e<=0?NaN:r<0?0:-bu(-_t(r/e,n))}function Nu(r){return function(){return r}}P(wu,"factory",(function(r,n){return nr(r)||nr(n)||r<=0||n<=0?Nu(NaN):function(e){return nr(e)?NaN:e<0?0:-bu(-_t(e/n,r))}}));var mu=.6931471803691238,ku=1.9082149292705877e-10,Au=.41421356237309503,_u=-.2928932188134525,Eu=1.862645149230957e-9,Uu=5551115123125783e-32,Su=9007199254740992,Iu=.6666666666666666;function ju(r){var n,e,t,i,u,f,o,a,c,s;if(r<-1||nr(r))return NaN;if(-1===r)return Or;if(r===gn)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<Au){if(t<Eu)return t<Uu?r:r-r*r*.5;r>_u&&(s=0,i=r,e=1)}return 0!==s&&(t<Su?(u=(s=((e=Sr(c=1+r))>>20)-Fr)>0?1-(c-r):r-(c-1),u/=c):(s=((e=Sr(c=r))>>20)-Fr,u=0),(e&=1048575)<434334?c=Tr(c,1072693248|e):(s+=1,c=Tr(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*mu+(u+=s*ku):s*mu-((a=n*(1-Iu*i))-(s*ku+u)-i):(a=(o=(f=i/(2+i))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?i-(n-f*(n+a)):s*mu-(n-(f*(n+a)+(s*ku+u))-i))}function xu(r){return Fe(r>0?r-1:r+1)}var Tu=1072693247,Fu=1e300,Ou=1e-300,Vu=1048575,$u=1048576,Gu=1072693248,Pu=536870912,Wu=524288,Cu=20,Hu=9007199254740992,Lu=.9617966939259756,Ru=.9617967009544373,Mu=-7.028461650952758e-9,Zu=[1,1.5],qu=[0,.5849624872207642],Xu=[0,1.350039202129749e-8],Yu=1.4426950408889634,zu=1.4426950216293335,Bu=1.9259629911266175e-8,Du=1048576,Ju=1071644672,Ku=20,Qu=.6931471824645996,rf=-1.904654299957768e-9,nf=1072693247,ef=1105199104,tf=1139802112,uf=1083179008,ff=1072693248,of=1083231232,af=3230714880,cf=31,sf=1e300,lf=1e-300,pf=8008566259537294e-32,vf=[0,0],hf=[0,0];function yf(r,n){var e,t,i,u,f,o,a,c,s,l,p,v,h,y;if(nr(r)||nr(n))return NaN;if(xn.assign(n,vf,1,0),f=vf[0],0===vf[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ve(r);if(-.5===n)return 1/Ve(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Nn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(n===gn)?0:gn}(r,n)}if(xn.assign(r,vf,1,0),u=vf[0],0===vf[1]){if(0===u)return function(r,n){return n===Or?gn:n===gn?0:n>0?xu(n)?r:0:xu(n)?Fn(gn,r):gn}(r,n);if(1===r)return 1;if(-1===r&&xu(n))return-1;if(Nn(r))return r===Or?yf(-0,-n):n<0?0:gn}if(r<0&&!1===qr(n))return(r-r)/(r-r);if(i=Xr(r),e=u&Yr|0,t=f&Yr|0,a=f>>>cf|0,o=(o=u>>>cf|0)&&xu(n)?-1:1,t>ef){if(t>tf)return function(r,n){return(Sr(r)&Yr)<=Tu?n<0?Fu*Fu:Ou*Ou:n>0?Fu*Fu:Ou*Ou}(r,n);if(e<nf)return 1===a?o*sf*sf:o*lf*lf;if(e>ff)return 0===a?o*sf*sf:o*lf*lf;p=function(r,n){var e,t,i,u,f,o,a;return u=(i=n-1)*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333)),e=(o=i*Bu-u*Yu)-((t=We(t=(f=zu*i)+o,0))-f),r[0]=t,r[1]=e,r}(hf,i)}else p=function(r,n,e){var t,i,u,f,o,a,c,s,l,p,v,h,y,g,d,b,w,N,m,k,A;return N=0,e<$u&&(N-=53,e=Sr(n*=Hu)),N+=(e>>Cu)-Fr|0,e=(m=e&Vu|0)|Gu|0,m<=235662?k=0:m<767610?k=1:(k=0,N+=1,e-=$u),f=We(i=(b=(n=Tr(n,e))-(c=Zu[k]))*(w=1/(n+c)),0),t=(e>>1|Pu)+Wu,a=Tr(0,t+=k<<18),d=(u=i*i)*u*(0===(A=u)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=We(a=3+(u=f*f)+(d+=(o=w*(b-f*a-f*(n-(a-c))))*(f+i)),0),l=We(l=(b=f*a)+(w=o*a+(d-(a-3-u))*i),0),p=Ru*l,y=(v=Mu*l+(w-(l-b))*Lu+Xu[k])-((h=We(h=p+v+(s=qu[k])+(g=N),0))-g-s-p),r[0]=h,r[1]=y,r}(hf,i,e);if(v=(l=(n-(c=We(n,0)))*p[0]+n*p[1])+(s=c*p[0]),xn.assign(v,vf,1,0),h=Ce(vf[0]),y=Ce(vf[1]),h>=uf){if(0!=(h-uf|y))return o*sf*sf;if(l+pf>v-s)return o*sf*sf}else if((h&Yr)>=of){if(0!=(h-af|y))return o*lf*lf;if(l<=v-s)return o*lf*lf}return v=function(r,n,e){var t,i,u,f,o,a,c,s,l,p;return l=((s=r&Yr|0)>>Ku)-Fr|0,c=0,s>Ju&&(i=Tr(0,((c=r+(Du>>l+1)>>>0)&~(fn>>(l=((c&Yr)>>Ku)-Fr|0)))>>>0),c=(c&fn|Du)>>Ku-l>>>0,r<0&&(c=-c),n-=i),r=Ce(r=Sr(a=1-((a=(u=(i=We(i=e+n,0))*Qu)+(f=(e-(i-n))*ut+i*rf))*(t=a-(i=a*a)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=f-(a-u))+a*o)-a))),(r+=c<<Ku>>>0)>>Ku<=0?Hn(a,c):Tr(a,r)}(h,s,l),o*v}var gf=-.6931471805599453;function df(r,n,e){var t;return nr(n)||nr(e)||n<=0||e<=0?NaN:r<0?Or:(t=-yf(r/e,n))<gf?ju(-Vt(t)):Rr(-bu(t))}function bf(r,n,e){var t;return nr(n)||nr(e)||n<=0||e<=0?NaN:r<0||r===gn||r===Or?Or:0===r?1===n?Rr(n/e):Or:(t=r/e,Rr(n/e)+(n-1)*Rr(t)-_t(t,n))}P(df,"factory",(function(r,n){return nr(r)||nr(n)||r<=0||n<=0?Nu(NaN):function(e){var t;return nr(e)?NaN:e<0?Or:(t=-yf(e/n,r))<gf?ju(-Vt(t)):Rr(-bu(t))}})),P(bf,"factory",(function(r,n){var e;return nr(r)||nr(n)||r<=0||n<=0?Nu(NaN):(e=Rr(r/n),function(t){var i;return t<0||t===gn||t===Or?Or:0===t?1===r?Rr(r/n):Or:e+(r-1)*Rr(i=t/n)-_t(i,r)})}));var wf=2220446049250313e-31;function Nf(r,n,e){var t,i,u,f;if(nr(r)||nr(n)||nr(e)||n<=0||e<=0)return NaN;i=1,u=1,f=0;do{i+=t=0==(u*=r*e/(f+=1))?0:u*Wt(1+f/n)}while(t/i>wf);return i}function mf(r){return Fe(r>0?r-1:r+1)}P(Nf,"factory",(function(r,n){return nr(r)||nr(n)||r<=0||n<=0?Nu(NaN):function(e){var t,i,u,f;if(nr(e))return NaN;i=1,u=1,f=0;do{i+=t=0==(u*=e*n/(f+=1))?0:u*Wt(1+f/r)}while(t/i>wf);return i}}));var kf=1072693247,Af=1e300,_f=1e-300,Ef=1048575,Uf=1048576,Sf=1072693248,If=536870912,jf=524288,xf=20,Tf=9007199254740992,Ff=.9617966939259756,Of=.9617967009544373,Vf=-7.028461650952758e-9,$f=[1,1.5],Gf=[0,.5849624872207642],Pf=[0,1.350039202129749e-8],Wf=1.4426950408889634,Cf=1.4426950216293335,Hf=1.9259629911266175e-8,Lf=1048576,Rf=1071644672,Mf=20,Zf=.6931471824645996,qf=-1.904654299957768e-9,Xf=1072693247,Yf=1105199104,zf=1139802112,Bf=1083179008,Df=1072693248,Jf=1083231232,Kf=3230714880,Qf=31,ro=1e300,no=1e-300,eo=8008566259537294e-32,to=[0,0],io=[0,0];function uo(r,n){var e,t,i,u,f,o,a,c,s,l,p,v,h,y;if(nr(r)||nr(n))return NaN;if(xn.assign(n,to,1,0),f=to[0],0===to[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ve(r);if(-.5===n)return 1/Ve(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Nn(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Xr(r)<1==(n===gn)?0:gn}(r,n)}if(xn.assign(r,to,1,0),u=to[0],0===to[1]){if(0===u)return function(r,n){return n===Or?gn:n===gn?0:n>0?mf(n)?r:0:mf(n)?Fn(gn,r):gn}(r,n);if(1===r)return 1;if(-1===r&&mf(n))return-1;if(Nn(r))return r===Or?uo(-0,-n):n<0?0:gn}if(r<0&&!1===qr(n))return(r-r)/(r-r);if(i=Xr(r),e=u&Yr|0,t=f&Yr|0,a=f>>>Qf|0,o=(o=u>>>Qf|0)&&mf(n)?-1:1,t>Yf){if(t>zf)return function(r,n){return(Sr(r)&Yr)<=kf?n<0?Af*Af:_f*_f:n>0?Af*Af:_f*_f}(r,n);if(e<Xf)return 1===a?o*ro*ro:o*no*no;if(e>Df)return 0===a?o*ro*ro:o*no*no;p=function(r,n){var e,t,i,u,f,o,a;return u=(i=n-1)*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333)),e=(o=i*Hf-u*Wf)-((t=We(t=(f=Cf*i)+o,0))-f),r[0]=t,r[1]=e,r}(io,i)}else p=function(r,n,e){var t,i,u,f,o,a,c,s,l,p,v,h,y,g,d,b,w,N,m,k,A;return N=0,e<Uf&&(N-=53,e=Sr(n*=Tf)),N+=(e>>xf)-Fr|0,e=(m=e&Ef|0)|Sf|0,m<=235662?k=0:m<767610?k=1:(k=0,N+=1,e-=Uf),f=We(i=(b=(n=Tr(n,e))-(c=$f[k]))*(w=1/(n+c)),0),t=(e>>1|If)+jf,a=Tr(0,t+=k<<18),d=(u=i*i)*u*(0===(A=u)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),a=We(a=3+(u=f*f)+(d+=(o=w*(b-f*a-f*(n-(a-c))))*(f+i)),0),l=We(l=(b=f*a)+(w=o*a+(d-(a-3-u))*i),0),p=Of*l,y=(v=Vf*l+(w-(l-b))*Ff+Pf[k])-((h=We(h=p+v+(s=Gf[k])+(g=N),0))-g-s-p),r[0]=h,r[1]=y,r}(io,i,e);if(v=(l=(n-(c=We(n,0)))*p[0]+n*p[1])+(s=c*p[0]),xn.assign(v,to,1,0),h=Ce(to[0]),y=Ce(to[1]),h>=Bf){if(0!=(h-Bf|y))return o*ro*ro;if(l+eo>v-s)return o*ro*ro}else if((h&Yr)>=Jf){if(0!=(h-Kf|y))return o*no*no;if(l<=v-s)return o*no*no}return v=function(r,n,e){var t,i,u,f,o,a,c,s,l,p;return l=((s=r&Yr|0)>>Mf)-Fr|0,c=0,s>Rf&&(i=Tr(0,((c=r+(Lf>>l+1)>>>0)&~(fn>>(l=((c&Yr)>>Mf)-Fr|0)))>>>0),c=(c&fn|Lf)>>Mf-l>>>0,r<0&&(c=-c),n-=i),r=Ce(r=Sr(a=1-((a=(u=(i=We(i=e+n,0))*Zf)+(f=(e-(i-n))*ut+i*qf))*(t=a-(i=a*a)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=f-(a-u))+a*o)-a))),(r+=c<<Mf>>>0)>>Mf<=0?Hn(a,c):Tr(a,r)}(h,s,l),o*v}function fo(r,n,e){var t;return nr(n)||nr(e)||n<=0||e<=0?NaN:r<0||r===gn||r===Or?0:0===r?1===n?n/e:0:n/e*uo(t=r/e,n-1)*Vt(-uo(t,n))}function oo(r,n,e){return nr(n)||nr(e)||nr(r)||n<=0||e<=0||r<0||r>1?NaN:e*_t(-Rr(1-r),1/n)}function ao(){var r,n=arguments,e="https://stdlib.io/e/"+n[0]+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function co(){var r,n;if(!(this instanceof co))return 0===arguments.length?new co:new co(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!K(n=arguments[0]))throw new TypeError(ao("19h7d",n));if(!K(r))throw new TypeError(ao("19h7c",r))}else n=1,r=1;return G(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!K(r))throw new TypeError(ao("19h8k",r));n=r}}),G(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!K(n))throw new TypeError(ao("19h8k",n));r=n}}),this}return P(fo,"factory",(function(r,n){return nr(r)||nr(n)||r<=0||n<=0?Nu(NaN):function(e){var t,i;return e<0||e===gn||e===Or?0:0===e?1===r?r/n:0:(i=uo(t=e/n,r-1),r/n*i*Vt(-uo(t,r)))}})),P(oo,"factory",(function(r,n){return nr(r)||nr(n)||r<=0||n<=0?Nu(NaN):function(e){return nr(e)||e<0||e>1?NaN:n*_t(-Rr(1-e),1/r)}})),W(co.prototype,"entropy",(function(){return r=this.k,n=this.lambda,nr(r)||nr(n)||r<=0||n<=0?NaN:Mr*(1-1/r)+Rr(n/r)+1;var r,n})),W(co.prototype,"kurtosis",(function(){return r=this.k,n=this.lambda,nr(r)||nr(n)||r<=0||n<=0?NaN:(f=Wt(1+1/r),u=Wt(1+2/r),i=Wt(1+3/r),t=Wt(1+4/r),e=-6*Ai(f,4)+12*f*f*u-3*u*u-4*f*i+t,e/=Ai(u-f*f,2));var r,n,e,t,i,u,f})),W(co.prototype,"mean",(function(){return _i(this.k,this.lambda)})),W(co.prototype,"median",(function(){return r=this.k,n=this.lambda,nr(r)||nr(n)||r<=0||n<=0?NaN:n*_t(ut,1/r);var r,n})),W(co.prototype,"mode",(function(){return r=this.k,n=this.lambda,nr(r)||nr(n)||r<=0||n<=0?NaN:r<=1?0:n*_t((r-1)/r,1/r);var r,n})),W(co.prototype,"skewness",(function(){return r=this.k,n=this.lambda,nr(r)||nr(n)||r<=0||n<=0?NaN:(u=_i(r,n),e=Ei(r,n),t=Ve(e),i=Wt(1+3/r)*su(n,3),i-=3*u*e+su(u,3),i/=su(t,3));var r,n,e,t,i,u})),W(co.prototype,"stdev",(function(){return r=this.k,n=this.lambda,nr(r)||nr(n)||r<=0||n<=0?NaN:(e=Wt(1+1/r),n*Ve(Wt(1+2/r)-e*e));var r,n,e})),W(co.prototype,"variance",(function(){return Ei(this.k,this.lambda)})),P(co.prototype,"cdf",(function(r){return wu(r,this.k,this.lambda)})),P(co.prototype,"logcdf",(function(r){return df(r,this.k,this.lambda)})),P(co.prototype,"logpdf",(function(r){return bf(r,this.k,this.lambda)})),P(co.prototype,"mgf",(function(r){return Nf(r,this.k,this.lambda)})),P(co.prototype,"pdf",(function(r){return fo(r,this.k,this.lambda)})),P(co.prototype,"quantile",(function(r){return oo(r,this.k,this.lambda)})),co},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Weibull=n();
//# sourceMappingURL=browser.js.map
