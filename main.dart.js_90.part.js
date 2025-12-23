((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,D,A={
bm4(){return new b.G.XMLHttpRequest()},
bm7(){return b.G.document.createElement("img")},
b4J(d,e,f){var x=new A.a3O(d,B.c([],y.v),B.c([],y.l),B.c([],y.u))
x.ahp(d,e,f)
return x},
hM:function hM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
arM:function arM(d,e,f){this.a=d
this.b=e
this.c=f},
arN:function arN(d,e){this.a=d
this.b=e},
arK:function arK(d,e,f){this.a=d
this.b=e
this.c=f},
arL:function arL(d,e,f){this.a=d
this.b=e
this.c=f},
a3O:function a3O(d,e,f,g){var _=this
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
aHL:function aHL(d){this.a=d},
aHM:function aHM(d,e){this.a=d
this.b=e},
aHN:function aHN(d){this.a=d},
aHO:function aHO(d){this.a=d},
aHP:function aHP(d){this.a=d},
wx:function wx(d,e){this.a=d
this.b=e},
bg1(d,e){return new A.zt("HTTP request failed, statusCode: "+d+", "+e.j(0))},
aBL:function aBL(d,e){this.a=d
this.b=e},
zt:function zt(d){this.b=d},
bg7(d,e){var x=new A.WH(B.c([],y.v),B.c([],y.l),B.c([],y.u))
x.ahc(d,e)
return x},
WH:function WH(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
asg:function asg(d,e){this.a=d
this.b=e}},E
J=c[1]
B=c[0]
C=c[2]
D=c[56]
A=a.updateHolder(c[52],A)
E=c[66]
A.hM.prototype={
Ag(d){return new B.dL(this,y.i)},
vp(d,e){return A.b4J(this.wz(d,e),d.a,null)},
vq(d,e){return A.b4J(this.wz(d,e),d.a,null)},
wz(d,e){return this.arK(d,e)},
arK(d,e){var x=0,w=B.y(y.R),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wz=B.u(function(f,g){if(f===1){t.push(g)
x=u}while(true)switch(x){case 0:p=new A.arM(s,e,d)
o=new A.arN(s,d)
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
case 4:case 1:return B.w(v,w)
case 2:return B.v(t.at(-1),w)}})
return B.x($async$wz,w)},
x4(d){var x=0,w=B.y(y.p),v,u=this,t,s,r,q,p,o,n
var $async$x4=B.u(function(e,f){if(e===1)return B.v(f,w)
while(true)switch(x){case 0:s=u.a
r=B.aB5().X(s)
q=new B.a3($.af,y.Z)
p=new B.aG(q,y.x)
o=A.bm4()
o.open("GET",s,!0)
o.responseType="arraybuffer"
o.addEventListener("load",B.eZ(new A.arK(o,p,r)))
o.addEventListener("error",B.eZ(new A.arL(p,o,r)))
o.send()
x=3
return B.r(q,$async$x4)
case 3:s=o.response
s.toString
t=B.Wk(y.a.a(s),0,null)
if(t.byteLength===0)throw B.i(A.bg1(B.Y(o,"status"),r))
n=d
x=4
return B.r(B.UQ(t),$async$x4)
case 4:v=n.$1(f)
x=1
break
case 1:return B.w(v,w)}})
return B.x($async$x4,w)},
k(d,e){if(e==null)return!1
if(J.a2(e)!==B.D(this))return!1
return e instanceof A.hM&&e.a===this.a&&e.b===this.b},
gC(d){return B.a0(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+C.i.ap(this.b,1)+")"}}
A.a3O.prototype={
ahp(d,e,f){var x=this
x.e=e
x.y.fh(new A.aHL(x),new A.aHM(x,f),y.P)},
ga6K(d){var x=this,w=x.at
return w===$?x.at=new B.f5(new A.aHN(x),new A.aHO(x),new A.aHP(x)):w},
QY(){var x,w=this
if(w.z){x=w.Q
x===$&&B.b()
x.J(0,w.ga6K(0))}w.as=!0
w.acZ()}}
A.wx.prototype={
Ok(d){return new A.wx(this.a,this.b)},
l(){},
gdd(d){return B.a1(B.aq("Could not create image data for this image because access to it is restricted by the Same-Origin Policy.\nSee https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"))},
zO(d){if(!(d instanceof A.wx))return!1
return J.f(d.a,this.a)&&d.b===this.b},
gd8(d){return 1},
gTj(){var x=this.a
return C.d.ft(4*x.naturalWidth*x.naturalHeight)},
$if4:1,
gjM(){return this.b}}
A.aBL.prototype={
L(){return"WebHtmlElementStrategy."+this.b}}
A.zt.prototype={
j(d){return this.b},
$icd:1}
A.WH.prototype={
ahc(d,e){d.fh(this.gabd(),new A.asg(this,e),y.H)}}
var z=a.updateTypes([])
A.arM.prototype={
$0(){var x=0,w=B.y(y.R),v,u=this,t,s,r
var $async$$0=B.u(function(d,e){if(d===1)return B.v(e,w)
while(true)switch(x){case 0:t=u.c
s=D
r=B
x=3
return B.r(u.a.x4(u.b),$async$$0)
case 3:v=s.Wd(r.d6(e,y.p),t.a,null,t.b)
x=1
break
case 1:return B.w(v,w)}})
return B.x($async$$0,w)},
$S:147}
A.arN.prototype={
$0(){var x=0,w=B.y(y.R),v,u=this,t,s,r
var $async$$0=B.u(function(d,e){if(d===1)return B.v(e,w)
while(true)switch(x){case 0:s=A.bm7()
r=u.b.a
s.src=r
x=3
return B.r(B.fy(s.decode(),y.X),$async$$0)
case 3:t=A.bg7(B.d6(new A.wx(s,r),y.J),null)
t.e=r
v=t
x=1
break
case 1:return B.w(v,w)}})
return B.x($async$$0,w)},
$S:147}
A.arK.prototype={
$1(d){var x=this.a,w=x.status,v=w>=200&&w<300,u=w>307&&w<400,t=v||w===0||w===304||u,s=this.b
if(t)s.cr(0,x)
else s.j4(new A.zt("HTTP request failed, statusCode: "+B.m(w)+", "+this.c.j(0)))},
$S:24}
A.arL.prototype={
$1(d){return this.a.j4(new A.zt("HTTP request failed, statusCode: "+B.m(this.b.status)+", "+this.c.j(0)))},
$S:2}
A.aHL.prototype={
$1(d){var x=this.a
x.z=!0
if(x.as){d.xt()
return}x.Q!==$&&B.bM()
x.Q=d
d.a_(0,x.ga6K(0))},
$S:652}
A.aHM.prototype={
$2(d,e){this.a.t1(B.bV("resolving an image stream completer"),d,this.b,!0,e)},
$S:28}
A.aHN.prototype={
$2(d,e){this.a.IO(d)},
$S:127}
A.aHO.prototype={
$1(d){this.a.aLn(d)},
$S:159}
A.aHP.prototype={
$2(d,e){this.a.aLm(d,e)},
$S:162}
A.asg.prototype={
$2(d,e){this.a.t1(B.bV("resolving a single-frame image stream"),d,this.b,!0,e)},
$S:28};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.hM,D.fH)
w(B.dz,[A.arM,A.arN])
w(B.cv,[A.arK,A.arL,A.aHL,A.aHO])
w(D.fY,[A.a3O,A.WH])
w(B.ee,[A.aHM,A.aHN,A.aHP,A.asg])
w(B.H,[A.wx,A.zt])
x(A.aBL,B.fQ)})()
B.bS(b.typeUniverse,JSON.parse('{"hM":{"fH":["aXg"],"fH.T":"aXg"},"a3O":{"fY":[]},"wx":{"f4":[]},"aXg":{"fH":["aXg"]},"zt":{"cd":[]},"WH":{"fY":[]}}'))
var y=(function rtii(){var x=B.K
return{p:x("fn"),J:x("f4"),R:x("fY"),v:x("q<f5>"),u:x("q<~()>"),l:x("q<~(H,db?)>"),a:x("mQ"),P:x("aU"),i:x("dL<hM>"),x:x("aG<P>"),Z:x("a3<P>"),X:x("H?"),H:x("~")}})();(function constants(){E.cC=new A.aBL(0,"never")})()};
(a=>{a["8PepslLYZmrCdq3zdiCLwnxG7pY="]=a.current})($__dart_deferred_initializers__);