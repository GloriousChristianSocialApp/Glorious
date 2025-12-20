((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
nQ(d,e,f,g){return new B.RE(f,d,e,g,null)},
RE:function RE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.y=g
_.a=h},
bkn(){return new b.G.XMLHttpRequest()},
bkq(){return b.G.document.createElement("img")},
b3i(d,e,f){var w=new B.a2V(d,A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.agQ(d,e,f)
return w},
hD:function hD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aqN:function aqN(d,e,f){this.a=d
this.b=e
this.c=f},
aqO:function aqO(d,e){this.a=d
this.b=e},
aqL:function aqL(d,e,f){this.a=d
this.b=e
this.c=f},
aqM:function aqM(d,e,f){this.a=d
this.b=e
this.c=f},
a2V:function a2V(d,e,f,g){var _=this
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
aGz:function aGz(d){this.a=d},
aGA:function aGA(d,e){this.a=d
this.b=e},
aGB:function aGB(d){this.a=d},
aGC:function aGC(d){this.a=d},
aGD:function aGD(d){this.a=d},
wm:function wm(d,e){this.a=d
this.b=e},
b55(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.Sg
switch(d.a){case 0:w=f
v=e
break
case 1:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new A.H(s*t/q,t):new A.H(u,q*u/s)
v=e
break
case 2:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new A.H(s,s*t/u):new A.H(q*u/t,q)
w=f
break
case 3:u=f.a
t=f.b
s=e.a
if(u/t>s/q){v=new A.H(s,s*t/u)
w=f}else{w=new A.H(u,q*u/s)
v=e}break
case 4:u=f.a
t=f.b
s=e.a
if(u/t>s/q){w=new A.H(s*t/q,t)
v=e}else{v=new A.H(q*u/t,q)
w=f}break
case 5:v=new A.H(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case 6:r=e.a/q
u=f.b
w=q>u?new A.H(u*r,u):e
q=f.a
if(w.a>q)w=new A.H(q,q/r)
v=e
break
default:v=null
w=null}return new B.To(v,w)},
DC:function DC(d,e){this.a=d
this.b=e},
To:function To(d,e){this.a=d
this.b=e},
bbt(d,e,f){return new B.y5(e,f,d)},
b5Q(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b3.gag(0))return
w=b3.a
v=b3.c-w
u=b3.b
t=b3.d-u
s=new A.H(v,t)
r=a9.b
r===$&&A.b()
r=r.a
r===$&&A.b()
r=J.aD(r.a.width())
q=a9.b.a
q===$&&A.b()
q=J.aD(q.a.height())
if(a7==null)a7=D.m5
p=B.b55(a7,new A.H(r,q).dN(0,b5),s)
o=p.a.ac(0,b5)
n=p.b
if(b4!==D.db&&n.k(0,s))b4=D.db
$.ar()
m=A.bt()
m.f=!1
if(a4!=null)m.sux(a4)
m.r=A.aZP(0,0,0,A.L(b2,0,1)).gq(0)
m.Q=a6
m.spa(b0)
m.a=a1
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=a0.a
t=w+(k+(a8?-t:t)*k)
u+=i+a0.b*i
h=new A.N(t,u,t+l,u+j)
g=b4!==D.db||a8
if(g)J.aD(a2.a.a.save())
u=b4===D.db
if(!u)a2.a.a.clipRect(A.dV(b3),$.pz()[1],!0)
if(a8){f=-(w+v/2)
w=a2.a.a
w.translate(-f,0)
w.scale(-1,1)
w.translate(f,0)}e=a0.aGd(o,new A.N(0,0,r,q))
if(u)a2.a.yM(a9,e,h,m)
else for(w=B.bk7(b3,h,b4),v=w.length,u=a2.a,d=0;d<w.length;w.length===v||(0,A.R)(w),++d)u.yM(a9,e,w[d],m)
if(g)a2.a.a.restore()},
bk7(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==D.TU
if(!k||f===D.TV){w=C.d.eM((d.a-p)/o)
v=C.d.l3((d.c-q)/o)}else{w=0
v=0}if(!k||f===D.TW){u=C.d.eM((d.b-m)/l)
t=C.d.l3((d.d-n)/l)}else{u=0
t=0}q=A.c([],x.T)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.dw(new A.k(p,r*l)))
return q},
yG:function yG(d,e){this.a=d
this.b=e},
y5:function y5(d,e,f){this.a=d
this.b=e
this.d=f},
a1x:function a1x(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
b31(){return new B.Kd(A.c([],x.v),A.c([],x.l),A.c([],x.u))},
ben(d,e){return new B.zh("HTTP request failed, statusCode: "+d+", "+e.j(0))},
fS:function fS(){},
al7:function al7(d,e,f){this.a=d
this.b=e
this.c=f},
al8:function al8(d,e){this.a=d
this.b=e},
al4:function al4(d,e){this.a=d
this.b=e},
al3:function al3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
al5:function al5(d){this.a=d},
al6:function al6(d,e){this.a=d
this.b=e},
Kd:function Kd(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
aAG:function aAG(d,e){this.a=d
this.b=e},
mF:function mF(d,e){this.a=d
this.b=e},
a2t:function a2t(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
zh:function zh(d){this.b=d},
bet(d,e){var w=new B.W5(A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.agD(d,e)
return w},
VH(d,e,f,g){var w=new B.GB(g,f,A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.agC(null,d,e,f,g)
return w},
ff:function ff(d,e,f){this.a=d
this.b=e
this.c=f},
ale:function ale(){this.b=this.a=null},
Uj:function Uj(d){this.a=d},
hc:function hc(){},
alf:function alf(){},
alg:function alg(){},
W5:function W5(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
arh:function arh(d,e){this.a=d
this.b=e},
GB:function GB(d,e,f,g,h){var _=this
_.z=_.y=null
_.Q=d
_.as=e
_.at=null
_.ax=$
_.ay=null
_.ch=0
_.CW=null
_.cx=!1
_.a=f
_.b=g
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=h},
aqk:function aqk(d,e){this.a=d
this.b=e},
aqj:function aqj(d){this.a=d},
a3f:function a3f(){},
a3e:function a3e(){},
bdW(d){return new A.eU(new B.apD(d),null)},
apD:function apD(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[19],B)
D=c[31]
B.RE.prototype={
garI(){var w=this.y
if(w==null)return 40
return 2*(w==null?0:w)},
gart(){var w=this.y
if(w==null)return 40
return 2*(w==null?1/0:w)},
G(d){var w,v,u,t,s,r,q=this,p=null,o=A.o(d),n=p,m=o.ax,l=m.e
m=l==null?m.c:l
n=m
w=o.ok.w.aZ(n)
v=q.d
if(v==null){m=o.ax
l=m.d
m=l==null?m.b:l
u=m}else u=v
if(u==null){m=w.b
m.toString
switch(A.JD(m).a){case 0:m=o.fr
break
case 1:m=o.dy
break
default:m=p}v=m}else{if(n==null){v.toString
switch(A.JD(v).a){case 0:m=w.aZ(o.fr)
break
case 1:m=w.aZ(o.dy)
break
default:m=p}w=m}v=u}t=q.garI()
s=q.gart()
m=q.f
m=m!=null?B.bbt(D.m4,m,p):p
l=q.c
if(l==null)l=p
else{r=o.k2.aZ(w.b)
r=A.cq(B.bdW(A.ms(A.iG(l,p,p,C.bV,!0,w,p,p,C.aI),r,p)),p,p)
l=r}return A.QE(l,new A.aa(t,s,t,s),new A.bJ(v,m,p,p,p,p,C.j0),C.M,p,p,p)}}
B.hD.prototype={
A0(d){return new A.dG(this,x.i)},
vb(d,e){return B.b3i(this.wl(d,e),d.a,null)},
vc(d,e){return B.b3i(this.wl(d,e),d.a,null)},
wl(d,e){return this.ar9(d,e)},
ar9(d,e){var w=0,v=A.B(x.R),u,t=2,s=[],r=this,q,p,o,n,m
var $async$wl=A.x(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:o=new B.aqN(r,e,d)
n=new B.aqO(r,d)
case 3:switch(r.d.a){case 0:w=5
break
case 2:w=6
break
case 1:w=7
break
default:w=4
break}break
case 5:u=o.$0()
w=1
break
case 6:u=n.$0()
w=1
break
case 7:t=9
w=12
return A.u(o.$0(),$async$wl)
case 12:q=g
u=q
w=1
break
t=2
w=11
break
case 9:t=8
m=s.pop()
q=n.$0()
u=q
w=1
break
w=11
break
case 8:w=2
break
case 11:w=4
break
case 4:case 1:return A.z(u,v)
case 2:return A.y(s.at(-1),v)}})
return A.A($async$wl,v)},
wN(d){var w=0,v=A.B(x.p),u,t=this,s,r,q,p,o,n,m
var $async$wN=A.x(function(e,f){if(e===1)return A.y(f,v)
while(true)switch(w){case 0:r=t.a
q=A.aA0().X(r)
p=new A.a3($.af,x.Z)
o=new A.aG(p,x.x)
n=B.bkn()
n.open("GET",r,!0)
n.responseType="arraybuffer"
n.addEventListener("load",A.eQ(new B.aqL(n,o,q)))
n.addEventListener("error",A.eQ(new B.aqM(o,n,q)))
n.send()
w=3
return A.u(p,$async$wN)
case 3:r=n.response
r.toString
s=A.VN(x.a.a(r),0,null)
if(s.byteLength===0)throw A.i(B.ben(A.V(n,"status"),q))
m=d
w=4
return A.u(A.Ul(s),$async$wN)
case 4:u=m.$1(f)
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$wN,v)},
k(d,e){if(e==null)return!1
if(J.a2(e)!==A.C(this))return!1
return e instanceof B.hD&&e.a===this.a&&e.b===this.b},
gC(d){return A.a_(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+C.i.ap(this.b,1)+")"}}
B.a2V.prototype={
agQ(d,e,f){var w=this
w.e=e
w.y.fe(new B.aGz(w),new B.aGA(w,f),x.P)},
ga6b(d){var w=this,v=w.at
return v===$?w.at=new A.fg(new B.aGB(w),new B.aGC(w),new B.aGD(w)):v},
Qo(){var w,v=this
if(v.z){w=v.Q
w===$&&A.b()
w.I(0,v.ga6b(0))}v.as=!0
v.acp()}}
B.wm.prototype={
NK(d){return new B.wm(this.a,this.b)},
l(){},
gd9(d){return A.a1(A.aq("Could not create image data for this image because access to it is restricted by the Same-Origin Policy.\nSee https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"))},
zy(d){if(!(d instanceof B.wm))return!1
return J.f(d.a,this.a)&&d.b===this.b},
gd5(d){return 1},
gSJ(){var w=this.a
return C.d.fo(4*w.naturalWidth*w.naturalHeight)},
$iff:1,
gjJ(){return this.b}}
B.DC.prototype={
K(){return"BoxFit."+this.b}}
B.To.prototype={}
B.yG.prototype={
K(){return"ImageRepeat."+this.b}}
B.y5.prototype={
yu(d){return new B.a1x(this,d)},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(J.a2(e)!==A.C(v))return!1
w=!1
if(x.U.b(e))if(e.gd9(e).k(0,v.a)){e.gux()
if(e.gkw()==v.d)if(e.geA().k(0,C.V)){e.gun()
if(e.gvx(e)===D.db){e.gpg()
if(e.gd5(e)===1)if(e.gcW(e)===1){w=e.gnh()===C.bP
if(w){e.gpa()
e.gv4()}}}}}return w},
gC(d){return A.a_(this.a,null,this.d,C.V,null,D.db,!1,1,1,C.bP,!1,!1,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var w=A.c([this.a.j(0)],x.s),v=this.d,u=!1
if(v!=null)u=v!==D.m5
if(u)w.push(v.j(0))
w.push(C.V.j(0))
w.push("scale "+C.i.ap(1,1))
w.push("opacity "+C.i.ap(1,1))
w.push(C.bP.j(0))
return"DecorationImage("+C.b.bl(w,", ")+")"},
gd9(d){return this.a},
gux(){return null},
gkw(){return this.d},
geA(){return C.V},
gun(){return null},
gvx(){return D.db},
gpg(){return!1},
gd5(){return 1},
gcW(){return 1},
gnh(){return C.bP},
gpa(){return!1},
gv4(){return!1}}
B.a1x.prototype={
A6(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a,p=q.a.X(g),o=p.a
if(o==null)o=p
w=s.c
v=w==null
if(v)u=r
else{u=w.a
if(u==null)u=w}if(o!==u){t=new A.fg(s.gXv(),r,q.b)
if(!v)w.I(0,t)
s.c=p
p.Z(0,t)}if(s.d==null)return
o=f!=null
if(o){w=d.a.a
J.aD(w.save())
v=f.geJ().a
v===$&&A.b()
v=v.a
v.toString
w.clipPath(v,$.m3(),!0)}w=s.d
w=w.gd9(w)
v=s.d.gjJ()
u=s.d
B.b5Q(C.V,i,d,r,r,v,C.bP,q.d,!1,w,!1,!1,h,e,D.db,u.gd5(u))
if(o)d.a.a.restore()},
rD(d,e,f,g){return this.A6(d,e,f,g,1,C.cF)},
anS(d,e){var w,v=this
if(J.f(v.d,d))return
w=v.d
if(w!=null&&w.zy(d)){d.l()
return}w=v.d
if(w!=null)w.l()
v.d=d
if(!e)v.b.$0()},
l(){var w=this,v=w.c
if(v!=null)v.I(0,new A.fg(w.gXv(),null,w.a.b))
v=w.d
if(v!=null)v.l()
w.d=null},
j(d){return"DecorationImagePainter(stream: "+A.m(this.c)+", image: "+A.m(this.d)+") for "+this.a.j(0)}}
B.fS.prototype={
X(d){var w=new B.ale()
this.ajO(d,new B.al7(this,d,w),new B.al8(this,w))
return w},
ajO(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new B.al4(r,f)
v=null
try{v=this.A0(d)}catch(s){u=A.ac(s)
t=A.aR(s)
w.$2(u,t)
return}v.bb(new B.al3(r,this,e,w),x.H).oD(w)},
Al(d,e,f,g){var w,v
if(e.a!=null){w=$.mJ.uS$
w===$&&A.b()
w.a7b(0,f,new B.al5(e),g)
return}w=$.mJ.uS$
w===$&&A.b()
v=w.a7b(0,f,new B.al6(this,f),g)
if(v!=null)e.Sr(v)},
vb(d,e){return B.b31()},
vc(d,e){return B.b31()},
j(d){return"ImageConfiguration()"}}
B.Kd.prototype={}
B.aAG.prototype={
K(){return"WebHtmlElementStrategy."+this.b}}
B.mF.prototype={
A0(d){return new A.dG(this,x.c)},
vb(d,e){return B.VH(this.kS(d,e),"MemoryImage("+("<optimized out>#"+A.bg(d.a))+")",null,d.b)},
vc(d,e){return B.VH(this.kS(d,e),"MemoryImage("+("<optimized out>#"+A.bg(d.a))+")",null,d.b)},
kS(d,e){return this.ar8(d,e)},
ar8(d,e){var w=0,v=A.B(x.p),u,t=this,s
var $async$kS=A.x(function(f,g){if(f===1)return A.y(g,v)
while(true)switch(w){case 0:s=e
w=3
return A.u(A.Ul(t.a),$async$kS)
case 3:u=s.$1(g)
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$kS,v)},
k(d,e){if(e==null)return!1
if(J.a2(e)!==A.C(this))return!1
return e instanceof B.mF&&e.a===this.a&&e.b===this.b},
gC(d){return A.a_(A.f0(this.a),this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"MemoryImage("+("<optimized out>#"+A.bg(this.a))+", scale: "+C.i.ap(this.b,1)+")"}}
B.a2t.prototype={}
B.zh.prototype={
j(d){return this.b},
$ic9:1}
B.ff.prototype={
NK(d){var w=this.a,v=w.b
v===$&&A.b()
return new B.ff(A.RH(v,w.c),this.b,this.c)},
zy(d){var w
if(d.gd9(d).zy(this.a)){w=this.b
w=w===w&&d.gjJ()==this.c}else w=!1
return w},
gSJ(){var w=this.a,v=w.b
v===$&&A.b()
v=v.a
v===$&&A.b()
v=J.aD(v.a.height())
w=w.b.a
w===$&&A.b()
return v*J.aD(w.a.width())*4},
l(){this.a.l()},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+A.kS(this.b)+"x"},
gC(d){return A.a_(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.a2(e)!==A.C(w))return!1
return x.J.b(e)&&e.gd9(e)===w.a&&e.gd5(e)===w.b&&e.gjJ()==w.c},
gd9(d){return this.a},
gd5(d){return this.b},
gjJ(){return this.c}}
B.ale.prototype={
Sr(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.ai(w,d.gE3(d))
v.a.f=!1}},
Z(d,e){var w=this.a
if(w!=null)return w.Z(0,e)
w=this.b;(w==null?this.b=A.c([],x.v):w).push(e)},
I(d,e){var w,v=this.a
if(v!=null)return v.I(0,e)
for(w=0;v=this.b,w<v.length;++w)if(v[w].k(0,e)){v=this.b
v.toString
C.b.hf(v,w)
break}}}
B.Uj.prototype={
agx(d){++this.a.r},
l(){var w=this.a;--w.r
w.xd()
this.a=null}}
B.hc.prototype={
Z(d,e){var w,v,u,t,s,r,q=this
if(q.w)A.a1(A.a6(y.a))
q.a.push(e)
s=q.c
if(s!=null)try{e.a.$2(s.NK(0),!q.f)}catch(r){w=A.ac(r)
v=A.aR(r)
q.a7B(A.bS("by a synchronously-called image listener"),w,v)}s=q.d
if(s!=null&&e.c!=null)try{e.c.$2(s.a,s.b)}catch(w){u=A.ac(w)
t=A.aR(w)
if(!J.f(u,q.d.a))A.e1(new A.cl(u,t,"image resource service",A.bS("by a synchronously-called image error listener"),null,!1))}},
PX(){if(this.w)A.a1(A.a6(y.a));++this.r
return new B.Uj(this)},
I(d,e){var w,v,u,t,s,r=this
if(r.w)A.a1(A.a6(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].k(0,e)){C.b.hf(w,v)
break}if(w.length===0){w=r.x
u=A.c(w.slice(0),A.a5(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.R)(u),++s)u[s].$0()
C.b.S(w)
r.xd()}},
Qo(){},
xd(){var w,v=this
if(v.w||v.a.length!==0||v.r!==0)return
C.b.S(v.b)
w=v.c
if(w!=null)w.l()
v.c=null
v.w=!0
v.Qo()},
azj(d){if(this.w)A.a1(A.a6(y.a))
this.x.push(d)},
a7r(d){if(this.w)A.a1(A.a6(y.a))
C.b.F(this.x,d)},
Ig(d){var w,v,u,t,s,r,q,p=this
if(p.w)A.a1(A.a6(y.a))
t=p.c
if(t!=null)t.l()
p.c=d
C.b.S(p.b)
t=p.a
if(t.length===0)return
s=A.a8(t,x.y)
for(t=s.length,r=0;r<s.length;s.length===t||(0,A.R)(s),++r){w=s[r]
try{w.aIl(d.NK(0),!1)}catch(q){v=A.ac(q)
u=A.aR(q)
p.a7B(A.bS("by an image listener"),v,u)}}},
rP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.cl(e,h,l,d,f,g)
s=m.a
s=A.a8(new A.d4(new A.ak(s,new B.alf(),A.a5(s).i("ak<1,~(J,dg?)?>")),x.I),x.d)
r=m.b
C.b.V(s,r)
C.b.S(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.ac(p)
t=A.aR(p)
if(!J.f(u,e)){o=A.bS("when reporting an error to an image listener")
n=$.l9
if(n!=null)n.$1(new A.cl(u,t,l,o,null,!1))}}}if(!w){s=m.d
s.toString
A.e1(s)}},
a7B(d,e,f){return this.rP(d,e,null,!1,f)},
aKK(d,e){return this.rP(null,d,null,!1,e)},
aKL(d){var w,v,u,t
if(this.w)A.a1(A.a6(y.a))
w=this.a
if(w.length!==0){v=x.S
u=A.a8(new A.d4(new A.ak(w,new B.alg(),A.a5(w).i("ak<1,~(yF)?>")),v),v.i("r.E"))
for(w=u.length,t=0;t<u.length;u.length===w||(0,A.R)(u),++t)u[t].$1(d)}}}
B.W5.prototype={
agD(d,e){d.fe(this.gaaE(),new B.arh(this,e),x.H)}}
B.GB.prototype={
agC(d,e,f,g,h){this.e=f
e.fe(this.gan3(),new B.aqk(this,g),x.H)},
an4(d){this.z=d
if(this.a.length!==0)this.tr()},
amR(d){var w,v,u,t=this
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){v=t.ax
v===$&&A.b()
v=d.a-v.a>=w.a}else v=!0
if(v){w=t.at
w=w.gd9(w)
v=w.b
v===$&&A.b()
t.Wl(new B.ff(A.RH(v,w.c),t.Q,t.e))
t.ax=d
w=t.at
t.ay=w.gyN(w)
w=t.at
w.gd9(w).l()
t.at=null
w=t.z
if(w==null)return
u=C.i.iL(t.ch,w.grf())
if(t.z.gvy()===-1||u<=t.z.gvy()){t.tr()
return}t.z.l()
t.z=null
return}v=t.ax
v===$&&A.b()
t.CW=A.ch(new A.b_(C.i.aK(w.a-(d.a-v.a))),new B.aqj(t))},
tr(){var w=0,v=A.B(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$tr=A.x(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:m=r.at
if(m!=null)m.gd9(m).l()
r.at=null
t=4
w=7
return A.u(r.z.hP(),$async$tr)
case 7:r.at=e
t=2
w=6
break
case 4:t=3
l=s.pop()
q=A.ac(l)
p=A.aR(l)
r.rP(A.bS("resolving an image frame"),q,r.as,!0,p)
w=1
break
w=6
break
case 3:w=2
break
case 6:m=r.z
if(m==null){w=1
break}if(m.grf()===1){if(r.a.length===0){w=1
break}m=r.at
m=m.gd9(m)
n=m.b
n===$&&A.b()
r.Wl(new B.ff(A.RH(n,m.c),r.Q,r.e))
m=r.at
m.gd9(m).l()
r.at=null
m=r.z
if(m!=null)m.l()
r.z=null
w=1
break}r.ZW()
case 1:return A.z(u,v)
case 2:return A.y(s.at(-1),v)}})
return A.A($async$tr,v)},
ZW(){if(this.cx)return
this.cx=!0
$.bV.AW(this.gamQ())},
Wl(d){this.Ig(d);++this.ch},
Z(d,e){var w,v=this,u=!1
if(v.a.length===0){w=v.z
if(w!=null)u=v.c==null||w.grf()>1}if(u)v.tr()
v.aco(0,e)},
I(d,e){var w,v=this
v.acq(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.aO(0)
v.CW=null}},
xd(){var w,v=this
v.acn()
if(v.w){v.y=null
w=v.z
if(w!=null)w.l()
v.z=null}}}
B.a3f.prototype={}
B.a3e.prototype={}
var z=a.updateTypes(["~(fg)","~(ff,K)","~(ff)","~(fw)","~(b_)"])
B.aqN.prototype={
$0(){var w=0,v=A.B(x.R),u,t=this,s,r,q
var $async$$0=A.x(function(d,e){if(d===1)return A.y(e,v)
while(true)switch(w){case 0:s=t.c
r=B
q=A
w=3
return A.u(t.a.wN(t.b),$async$$0)
case 3:u=r.VH(q.d0(e,x.p),s.a,null,s.b)
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$$0,v)},
$S:246}
B.aqO.prototype={
$0(){var w=0,v=A.B(x.R),u,t=this,s,r,q
var $async$$0=A.x(function(d,e){if(d===1)return A.y(e,v)
while(true)switch(w){case 0:r=B.bkq()
q=t.b.a
r.src=q
w=3
return A.u(A.fq(r.decode(),x.X),$async$$0)
case 3:s=B.bet(A.d0(new B.wm(r,q),x.J),null)
s.e=q
u=s
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$$0,v)},
$S:246}
B.aqL.prototype={
$1(d){var w=this.a,v=w.status,u=v>=200&&v<300,t=v>307&&v<400,s=u||v===0||v===304||t,r=this.b
if(s)r.cp(0,w)
else r.j2(new B.zh("HTTP request failed, statusCode: "+A.m(v)+", "+this.c.j(0)))},
$S:24}
B.aqM.prototype={
$1(d){return this.a.j2(new B.zh("HTTP request failed, statusCode: "+A.m(this.b.status)+", "+this.c.j(0)))},
$S:2}
B.aGz.prototype={
$1(d){var w=this.a
w.z=!0
if(w.as){d.xd()
return}w.Q!==$&&A.bI()
w.Q=d
d.Z(0,w.ga6b(0))},
$S:644}
B.aGA.prototype={
$2(d,e){this.a.rP(A.bS("resolving an image stream completer"),d,this.b,!0,e)},
$S:27}
B.aGB.prototype={
$2(d,e){this.a.Ig(d)},
$S:127}
B.aGC.prototype={
$1(d){this.a.aKL(d)},
$S:231}
B.aGD.prototype={
$2(d,e){this.a.aKK(d,e)},
$S:226}
B.al7.prototype={
$2(d,e){this.a.Al(this.b,this.c,d,e)},
$S(){return A.p(this.a).i("~(fS.T,~(J,dg?))")}}
B.al8.prototype={
$3(d,e,f){return this.a8B(d,e,f)},
a8B(d,e,f){var w=0,v=A.B(x.H),u=this,t
var $async$$3=A.x(function(g,h){if(g===1)return A.y(h,v)
while(true)switch(w){case 0:t=A.k0(null,x.P)
w=2
return A.u(t,$async$$3)
case 2:t=u.b
if(t.a==null)t.Sr(new B.a2t(A.c([],x.v),A.c([],x.l),A.c([],x.u)))
t=t.a
t.toString
t.rP(A.bS("while resolving an image"),e,null,!0,f)
return A.z(null,v)}})
return A.A($async$$3,v)},
$S(){return A.p(this.a).i("ae<~>(fS.T?,J,dg?)")}}
B.al4.prototype={
a8A(d,e){var w=0,v=A.B(x.H),u,t=this,s
var $async$$2=A.x(function(f,g){if(f===1)return A.y(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}s.b=!0
t.b.$3(s.a,d,e)
case 1:return A.z(u,v)}})
return A.A($async$$2,v)},
$2(d,e){return this.a8A(d,e)},
$S:645}
B.al3.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=A.ac(u)
v=A.aR(u)
t.d.$2(w,v)}},
$S(){return A.p(this.b).i("aT(fS.T)")}}
B.al5.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:247}
B.al6.prototype={
$0(){var w=this.a,v=this.b,u=w.vc(v,$.mJ.gaGl())
return u instanceof B.Kd?w.vb(v,$.mJ.gaGj()):u},
$S:247}
B.alf.prototype={
$1(d){return d.c},
$S:647}
B.alg.prototype={
$1(d){return d.b},
$S:648}
B.arh.prototype={
$2(d,e){this.a.rP(A.bS("resolving a single-frame image stream"),d,this.b,!0,e)},
$S:27}
B.aqk.prototype={
$2(d,e){this.a.rP(A.bS("resolving an image codec"),d,this.b,!0,e)},
$S:27}
B.aqj.prototype={
$0(){this.a.ZW()},
$S:0}
B.apD.prototype={
$1(d){return A.uV(this.a,A.bN(d,null,x.w).w.O5(C.aJ))},
$S:245};(function aliases(){var w=B.hc.prototype
w.aco=w.Z
w.acq=w.I
w.acp=w.Qo
w.acn=w.xd})();(function installTearOffs(){var w=a._instance_2u,v=a._instance_1i,u=a._instance_1u
w(B.a1x.prototype,"gXv","anS",1)
var t
v(t=B.hc.prototype,"gE3","Z",0)
u(t,"gaaE","Ig",2)
u(t=B.GB.prototype,"gan3","an4",3)
u(t,"gamQ","amR",4)
v(t,"gE3","Z",0)})();(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.RE,A.ad)
u(A.J,[B.fS,B.a3e,B.wm,B.To,B.y5,B.a1x,B.zh,B.ff,B.a3f,B.Uj])
u(B.fS,[B.hD,B.mF])
u(A.fQ,[B.aqN,B.aqO,B.al5,B.al6,B.aqj])
u(A.dQ,[B.aqL,B.aqM,B.aGz,B.aGC,B.al8,B.al3,B.alf,B.alg,B.apD])
v(B.hc,B.a3e)
u(B.hc,[B.a2V,B.Kd,B.a2t,B.W5,B.GB])
u(A.ha,[B.aGA,B.aGB,B.aGD,B.al7,B.al4,B.arh,B.aqk])
u(A.kJ,[B.DC,B.yG,B.aAG])
v(B.ale,B.a3f)
w(B.a3f,A.as)
w(B.a3e,A.as)})()
A.f7(b.typeUniverse,JSON.parse('{"RE":{"ad":[],"h":[]},"hD":{"fS":["aVP"],"fS.T":"aVP"},"a2V":{"hc":[]},"wm":{"ff":[]},"aVP":{"fS":["aVP"]},"mF":{"fS":["mF"],"fS.T":"mF"},"Kd":{"hc":[]},"a2t":{"hc":[]},"zh":{"c9":[]},"W5":{"hc":[]},"GB":{"hc":[]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=A.a0
return{p:w("fw"),U:w("y5"),J:w("ff"),R:w("hc"),y:w("fg"),v:w("q<fg>"),T:w("q<N>"),s:w("q<l>"),u:w("q<~()>"),l:w("q<~(J,dg?)>"),w:w("fi"),a:w("mG"),P:w("aT"),c:w("dG<mF>"),i:w("dG<hD>"),I:w("d4<~(J,dg?)>"),S:w("d4<~(yF)>"),x:w("aG<W>"),Z:w("a3<W>"),X:w("J?"),H:w("~"),d:w("~(J,dg?)")}})();(function constants(){D.m3=new B.DC(1,"contain")
D.m4=new B.DC(2,"cover")
D.m5=new B.DC(6,"scaleDown")
D.Sg=new B.To(C.I,C.I)
D.TU=new B.yG(0,"repeat")
D.TV=new B.yG(1,"repeatX")
D.TW=new B.yG(2,"repeatY")
D.db=new B.yG(3,"noRepeat")
D.cB=new B.aAG(0,"never")})()};
(a=>{a["nuEsipQtEWl3Yv8RuboqP0jFjq8="]=a.current})($__dart_deferred_initializers__);