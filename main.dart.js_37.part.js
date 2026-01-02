((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={ayv:function ayv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},ayw:function ayw(){},ayx:function ayx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ayu:function ayu(){},ZK:function ZK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},Aw:function Aw(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.v7$=d
_.cR$=e
_.ao$=f
_.a=null},Yo:function Yo(d,e,f,g,h,i,j){var _=this
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
_.a=x},ZJ:function ZJ(d,e,f){this.f=d
this.d=e
this.a=f}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[24],A)
D=c[50]
A.ayv.prototype={
a9s(d){var x=this.c
return d.ut(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.bn(B.c(["scrollOffset: "+B.l(x.a),"crossAxisOffset: "+B.l(x.b),"mainAxisExtent: "+B.l(x.c),"crossAxisExtent: "+B.l(x.d)],y.x),", ")+")"}}
A.ayw.prototype={}
A.ayx.prototype={
a9F(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.l6(d/x)-1)
return 0},
an3(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
Iu(d){var x=this,w=x.a,v=C.i.bA(d,w)
return new A.ayv(C.i.iO(d,w)*x.b,x.an3(v*x.c),x.d,x.e)},
a3A(d){var x
if(d===0)return 0
x=this.b
return x*(C.i.iO(d-1,this.a)+1)-(x-this.d)}}
A.ayu.prototype={}
A.ZK.prototype={
Sx(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.ayx(v,t+x.b,u+w,t,u,B.CZ(d.x))}}
A.Aw.prototype={
j(d){return"crossAxisOffset="+B.l(this.w)+"; "+this.aeO(0)}}
A.Yo.prototype={
eO(d){if(!(d.b instanceof A.Aw))d.b=new A.Aw(!1,null,null)},
saa_(d){var x,w,v=this
if(v.dA===d)return
x=!0
if(B.D(d)===B.D(v.dA)){w=v.dA
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.a1()
v.dA=d},
uG(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bj(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.z.prototype.gW.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.dA.Sx(a8)
t=u.b
s=t>1e-10?u.a*C.d.iO(w,t):0
r=isFinite(v)?u.a9F(v):a7
if(a6.aa$!=null){q=a6.a37(s)
a6.qX(q,r!=null?a6.a38(r):0)}else a6.qX(0,0)
p=u.Iu(s)
if(a6.aa$==null)if(!a6.NE(s,p.a)){o=u.a3A(a9.guF())
a6.dy=B.jd(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.r6()
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
for(;k>=s;--k){i=u.Iu(k)
h=i.c
g=a6.a65(a8.ut(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.aa$
h.toString
h.hg(p.a9s(a8))
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
break}i=u.Iu(k)
e=i.c
a0=a8.ut(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).ao$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.a63(a0,j)
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
a3=d?m:a9.PA(a8,s,t,n,m)
a4=a6.uA(a8,Math.min(x,n),m)
a5=a6.yn(a8,n,m)
a6.dy=B.jd(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.r6()}}
A.FF.prototype={
a2X(d){return new A.ZJ(this.rx,this.ry,null)}}
A.ZJ.prototype={
aK(d){var x=new A.Yo(this.f,y.v.a(d),B.F(y.e,y.g),0,null,null,B.ap(y.d))
x.aJ()
return x},
aO(d,e){e.saa_(this.f)},
Pz(d,e,f,g,h){var x
this.aeP(d,e,f,g,h)
x=this.f.Sx(d).a3A(this.d.gv_())
return x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.H,[A.ayv,A.ayw,A.ayu])
w(A.ayx,A.ayw)
w(A.ZK,A.ayu)
w(A.Aw,B.fu)
w(A.Yo,B.lC)
w(A.FF,D.DT)
w(A.ZJ,B.lI)})()
B.bO(b.typeUniverse,JSON.parse('{"Aw":{"fu":[],"n2":[],"ek":["C"],"lk":[],"dp":[]},"Yo":{"lC":[],"cB":[],"ai":["C","fu"],"z":[],"au":[],"ai.1":"fu","ai.0":"C"},"FF":{"ad":[],"h":[]},"ZJ":{"lI":[],"av":[],"h":[]}}'))
var y={d:B.L("cG"),x:B.L("q<m>"),g:B.L("C"),z:B.L("jc"),t:B.L("Aw"),v:B.L("rl"),c:B.L("fu"),e:B.L("d")}};
(a=>{a["gRT9d0dbEZdthw2BKi8zlue9F0k="]=a.current})($__dart_deferred_initializers__);