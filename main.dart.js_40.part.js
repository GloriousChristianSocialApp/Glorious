((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
b12(d,e,f,g,h,i){return new A.EP(e,h,f,i,d,g)},
lb:function lb(d,e){this.a=d
this.b=e},
EP:function EP(d,e,f,g,h,i){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.a=i},
LS:function LS(d,e){this.a=d
this.b=e},
Lt:function Lt(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.h_$=e
_.cN$=f
_.aL$=g
_.c=_.a=null},
aGP:function aGP(d){this.a=d},
aGQ:function aGQ(d){this.a=d},
aGR:function aGR(d){this.a=d},
aGS:function aGS(d){this.a=d},
PH:function PH(){},
PI:function PI(){},
aXg(d,e,f,g,h,i){return new A.qe(h,e,d,f,g,i,null)},
qe:function qe(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
wO:function wO(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
aJc:function aJc(d,e){this.a=d
this.b=e},
aJb:function aJb(){},
Au(d,e,f,g,h){return new A.ZB(d,e,f,h,g)},
ZB:function ZB(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.c=g
_.a=h}},C
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[60],A)
C=c[99]
A.lb.prototype={
L(){return"DismissDirection."+this.b}}
A.EP.prototype={
a7(){var x=null
return new A.Lt(new B.b9(x,y.z),x,x,x)}}
A.LS.prototype={
L(){return"_FlingGestureKind."+this.b}}
A.Lt.prototype={
al(){var x,w,v=this
v.agt()
x=v.gkY()
x.bz()
w=x.cQ$
w.b=!0
w.a.push(v.ganV())
x.bz()
x.cF$.E(0,v.ganX())
v.Ng()},
gkY(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=B.bH(null,D.M,0,null,1,null,w)
w.d!==$&&B.aH()
w.d=x
v=x}return v},
gpO(){var x=this.gkY().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.gkY().l()
var x=this.f
if(x!=null)x.l()
this.ags()},
gkb(){var x=this.a.x
return x===C.Rj||x===C.tU||x===C.mR},
tL(d){var x,w,v,u
if(d===0)return C.tV
if(this.gkb()){x=this.c.M(y.o).w
$label0$0:{w=D.by===x
if(w&&d<0){v=C.mR
break $label0$0}u=D.aT===x
if(u&&d>0){v=C.mR
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.tU
break $label0$0}v=null}return v}return d>0?C.mS:C.Rk},
gKF(){this.a.toString
C.ag3.h(0,this.tL(this.w))
return 0.4},
gZy(){var x=this.c.gt(0)
x.toString
return this.gkb()?x.a:x.b},
al0(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.gkY()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&B.b()
v.w=w*v.gZy()*J.fk(v.w)
x.eD(0)}else{v.w=0
x.sq(0,0)}v.I(new A.aGP(v))},
al1(d){var x,w,v,u=this
if(u.y){x=u.gkY().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
x=d.e
x.toString
w=u.w
switch(u.a.x.a){case 1:case 0:u.w=w+x
break
case 4:x=w+x
if(x<0)u.w=x
break
case 5:x=w+x
if(x>0)u.w=x
break
case 2:switch(u.c.M(y.o).w.a){case 0:x=u.w+x
if(x>0)u.w=x
break
case 1:x=u.w+x
if(x<0)u.w=x
break}break
case 3:switch(u.c.M(y.o).w.a){case 0:x=u.w+x
if(x<0)u.w=x
break
case 1:x=u.w+x
if(x>0)u.w=x
break}break
case 6:u.w=0
break}if(J.fk(w)!==J.fk(u.w))u.I(new A.aGQ(u))
x=u.gkY()
v=x.r
if(!(v!=null&&v.a!=null))x.sq(0,Math.abs(u.w)/u.gZy())},
anY(){this.a.toString},
Ng(){var x=this,w=J.fk(x.w),v=x.gkY(),u=x.gkb(),t=x.a
if(u){t.toString
u=new B.j(w,0)}else{t.toString
u=new B.j(0,w)}t=y.A
x.e=new B.ay(y.v.a(v),new B.aC(D.j,u,t),t.i("ay<aA.T>"))},
akN(d){var x,w,v,u,t=this
if(t.w===0)return C.qS
x=d.a
w=x.a
v=x.b
if(t.gkb()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.qS
u=t.tL(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.qS
u=t.tL(v)}if(u===t.tL(t.w))return C.aHh
return C.aHi},
al_(d){var x,w,v,u,t=this
if(t.y){x=t.gkY().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.gkY()
if(x.gaE(0)===D.a6){t.xg()
return}w=d.c
v=w.a
u=t.gkb()?v.a:v.b
switch(t.akN(w).a){case 1:if(t.gKF()>=1){x.dt(0)
break}t.w=J.fk(u)
x.pe(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fk(u)
x.pe(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gaE(0)!==D.T){w=x.x
w===$&&B.b()
if(w>t.gKF())x.bP(0)
else x.dt(0)}break}},
CP(d){return this.anW(d)},
anW(d){var x=0,w=B.x(y.q),v=this
var $async$CP=B.t(function(e,f){if(e===1)return B.u(f,w)
while(true)switch(x){case 0:x=d===D.a6&&!v.y?2:3
break
case 2:x=4
return B.r(v.xg(),$async$CP)
case 4:case 3:if(v.c!=null)v.nS()
return B.v(null,w)}})
return B.w($async$CP,w)},
xg(){var x=0,w=B.x(y.q),v,u=this,t
var $async$xg=B.t(function(d,e){if(d===1)return B.u(e,w)
while(true)switch(x){case 0:if(u.gKF()>=1){u.gkY().dt(0)
x=1
break}x=3
return B.r(u.Kn(),$async$xg)
case 3:t=e
if(u.c!=null)if(t)u.axG()
else u.gkY().dt(0)
case 1:return B.v(v,w)}})
return B.w($async$xg,w)},
Kn(){var x=0,w=B.x(y.e),v,u=this
var $async$Kn=B.t(function(d,e){if(d===1)return B.u(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return B.v(v,w)}})
return B.w($async$Kn,w)},
axG(){var x,w,v=this,u=v.a.y
if(u==null){x=v.tL(v.w)
v.a.w.$1(x)}else{u=B.bH(null,u,0,null,1,null,v)
u.bz()
u.cF$.E(0,v.gapt())
u.bz()
w=u.cQ$
w.b=!0
w.a.push(new A.aGR(v))
v.f=u
u.bP(0)
v.I(new A.aGS(v))}},
apu(){var x=this,w=x.f.gaE(0),v=x.a
if(w===D.a6)v.w.$1(x.tL(x.w))
else v.toString},
H(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.wu(d)
x=p.a
x.toString
w=p.r
if(w!=null){x=p.gkb()?D.V:D.b8
v=p.z
u=v.a
return A.Au(x,0,B.bG(o,v.b,u),o,w)}w=p.e
w===$&&B.b()
t=B.rk(new B.iY(x.c,p.as),w,o,!0)
if(x.x===C.tV)return t
w=p.gkb()?p.gWK():o
v=p.gkb()?p.gWL():o
u=p.gkb()?p.gWJ():o
s=p.gkb()?o:p.gWK()
r=p.gkb()?o:p.gWL()
q=p.gkb()?o:p.gWJ()
return B.fr(x.ax,t,D.J,!1,o,o,o,o,u,w,v,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
A.PH.prototype={
bv(){this.cp()
this.cd()
this.dw()},
l(){var x=this,w=x.aL$
if(w!=null)w.J(0,x.gdh())
x.aL$=null
x.aq()}}
A.PI.prototype={
al(){this.az()
if(this.gpO())this.tI()},
ep(){var x=this.h_$
if(x!=null){x.am()
x.dc()
this.h_$=null}this.od()}}
A.qe.prototype={
a7(){return new A.wO(new B.b9(null,y.z))}}
A.wO.prototype={
J8(d){var x,w=this
w.f=d
x=w.c.ga2()
x.toString
w.I(new A.aJc(w,y.g.a(x)))},
J7(){return this.J8(!1)},
uZ(d){var x=this
if(d||x.e==null)return
x.e=null
if(x.c!=null)x.I(new A.aJb())},
a4O(){return this.uZ(!1)},
H(d){var x,w=this,v=null,u=w.e,t=u==null,s=!t
if(s)w.a.toString
if(s&&!w.f){t=u.a
return B.bG(v,u.b,t)}x=t?v:u.a
u=t?v:u.b
return B.bG(new B.zy(s,new B.wq(t,new B.iY(w.a.e,w.d),v),v),u,x)}}
A.ZB.prototype={
H(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new B.hh(v.f,-1)
break
case 1:x=new B.hh(-1,v.f)
break
default:x=u}if(t===D.V){w=y.v.a(v.c)
w=Math.max(w.gq(w),0)}else w=u
if(t===D.b8){t=y.v.a(v.c)
t=Math.max(t.gq(t),0)}else t=u
return B.Ei(new B.eQ(x,t,w,v.w,u),D.w,u)}}
var z=a.updateTypes(["~()","~(fD)","~(mq)","~(fp)","a8<~>(fm)"])
A.aGP.prototype={
$0(){this.a.Ng()},
$S:0}
A.aGQ.prototype={
$0(){this.a.Ng()},
$S:0}
A.aGR.prototype={
$1(d){return this.a.nS()},
$S:10}
A.aGS.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gt(0)
x=u.f
x.toString
w=y.v
v=y.f
u.r=new B.ay(w.a(new B.ay(w.a(x),new B.e1(C.UR),y.n.i("ay<aA.T>"))),new B.aC(1,0,v),v.i("ay<aA.T>"))},
$S:0}
A.aJc.prototype={
$0(){this.a.e=this.b.gt(0)},
$S:0}
A.aJb.prototype={
$0(){},
$S:0};(function aliases(){var x=A.PH.prototype
x.ags=x.l
x=A.PI.prototype
x.agt=x.al})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Lt.prototype,"gWK","al0",1)
x(v,"gWL","al1",2)
w(v,"ganX","anY",0)
x(v,"gWJ","al_",3)
x(v,"ganV","CP",4)
w(v,"gapt","apu",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.fR,[A.lb,A.LS])
w(B.W,[A.EP,A.qe])
w(B.X,[A.PH,A.wO])
v(A.PI,A.PH)
v(A.Lt,A.PI)
w(B.dB,[A.aGP,A.aGQ,A.aGS,A.aJc,A.aJb])
v(A.aGR,B.ct)
v(A.ZB,B.tn)
x(A.PH,B.dm)
x(A.PI,B.nS)})()
B.bO(b.typeUniverse,JSON.parse('{"EP":{"W":[],"h":[]},"Lt":{"X":["EP"]},"qe":{"W":[],"h":[]},"wO":{"X":["qe"]},"ZB":{"W":[],"h":[]}}'))
var y={v:B.L("bb<G>"),n:B.L("e1"),o:B.L("eA"),z:B.L("b9<X<W>>"),g:B.L("C"),A:B.L("aC<j>"),f:B.L("aC<G>"),e:B.L("M"),q:B.L("~")};(function constants(){C.Rj=new A.lb(1,"horizontal")
C.tU=new A.lb(2,"endToStart")
C.mR=new A.lb(3,"startToEnd")
C.Rk=new A.lb(4,"up")
C.mS=new A.lb(5,"down")
C.tV=new A.lb(6,"none")
C.UR=new B.dK(0.4,1,D.aK)
C.ag3=new B.at(D.br,[],B.L("at<lb,G>"))
C.qS=new A.LS(0,"none")
C.aHh=new A.LS(1,"forward")
C.aHi=new A.LS(2,"reverse")})()};
(a=>{a["pGxvoXNfdMyiHU+9BFHATtPH/t0="]=a.current})($__dart_deferred_initializers__);