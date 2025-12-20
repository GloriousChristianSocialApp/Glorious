((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={ayj:function ayj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ayk:function ayk(){},ayl:function ayl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ayi:function ayi(){},ZF:function ZF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Ar:function Ar(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.v6$=d
_.cR$=e
_.ao$=f
_.a=null},Yj:function Yj(d,e,f,g,h,i,j){var _=this
_.dA=d
_.y1=e
_.y2=f
_.cB$=g
_.aa$=h
_.cO$=i
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
_.dx=$},FA:function FA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.a=x},ZE:function ZE(d,e,f){this.f=d
this.d=e
this.a=f}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[23],A)
D=c[47]
A.ayj.prototype={
a9l(d){var x=this.c
return d.us(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.bm(B.c(["scrollOffset: "+B.m(x.a),"crossAxisOffset: "+B.m(x.b),"mainAxisExtent: "+B.m(x.c),"crossAxisExtent: "+B.m(x.d)],y.x),", ")+")"}}
A.ayk.prototype={}
A.ayl.prototype={
a9y(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.l6(d/x)-1)
return 0},
amV(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Im(d){var x=this,w=x.a,v=C.i.bA(d,w)
return new A.ayj(C.i.iN(d,w)*x.b,x.amV(v*x.c),x.d,x.e)},
a3t(d){var x
if(d===0)return 0
x=this.b
return x*(C.i.iN(d-1,this.a)+1)-(x-this.d)}}
A.ayi.prototype={}
A.ZF.prototype={
Sp(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.ayl(v,t+x.b,u+w,t,u,B.CU(d.x))}}
A.Ar.prototype={
j(d){return"crossAxisOffset="+B.m(this.w)+"; "+this.aeF(0)}}
A.Yj.prototype={
eM(d){if(!(d.b instanceof A.Ar))d.b=new A.Ar(!1,null,null)},
sa9S(d){var x,w,v=this
if(v.dA===d)return
x=!0
if(B.D(d)===B.D(v.dA)){w=v.dA
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.a1()
v.dA=d},
uF(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bj(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.z.prototype.gW.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.dA.Sp(a8)
t=u.b
s=t>1e-10?u.a*C.d.iN(w,t):0
r=isFinite(v)?u.a9y(v):a7
if(a6.aa$!=null){q=a6.a30(s)
a6.qW(q,r!=null?a6.a31(r):0)}else a6.qW(0,0)
p=u.Im(s)
if(a6.aa$==null)if(!a6.Nw(s,p.a)){o=u.a3t(a9.guE())
a6.dy=B.ja(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.r5()
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
for(;k>=s;--k){i=u.Im(k)
h=i.c
g=a6.a5Z(a8.us(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.aa$
h.toString
h.hg(p.a9l(a8))
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
break}i=u.Im(k)
e=i.c
a0=a8.us(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).ao$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.a5X(a0,j)
if(g==null){d=!0
break}}else g.hg(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.cO$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.Ps(a8,s,t,n,m)
a4=a6.uz(a8,Math.min(x,n),m)
a5=a6.yl(a8,n,m)
a6.dy=B.ja(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.r5()}}
A.FA.prototype={
a2Q(d){return new A.ZE(this.rx,this.ry,null)}}
A.ZE.prototype={
aK(d){var x=new A.Yj(this.f,y.v.a(d),B.F(y.e,y.g),0,null,null,B.an(y.d))
x.aJ()
return x},
aO(d,e){e.sa9S(this.f)},
Pr(d,e,f,g,h){var x
this.aeG(d,e,f,g,h)
x=this.f.Sp(d).a3t(this.d.guZ())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[A.ayj,A.ayk,A.ayi])
w(A.ayl,A.ayk)
w(A.ZF,A.ayi)
w(A.Ar,B.fr)
w(A.Yj,B.lA)
w(A.FA,D.DP)
w(A.ZE,B.lG)})()
B.bW(b.typeUniverse,JSON.parse('{"Ar":{"fr":[],"n0":[],"eg":["C"],"lh":[],"dn":[]},"Yj":{"lA":[],"cz":[],"ai":["C","fr"],"z":[],"au":[],"ai.1":"fr","ai.0":"C"},"FA":{"ad":[],"h":[]},"ZE":{"lG":[],"av":[],"h":[]}}'))
var y={d:B.L("cK"),x:B.L("q<l>"),g:B.L("C"),z:B.L("j9"),t:B.L("Ar"),v:B.L("rj"),c:B.L("fr"),e:B.L("d")}};
(a=>{a["gpc+s0w++JLq9MbxtSKQbEpr8JY="]=a.current})($__dart_deferred_initializers__);