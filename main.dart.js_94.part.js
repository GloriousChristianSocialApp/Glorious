((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bmq(){return new b.G.XMLHttpRequest()},
bmt(){return b.G.document.createElement("img")},
b53(d,e,f){var x=new A.a3R(d,B.c([],y.v),B.c([],y.l),B.c([],y.u))
x.ahu(d,e,f)
return x},
hO:function hO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
arN:function arN(d,e,f){this.a=d
this.b=e
this.c=f},
arO:function arO(d,e){this.a=d
this.b=e},
arL:function arL(d,e,f){this.a=d
this.b=e
this.c=f},
arM:function arM(d,e,f){this.a=d
this.b=e
this.c=f},
a3R:function a3R(d,e,f,g){var _=this
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
aI2:function aI2(d){this.a=d},
aI3:function aI3(d,e){this.a=d
this.b=e},
aI4:function aI4(d){this.a=d},
aI5:function aI5(d){this.a=d},
aI6:function aI6(d){this.a=d},
wz:function wz(d,e){this.a=d
this.b=e},
bgm(d,e){return new A.zw("HTTP request failed, statusCode: "+d+", "+e.j(0))},
aBM:function aBM(d,e){this.a=d
this.b=e},
zw:function zw(d){this.b=d},
bgt(d,e){var x=new A.WK(B.c([],y.v),B.c([],y.l),B.c([],y.u))
x.ahh(d,e)
return x},
WK:function WK(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
ash:function ash(d,e){this.a=d
this.b=e}},E
J=c[1]
B=c[0]
C=c[2]
D=c[57]
A=a.updateHolder(c[55],A)
E=c[67]
A.hO.prototype={
Aj(d){return new B.dL(this,y.i)},
vp(d,e){return A.b53(this.wz(d,e),d.a,null)},
vq(d,e){return A.b53(this.wz(d,e),d.a,null)},
wz(d,e){return this.arP(d,e)},
arP(d,e){var x=0,w=B.x(y.R),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wz=B.t(function(f,g){if(f===1){t.push(g)
x=u}while(true)switch(x){case 0:p=new A.arN(s,e,d)
o=new A.arO(s,d)
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
return B.r(p.$0(),$async$wz)
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
return B.w($async$wz,w)},
x4(d){var x=0,w=B.x(y.p),v,u=this,t,s,r,q,p,o,n
var $async$x4=B.t(function(e,f){if(e===1)return B.u(f,w)
while(true)switch(x){case 0:s=u.a
r=B.aB6().X(s)
q=new B.a3($.af,y.Z)
p=new B.aG(q,y.x)
o=A.bmq()
o.open("GET",s,!0)
o.responseType="arraybuffer"
o.addEventListener("load",B.f_(new A.arL(o,p,r)))
o.addEventListener("error",B.f_(new A.arM(p,o,r)))
o.send()
x=3
return B.r(q,$async$x4)
case 3:s=o.response
s.toString
t=B.Wn(y.a.a(s),0,null)
if(t.byteLength===0)throw B.i(A.bgm(B.Y(o,"status"),r))
n=d
x=4
return B.r(B.UU(t),$async$x4)
case 4:v=n.$1(f)
x=1
break
case 1:return B.v(v,w)}})
return B.w($async$x4,w)},
k(d,e){if(e==null)return!1
if(J.a2(e)!==B.D(this))return!1
return e instanceof A.hO&&e.a===this.a&&e.b===this.b},
gC(d){return B.a0(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+C.i.ap(this.b,1)+")"}}
A.a3R.prototype={
ahu(d,e,f){var x=this
x.e=e
x.y.fh(new A.aI2(x),new A.aI3(x,f),y.P)},
ga6O(d){var x=this,w=x.at
return w===$?x.at=new B.f9(new A.aI4(x),new A.aI5(x),new A.aI6(x)):w},
R2(){var x,w=this
if(w.z){x=w.Q
x===$&&B.b()
x.J(0,w.ga6O(0))}w.as=!0
w.ad3()}}
A.wz.prototype={
Op(d){return new A.wz(this.a,this.b)},
l(){},
gde(d){return B.a1(B.aq("Could not create image data for this image because access to it is restricted by the Same-Origin Policy.\nSee https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"))},
zQ(d){if(!(d instanceof A.wz))return!1
return J.f(d.a,this.a)&&d.b===this.b},
gd9(d){return 1},
gTo(){var x=this.a
return C.d.fu(4*x.naturalWidth*x.naturalHeight)},
$if8:1,
gjN(){return this.b}}
A.aBM.prototype={
L(){return"WebHtmlElementStrategy."+this.b}}
A.zw.prototype={
j(d){return this.b},
$icg:1}
A.WK.prototype={
ahh(d,e){d.fh(this.gabi(),new A.ash(this,e),y.H)}}
var z=a.updateTypes([])
A.arN.prototype={
$0(){var x=0,w=B.x(y.R),v,u=this,t,s,r
var $async$$0=B.t(function(d,e){if(d===1)return B.u(e,w)
while(true)switch(x){case 0:t=u.c
s=D
r=B
x=3
return B.r(u.a.x4(u.b),$async$$0)
case 3:v=s.Wg(r.d7(e,y.p),t.a,null,t.b)
x=1
break
case 1:return B.v(v,w)}})
return B.w($async$$0,w)},
$S:171}
A.arO.prototype={
$0(){var x=0,w=B.x(y.R),v,u=this,t,s,r
var $async$$0=B.t(function(d,e){if(d===1)return B.u(e,w)
while(true)switch(x){case 0:s=A.bmt()
r=u.b.a
s.src=r
x=3
return B.r(B.fy(s.decode(),y.X),$async$$0)
case 3:t=A.bgt(B.d7(new A.wz(s,r),y.J),null)
t.e=r
v=t
x=1
break
case 1:return B.v(v,w)}})
return B.w($async$$0,w)},
$S:171}
A.arL.prototype={
$1(d){var x=this.a,w=x.status,v=w>=200&&w<300,u=w>307&&w<400,t=v||w===0||w===304||u,s=this.b
if(t)s.cr(0,x)
else s.j5(new A.zw("HTTP request failed, statusCode: "+B.l(w)+", "+this.c.j(0)))},
$S:26}
A.arM.prototype={
$1(d){return this.a.j5(new A.zw("HTTP request failed, statusCode: "+B.l(this.b.status)+", "+this.c.j(0)))},
$S:2}
A.aI2.prototype={
$1(d){var x=this.a
x.z=!0
if(x.as){d.xt()
return}x.Q!==$&&B.bM()
x.Q=d
d.a_(0,x.ga6O(0))},
$S:654}
A.aI3.prototype={
$2(d,e){this.a.t1(B.bU("resolving an image stream completer"),d,this.b,!0,e)},
$S:28}
A.aI4.prototype={
$2(d,e){this.a.IT(d)},
$S:129}
A.aI5.prototype={
$1(d){this.a.aLv(d)},
$S:236}
A.aI6.prototype={
$2(d,e){this.a.aLu(d,e)},
$S:80}
A.ash.prototype={
$2(d,e){this.a.t1(B.bU("resolving a single-frame image stream"),d,this.b,!0,e)},
$S:28};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.hO,D.fH)
w(B.dB,[A.arN,A.arO])
w(B.ct,[A.arL,A.arM,A.aI2,A.aI5])
w(D.h_,[A.a3R,A.WK])
w(B.ec,[A.aI3,A.aI4,A.aI6,A.ash])
w(B.H,[A.wz,A.zw])
x(A.aBM,B.fR)})()
B.bO(b.typeUniverse,JSON.parse('{"hO":{"fH":["aXD"],"fH.T":"aXD"},"a3R":{"h_":[]},"wz":{"f8":[]},"aXD":{"fH":["aXD"]},"zw":{"cg":[]},"WK":{"h_":[]}}'))
var y=(function rtii(){var x=B.L
return{p:x("fo"),J:x("f8"),R:x("h_"),v:x("q<f9>"),u:x("q<~()>"),l:x("q<~(H,d2?)>"),a:x("mO"),P:x("aU"),i:x("dL<hO>"),x:x("aG<Q>"),Z:x("a3<Q>"),X:x("H?"),H:x("~")}})();(function constants(){E.cD=new A.aBM(0,"never")})()};
(a=>{a["CE48BO6tAJpV2gTYkdQo/t5OaqY="]=a.current})($__dart_deferred_initializers__);