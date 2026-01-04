((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={ays:function ays(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ayt:function ayt(){},ayu:function ayu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ayr:function ayr(){},ZL:function ZL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Aw:function Aw(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.v9$=d
_.cS$=e
_.ao$=f
_.a=null},Yp:function Yp(d,e,f,g,h,i,j){var _=this
_.dA=d
_.y1=e
_.y2=f
_.cB$=g
_.aa$=h
_.cP$=i
_.b=_.dy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},FF:function FF(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
_.rx=d
_.ry=e
_.db=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.CW=v
_.cx=w
_.a=x},ZK:function ZK(d,e,f){this.f=d
this.d=e
this.a=f}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[24],A)
D=c[50]
A.ays.prototype={
a9v(d){var x=this.c
return d.uv(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.bn(B.c(["scrollOffset: "+B.l(x.a),"crossAxisOffset: "+B.l(x.b),"mainAxisExtent: "+B.l(x.c),"crossAxisExtent: "+B.l(x.d)],y.x),", ")+")"}}
A.ayt.prototype={}
A.ayu.prototype={
a9I(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.l6(d/x)-1)
return 0},
an6(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Iv(d){var x=this,w=x.a,v=C.i.bA(d,w)
return new A.ays(C.i.iO(d,w)*x.b,x.an6(v*x.c),x.d,x.e)},
a3D(d){var x
if(d===0)return 0
x=this.b
return x*(C.i.iO(d-1,this.a)+1)-(x-this.d)}}
A.ayr.prototype={}
A.ZL.prototype={
SA(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.ayu(v,t+x.b,u+w,t,u,B.CZ(d.x))}}
A.Aw.prototype={
j(d){return"crossAxisOffset="+B.l(this.w)+"; "+this.aeR(0)}}
A.Yp.prototype={
eO(d){if(!(d.b instanceof A.Aw))d.b=new A.Aw(!1,null,null)},
saa2(d){var x,w,v=this
if(v.dA===d)return
x=!0
if(B.D(d)===B.D(v.dA)){w=v.dA
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.a1()
v.dA=d},
uI(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bj(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.z.prototype.gW.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.dA.SA(a8)
t=u.b
s=t>1e-10?u.a*C.d.iO(w,t):0
r=isFinite(v)?u.a9I(v):a7
if(a6.aa$!=null){q=a6.a3a(s)
a6.qZ(q,r!=null?a6.a3b(r):0)}else a6.qZ(0,0)
p=u.Iv(s)
if(a6.aa$==null)if(!a6.NF(s,p.a)){o=u.a3D(a9.guH())
a6.dy=B.jd(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.r8()
return}n=p.a
m=n+p.c
t=a6.aa$
t.toString
t=t.b
t.toString
l=y.c
t=l.a(t).b
t.toString
k=t-1
t=y.t
j=a7
for(;k>=s;--k){i=u.Iv(k)
h=i.c
g=a6.a68(a8.uv(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.aa$
h.toString
h.hg(p.a9v(a8))
j=a6.aa$
h=j.b
h.toString
t.a(h)
h.a=n
h.w=p.b}h=j.b
h.toString
h=l.a(h).b
h.toString
k=h+1
h=B.p(a6).i("ai.1")
f=r!=null
while(!0){if(!(!f||k<=r)){d=!1
break}i=u.Iv(k)
e=i.c
a0=a8.uv(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).ao$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.a66(a0,j)
if(g==null){d=!0
break}}else g.hg(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.cP$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.PB(a8,s,t,n,m)
a4=a6.uC(a8,Math.min(x,n),m)
a5=a6.yp(a8,n,m)
a6.dy=B.jd(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.r8()}}
A.FF.prototype={
a3_(d){return new A.ZK(this.rx,this.ry,null)}}
A.ZK.prototype={
aK(d){var x=new A.Yp(this.f,y.v.a(d),B.F(y.e,y.g),0,null,null,B.ap(y.d))
x.aJ()
return x},
aO(d,e){e.saa2(this.f)},
PA(d,e,f,g,h){var x
this.aeS(d,e,f,g,h)
x=this.f.SA(d).a3D(this.d.gv1())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[A.ays,A.ayt,A.ayr])
w(A.ayu,A.ayt)
w(A.ZL,A.ayr)
w(A.Aw,B.fv)
w(A.Yp,B.lC)
w(A.FF,D.DT)
w(A.ZK,B.lI)})()
B.bO(b.typeUniverse,JSON.parse('{"Aw":{"fv":[],"n2":[],"el":["C"],"lk":[],"dp":[]},"Yp":{"lC":[],"cB":[],"ai":["C","fv"],"z":[],"au":[],"ai.1":"fv","ai.0":"C"},"FF":{"ae":[],"h":[]},"ZK":{"lI":[],"av":[],"h":[]}}'))
var y={d:B.L("cG"),x:B.L("r<m>"),g:B.L("C"),z:B.L("jc"),t:B.L("Aw"),v:B.L("rl"),c:B.L("fv"),e:B.L("d")}};
(a=>{a["pSGNeyvtXLUxz/Ufi6ge9T/F648="]=a.current})($__dart_deferred_initializers__);