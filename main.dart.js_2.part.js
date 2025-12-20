((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={axo:function axo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},axp:function axp(){},axq:function axq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},axn:function axn(){},YV:function YV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Ai:function Ai(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.uX$=d
_.cO$=e
_.ao$=f
_.a=null},XE:function XE(d,e,f,g,h,i,j){var _=this
_.du=d
_.y1=e
_.y2=f
_.cw$=g
_.aa$=h
_.cL$=i
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
_.dx=$},Fo:function Fo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.a=x},YU:function YU(d,e,f){this.f=d
this.d=e
this.a=f}},D,E
B=c[0]
C=c[2]
A=a.updateHolder(c[12],A)
D=c[37]
E=c[24]
A.axo.prototype={
a8T(d){var x=this.c
return d.uh(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.bl(B.c(["scrollOffset: "+B.m(x.a),"crossAxisOffset: "+B.m(x.b),"mainAxisExtent: "+B.m(x.c),"crossAxisExtent: "+B.m(x.d)],y.x),", ")+")"}}
A.axp.prototype={}
A.axq.prototype={
a95(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.l3(d/x)-1)
return 0},
ams(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
HX(d){var x=this,w=x.a,v=C.i.bz(d,w)
return new A.axo(C.i.iK(d,w)*x.b,x.ams(v*x.c),x.d,x.e)},
a30(d){var x
if(d===0)return 0
x=this.b
return x*(C.i.iK(d-1,this.a)+1)-(x-this.d)}}
A.axn.prototype={}
A.YV.prototype={
RV(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.axq(v,t+x.b,u+w,t,u,B.CM(d.x))}}
A.Ai.prototype={
j(d){return"crossAxisOffset="+B.m(this.w)+"; "+this.aec(0)}}
A.XE.prototype={
eJ(d){if(!(d.b instanceof A.Ai))d.b=new A.Ai(!1,null,null)},
sa9p(d){var x,w,v=this
if(v.du===d)return
x=!0
if(B.C(d)===B.C(v.du)){w=v.du
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.a1()
v.du=d},
uv(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bi(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.v.prototype.gW.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.du.RV(a8)
t=u.b
s=t>1e-10?u.a*C.d.iK(w,t):0
r=isFinite(v)?u.a95(v):a7
if(a6.aa$!=null){q=a6.a2y(s)
a6.qP(q,r!=null?a6.a2z(r):0)}else a6.qP(0,0)
p=u.HX(s)
if(a6.aa$==null)if(!a6.N4(s,p.a)){o=u.a30(a9.guu())
a6.dy=B.j1(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.qY()
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
for(;k>=s;--k){i=u.HX(k)
h=i.c
g=a6.a5w(a8.uh(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.aa$
h.toString
h.hd(p.a8T(a8))
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
break}i=u.HX(k)
e=i.c
a0=a8.uh(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).ao$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.a5u(a0,j)
if(g==null){d=!0
break}}else g.hd(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.cL$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.P0(a8,s,t,n,m)
a4=a6.uo(a8,Math.min(x,n),m)
a5=a6.ya(a8,n,m)
a6.dy=B.j1(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.qY()}}
A.Fo.prototype={
a2n(d){return new A.YU(this.rx,this.ry,null)}}
A.YU.prototype={
aJ(d){var x=new A.XE(this.f,y.v.a(d),B.F(y.e,y.g),0,null,null,B.an(y.d))
x.aI()
return x},
aN(d,e){e.sa9p(this.f)},
P_(d,e,f,g,h){var x
this.aed(d,e,f,g,h)
x=this.f.RV(d).a30(this.d.guP())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.J,[A.axo,A.axp,A.axn])
w(A.axq,A.axp)
w(A.YV,A.axn)
w(A.Ai,B.fk)
w(A.XE,B.ly)
w(A.Fo,E.DF)
w(A.YU,B.lD)})()
B.eQ(b.typeUniverse,JSON.parse('{"Ai":{"fk":[],"mY":[],"ec":["D"],"lg":[],"dl":[]},"XE":{"ly":[],"cv":[],"ai":["D","fk"],"v":[],"au":[],"ai.1":"fk","ai.0":"D"},"Fo":{"ad":[],"h":[]},"YU":{"lD":[],"av":[],"h":[]}}'))
var y={d:B.a0("dj"),x:B.a0("q<l>"),g:B.a0("D"),z:B.a0("jQ"),t:B.a0("Ai"),v:B.a0("ra"),c:B.a0("fk"),e:B.a0("d")};(function constants(){D.u1=new B.ak(0,0,0,8)
D.uF=new B.aX(58442,"MaterialIcons",!1)})()};
(a=>{a["bvC67NEzlyuVsj7BzSLcwjkwSIg="]=a.current})($__dart_deferred_initializers__);