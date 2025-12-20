((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
b4T(d,e,f){var x,w,v,u,t
if(f<=C.b.ga6(e))return C.b.ga6(d)
if(f>=C.b.gP(e))return C.b.gP(d)
x=C.b.aGY(e,new A.aSg(f))
w=d[x]
v=x+1
u=d[v]
t=e[x]
t=B.P(w,u,(f-t)/(e[v]-t))
t.toString
return t},
bkx(d,e,f,g,h){var x,w,v=B.Zl(null,null,y.b)
v.V(0,e)
v.V(0,g)
x=B.a8(v,v.$ti.i("cv.E"))
x.$flags=1
w=x
x=B.a5(w).i("ak<1,w>")
x=B.a8(new B.ak(w,new A.aRK(d,e,f,g,h),x),x.i("ah.E"))
x.$flags=1
return new A.aEl(x,w)},
b0F(d,e,f){var x,w,v,u,t
if(d==e)return d
if(d==null)return e.aU(0,f)
if(e==null)return d.aU(0,1-f)
x=A.bkx(d.a,d.L_(),e.a,e.L_(),f)
w=B.t8(d.d,e.d,f)
w.toString
v=B.t8(d.e,e.e,f)
v.toString
u=f<0.5
t=u?d.f:e.f
u=u?d.c:e.c
return new A.ql(w,v,t,x.a,x.b,u)},
aEl:function aEl(d,e){this.a=d
this.b=e},
aSg:function aSg(d){this.a=d},
aRK:function aRK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ajG:function ajG(){},
ql:function ql(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.a=g
_.b=h
_.c=i},
amr:function amr(d){this.a=d},
axp:function axp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
axq:function axq(){},
axr:function axr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
axo:function axo(){},
YW:function YW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ai:function Ai(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.uU$=d
_.cM$=e
_.ao$=f
_.a=null},
XF:function XF(d,e,f,g,h,i,j){var _=this
_.du=d
_.y1=e
_.y2=f
_.c8$=g
_.aa$=h
_.cN$=i
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
_.dx=$},
Fo:function Fo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var _=this
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
_.a=x},
YV:function YV(d,e,f){this.f=d
this.d=e
this.a=f}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[12],A)
D=c[38]
A.aEl.prototype={}
A.ajG.prototype={
L_(){var x,w,v,u=this.b
if(u!=null)return u
u=this.a.length
x=1/(u-1)
w=J.UL(u,y.b)
for(v=0;v<u;++v)w[v]=v*x
return w}}
A.ql.prototype={
a3r(d,e,f){var x=this,w=x.d.X(f).a8p(e),v=x.e.X(f).a8p(e),u=x.L_()
return B.aVs(w,v,x.a,u,x.f,null)},
aU(d,e){var x=this,w=x.a,v=B.a5(w).i("ak<1,w>")
w=B.a8(new B.ak(w,new A.amr(e),v),v.i("ah.E"))
return new A.ql(x.d,x.e,x.f,w,x.b,null)},
dK(d,e){var x=A.b0F(d,this,e)
return x},
dL(d,e){var x=A.b0F(this,d,e)
return x},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a2(e)!==B.C(x))return!1
return e instanceof A.ql&&e.d.k(0,x.d)&&e.e.k(0,x.e)&&e.f===x.f&&B.cX(e.a,x.a)&&B.cX(e.b,x.b)},
gC(d){var x=this,w=B.ca(x.a),v=x.b
v=v==null?null:B.ca(v)
return B.a_(x.d,x.e,x.f,x.c,w,v,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var x=this,w=B.c(["begin: "+x.d.j(0),"end: "+x.e.j(0),"colors: "+B.m(x.a)],y.x),v=x.b
if(v!=null)w.push("stops: "+B.m(v))
w.push("tileMode: "+x.f.j(0))
return"LinearGradient("+C.b.bl(w,", ")+")"}}
A.axp.prototype={
a8Q(d){var x=this.c
return d.ue(this.d,x,x)},
j(d){var x=this
return"SliverGridGeometry("+C.b.bl(B.c(["scrollOffset: "+B.m(x.a),"crossAxisOffset: "+B.m(x.b),"mainAxisExtent: "+B.m(x.c),"crossAxisExtent: "+B.m(x.d)],y.x),", ")+")"}}
A.axq.prototype={}
A.axr.prototype={
a92(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.d.l3(d/x)-1)
return 0},
amp(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
HS(d){var x=this,w=x.a,v=C.i.bz(d,w)
return new A.axp(C.i.iL(d,w)*x.b,x.amp(v*x.c),x.d,x.e)},
a2Y(d){var x
if(d===0)return 0
x=this.b
return x*(C.i.iL(d-1,this.a)+1)-(x-this.d)}}
A.axo.prototype={}
A.YW.prototype={
RS(d){var x=this,w=x.c,v=x.a,u=Math.max(0,d.w-w*(v-1))/v,t=u/x.d
return new A.axr(v,t+x.b,u+w,t,u,B.CM(d.x))}}
A.Ai.prototype={
j(d){return"crossAxisOffset="+B.m(this.w)+"; "+this.ae9(0)}}
A.XF.prototype={
eI(d){if(!(d.b instanceof A.Ai))d.b=new A.Ai(!1,null,null)},
sa9m(d){var x,w,v=this
if(v.du===d)return
x=!0
if(B.C(d)===B.C(v.du)){w=v.du
if(w.a===d.a)if(w.b===d.b)if(w.c===d.c)x=w.d!==d.d}if(x)v.a1()
v.du=d},
us(d){var x=d.b
x.toString
x=y.t.a(x).w
x.toString
return x},
bi(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=y.z.a(B.v.prototype.gW.call(a6)),a9=a6.y1
a9.R8=!1
x=a8.d
w=x+a8.z
v=w+a8.Q
u=a6.du.RS(a8)
t=u.b
s=t>1e-10?u.a*C.d.iL(w,t):0
r=isFinite(v)?u.a92(v):a7
if(a6.aa$!=null){q=a6.a2v(s)
a6.qO(q,r!=null?a6.a2w(r):0)}else a6.qO(0,0)
p=u.HS(s)
if(a6.aa$==null)if(!a6.N_(s,p.a)){o=u.a2Y(a9.gur())
a6.dy=B.j1(a7,!1,a7,a7,o,0,0,0,o,a7)
a9.qX()
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
for(;k>=s;--k){i=u.HS(k)
h=i.c
g=a6.a5t(a8.ue(i.d,h,h))
f=g.b
f.toString
t.a(f)
e=i.a
f.a=e
f.w=i.b
if(j==null)j=g
m=Math.max(m,e+h)}if(j==null){h=a6.aa$
h.toString
h.hd(p.a8Q(a8))
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
break}i=u.HS(k)
e=i.c
a0=a8.ue(i.d,e,e)
a1=j.b
a1.toString
g=h.a(a1).ao$
if(g!=null){a1=g.b
a1.toString
a1=l.a(a1).b
a1.toString
a1=a1!==k}else a1=!0
if(a1){g=a6.a5r(a0,j)
if(g==null){d=!0
break}}else g.hd(a0)
a1=g.b
a1.toString
t.a(a1)
a2=i.a
a1.a=a2
a1.w=i.b
m=Math.max(m,a2+e);++k
j=g}t=a6.cN$
t.toString
t=t.b
t.toString
t=l.a(t).b
t.toString
a3=d?m:a9.OW(a8,s,t,n,m)
a4=a6.ul(a8,Math.min(x,n),m)
a5=a6.y7(a8,n,m)
a6.dy=B.j1(a5,a3>a4||x>0||a8.f!==0,a7,a7,a3,0,a4,0,a3,a7)
if(a3===m)a9.R8=!0
a9.qX()}}
A.Fo.prototype={
a2k(d){return new A.YV(this.rx,this.ry,null)}}
A.YV.prototype={
aJ(d){var x=new A.XF(this.f,y.v.a(d),B.F(y.e,y.g),0,null,null,B.am(y.d))
x.aI()
return x},
aN(d,e){e.sa9m(this.f)},
OV(d,e,f,g,h){var x
this.aea(d,e,f,g,h)
x=this.f.RS(d).a2Y(this.d.guM())
return x}}
var z=a.updateTypes([])
A.aSg.prototype={
$1(d){return d<=this.a},
$S:239}
A.aRK.prototype={
$1(d){var x=this,w=B.P(A.b4T(x.a,x.b,d),A.b4T(x.c,x.d,d),x.e)
w.toString
return w},
$S:657}
A.amr.prototype={
$1(d){var x=B.P(null,d,this.a)
x.toString
return x},
$S:73};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.J,[A.aEl,A.ajG,A.axp,A.axq,A.axo])
x(B.dQ,[A.aSg,A.aRK,A.amr])
w(A.ql,A.ajG)
w(A.axr,A.axq)
w(A.YW,A.axo)
w(A.Ai,B.fI)
w(A.XF,B.mO)
w(A.Fo,B.DF)
w(A.YV,B.mV)})()
B.f7(b.typeUniverse,JSON.parse('{"Ai":{"fI":[],"oX":[],"eb":["D"],"lf":[],"dk":[]},"XF":{"mO":[],"cz":[],"ai":["D","fI"],"v":[],"au":[],"ai.1":"fI","ai.0":"D"},"Fo":{"ad":[],"h":[]},"YV":{"mV":[],"av":[],"h":[]}}'))
var y={d:B.a0("di"),x:B.a0("q<l>"),g:B.a0("D"),z:B.a0("kx"),t:B.a0("Ai"),v:B.a0("vX"),c:B.a0("fI"),b:B.a0("G"),e:B.a0("d")};(function constants(){D.tY=new B.ap(0,0,0,8)
D.uB=new B.aZ(58442,"MaterialIcons",!1)})()};
(a=>{a["nqgdxlWd999f1jvywFD00VE5i7Y="]=a.current})($__dart_deferred_initializers__);