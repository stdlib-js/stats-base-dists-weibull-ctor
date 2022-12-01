// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),s="get"in a,y="set"in a,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,n,a.get),y&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function s(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return y&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"",h=v()?function(r){var n,t,e,u,i;if(null==r)return p.call(r);t=r[N],i=N,n=null!=(u=r)&&b.call(u,i);try{r[N]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[N]=t:delete r[N],e}:function(r){return p.call(r)},d=Number,m=d.prototype.toString,w=v();function g(r){return"object"==typeof r&&(r instanceof d||(w?function(r){try{return m.call(r),!0}catch(r){return!1}}(r):"[object Number]"===h(r)))}function A(r){return s(r)||g(r)}function _(r){return s(r)&&r>0}function k(r){return g(r)&&r.valueOf()>0}function U(r){return _(r)||k(r)}function j(r){return r!=r}c(A,"isPrimitive",s),c(A,"isObject",g),c(U,"isPrimitive",_),c(U,"isObject",k);var O,E="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(E&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var S,F=O,H="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var M,V=S,W="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),t=n,r=(W&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var q,C=M,Y="function"==typeof Uint16Array,Z="function"==typeof Uint16Array?Uint16Array:null,R="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Y&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?R:function(){throw new Error("not implemented")};var z,B={uint16:q,uint8:C};(z=new B.uint16(1))[0]=4660;var D=52===new B.uint8(z.buffer)[0],J=!0===D?1:0,K=new V(1),Q=new F(K.buffer);function X(r){return K[0]=r,Q[J]}var $=!0===D?1:0,rr=new V(1),nr=new F(rr.buffer);function tr(r,n){return rr[0]=r,nr[$]=n>>>0,rr[0]}var er=1023,ur=d.NEGATIVE_INFINITY,ir=.6931471803691238,or=1.9082149292705877e-10,fr=1048575;function ar(r){var n,t,e,u,i,o,f,a,c,l,s,y;return 0===r?ur:j(r)||r<0?NaN:(i=0,(t=X(r))<1048576&&(i-=54,t=X(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-er|0,i+=(a=614244+(t&=fr)&1048576|0)>>20|0,f=(r=tr(r,t|1072693248^a))-1,(fr&2+t)<3?0===f?0===i?0:i*ir+i*or:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*ir-(o-i*or-f)):(a=t-398458|0,c=440401-t|0,u=(s=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-l*(n+o)):i*ir-(n-(l*(n+o)+i*or)-f)):0===i?f-l*(f-o):i*ir-(l*(f-o)-i*or-f))))}var cr=.5772156649015329,lr=Math.floor;function sr(r){return lr(r)===r}function yr(r){return Math.abs(r)}function vr(r,n){var t,e,u,i;return u=(i=r*r)*i,e=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(t=.5*i))+(1-u-t+(i*e-r*n))}var pr=-.16666666666666632;function br(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(pr+u*t):r-(u*(.5*n-e*t)-n-e*pr)}var Nr,hr,dr=!0===D?0:1,mr=new V(1),wr=new F(mr.buffer);!0===D?(Nr=1,hr=0):(Nr=0,hr=1);var gr={HIGH:Nr,LOW:hr},Ar=new V(1),_r=new F(Ar.buffer),kr=gr.HIGH,Ur=gr.LOW;function jr(r,n){return _r[kr]=r,_r[Ur]=n,Ar[0]}var Or=Number.POSITIVE_INFINITY;function Er(r){return r===Or||r===ur}var Ir,Tr,Sr=2147483647;!0===D?(Ir=1,Tr=0):(Ir=0,Tr=1);var Fr={HIGH:Ir,LOW:Tr},Hr=new V(1),Pr=new F(Hr.buffer),Gr=Fr.HIGH,Mr=Fr.LOW;function Vr(r,n,t,e){return Hr[0]=r,n[e]=Pr[Gr],n[e+t]=Pr[Mr],n}function Wr(r){return Vr(r,[0,0],1,0)}c(Wr,"assign",Vr);var xr=[0,0];function Lr(r,n){var t,e;return Wr.assign(r,xr,1,0),t=xr[0],t&=Sr,e=X(n),jr(t|=e&=2147483648,xr[1])}function qr(r,n,t,e){return j(r)||Er(r)?(n[e]=r,n[e+t]=0,n):0!==r&&yr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return qr(r,[0,0],1,0)}),"assign",qr);var Cr=[0,0],Yr=[0,0];function Zr(r,n){var t,e;return 0===n||0===r||j(r)||Er(r)?r:(qr(r,Cr,1,0),n+=Cr[1],n+=function(r){var n=X(r);return(n=(2146435072&n)>>>20)-er|0}(r=Cr[0]),n<-1074?Lr(0,r):n>1023?r<0?ur:Or:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Wr.assign(r,Yr,1,0),t=Yr[0],t&=2148532223,e*jr(t|=n+er<<20,Yr[1])))}function Rr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var zr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Br=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Dr=16777216,Jr=5.960464477539063e-8,Kr=Rr(20),Qr=Rr(20),Xr=Rr(20),$r=Rr(20);function rn(r,n,t,e,u,i,o,f,a){var c,l,s,y,v,p,b,N,h;for(y=i,h=e[t],N=t,v=0;N>0;v++)l=Jr*h|0,$r[v]=h-Dr*l|0,h=e[N-1]+l,N-=1;if(h=Zr(h,u),h-=8*lr(.125*h),h-=b=0|h,s=0,u>0?(b+=v=$r[t-1]>>24-u,$r[t-1]-=v<<24-u,s=$r[t-1]>>23-u):0===u?s=$r[t-1]>>23:h>=.5&&(s=2),s>0){for(b+=1,c=0,v=0;v<t;v++)N=$r[v],0===c?0!==N&&(c=1,$r[v]=16777216-N):$r[v]=16777215-N;if(u>0)switch(u){case 1:$r[t-1]&=8388607;break;case 2:$r[t-1]&=4194303}2===s&&(h=1-h,0!==c&&(h-=Zr(1,u)))}if(0===h){for(N=0,v=t-1;v>=i;v--)N|=$r[v];if(0===N){for(p=1;0===$r[i-p];p++);for(v=t+1;v<=t+p;v++){for(a[f+v]=zr[o+v],l=0,N=0;N<=f;N++)l+=r[N]*a[f+(v-N)];e[v]=l}return rn(r,n,t+=p,e,u,i,o,f,a)}}if(0===h)for(t-=1,u-=24;0===$r[t];)t-=1,u-=24;else(h=Zr(h,-u))>=Dr?(l=Jr*h|0,$r[t]=h-Dr*l|0,u+=24,$r[t+=1]=l):$r[t]=0|h;for(l=Zr(1,u),v=t;v>=0;v--)e[v]=l*$r[v],l*=Jr;for(v=t;v>=0;v--){for(l=0,p=0;p<=y&&p<=t-v;p++)l+=Br[p]*e[v+p];Xr[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Xr[v];for(n[0]=0===s?l:-l,l=Xr[0]-l,v=1;v<=t;v++)l+=Xr[v];return n[1]=0===s?l:-l,7&b}function nn(r,n,t,e){var u,i,o,f,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(o=e-1),l=o+4,a=0;a<=l;a++)Kr[a]=c<0?0:zr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=o;c++)u+=r[c]*Kr[o+(a-c)];Qr[a]=u}return rn(r,n,4,Qr,f,4,i,o,Kr)}var tn=Math.round;function en(r,n,t){var e,u,i,o,f;return i=r-1.5707963267341256*(e=tn(.6366197723675814*r)),o=6077100506506192e-26*e,f=n>>20|0,t[0]=i-o,f-(X(t[0])>>20&2047)>16&&(o=20222662487959506e-37*e-((u=i)-(i=u-(o=6077100506303966e-26*e))-o),t[0]=i-o,f-(X(t[0])>>20&2047)>49&&(o=84784276603689e-45*e-((u=i)-(i=u-(o=20222662487111665e-37*e))-o),t[0]=i-o)),t[1]=i-t[0]-o,e}var un=1.5707963267341256,on=6077100506506192e-26,fn=2*on,an=3*on,cn=4*on,ln=[0,0,0],sn=[0,0];function yn(r,n){var t,e,u,i,o,f,a;if((u=2147483647&X(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?en(r,u,n):u<=1073928572?r>0?(a=r-un,n[0]=a-on,n[1]=a-n[0]-on,1):(a=r+un,n[0]=a+on,n[1]=a-n[0]+on,-1):r>0?(a=r-2*un,n[0]=a-fn,n[1]=a-n[0]-fn,2):(a=r+2*un,n[0]=a+fn,n[1]=a-n[0]+fn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?en(r,u,n):r>0?(a=r-3*un,n[0]=a-an,n[1]=a-n[0]-an,3):(a=r+3*un,n[0]=a+an,n[1]=a-n[0]+an,-3):1075388923===u?en(r,u,n):r>0?(a=r-4*un,n[0]=a-cn,n[1]=a-n[0]-cn,4):(a=r+4*un,n[0]=a+cn,n[1]=a-n[0]+cn,-4);if(u<1094263291)return en(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return mr[0]=r,wr[dr]}(r),a=jr(u-((e=(u>>20)-1046)<<20|0),t),o=0;o<2;o++)ln[o]=0|a,a=16777216*(a-ln[o]);for(ln[2]=a,i=3;0===ln[i-1];)i-=1;return f=nn(ln,sn,e,i),r<0?(n[0]=-sn[0],n[1]=-sn[1],-f):(n[0]=sn[0],n[1]=sn[1],f)}var vn=[0,0],pn=3.141592653589793;function bn(r){return sr(r/2)}function Nn(r){return bn(r>0?r-1:r+1)}var hn=Math.sqrt,dn=!0===D?0:1,mn=new V(1),wn=new F(mn.buffer);function gn(r,n){return mn[0]=r,wn[dn]=n>>>0,mn[0]}function An(r){return 0|r}var _n=1048576,kn=[1,1.5],Un=[0,.5849624872207642],jn=[0,1.350039202129749e-8],On=.6931471805599453,En=1048575,In=1048576,Tn=1083179008,Sn=1e300,Fn=1e-300,Hn=[0,0],Pn=[0,0];function Gn(r,n){var t,e,u,i,o,f,a,c,l,s,y,v,p,b;if(j(r)||j(n))return NaN;if(Wr.assign(n,Hn,1,0),o=Hn[0],0===Hn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return hn(r);if(-.5===n)return 1/hn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:yr(r)<1==(n===Or)?0:Or}(r,n)}if(Wr.assign(r,Hn,1,0),i=Hn[0],0===Hn[1]){if(0===i)return function(r,n){return n===ur?Or:n===Or?0:n>0?Nn(n)?r:0:Nn(n)?Lr(Or,r):Or}(r,n);if(1===r)return 1;if(-1===r&&Nn(n))return-1;if(Er(r))return r===ur?Gn(-0,-n):n<0?0:Or}if(r<0&&!1===sr(n))return(r-r)/(r-r);if(u=yr(r),t=i&Sr|0,e=o&Sr|0,a=o>>>31|0,f=(f=i>>>31|0)&&Nn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(X(r)&Sr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Sn*Sn:f*Fn*Fn;if(t>1072693248)return 0===a?f*Sn*Sn:f*Fn*Fn;y=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=gn(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Pn,u)}else y=function(r,n,t){var e,u,i,o,f,a,c,l,s,y,v,p,b,N,h,d,m,w,g,A,_;return w=0,t<_n&&(w-=53,t=X(n*=9007199254740992)),w+=(t>>20)-er|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,t-=_n),o=gn(u=(d=(n=tr(n,t))-(c=kn[A]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=tr(0,e+=A<<18),h=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=gn(a=3+(i=o*o)+(h+=(f=m*(d-o*a-o*(n-(a-c))))*(o+u)),0),b=(v=-7.028461650952758e-9*(s=gn(s=(d=o*a)+(m=f*a+(h-(a-3-i))*u),0))+.9617966939259756*(m-(s-d))+jn[A])-((p=gn(p=(y=.9617967009544373*s)+v+(l=Un[A])+(N=w),0))-N-l-y),r[0]=p,r[1]=b,r}(Pn,u,t);if(v=(s=(n-(c=gn(n,0)))*y[0]+n*y[1])+(l=c*y[0]),Wr.assign(v,Hn,1,0),p=An(Hn[0]),b=An(Hn[1]),p>=Tn){if(0!=(p-Tn|b))return f*Sn*Sn;if(s+8008566259537294e-32>v-l)return f*Sn*Sn}else if((p&Sr)>=1083231232){if(0!=(p-3230714880|b))return f*Fn*Fn;if(s<=v-l)return f*Fn*Fn}return v=function(r,n,t){var e,u,i,o,f,a,c,l,s,y;return s=((l=r&Sr|0)>>20)-er|0,c=0,l>1071644672&&(u=tr(0,((c=r+(In>>s+1)>>>0)&~(En>>(s=((c&Sr)>>20)-er|0)))>>>0),c=(c&En|In)>>20-s>>>0,r<0&&(c=-c),n-=u),r=An(r=X(a=1-((a=(i=.6931471824645996*(u=gn(u=t+n,0)))+(o=(t-(u-n))*On+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Zr(a,c):tr(a,r)}(p,l,s),f*v}var Mn=Math.ceil;function Vn(r){return r<0?Mn(r):lr(r)}var Wn=1.4426950408889634,xn=1/(1<<28);function Ln(r){var n;return j(r)||r===Or?r:r===ur?0:r>709.782712893384?Or:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<xn?1+r:function(r,n,t){var e,u,i,o;return Zr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=Vn(r<0?Wn*r-.5:Wn*r+.5)),1.9082149292705877e-10*n,n)}function qn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Ln(r),2.5066282746310007*(t=r>143.01608?(e=Gn(r,.5*r-.25))*(e/t):Gn(r,r-.5)/t)*n}function Cn(r,n){return n/((1+cr*r)*r)}function Yn(r){var n,t,e,u;if(sr(r)&&r<0||r===ur||j(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===ur}(r)?ur:Or;if(r>171.61447887182297)return Or;if(r<-170.5674972726612)return 0;if((t=yr(r))>33)return r>=0?qn(r):(n=0==(1&(e=lr(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*function(r){var n;if(n=X(r),(n&=2147483647)<=1072243195)return n<1045430272?r:br(r,0);if(n>=2146435072)return NaN;switch(3&yn(r,vn)){case 0:return br(vn[0],vn[1]);case 1:return vr(vn[0],vn[1]);case 2:return-br(vn[0],vn[1]);default:return-vr(vn[0],vn[1])}}(pn*u),n*pn/(yr(u)*qn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Cn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Cn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Zn(r,n){return j(r)||j(n)||r<=0||n<=0?NaN:n*Yn(1+1/r)}function Rn(r,n){var t;return j(r)||j(n)||r<=0||n<=0?NaN:(t=Zn(r,n),n*n*Yn(1+2/r)-t*t)}var zn=.6931471803691238,Bn=1.9082149292705877e-10,Dn=1.4426950408889634;function Jn(r){var n,t,e,u,i,o,f,a,c,l,s,y;if(r===Or||j(r))return r;if(r===ur)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return Or}if(i=0|X(f),f>.34657359027997264)f<1.0397207708399179?t?(e=r+zn,u=-Bn,y=-1):(e=r-zn,u=Bn,y=1):(y=t?Dn*r-.5:Dn*r+.5,e=r-(l=y|=0)*zn,u=l*Bn),c=e-(r=e-u)-u;else{if(i<1016070144)return r;y=0}return o=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),s=a*((o-(l=3-o*n))/(6-r*l)),0===y?r-(r*s-a):(s=r*(s-c)-c,s-=a,-1===y?.5*(r-s)-.5:1===y?r<-.25?-2*(s-(r+.5)):1+2*(r-s):y<=-2||y>56?(f=tr(f=1-(s-r),e=X(f)+(y<<20)|0))-1:(l=1,y<20?f=(l=tr(l,e=1072693248-(2097152>>y)|0))-(s-r):(f=r-(s+(l=tr(l,e=er-y<<20|0))),f+=1),tr(f,e=X(f)+(y<<20)|0)))}function Kn(r,n,t){return j(r)||j(n)||j(t)||n<=0||t<=0?NaN:r<0?0:-Jn(-Gn(r/t,n))}function Qn(r){return function(){return r}}c(Kn,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Qn(NaN):function(t){return j(t)?NaN:t<0?0:-Jn(-Gn(t/n,r))}}));var Xn=.6931471803691238,$n=1.9082149292705877e-10;function rt(r){var n,t,e,u,i,o,f,a,c,l;if(r<-1||j(r))return NaN;if(-1===r)return ur;if(r===Or)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(i=(l=((t=X(c=1+r))>>20)-er)>0?1-(c-r):r-(c-1),i/=c):(l=((t=X(c=r))>>20)-er,i=0),(t&=1048575)<434334?c=tr(c,1072693248|t):(l+=1,c=tr(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Xn+(i+=l*$n):l*Xn-((a=n*(1-.6666666666666666*u))-(l*$n+i)-u):(a=(f=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?u-(n-o*(n+a)):l*Xn-(n-(o*(n+a)+(l*$n+i))-u))}var nt=-.6931471805599453;function tt(r,n,t){var e;return j(n)||j(t)||n<=0||t<=0?NaN:r<0?ur:(e=-Gn(r/t,n))<nt?rt(-Ln(e)):ar(-Jn(e))}function et(r,n,t){var e;return j(n)||j(t)||n<=0||t<=0?NaN:r<0||r===Or||r===ur?ur:0===r?1===n?ar(n/t):ur:(e=r/t,ar(n/t)+(n-1)*ar(e)-Gn(e,n))}c(tt,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Qn(NaN):function(t){var e;return j(t)?NaN:t<0?ur:(e=-Gn(t/n,r))<nt?rt(-Ln(e)):ar(-Jn(e))}})),c(et,"factory",(function(r,n){var t;return j(r)||j(n)||r<=0||n<=0?Qn(NaN):(t=ar(r/n),function(e){var u;return e<0||e===Or||e===ur?ur:0===e?1===r?ar(r/n):ur:t+(r-1)*ar(u=e/n)-Gn(u,r)})}));var ut=2220446049250313e-31;function it(r,n,t){var e,u,i,o;if(j(r)||j(n)||j(t)||n<=0||t<=0)return NaN;u=1,i=1,o=0;do{u+=e=0==(i*=r*t/(o+=1))?0:i*Yn(1+o/n)}while(e/u>ut);return u}function ot(r,n,t){var e;return j(n)||j(t)||n<=0||t<=0?NaN:r<0||r===Or||r===ur?0:0===r?1===n?n/t:0:n/t*Gn(e=r/t,n-1)*Ln(-Gn(e,n))}function ft(r,n,t){return j(n)||j(t)||j(r)||n<=0||t<=0||r<0||r>1?NaN:t*Gn(-ar(1-r),1/n)}function at(){var r,n=arguments,t=n[0],e="https://stdlib.io/e/"+t+"?";for(r=1;r<n.length;r++)e+="&arg[]="+encodeURIComponent(n[r]);return e}function ct(){var r,n;if(!(this instanceof ct))return 0===arguments.length?new ct:new ct(arguments[0],arguments[1]);if(arguments.length){if(r=arguments[1],!_(n=arguments[0]))throw new TypeError(at("0Zk7v",n));if(!_(r))throw new TypeError(at("0Zk7u",r))}else n=1,r=1;return a(this,"k",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!_(r))throw new TypeError(at("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),a(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!_(n))throw new TypeError(at("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),this}return c(it,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Qn(NaN):function(t){var e,u,i,o;if(j(t))return NaN;u=1,i=1,o=0;do{e=0==(i*=t*n/(o+=1))?0:i*Yn(1+o/r),u+=e}while(e/u>ut);return u}})),c(ot,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Qn(NaN):function(t){var e,u;return t<0||t===Or||t===ur?0:0===t?1===r?r/n:0:(u=Gn(e=t/n,r-1),r/n*u*Ln(-Gn(e,r)))}})),c(ft,"factory",(function(r,n){return j(r)||j(n)||r<=0||n<=0?Qn(NaN):function(t){return j(t)||t<0||t>1?NaN:n*Gn(-ar(1-t),1/r)}})),l(ct.prototype,"entropy",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:cr*(1-1/r)+ar(n/r)+1;var r,n})),l(ct.prototype,"kurtosis",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:(o=Yn(1+1/r),i=Yn(1+2/r),u=Yn(1+3/r),e=Yn(1+4/r),t=-6*Gn(o,4)+12*o*o*i-3*i*i-4*o*u+e,t/=Gn(i-o*o,2));var r,n,t,e,u,i,o})),l(ct.prototype,"mean",(function(){return Zn(this.k,this.lambda)})),l(ct.prototype,"median",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:n*Gn(On,1/r);var r,n})),l(ct.prototype,"mode",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:r<=1?0:n*Gn((r-1)/r,1/r);var r,n})),l(ct.prototype,"skewness",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:(i=Zn(r,n),t=Rn(r,n),e=hn(t),u=Yn(1+3/r)*Gn(n,3),u-=3*i*t+Gn(i,3),u/=Gn(e,3));var r,n,t,e,u,i})),l(ct.prototype,"stdev",(function(){return r=this.k,n=this.lambda,j(r)||j(n)||r<=0||n<=0?NaN:(t=Yn(1+1/r),n*hn(Yn(1+2/r)-t*t));var r,n,t})),l(ct.prototype,"variance",(function(){return Rn(this.k,this.lambda)})),c(ct.prototype,"cdf",(function(r){return Kn(r,this.k,this.lambda)})),c(ct.prototype,"logcdf",(function(r){return tt(r,this.k,this.lambda)})),c(ct.prototype,"logpdf",(function(r){return et(r,this.k,this.lambda)})),c(ct.prototype,"mgf",(function(r){return it(r,this.k,this.lambda)})),c(ct.prototype,"pdf",(function(r){return ot(r,this.k,this.lambda)})),c(ct.prototype,"quantile",(function(r){return ft(r,this.k,this.lambda)})),ct},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).Weibull=n();
//# sourceMappingURL=index.js.map
