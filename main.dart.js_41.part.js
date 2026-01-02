((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
aYz(d,e){var x
switch(e.a){case 0:x=d
break
case 1:x=new A.I(d.b,d.a)
break
default:x=null}return x},
b4Q(d,e,f){var x
switch(f.a){case 0:x=e
break
case 1:x=e.gGa()
break
default:x=null}return x.b3(d)},
aDu(d,e){return new A.I(d.a+e.a,Math.max(d.b,e.b))},
bho(d){return d.gt(0)},
bhp(d,e){var x=e.b
x.toString
y.e.a(x).a=d},
rF:function rF(d,e){this.a=d
this.b=e},
Kw:function Kw(d,e){this.a=d
this.b=e},
NX:function NX(d,e){this.a=d
this.b=1
this.c=e},
nk:function nk(d,e,f){this.cR$=d
this.ao$=e
this.a=f},
Ig:function Ig(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.p=d
_.Z=e
_.T=f
_.a8=g
_.a3=h
_.ae=i
_.K=j
_.N=k
_.ag=l
_.a4=!1
_.aC=m
_.cB$=n
_.aa$=o
_.cO$=p
_.dy=q
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=r
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},
avg:function avg(d,e,f){this.a=d
this.b=e
this.c=f},
avh:function avh(d){this.a=d},
a7A:function a7A(){},
a7B:function a7B(){},
aYw(d,e,f){return new B.a0z(f,e,d,null)},
a0z:function a0z(d,e,f,g){var _=this
_.r=d
_.x=e
_.c=f
_.a=g}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[62],B)
C=c[156]
B.rF.prototype={
L(){return"WrapAlignment."+this.b},
Eo(d,e,f,g){var x,w,v=this
$label0$0:{if(C.f1===v){x=new A.a_(g?d:0,e)
break $label0$0}if(C.aGS===v){x=C.f1.Eo(d,e,f,!g)
break $label0$0}w=C.aGU===v
if(w&&f<2){x=C.f1.Eo(d,e,f,g)
break $label0$0}if(C.aGT===v){x=new A.a_(d/2,e)
break $label0$0}if(w){x=new A.a_(0,d/(f-1)+e)
break $label0$0}if(C.aGV===v){x=d/f
x=new A.a_(x/2,x+e)
break $label0$0}if(C.aGW===v){x=d/(f+1)
x=new A.a_(x,x+e)
break $label0$0}x=null}return x}}
B.Kw.prototype={
L(){return"WrapCrossAlignment."+this.b},
gamd(){switch(this.a){case 0:var x=C.aGX
break
case 1:x=C.qN
break
case 2:x=C.aGY
break
default:x=null}return x},
gai2(){switch(this.a){case 0:var x=0
break
case 1:x=1
break
case 2:x=0.5
break
default:x=null}return x}}
B.NX.prototype={
aMt(d,e,f,g,h){var x=this,w=x.a
if(w.a+e.a+g-h>1e-10)return new B.NX(e,d)
else{x.a=B.aDu(w,B.aDu(e,new A.I(g,0)));++x.b
if(f)x.c=d
return null}}}
B.nk.prototype={}
B.Ig.prototype={
sFs(d,e){if(this.p===e)return
this.p=e
this.a1()},
seF(d){if(this.Z===d)return
this.Z=d
this.a1()},
swm(d,e){if(this.T===e)return
this.T=e
this.a1()},
saLN(d){if(this.a8===d)return
this.a8=d
this.a1()},
saLS(d){if(this.a3===d)return
this.a3=d
this.a1()},
saDj(d){if(this.ae===d)return
this.ae=d
this.a1()},
eO(d){if(!(d.b instanceof B.nk))d.b=new B.nk(null,null,D.j)},
ba(d){var x,w,v,u,t,s=this
switch(s.p.a){case 0:x=s.aa$
for(w=A.p(s).i("ai.1"),v=0;x!=null;){u=x.gbl()
t=D.ap.e_(x.dy,1/0,u)
v=Math.max(v,t)
u=x.b
u.toString
x=w.a(u).ao$}return v
case 1:return s.ab(D.L,new A.ab(0,1/0,0,d),s.gbR()).a}},
b8(d){var x,w,v,u,t,s=this
switch(s.p.a){case 0:x=s.aa$
for(w=A.p(s).i("ai.1"),v=0;x!=null;){u=x.gbc()
t=D.aa.e_(x.dy,1/0,u)
v+=t
u=x.b
u.toString
x=w.a(u).ao$}return v
case 1:return s.ab(D.L,new A.ab(0,1/0,0,d),s.gbR()).a}},
b9(d){var x,w,v,u,t,s=this
switch(s.p.a){case 0:return s.ab(D.L,new A.ab(0,d,0,1/0),s.gbR()).b
case 1:x=s.aa$
for(w=A.p(s).i("ai.1"),v=0;x!=null;){u=x.gbq()
t=D.at.e_(x.dy,1/0,u)
v=Math.max(v,t)
u=x.b
u.toString
x=w.a(u).ao$}return v}},
b7(d){var x,w,v,u,t,s=this
switch(s.p.a){case 0:return s.ab(D.L,new A.ab(0,d,0,1/0),s.gbR()).b
case 1:x=s.aa$
for(w=A.p(s).i("ai.1"),v=0;x!=null;){u=x.gbB()
t=D.aU.e_(x.dy,1/0,u)
v+=t
u=x.b
u.toString
x=w.a(u).ao$}return v}},
fE(d){return this.Fj(d)},
an_(d){var x
switch(this.p.a){case 0:x=d.a
break
case 1:x=d.b
break
default:x=null}return x},
amF(d){var x
switch(this.p.a){case 0:x=d.b
break
case 1:x=d.a
break
default:x=null}return x},
an2(d,e){var x
switch(this.p.a){case 0:x=new A.j(d,e)
break
case 1:x=new A.j(e,d)
break
default:x=null}return x},
gVb(){var x,w=this.K
switch((w==null?D.aT:w).a){case 1:w=!1
break
case 0:w=!0
break
default:w=null}switch(this.N.a){case 1:x=!1
break
case 0:x=!0
break
default:x=null}switch(this.p.a){case 0:w=new A.a_(w,x)
break
case 1:w=new A.a_(x,w)
break
default:w=null}return w},
dz(d,e){var x,w,v,u,t,s,r=this,q={}
if(r.aa$==null)return null
switch(r.p.a){case 0:x=new A.ab(0,d.b,0,1/0)
break
case 1:x=new A.ab(0,1/0,0,d.d)
break
default:x=null}w=r.Wg(d,A.fU())
v=w.a
u=null
t=w.b
u=t
s=B.b4Q(v,d,r.p)
q.a=null
r.ZT(u,v,s,new B.avg(q,x,e),new B.avh(x))
return q.a},
cz(d){return this.azr(d)},
azr(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
switch(j.p.a){case 0:x=d.b
x=new A.a_(new A.ab(0,x,0,1/0),x)
break
case 1:x=d.d
x=new A.a_(new A.ab(0,1/0,0,x),x)
break
default:x=null}w=x.a
v=null
u=x.b
v=u
t=j.aa$
for(x=A.p(j).i("ai.1"),s=0,r=0,q=0,p=0,o=0;t!=null;){n=A.b0r(t,w)
m=j.an_(n)
l=j.amF(n)
if(o>0&&q+m+j.T>v){s=Math.max(s,q)
r+=p+j.a3
q=0
p=0
o=0}q+=m
p=Math.max(p,l)
if(o>0)q+=j.T;++o
k=t.b
k.toString
t=x.a(k).ao$}r+=p
s=Math.max(s,q)
switch(j.p.a){case 0:x=new A.I(s,r)
break
case 1:x=new A.I(r,s)
break
default:x=null}return d.b3(x)},
bj(){var x,w,v,u,t,s,r,q=this,p=y.a.a(A.z.prototype.gW.call(q))
if(q.aa$==null){q.fy=new A.I(A.N(0,p.a,p.b),A.N(0,p.c,p.d))
q.a4=!1
return}x=q.Wg(p,A.m6())
w=x.a
v=null
u=x.b
v=u
t=q.p
s=B.b4Q(w,p,t)
q.fy=B.aYz(s,t)
t=s.a-w.a
r=s.b-w.b
q.a4=t<0||r<0
q.ZT(v,new A.I(t,r),s,B.bqq(),B.bqp())},
Wg(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null
switch(j.p.a){case 0:x=d.b
x=new A.a_(new A.ab(0,x,0,1/0),x)
break
case 1:x=d.d
x=new A.a_(new A.ab(0,1/0,0,x),x)
break
default:x=i}w=x.a
v=i
u=x.b
v=u
t=j.gVb().a
s=j.T
r=A.c([],y.l)
q=j.aa$
x=A.p(j).i("ai.1")
p=i
o=D.K
while(q!=null){n=B.aYz(e.$2(q,w),j.p)
m=p==null
l=m?new B.NX(n,q):p.aMt(q,n,t,s,v)
if(l!=null){r.push(l)
if(m)m=i
else{m=p.a
n=new A.I(m.b,m.a)
m=n}if(m==null)m=D.K
n=new A.I(o.a+m.a,Math.max(o.b,m.b))
o=n
p=l}m=q.b
m.toString
q=x.a(m).ao$}x=j.a3
m=r.length
k=p.a
o=B.aDu(o,B.aDu(new A.I(x*(m-1),0),new A.I(k.b,k.a)))
return new A.a_(new A.I(o.b,o.a),r)},
ZT(b1,b2,b3,b4,b5){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=null,a5=a3.T,a6=Math.max(0,b2.b),a7=a3.gVb(),a8=a7.a,a9=a4,b0=a7.b
a9=b0
x=a3.ae
if(a9)x=x.gamd()
w=a3.a8.Eo(a6,a3.a3,b1.length,a9)
v=w.a
u=a4
t=w.b
u=t
s=a8?a3.gys():a3.guE()
for(r=J.bn(a9?new A.bd(b1,A.a6(b1).i("bd<1>")):b1),q=b3.a,p=v;r.v();){o=r.gR(r)
n=o.a
m=n.b
l=o.b
k=Math.max(0,q-n.a)
j=a3.Z.Eo(k,a5,l,a8)
i=j.a
h=a4
g=j.b
h=g
f=o.c
e=l
d=i
while(!0){if(!(f!=null&&e>0))break
a0=B.aYz(b5.$1(f),a3.p)
a1=a4
a2=a0.b
a1=a2
b4.$2(a3.an2(d,p+x.gai2()*(m-a1)),f)
d+=a0.a+h
f=s.$1(f);--e}p+=m+u}},
cY(d,e){return this.uT(d,e)},
aQ(d,e){var x,w=this,v=w.a4&&w.ag!==D.n,u=w.aC
if(v){v=w.cx
v===$&&A.b()
x=w.gt(0)
u.saG(0,d.nJ(v,e,new A.O(0,0,0+x.a,0+x.b),w.ga4e(),w.ag,u.a))}else{u.saG(0,null)
w.r2(d,e)}},
l(){this.aC.saG(0,null)
this.fT()}}
B.a7A.prototype={
ar(d){var x,w,v
this.dS(d)
x=this.aa$
for(w=y.e;x!=null;){x.ar(d)
v=x.b
v.toString
x=w.a(v).ao$}},
an(d){var x,w,v
this.dI(0)
x=this.aa$
for(w=y.e;x!=null;){x.an(0)
v=x.b
v.toString
x=w.a(v).ao$}}}
B.a7B.prototype={}
B.a0z.prototype={
aK(d){var x=A.dF(d)
x=new B.Ig(D.b8,C.f1,this.r,C.f1,this.x,C.qN,x,D.bn,D.n,A.ap(y.h),0,null,null,new A.aR(),A.ap(y.d))
x.aJ()
x.V(0,null)
return x},
aO(d,e){var x
e.sFs(0,D.b8)
e.seF(C.f1)
e.swm(0,this.r)
e.saLN(C.f1)
e.saLS(this.x)
e.saDj(C.qN)
x=A.dF(d)
if(e.K!=x){e.K=x
e.a1()}if(e.N!==D.bn){e.N=D.bn
e.a1()}if(D.n!==e.ag){e.ag=D.n
e.aM()
e.bi()}}}
var z=a.updateTypes(["G(G)","I(C)","~(j,C)"])
B.avg.prototype={
$2(d,e){var x=this.a
x.a=A.tt(x.a,A.pT(e.f0(this.b,this.c),d.b))},
$S:661}
B.avh.prototype={
$1(d){return d.ab(D.L,this.a,d.gbR())},
$S:662};(function installTearOffs(){var x=a._static_1,w=a._static_2,v=a._instance_1u
x(B,"bqp","bho",1)
w(B,"bqq","bhp",2)
var u
v(u=B.Ig.prototype,"gbl","ba",0)
v(u,"gbc","b8",0)
v(u,"gbq","b9",0)
v(u,"gbB","b7",0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.fR,[B.rF,B.Kw])
u(B.NX,A.H)
u(B.nk,A.tQ)
u(B.a7A,A.C)
u(B.a7B,B.a7A)
u(B.Ig,B.a7B)
u(B.avg,A.ec)
u(B.avh,A.ct)
u(B.a0z,A.eo)
x(B.a7A,A.ai)
w(B.a7B,A.dw)})()
A.bO(b.typeUniverse,JSON.parse('{"nk":{"ey":[],"ek":["C"],"dp":[]},"Ig":{"dw":["C","nk"],"C":[],"ai":["C","nk"],"z":[],"au":[],"ai.1":"nk","dw.1":"nk","ai.0":"C"},"a0z":{"eo":[],"av":[],"h":[]}}'))
var y={a:A.L("ab"),h:A.L("mm"),d:A.L("cG"),l:A.L("q<NX>"),e:A.L("nk")};(function constants(){C.f1=new B.rF(0,"start")
C.aGS=new B.rF(1,"end")
C.aGT=new B.rF(2,"center")
C.aGU=new B.rF(3,"spaceBetween")
C.aGV=new B.rF(4,"spaceAround")
C.aGW=new B.rF(5,"spaceEvenly")
C.qN=new B.Kw(0,"start")
C.aGX=new B.Kw(1,"end")
C.aGY=new B.Kw(2,"center")})()};
(a=>{a["DywFLs0xV0keFcjz+7N3TasIzBg="]=a.current})($__dart_deferred_initializers__);