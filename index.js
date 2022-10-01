// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function y(r){return"number"==typeof r}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",h=p()?function(r){var n,t,e,u,i;if(null==r)return s.call(r);t=r[N],i=N,n=null!=(u=r)&&b.call(u,i);try{r[N]=void 0}catch(n){return s.call(r)}return e=s.call(r),n?r[N]=t:delete r[N],e}:function(r){return s.call(r)},d=Number,m=d.prototype.toString,w=p();function g(r){return"object"==typeof r&&(r instanceof d||(w?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function A(r){return y(r)||g(r)}function _(r){return y(r)&&r>0}function k(r){return g(r)&&r.valueOf()>0}function U(r){return _(r)||k(r)}function j(r){return r!=r}c(A,"isPrimitive",y),c(A,"isObject",g),c(U,"isPrimitive",_),c(U,"isObject",k);var O,E="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(E&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var S,F=O,H="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var M,V=S,W="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),t=n,r=(W&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var q,C=M,Y="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,R="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?R:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:C};(z=new B.uint16(1))[0]=4660;var D=52===new B.uint8(z.buffer)[0],J=!0===D?1:0,K=new V(1),Q=new F(K.buffer);function X(r){return K[0]=r,Q[J]}var $=!0===D?1:0,rr=new V(1),nr=new F(rr.buffer);function tr(r,n){return rr[0]=r,nr[$]=n>>>0,rr[0]}var er=1023,ur=d.NEGATIVE_INFINITY,ir=.6931471803691238,or=1.9082149292705877e-10,fr=1048575;function ar(r){var n,t,e,u,i,o,f,a,c,l,y,v;return 0===r?ur:j(r)||r<0?NaN:(i=0,(t=X(r))<1048576&&(i-=54,t=X(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-er|0,i+=(a=614244+(t&=fr)&1048576|0)>>20|0,f=(r=tr(r,t|1072693248^a))-1,(fr&2+t)<3?0===f?0===i?0:i*ir+i*or:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*ir-(o-i*or-f)):(a=t-398458|0,c=440401-t|0,u=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-l*(n+o)):i*ir-(n-(l*(n+o)+i*or)-f)):0===i?f-l*(f-o):i*ir-(l*(f-o)-i*or-f))))}var cr=.5772156649015329,lr=Math.floor;function yr(r){return lr(r)===r}function vr(r){return Math.abs(r)}function pr(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}var sr=-.16666666666666632;function br(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(sr+u*t):r-(u*(.5*n-e*t)-n-e*sr)}var Nr,hr,dr=!0===D?0:1,mr=new V(1),wr=new F(mr.buffer);!0===D?(Nr=1,hr=0):(Nr=0,hr=1);var gr={HIGH:Nr,LOW:hr},Ar=new V(1),_r=new F(Ar.buffer),kr=gr.HIGH,Ur=gr.LOW;function jr(r,n){return _r[kr]=r,_r[Ur]=n,Ar[0]}var Or,Er,Ir=Number.POSITIVE_INFINITY;function Tr(r){return r===Ir||r===ur}!0===D?(Or=1,Er=0):(Or=0,Er=1);var Sr={HIGH:Or,LOW:Er},Fr=new V(1),Hr=new F(Fr.buffer),Pr=Sr.HIGH,Gr=Sr.LOW;function Mr(r,n){return Fr[0]=n,r[0]=Hr[Pr],r[1]=Hr[Gr],r}function Vr(r,n){return 1===arguments.length?Mr([0,0],r):Mr(r,n)}var Wr=[0,0];function xr(r,n){var t,e;return Vr(Wr,r),t=Wr[0],t&=2147483647,e=X(n),jr(t|=e&=2147483648,Wr[1])}function Lr(r,n){return j(n)||Tr(n)?(r[0]=n,r[1]=0,r):0!==n&&vr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var qr=[0,0],Cr=[0,0];function Yr(r,n){var t,e;return 0===n||0===r||j(r)||Tr(r)?r:(function(r,n){1===arguments.length?Lr([0,0],r):Lr(r,n)}(qr,r),n+=qr[1],n+=function(r){var n=X(r);return(n=(2146435072&n)>>>20)-er|0}(r=qr[0]),n<-1074?xr(0,r):n>1023?r<0?ur:Ir:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Vr(Cr,r),t=Cr[0],t&=2148532223,e*jr(t|=n+er<<20,Cr[1])))}function Zr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Rr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],zr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Br=16777216,Dr=5.960464477539063e-8,Jr=Zr(20),Kr=Zr(20),Qr=Zr(20),Xr=Zr(20);function $r(r,n,t,e,u,i,o,f,a){var c,l,y,v,p,s,b,N,h;for(v=i,h=e[t],N=t,p=0;N>0;p++)l=Dr*h|0,Xr[p]=h-Br*l|0,h=e[N-1]+l,N-=1;if(h=Yr(h,u),h-=8*lr(.125*h),h-=b=0|h,y=0,u>0?(b+=p=Xr[t-1]>>24-u,Xr[t-1]-=p<<24-u,y=Xr[t-1]>>23-u):0===u?y=Xr[t-1]>>23:h>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)N=Xr[p],0===c?0!==N&&(c=1,Xr[p]=16777216-N):Xr[p]=16777215-N;if(u>0)switch(u){case 1:Xr[t-1]&=8388607;break;case 2:Xr[t-1]&=4194303}2===y&&(h=1-h,0!==c&&(h-=Yr(1,u)))}if(0===h){for(N=0,p=t-1;p>=i;p--)N|=Xr[p];if(0===N){for(s=1;0===Xr[i-s];s++);for(p=t+1;p<=t+s;p++){for(a[f+p]=Rr[o+p],l=0,N=0;N<=f;N++)l+=r[N]*a[f+(p-N)];e[p]=l}return $r(r,n,t+=s,e,u,i,o,f,a)}}if(0===h)for(t-=1,u-=24;0===Xr[t];)t-=1,u-=24;else(h=Yr(h,-u))>=Br?(l=Dr*h|0,Xr[t]=h-Br*l|0,u+=24,Xr[t+=1]=l):Xr[t]=0|h;for(l=Yr(1,u),p=t;p>=0;p--)e[p]=l*Xr[p],l*=Dr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=zr[s]*e[p+s];Qr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Qr[p];for(n[0]=0===y?l:-l,l=Qr[0]-l,p=1;p<=t;p++)l+=Qr[p];return n[1]=0===y?l:-l,7&b}function rn(r,n,t,e){var u,i,o,f,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(o=e-1),l=o+4,a=0;a<=l;a++)Jr[a]=c<0?0:Rr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=o;c++)u+=r[c]*Jr[o+(a-c)];Kr[a]=u}return $r(r,n,4,Kr,f,4,i,o,Jr)}var nn=Math.round;function tn(r,n,t){var e,u,i,o,f;return i=r-1.5707963267341256*(e=nn(.6366197723675814*r)),o=6077100506506192e-26*e,f=n>>20|0,t[0]=i-o,f-(X(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((u=i)-(i=u-(o=6077100506303966e-26*e))-o),t[0]=i-o,f-(X(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((u=i)-(i=u-(o=20222662487111665e-37*e))-o),t[0]=i-o)),t[1]=i-t[0]-o,e}var en=1.5707963267341256,un=6077100506506192e-26,on=2*un,fn=3*un,an=4*un,cn=[0,0,0],ln=[0,0];function yn(r,n){var t,e,u,i,o,f,a;if((u=2147483647&X(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?tn(r,u,n):u<=1073928572?r>0?(a=r-en,n[0]=a-un,n[1]=a-n[0]-un,1):(a=r+en,n[0]=a+un,n[1]=a-n[0]+un,-1):r>0?(a=r-2*en,n[0]=a-on,n[1]=a-n[0]-on,2):(a=r+2*en,n[0]=a+on,n[1]=a-n[0]+on,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?tn(r,u,n):r>0?(a=r-3*en,n[0]=a-fn,n[1]=a-n[0]-fn,3):(a=r+3*en,n[0]=a+fn,n[1]=a-n[0]+fn,-3):1075388923===u?tn(r,u,n):r>0?(a=r-4*en,n[0]=a-an,n[1]=a-n[0]-an,4):(a=r+4*en,n[0]=a+an,n[1]=a-n[0]+an,-4);if(u<1094263291)return tn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return mr[0]=r,wr[dr]}(r),a=jr(u-((e=(u>>20)-1046)<<20|0),t),o=0;o<2;o++)cn[o]=0|a,a=16777216*(a-cn[o]);for(cn[2]=a,i=3;0===cn[i-1];)i-=1;return f=rn(cn,ln,e,i),r<0?(n[0]=-ln[0],n[1]=-ln[1],-f):(n[0]=ln[0],n[1]=ln[1],f)}var vn=[0,0],pn=3.141592653589793;function sn(r){return yr(r/2)}function bn(r){return sn(r>0?r-1:r+1)}var Nn=Math.sqrt,hn=!0===D?0:1,dn=new V(1),mn=new F(dn.buffer);function wn(r,n){return dn[0]=r,mn[hn]=n>>>0,dn[0]}function gn(r){return 0|r}var An=1048576,_n=[1,1.5],kn=[0,.5849624872207642],Un=[0,1.350039202129749e-8],jn=.6931471805599453,On=2147483647,En=1048575,In=1048576,Tn=2147483647,Sn=1083179008,Fn=1e300,Hn=1e-300,Pn=[0,0],Gn=[0,0];function Mn(r,n){var t,e,u,i,o,f,a,c,l,y,v,p,s,b;if(j(r)||j(n))return NaN;if(Vr(Pn,n),o=Pn[0],0===Pn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Nn(r);if(-.5===n)return 1/Nn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Tr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:vr(r)<1==(n===Ir)?0:Ir}(r,n)}if(Vr(Pn,r),i=Pn[0],0===Pn[1]){if(0===i)return function(r,n){return n===ur?Ir:n===Ir?0:n>0?bn(n)?r:0:bn(n)?xr(Ir,r):Ir}(r,n);if(1===r)return 1;if(-1===r&&bn(n))return-1;if(Tr(r))return r===ur?Mn(-0,-n):n<0?0:Ir}if(r<0&&!1===yr(n))return(r-r)/(r-r);if(u=vr(r),t=i&Tn|0,e=o&Tn|0,a=o>>>31|0,f=(f=i>>>31|0)&&bn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&X(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Fn*Fn:f*Hn*Hn;if(t>1072693248)return 0===a?f*Fn*Fn:f*Hn*Hn;v=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=wn(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Gn,u)}else v=function(r,n,t){var e,u,i,o,f,a,c,l,y,v,p,s,b,N,h,d,m,w,g,A,_;return w=0,t<An&&(w-=53,t=X(n*=9007199254740992)),w+=(t>>20)-er|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,t-=An),o=wn(u=(d=(n=tr(n,t))-(c=_n[A]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=tr(0,e+=A<<18),h=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=wn(a=3+(i=o*o)+(h+=(f=m*(d-o*a-o*(n-(a-c))))*(o+u)),0),b=(p=-7.028461650952758e-9*(y=wn(y=(d=o*a)+(m=f*a+(h-(a-3-i))*u),0))+.9617966939259756*(m-(y-d))+Un[A])-((s=wn(s=(v=.9617967009544373*y)+p+(l=kn[A])+(N=w),0))-N-l-v),r[0]=s,r[1]=b,r}(Gn,u,t);if(y=(n-(c=wn(n,0)))*v[0]+n*v[1],l=c*v[0],Vr(Pn,p=y+l),s=gn(Pn[0]),b=gn(Pn[1]),s>=Sn){if(0!=(s-Sn|b))return f*Fn*Fn;if(y+8008566259537294e-32>p-l)return f*Fn*Fn}else if((s&Tn)>=1083231232){if(0!=(s-3230714880|b))return f*Hn*Hn;if(y<=p-l)return f*Hn*Hn}return p=function(r,n,t){var e,u,i,o,f,a,c,l,y,v;return y=((l=r&On|0)>>20)-er|0,c=0,l>1071644672&&(u=tr(0,((c=r+(In>>y+1)>>>0)&~(En>>(y=((c&On)>>20)-er|0)))>>>0),c=(c&En|In)>>20-y>>>0,r<0&&(c=-c),n-=u),r=gn(r=X(a=1-((a=(i=.6931471824645996*(u=wn(u=t+n,0)))+(o=(t-(u-n))*jn+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Yr(a,c):tr(a,r)}(s,l,y),f*p}var Vn=Math.ceil;function Wn(r){return r<0?Vn(r):lr(r)}var xn=1.4426950408889634,Ln=1/(1<<28);function qn(r){var n;return j(r)||r===Ir?r:r===ur?0:r>709.782712893384?Ir:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ln?1+r:function(r,n,t){var e,u,i,o;return Yr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=Wn(r<0?xn*r-.5:xn*r+.5)),1.9082149292705877e-10*n,n)}function Cn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=qn(r),2.5066282746310007*(t=r>143.01608?(e=Mn(r,.5*r-.25))*(e/t):Mn(r,r-.5)/t)*n}function Yn(r,n){return n/((1+cr*r)*r)}function Zn(r){var n,t,e,u;if(yr(r)&&r<0||r===ur||j(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===ur}(r)?ur:Ir;if(r>171.61447887182297)return Ir;if(r<-170.5674972726612)return 0;if((t=vr(r))>33)return r>=0?Cn(r):(n=0==(1&(e=lr(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*function(r){var n;if(n=X(r),(n&=2147483647)<=1072243195)return n<1045430272?r:br(r,0);if(n>=2146435072)return NaN;switch(3&yn(r,vn)){case 0:return br(vn[0],vn[1]);case 1:return pr(vn[0],vn[1]);case 2:return-br(vn[0],vn[1]);default:return-pr(vn[0],vn[1])}}(pn*u),n*pn/(vr(u)*Cn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Yn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Yn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Rn(r,n){return j(r)||j(n)||r<=0||n<=0?NaN:n*Zn(1+1/r)}function zn(r,n){var t;return j(r)||j(n)||r<=0||n<=0?NaN:(t=Rn(r,n),n*n*Zn(1+2/r)-t*t)}var Bn=.6931471803691238,Dn=1.9082149292705877e-10,Jn=1.4426950408889634;function Kn(r){var n,t,e,u,i,o,f,a,c,l,y,v;if(r===Ir||j(r))return r;if(r===ur)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return Ir}if(i=0|X(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+Bn,u=-Dn,v=-1):(e=r-Bn,u=Dn,v=1):(v=t?Jn*r-.5:Jn*r+.5,e=r-(l=v|=0)*Bn,u=l*Dn),c=e-(r=e-u)-u;else{if(i<1016070144)return r;v=0}return o=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),y=a*((o-(l=3-o*n))/(6-r*l)),0===v?r-(r*y-a):(y=r*(y-c)-c,y-=a,-1===v?.5*(r-y)-.5:1===v?r<-.25?-2*(y-(r+.5)):1+2*(r-y):v<=-2||v>56?(f=tr(f=1-(y-r),e=X(f)+(v<<20)|0))-1:(l=1,v<20?f=(l=tr(l,e=1072693248-(2097152>>v)|0))-(y-r):(f=r-(y+(l=tr(l,e=er-v<<20|0))),f+=1),tr(f,e=X(f)+(v<<20)|0)))}function Qn(r,n,t){return j(r)||j(n)||j(t)||n<=0||t<=0?NaN:r<0?0:-Kn(-Mn(r/t,n))}function Xn(r){return function(){return r}}c(Qn,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Xn(NaN):function(t){return j(t)?NaN:t<0?0:-Kn(-Mn(t/n,r))}}));var $n=.6931471803691238,rt=1.9082149292705877e-10;function nt(r){var n,t,e,u,i,o,f,a,c,l;if(r<-1||j(r))return NaN;if(-1===r)return ur;if(r===Ir)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(i=(l=((t=X(c=1+r))>>20)-er)>0?1-(c-r):r-(c-1),i/=c):(l=((t=X(c=r))>>20)-er,i=0),(t&=1048575)<434334?c=tr(c,1072693248|t):(l+=1,c=tr(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*$n+(i+=l*rt):l*$n-((a=n*(1-.6666666666666666*u))-(l*rt+i)-u):(a=(f=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?u-(n-o*(n+a)):l*$n-(n-(o*(n+a)+(l*rt+i))-u))}var tt=-.6931471805599453;function et(r,n,t){var e;return j(n)||j(t)||n<=0||t<=0?NaN:r<0?ur:(e=-Mn(r/t,n))<tt?nt(-qn(e)):ar(-Kn(e))}function ut(r,n,t){var e;return j(n)||j(t)||n<=0||t<=0?NaN:r<0||r===Ir||r===ur?ur:0===r?1===n?ar(n/t):ur:(e=r/t,ar(n/t)+(n-1)*ar(e)-Mn(e,n))}c(et,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Xn(NaN):function(t){var e;return j(t)?NaN:t<0?ur:(e=-Mn(t/n,r))<tt?nt(-qn(e)):ar(-Kn(e))}})),c(ut,"factory",(function(r,n){var t;return j(r)||j(n)||r<=0||n<=0?Xn(NaN):(t=ar(r/n),function(e){var u;return e<0||e===Ir||e===ur?ur:0===e?1===r?ar(r/n):ur:t+(r-1)*ar(u=e/n)-Mn(u,r)})}));var it=2220446049250313e-31;function ot(r,n,t){var e,u,i,o;if(j(r)||j(n)||j(t)||n<=0||t<=0)return NaN;u=1,i=1,o=0;do{u+=e=0==(i*=r*t/(o+=1))?0:i*Zn(1+o/n)}while(e/u>it);return u}function ft(r,n,t){var e;return j(n)||j(t)||n<=0||t<=0?NaN:r<0||r===Ir||r===ur?0:0===r?1===n?n/t:0:n/t*Mn(e=r/t,n-1)*qn(-Mn(e,n))}function at(r,n,t){return j(n)||j(t)||j(r)||n<=0||t<=0||r<0||r>1?NaN:t*Mn(-ar(1-r),1/n)}function ct(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function lt(){var r,n;if(!(this instanceof lt))return 0===arguments.length?new lt:new lt(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!_(n=arguments[0]))throw new TypeError(ct("0Zk7v",n));if(!_(r))throw new TypeError(ct("0Zk7u",r))}else n=1,r=1;return a(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!_(r))throw new TypeError(ct("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),a(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!_(n))throw new TypeError(ct("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}return c(ot,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Xn(NaN):function(t){var e,u,i,o;if(j(t))return NaN;u=1,i=1,o=0;do{e=0==(i*=t*n/(o+=1))?0:i*Zn(1+o/r),u+=e}while(e/u>it);return u}})),c(ft,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Xn(NaN):function(t){var e,u;return t<0||t===Ir||t===ur?0:0===t?1===r?r/n:0:(u=Mn(e=t/n,r-1),r/n*u*qn(-Mn(e,r)))}})),c(at,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Xn(NaN):function(t){return j(t)||t<0||t>1?NaN:n*Mn(-ar(1-t),1/r)}})),l(lt.prototype,"entropy",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:cr*(1-1/r)+ar(n/r)+1;var r,n})),l(lt.prototype,"kurtosis",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:(o=Zn(1+1/r),i=Zn(1+2/r),u=Zn(1+3/r),e=Zn(1+4/r),t=-6*Mn(o,4)+12*o*o*i-3*i*i-4*o*u+e,t/=Mn(i-o*o,2));var r,n,t,e,u,i,o})),l(lt.prototype,"mean",(function(){return Rn(this.k,this.lambda)})),l(lt.prototype,"median",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:n*Mn(jn,1/r);var r,n})),l(lt.prototype,"mode",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:r<=1?0:n*Mn((r-1)/r,1/r);var r,n})),l(lt.prototype,"skewness",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:(i=Rn(r,n),t=zn(r,n),e=Nn(t),u=Zn(1+3/r)*Mn(n,3),u-=3*i*t+Mn(i,3),u/=Mn(e,3));var r,n,t,e,u,i})),l(lt.prototype,"stdev",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:(t=Zn(1+1/r),n*Nn(Zn(1+2/r)-t*t));var r,n,t})),l(lt.prototype,"variance",(function(){return zn(this.k,this.lambda)})),c(lt.prototype,"cdf",(function(r){return Qn(r,this.k,this.lambda)})),c(lt.prototype,"logcdf",(function(r){return et(r,this.k,this.lambda)})),c(lt.prototype,"logpdf",(function(r){return ut(r,this.k,this.lambda)})),c(lt.prototype,"mgf",(function(r){return ot(r,this.k,this.lambda)})),c(lt.prototype,"pdf",(function(r){return ft(r,this.k,this.lambda)})),c(lt.prototype,"quantile",(function(r){return at(r,this.k,this.lambda)})),lt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Weibull=n();
//# sourceMappingURL=index.js.map
