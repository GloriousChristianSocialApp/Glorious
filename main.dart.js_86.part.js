((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
b6R(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return C.SC
switch(d.a){case 0:x=f
w=e
break
case 1:v=f.a
u=f.b
t=e.a
x=v/u>t/r?new A.I(t*u/r,u):new A.I(v,r*v/t)
w=e
break
case 2:v=f.a
u=f.b
t=e.a
w=v/u>t/r?new A.I(t,t*u/v):new A.I(r*v/u,r)
x=f
break
case 3:v=f.a
u=f.b
t=e.a
if(v/u>t/r){w=new A.I(t,t*u/v)
x=f}else{x=new A.I(v,r*v/t)
w=e}break
case 4:v=f.a
u=f.b
t=e.a
if(v/u>t/r){x=new A.I(t*u/r,u)
w=e}else{w=new A.I(r*v/u,r)
x=f}break
case 5:w=new A.I(Math.min(e.a,f.a),Math.min(r,f.b))
x=w
break
case 6:s=e.a/r
v=f.b
x=r>v?new A.I(v*s,v):e
r=f.a
if(x.a>r)x=new A.I(r,r/s)
w=e
break
default:w=null
x=null}return new B.TU(w,x)},
DQ:function DQ(d,e){this.a=d
this.b=e},
TU:function TU(d,e){this.a=d
this.b=e},
b7B(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b2.gah(0))return
x=b2.a
w=b2.c-x
v=b2.b
u=b2.d-v
t=new A.I(w,u)
s=a8.b
s===$&&A.b()
s=s.a
s===$&&A.b()
s=J.aE(s.a.width())
r=a8.b.a
r===$&&A.b()
r=J.aE(r.a.height())
if(a6==null)a6=C.m8
q=B.b6R(a6,new A.I(s,r).dQ(0,b4),t)
p=q.a.ac(0,b4)
o=q.b
if(b3!==C.dg&&o.k(0,t))b3=C.dg
$.ar()
n=A.bw()
n.f=!1
if(a3!=null)n.suL(a3)
n.r=A.b0B(0,0,0,A.N(b1,0,1)).gq(0)
n.Q=a5
n.spi(a9)
n.a=a0
m=o.a
l=(w-m)/2
k=o.b
j=(u-k)/2
u=d.a
u=x+(l+(a7?-u:u)*l)
v+=j+d.b*j
i=new A.O(u,v,u+m,v+k)
h=b3!==C.dg||a7
if(h)J.aE(a1.a.a.save())
v=b3===C.dg
if(!v)a1.a.a.clipRect(A.e_(b2),$.pH()[1],!0)
if(a7){g=-(x+w/2)
x=a1.a.a
x.translate(-g,0)
x.scale(-1,1)
x.translate(g,0)}f=d.aGY(p,new A.O(0,0,s,r))
if(v)a1.a.z2(a8,f,i,n)
else for(x=B.bma(b2,i,b3),w=x.length,v=a1.a,e=0;e<x.length;x.length===w||(0,A.T)(x),++e)v.z2(a8,f,x[e],n)
if(h)a1.a.a.restore()},
bma(d,e,f){var x,w,v,u,t,s,r=e.c,q=e.a,p=r-q,o=e.d,n=e.b,m=o-n,l=f!==C.Uo
if(!l||f===C.Up){x=D.d.eS((d.a-q)/p)
w=D.d.l6((d.c-r)/p)}else{x=0
w=0}if(!l||f===C.Uq){v=D.d.eS((d.b-n)/m)
u=D.d.l6((d.d-o)/m)}else{v=0
u=0}r=A.c([],y.b)
for(t=x;t<=w;++t)for(q=t*p,s=v;s<=u;++s)r.push(e.dC(new A.j(q,s*m)))
return r},
yU:function yU(d,e){this.a=d
this.b=e}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[58],B)
C=c[100]
B.DQ.prototype={
L(){return"BoxFit."+this.b}}
B.TU.prototype={}
B.yU.prototype={
L(){return"ImageRepeat."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.fR,[B.DQ,B.yU])
w(B.TU,A.H)})()
var y={b:A.L("q<O>")};(function constants(){C.m7=new B.DQ(1,"contain")
C.j1=new B.DQ(2,"cover")
C.m8=new B.DQ(6,"scaleDown")
C.SC=new B.TU(D.K,D.K)
C.Uo=new B.yU(0,"repeat")
C.Up=new B.yU(1,"repeatX")
C.Uq=new B.yU(2,"repeatY")
C.dg=new B.yU(3,"noRepeat")})()};
(a=>{a["WfapwqNVF5t9h4gk148+SzOT554="]=a.current})($__dart_deferred_initializers__);