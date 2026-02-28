((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
b1b(d,e,f,g,h,i){return new A.EP(e,h,f,i,d,g)},
lb:function lb(d,e){this.a=d
this.b=e},
EP:function EP(d,e,f,g,h,i){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.a=i},
LT:function LT(d,e){this.a=d
this.b=e},
Lu:function Lu(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.h_$=e
_.cO$=f
_.aL$=g
_.c=_.a=null},
aGO:function aGO(d){this.a=d},
aGP:function aGP(d){this.a=d},
aGQ:function aGQ(d){this.a=d},
aGR:function aGR(d){this.a=d},
PJ:function PJ(){},
PK:function PK(){},
aXp(d,e,f,g,h,i){return new A.qe(h,e,d,f,g,i,null)},
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
aJb:function aJb(d,e){this.a=d
this.b=e},
aJa:function aJa(){},
Au(d,e,f,g,h){return new A.ZC(d,e,f,h,g)},
ZC:function ZC(d,e,f,g,h){var _=this
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
a5(){var x=null
return new A.Lu(new B.b9(x,y.z),x,x,x)}}
A.LT.prototype={
L(){return"_FlingGestureKind."+this.b}}
A.Lu.prototype={
al(){var x,w,v=this
v.agw()
x=v.gkY()
x.bz()
w=x.cR$
w.b=!0
w.a.push(v.ganY())
x.bz()
x.cF$.E(0,v.gao_())
v.Nh()},
gkY(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=B.bH(null,D.M,0,null,1,null,w)
w.d!==$&&B.aH()
w.d=x
v=x}return v},
gpQ(){var x=this.gkY().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.gkY().l()
var x=this.f
if(x!=null)x.l()
this.agv()},
gkb(){var x=this.a.x
return x===C.Rj||x===C.tU||x===C.mR},
tN(d){var x,w,v,u
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
gKG(){this.a.toString
C.ag1.h(0,this.tN(this.w))
return 0.4},
gZB(){var x=this.c.gt(0)
x.toString
return this.gkb()?x.a:x.b},
al3(d){var x,w,v=this
if(v.x)return
v.y=!0
x=v.gkY()
w=x.r
if(w!=null&&w.a!=null){w=x.x
w===$&&B.b()
v.w=w*v.gZB()*J.fl(v.w)
x.eD(0)}else{v.w=0
x.sq(0,0)}v.G(new A.aGO(v))},
al4(d){var x,w,v,u=this
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
break}if(J.fl(w)!==J.fl(u.w))u.G(new A.aGP(u))
x=u.gkY()
v=x.r
if(!(v!=null&&v.a!=null))x.sq(0,Math.abs(u.w)/u.gZB())},
ao0(){this.a.toString},
Nh(){var x=this,w=J.fl(x.w),v=x.gkY(),u=x.gkb(),t=x.a
if(u){t.toString
u=new B.j(w,0)}else{t.toString
u=new B.j(0,w)}t=y.A
x.e=new B.az(y.v.a(v),new B.aC(D.j,u,t),t.i("az<aB.T>"))},
akQ(d){var x,w,v,u,t=this
if(t.w===0)return C.qS
x=d.a
w=x.a
v=x.b
if(t.gkb()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.qS
u=t.tN(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.qS
u=t.tN(v)}if(u===t.tN(t.w))return C.aHj
return C.aHk},
al2(d){var x,w,v,u,t=this
if(t.y){x=t.gkY().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
t.y=!1
x=t.gkY()
if(x.gaE(0)===D.a7){t.xi()
return}w=d.c
v=w.a
u=t.gkb()?v.a:v.b
switch(t.akQ(w).a){case 1:if(t.gKG()>=1){x.dt(0)
break}t.w=J.fl(u)
x.pg(Math.abs(u)*0.0033333333333333335)
break
case 2:t.w=J.fl(u)
x.pg(-Math.abs(u)*0.0033333333333333335)
break
case 0:if(x.gaE(0)!==D.T){w=x.x
w===$&&B.b()
if(w>t.gKG())x.bP(0)
else x.dt(0)}break}},
CS(d){return this.anZ(d)},
anZ(d){var x=0,w=B.x(y.q),v=this
var $async$CS=B.t(function(e,f){if(e===1)return B.u(f,w)
while(true)switch(x){case 0:x=d===D.a7&&!v.y?2:3
break
case 2:x=4
return B.q(v.xi(),$async$CS)
case 4:case 3:if(v.c!=null)v.nU()
return B.v(null,w)}})
return B.w($async$CS,w)},
xi(){var x=0,w=B.x(y.q),v,u=this,t
var $async$xi=B.t(function(d,e){if(d===1)return B.u(e,w)
while(true)switch(x){case 0:if(u.gKG()>=1){u.gkY().dt(0)
x=1
break}x=3
return B.q(u.Ko(),$async$xi)
case 3:t=e
if(u.c!=null)if(t)u.axJ()
else u.gkY().dt(0)
case 1:return B.v(v,w)}})
return B.w($async$xi,w)},
Ko(){var x=0,w=B.x(y.e),v,u=this
var $async$Ko=B.t(function(d,e){if(d===1)return B.u(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return B.v(v,w)}})
return B.w($async$Ko,w)},
axJ(){var x,w,v=this,u=v.a.y
if(u==null){x=v.tN(v.w)
v.a.w.$1(x)}else{u=B.bH(null,u,0,null,1,null,v)
u.bz()
u.cF$.E(0,v.gapw())
u.bz()
w=u.cR$
w.b=!0
w.a.push(new A.aGQ(v))
v.f=u
u.bP(0)
v.G(new A.aGR(v))}},
apx(){var x=this,w=x.f.gaE(0),v=x.a
if(w===D.a7)v.w.$1(x.tN(x.w))
else v.toString},
I(d){var x,w,v,u,t,s,r,q,p=this,o=null
p.ww(d)
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
w=p.gkb()?p.gWN():o
v=p.gkb()?p.gWO():o
u=p.gkb()?p.gWM():o
s=p.gkb()?o:p.gWN()
r=p.gkb()?o:p.gWO()
q=p.gkb()?o:p.gWM()
return B.fs(x.ax,t,D.J,!1,o,o,o,o,u,w,v,o,o,o,o,o,o,o,o,o,o,q,s,r)}}
A.PJ.prototype={
bv(){this.cp()
this.cd()
this.dw()},
l(){var x=this,w=x.aL$
if(w!=null)w.J(0,x.gdh())
x.aL$=null
x.aq()}}
A.PK.prototype={
al(){this.az()
if(this.gpQ())this.tK()},
ep(){var x=this.h_$
if(x!=null){x.am()
x.dc()
this.h_$=null}this.of()}}
A.qe.prototype={
a5(){return new A.wO(new B.b9(null,y.z))}}
A.wO.prototype={
J9(d){var x,w=this
w.f=d
x=w.c.ga2()
x.toString
w.G(new A.aJb(w,y.g.a(x)))},
J8(){return this.J9(!1)},
v0(d){var x=this
if(d||x.e==null)return
x.e=null
if(x.c!=null)x.G(new A.aJa())},
a4R(){return this.v0(!1)},
I(d){var x,w=this,v=null,u=w.e,t=u==null,s=!t
if(s)w.a.toString
if(s&&!w.f){t=u.a
return B.bG(v,u.b,t)}x=t?v:u.a
u=t?v:u.b
return B.bG(new B.zy(s,new B.wq(t,new B.iY(w.a.e,w.d),v),v),u,x)}}
A.ZC.prototype={
I(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new B.hh(v.f,-1)
break
case 1:x=new B.hh(-1,v.f)
break
default:x=u}if(t===D.V){w=y.v.a(v.c)
w=Math.max(w.gq(w),0)}else w=u
if(t===D.b8){t=y.v.a(v.c)
t=Math.max(t.gq(t),0)}else t=u
return B.Ei(new B.eS(x,t,w,v.w,u),D.w,u)}}
var z=a.updateTypes(["~()","~(fE)","~(mq)","~(fq)","a8<~>(fn)"])
A.aGO.prototype={
$0(){this.a.Nh()},
$S:0}
A.aGP.prototype={
$0(){this.a.Nh()},
$S:0}
A.aGQ.prototype={
$1(d){return this.a.nU()},
$S:10}
A.aGR.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gt(0)
x=u.f
x.toString
w=y.v
v=y.f
u.r=new B.az(w.a(new B.az(w.a(x),new B.e2(C.UP),y.n.i("az<aB.T>"))),new B.aC(1,0,v),v.i("az<aB.T>"))},
$S:0}
A.aJb.prototype={
$0(){this.a.e=this.b.gt(0)},
$S:0}
A.aJa.prototype={
$0(){},
$S:0};(function aliases(){var x=A.PJ.prototype
x.agv=x.l
x=A.PK.prototype
x.agw=x.al})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Lu.prototype,"gWN","al3",1)
x(v,"gWO","al4",2)
w(v,"gao_","ao0",0)
x(v,"gWM","al2",3)
x(v,"ganY","CS",4)
w(v,"gapw","apx",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(B.fS,[A.lb,A.LT])
w(B.W,[A.EP,A.qe])
w(B.X,[A.PJ,A.wO])
v(A.PK,A.PJ)
v(A.Lu,A.PK)
w(B.dB,[A.aGO,A.aGP,A.aGR,A.aJb,A.aJa])
v(A.aGQ,B.ct)
v(A.ZC,B.tn)
x(A.PJ,B.dm)
x(A.PK,B.nS)})()
B.bO(b.typeUniverse,JSON.parse('{"EP":{"W":[],"h":[]},"Lu":{"X":["EP"]},"qe":{"W":[],"h":[]},"wO":{"X":["qe"]},"ZC":{"W":[],"h":[]}}'))
var y={v:B.L("bb<G>"),n:B.L("e2"),o:B.L("eA"),z:B.L("b9<X<W>>"),g:B.L("C"),A:B.L("aC<j>"),f:B.L("aC<G>"),e:B.L("M"),q:B.L("~")};(function constants(){C.Rj=new A.lb(1,"horizontal")
C.tU=new A.lb(2,"endToStart")
C.mR=new A.lb(3,"startToEnd")
C.Rk=new A.lb(4,"up")
C.mS=new A.lb(5,"down")
C.tV=new A.lb(6,"none")
C.UP=new B.dK(0.4,1,D.aK)
C.ag1=new B.at(D.br,[],B.L("at<lb,G>"))
C.qS=new A.LT(0,"none")
C.aHj=new A.LT(1,"forward")
C.aHk=new A.LT(2,"reverse")})()};
(a=>{a["HxOZkjtyxbRaxeCmW5F+hxA+ZcA="]=a.current})($__dart_deferred_initializers__);