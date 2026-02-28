((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bmz(){return new b.G.XMLHttpRequest()},
bmC(){return b.G.document.createElement("img")},
b5c(d,e,f){var x=new A.a3S(d,B.c([],y.v),B.c([],y.l),B.c([],y.u))
x.ahx(d,e,f)
return x},
hO:function hO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
arO:function arO(d,e,f){this.a=d
this.b=e
this.c=f},
arP:function arP(d,e){this.a=d
this.b=e},
arM:function arM(d,e,f){this.a=d
this.b=e
this.c=f},
arN:function arN(d,e,f){this.a=d
this.b=e
this.c=f},
a3S:function a3S(d,e,f,g){var _=this
_.y=d
_.z=!1
_.Q=$
_.as=!1
_.at=$
_.a=e
_.b=f
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=g},
aI1:function aI1(d){this.a=d},
aI2:function aI2(d,e){this.a=d
this.b=e},
aI3:function aI3(d){this.a=d},
aI4:function aI4(d){this.a=d},
aI5:function aI5(d){this.a=d},
wz:function wz(d,e){this.a=d
this.b=e},
bgv(d,e){return new A.zw("HTTP request failed, statusCode: "+d+", "+e.j(0))},
aBJ:function aBJ(d,e){this.a=d
this.b=e},
zw:function zw(d){this.b=d},
bgC(d,e){var x=new A.WM(B.c([],y.v),B.c([],y.l),B.c([],y.u))
x.ahk(d,e)
return x},
WM:function WM(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
asi:function asi(d,e){this.a=d
this.b=e}},E
J=c[1]
B=c[0]
C=c[2]
D=c[57]
A=a.updateHolder(c[55],A)
E=c[67]
A.hO.prototype={
Al(d){return new B.dL(this,y.i)},
vr(d,e){return A.b5c(this.wB(d,e),d.a,null)},
vs(d,e){return A.b5c(this.wB(d,e),d.a,null)},
wB(d,e){return this.arS(d,e)},
arS(d,e){var x=0,w=B.x(y.R),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wB=B.t(function(f,g){if(f===1){t.push(g)
x=u}while(true)switch(x){case 0:p=new A.arO(s,e,d)
o=new A.arP(s,d)
case 3:switch(s.d.a){case 0:x=5
break
case 2:x=6
break
case 1:x=7
break
default:x=4
break}break
case 5:v=p.$0()
x=1
break
case 6:v=o.$0()
x=1
break
case 7:u=9
x=12
return B.q(p.$0(),$async$wB)
case 12:r=g
v=r
x=1
break
u=2
x=11
break
case 9:u=8
n=t.pop()
r=o.$0()
v=r
x=1
break
x=11
break
case 8:x=2
break
case 11:x=4
break
case 4:case 1:return B.v(v,w)
case 2:return B.u(t.at(-1),w)}})
return B.w($async$wB,w)},
x6(d){var x=0,w=B.x(y.p),v,u=this,t,s,r,q,p,o,n
var $async$x6=B.t(function(e,f){if(e===1)return B.u(f,w)
while(true)switch(x){case 0:s=u.a
r=B.aB3().X(s)
q=new B.a3($.af,y.Z)
p=new B.aG(q,y.x)
o=A.bmz()
o.open("GET",s,!0)
o.responseType="arraybuffer"
o.addEventListener("load",B.f0(new A.arM(o,p,r)))
o.addEventListener("error",B.f0(new A.arN(p,o,r)))
o.send()
x=3
return B.q(q,$async$x6)
case 3:s=o.response
s.toString
t=B.Wp(y.a.a(s),0,null)
if(t.byteLength===0)throw B.i(A.bgv(B.Y(o,"status"),r))
n=d
x=4
return B.q(B.UW(t),$async$x6)
case 4:v=n.$1(f)
x=1
break
case 1:return B.v(v,w)}})
return B.w($async$x6,w)},
k(d,e){if(e==null)return!1
if(J.a2(e)!==B.D(this))return!1
return e instanceof A.hO&&e.a===this.a&&e.b===this.b},
gC(d){return B.a0(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+C.i.ap(this.b,1)+")"}}
A.a3S.prototype={
ahx(d,e,f){var x=this
x.e=e
x.y.fh(new A.aI1(x),new A.aI2(x,f),y.P)},
ga6R(d){var x=this,w=x.at
return w===$?x.at=new B.fa(new A.aI3(x),new A.aI4(x),new A.aI5(x)):w},
R5(){var x,w=this
if(w.z){x=w.Q
x===$&&B.b()
x.J(0,w.ga6R(0))}w.as=!0
w.ad6()}}
A.wz.prototype={
Oq(d){return new A.wz(this.a,this.b)},
l(){},
gde(d){return B.a1(B.aq("Could not create image data for this image because access to it is restricted by the Same-Origin Policy.\nSee https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"))},
zS(d){if(!(d instanceof A.wz))return!1
return J.f(d.a,this.a)&&d.b===this.b},
gd9(d){return 1},
gTr(){var x=this.a
return C.d.fu(4*x.naturalWidth*x.naturalHeight)},
$if9:1,
gjN(){return this.b}}
A.aBJ.prototype={
L(){return"WebHtmlElementStrategy."+this.b}}
A.zw.prototype={
j(d){return this.b},
$icg:1}
A.WM.prototype={
ahk(d,e){d.fh(this.gabl(),new A.asi(this,e),y.H)}}
var z=a.updateTypes([])
A.arO.prototype={
$0(){var x=0,w=B.x(y.R),v,u=this,t,s,r
var $async$$0=B.t(function(d,e){if(d===1)return B.u(e,w)
while(true)switch(x){case 0:t=u.c
s=D
r=B
x=3
return B.q(u.a.x6(u.b),$async$$0)
case 3:v=s.Wi(r.d7(e,y.p),t.a,null,t.b)
x=1
break
case 1:return B.v(v,w)}})
return B.w($async$$0,w)},
$S:171}
A.arP.prototype={
$0(){var x=0,w=B.x(y.R),v,u=this,t,s,r
var $async$$0=B.t(function(d,e){if(d===1)return B.u(e,w)
while(true)switch(x){case 0:s=A.bmC()
r=u.b.a
s.src=r
x=3
return B.q(B.fz(s.decode(),y.X),$async$$0)
case 3:t=A.bgC(B.d7(new A.wz(s,r),y.J),null)
t.e=r
v=t
x=1
break
case 1:return B.v(v,w)}})
return B.w($async$$0,w)},
$S:171}
A.arM.prototype={
$1(d){var x=this.a,w=x.status,v=w>=200&&w<300,u=w>307&&w<400,t=v||w===0||w===304||u,s=this.b
if(t)s.cr(0,x)
else s.j5(new A.zw("HTTP request failed, statusCode: "+B.l(w)+", "+this.c.j(0)))},
$S:26}
A.arN.prototype={
$1(d){return this.a.j5(new A.zw("HTTP request failed, statusCode: "+B.l(this.b.status)+", "+this.c.j(0)))},
$S:2}
A.aI1.prototype={
$1(d){var x=this.a
x.z=!0
if(x.as){d.xv()
return}x.Q!==$&&B.bM()
x.Q=d
d.a_(0,x.ga6R(0))},
$S:654}
A.aI2.prototype={
$2(d,e){this.a.t3(B.bU("resolving an image stream completer"),d,this.b,!0,e)},
$S:28}
A.aI3.prototype={
$2(d,e){this.a.IU(d)},
$S:129}
A.aI4.prototype={
$1(d){this.a.aLw(d)},
$S:236}
A.aI5.prototype={
$2(d,e){this.a.aLv(d,e)},
$S:80}
A.asi.prototype={
$2(d,e){this.a.t3(B.bU("resolving a single-frame image stream"),d,this.b,!0,e)},
$S:28};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.hO,D.fI)
w(B.dB,[A.arO,A.arP])
w(B.ct,[A.arM,A.arN,A.aI1,A.aI4])
w(D.h0,[A.a3S,A.WM])
w(B.ed,[A.aI2,A.aI3,A.aI5,A.asi])
w(B.H,[A.wz,A.zw])
x(A.aBJ,B.fS)})()
B.bO(b.typeUniverse,JSON.parse('{"hO":{"fI":["aXM"],"fI.T":"aXM"},"a3S":{"h0":[]},"wz":{"f9":[]},"aXM":{"fI":["aXM"]},"zw":{"cg":[]},"WM":{"h0":[]}}'))
var y=(function rtii(){var x=B.L
return{p:x("fp"),J:x("f9"),R:x("h0"),v:x("r<fa>"),u:x("r<~()>"),l:x("r<~(H,d2?)>"),a:x("mO"),P:x("aU"),i:x("dL<hO>"),x:x("aG<Q>"),Z:x("a3<Q>"),X:x("H?"),H:x("~")}})();(function constants(){E.cD=new A.aBJ(0,"never")})()};
(a=>{a["B5Pcg1AZ/yS8LujTExE7tTXlc6A="]=a.current})($__dart_deferred_initializers__);