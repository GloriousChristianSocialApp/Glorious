((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
nU(d,e,f,g){return new B.RE(f,d,e,g,null)},
RE:function RE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.f=f
_.y=g
_.a=h},
bkr(){return new b.G.XMLHttpRequest()},
bku(){return b.G.document.createElement("img")},
b3m(d,e,f){var w=new B.a2U(d,A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.agT(d,e,f)
return w},
hD:function hD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aqM:function aqM(d,e,f){this.a=d
this.b=e
this.c=f},
aqN:function aqN(d,e){this.a=d
this.b=e},
aqK:function aqK(d,e,f){this.a=d
this.b=e
this.c=f},
aqL:function aqL(d,e,f){this.a=d
this.b=e
this.c=f},
a2U:function a2U(d,e,f,g){var _=this
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
aGy:function aGy(d){this.a=d},
aGz:function aGz(d,e){this.a=d
this.b=e},
aGA:function aGA(d){this.a=d},
aGB:function aGB(d){this.a=d},
aGC:function aGC(d){this.a=d},
wn:function wn(d,e){this.a=d
this.b=e},
b59(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.Se
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
bbx(d,e,f){return new B.y6(e,f,d)},
b5U(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
r=J.aE(r.a.width())
q=a9.b.a
q===$&&A.b()
q=J.aE(q.a.height())
if(a7==null)a7=D.m5
p=B.b59(a7,new A.H(r,q).dN(0,b5),s)
o=p.a.ac(0,b5)
n=p.b
if(b4!==D.de&&n.k(0,s))b4=D.de
$.ar()
m=A.bu()
m.f=!1
if(a4!=null)m.suA(a4)
m.r=A.aZT(0,0,0,A.L(b2,0,1)).gq(0)
m.Q=a6
m.spb(b0)
m.a=a1
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=a0.a
t=w+(k+(a8?-t:t)*k)
u+=i+a0.b*i
h=new A.N(t,u,t+l,u+j)
g=b4!==D.de||a8
if(g)J.aE(a2.a.a.save())
u=b4===D.de
if(!u)a2.a.a.clipRect(A.dV(b3),$.pC()[1],!0)
if(a8){f=-(w+v/2)
w=a2.a.a
w.translate(-f,0)
w.scale(-1,1)
w.translate(f,0)}e=a0.aGh(o,new A.N(0,0,r,q))
if(u)a2.a.yP(a9,e,h,m)
else for(w=B.bkb(b3,h,b4),v=w.length,u=a2.a,d=0;d<w.length;w.length===v||(0,A.R)(w),++d)u.yP(a9,e,w[d],m)
if(g)a2.a.a.restore()},
bkb(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==D.TR
if(!k||f===D.TS){w=C.d.eN((d.a-p)/o)
v=C.d.l3((d.c-q)/o)}else{w=0
v=0}if(!k||f===D.TT){u=C.d.eN((d.b-m)/l)
t=C.d.l3((d.d-n)/l)}else{u=0
t=0}q=A.c([],x.T)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.dw(new A.j(p,r*l)))
return q},
yH:function yH(d,e){this.a=d
this.b=e},
y6:function y6(d,e,f){this.a=d
this.b=e
this.d=f},
a1w:function a1w(d,e){var _=this
_.a=d
_.b=e
_.d=_.c=null},
b35(){return new B.Kd(A.c([],x.v),A.c([],x.l),A.c([],x.u))},
ber(d,e){return new B.zi("HTTP request failed, statusCode: "+d+", "+e.j(0))},
fS:function fS(){},
al6:function al6(d,e,f){this.a=d
this.b=e
this.c=f},
al7:function al7(d,e){this.a=d
this.b=e},
al3:function al3(d,e){this.a=d
this.b=e},
al2:function al2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
al4:function al4(d){this.a=d},
al5:function al5(d,e){this.a=d
this.b=e},
Kd:function Kd(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
aAF:function aAF(d,e){this.a=d
this.b=e},
mI:function mI(d,e){this.a=d
this.b=e},
a2s:function a2s(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
zi:function zi(d){this.b=d},
bex(d,e){var w=new B.W4(A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.agG(d,e)
return w},
VG(d,e,f,g){var w=new B.GB(g,f,A.c([],x.v),A.c([],x.l),A.c([],x.u))
w.agF(null,d,e,f,g)
return w},
ff:function ff(d,e,f){this.a=d
this.b=e
this.c=f},
ald:function ald(){this.b=this.a=null},
Uj:function Uj(d){this.a=d},
hc:function hc(){},
ale:function ale(){},
alf:function alf(){},
W4:function W4(d,e,f){var _=this
_.a=d
_.b=e
_.e=_.d=_.c=null
_.f=!1
_.r=0
_.w=!1
_.x=f},
arg:function arg(d,e){this.a=d
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
aqj:function aqj(d,e){this.a=d
this.b=e},
aqi:function aqi(d){this.a=d},
a3e:function a3e(){},
a3d:function a3d(){},
be_(d){return new A.eV(new B.apC(d),null)},
apC:function apC(d){this.a=d}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[19],B)
D=c[30]
B.RE.prototype={
garL(){var w=this.y
if(w==null)return 40
return 2*(w==null?0:w)},
garw(){var w=this.y
if(w==null)return 40
return 2*(w==null?1/0:w)},
G(d){var w,v,u,t,s,r,q=this,p=null,o=A.o(d),n=p,m=o.ax,l=m.e
m=l==null?m.c:l
n=m
w=o.ok.w.b_(n)
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
switch(A.JD(v).a){case 0:m=w.b_(o.fr)
break
case 1:m=w.b_(o.dy)
break
default:m=p}w=m}v=u}t=q.garL()
s=q.garw()
m=q.f
m=m!=null?B.bbx(D.m4,m,p):p
l=q.c
if(l==null)l=p
else{r=o.k2.b_(w.b)
r=A.cq(B.be_(A.mv(A.iG(l,p,p,C.bV,!0,w,p,p,C.aH),r,p)),p,p)
l=r}return A.QE(l,new A.aa(t,s,t,s),new A.bA(v,m,p,p,p,p,C.iY),C.M,p,p,p)}}
B.hD.prototype={
A4(d){return new A.dI(this,x.i)},
ve(d,e){return B.b3m(this.wo(d,e),d.a,null)},
vf(d,e){return B.b3m(this.wo(d,e),d.a,null)},
wo(d,e){return this.ard(d,e)},
ard(d,e){var w=0,v=A.B(x.R),u,t=2,s=[],r=this,q,p,o,n,m
var $async$wo=A.w(function(f,g){if(f===1){s.push(g)
w=t}while(true)switch(w){case 0:o=new B.aqM(r,e,d)
n=new B.aqN(r,d)
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
return A.u(o.$0(),$async$wo)
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
return A.A($async$wo,v)},
wR(d){var w=0,v=A.B(x.p),u,t=this,s,r,q,p,o,n,m
var $async$wR=A.w(function(e,f){if(e===1)return A.y(f,v)
while(true)switch(w){case 0:r=t.a
q=A.aA_().X(r)
p=new A.a3($.af,x.Z)
o=new A.aG(p,x.x)
n=B.bkr()
n.open("GET",r,!0)
n.responseType="arraybuffer"
n.addEventListener("load",A.eR(new B.aqK(n,o,q)))
n.addEventListener("error",A.eR(new B.aqL(o,n,q)))
n.send()
w=3
return A.u(p,$async$wR)
case 3:r=n.response
r.toString
s=A.VM(x.a.a(r),0,null)
if(s.byteLength===0)throw A.i(B.ber(A.V(n,"status"),q))
m=d
w=4
return A.u(A.Ul(s),$async$wR)
case 4:u=m.$1(f)
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$wR,v)},
k(d,e){if(e==null)return!1
if(J.a2(e)!==A.C(this))return!1
return e instanceof B.hD&&e.a===this.a&&e.b===this.b},
gC(d){return A.a_(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return'NetworkImage("'+this.a+'", scale: '+C.i.ap(this.b,1)+")"}}
B.a2U.prototype={
agT(d,e,f){var w=this
w.e=e
w.y.fd(new B.aGy(w),new B.aGz(w,f),x.P)},
ga6e(d){var w=this,v=w.at
return v===$?w.at=new A.fg(new B.aGA(w),new B.aGB(w),new B.aGC(w)):v},
Qr(){var w,v=this
if(v.z){w=v.Q
w===$&&A.b()
w.I(0,v.ga6e(0))}v.as=!0
v.acs()}}
B.wn.prototype={
NP(d){return new B.wn(this.a,this.b)},
l(){},
gd9(d){return A.a1(A.aq("Could not create image data for this image because access to it is restricted by the Same-Origin Policy.\nSee https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"))},
zC(d){if(!(d instanceof B.wn))return!1
return J.f(d.a,this.a)&&d.b===this.b},
gd5(d){return 1},
gSM(){var w=this.a
return C.d.fo(4*w.naturalWidth*w.naturalHeight)},
$iff:1,
gjI(){return this.b}}
B.DC.prototype={
L(){return"BoxFit."+this.b}}
B.To.prototype={}
B.yH.prototype={
L(){return"ImageRepeat."+this.b}}
B.y6.prototype={
yx(d){return new B.a1w(this,d)},
k(d,e){var w,v=this
if(e==null)return!1
if(v===e)return!0
if(J.a2(e)!==A.C(v))return!1
w=!1
if(x.U.b(e))if(e.gd9(e).k(0,v.a)){e.guA()
if(e.gkw()==v.d)if(e.geB().k(0,C.V)){e.gur()
if(e.gvA(e)===D.de){e.gph()
if(e.gd5(e)===1)if(e.gcV(e)===1){w=e.gnj()===C.bP
if(w){e.gpb()
e.gv7()}}}}}return w},
gC(d){return A.a_(this.a,null,this.d,C.V,null,D.de,!1,1,1,C.bP,!1,!1,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){var w=A.c([this.a.j(0)],x.s),v=this.d,u=!1
if(v!=null)u=v!==D.m5
if(u)w.push(v.j(0))
w.push(C.V.j(0))
w.push("scale "+C.i.ap(1,1))
w.push("opacity "+C.i.ap(1,1))
w.push(C.bP.j(0))
return"DecorationImage("+C.b.bl(w,", ")+")"},
gd9(d){return this.a},
guA(){return null},
gkw(){return this.d},
geB(){return C.V},
gur(){return null},
gvA(){return D.de},
gph(){return!1},
gd5(){return 1},
gcV(){return 1},
gnj(){return C.bP},
gpb(){return!1},
gv7(){return!1}}
B.a1w.prototype={
Aa(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a,p=q.a.X(g),o=p.a
if(o==null)o=p
w=s.c
v=w==null
if(v)u=r
else{u=w.a
if(u==null)u=w}if(o!==u){t=new A.fg(s.gXy(),r,q.b)
if(!v)w.I(0,t)
s.c=p
p.a_(0,t)}if(s.d==null)return
o=f!=null
if(o){w=d.a.a
J.aE(w.save())
v=f.geK().a
v===$&&A.b()
v=v.a
v.toString
w.clipPath(v,$.m5(),!0)}w=s.d
w=w.gd9(w)
v=s.d.gjI()
u=s.d
B.b5U(C.V,i,d,r,r,v,C.bP,q.d,!1,w,!1,!1,h,e,D.de,u.gd5(u))
if(o)d.a.a.restore()},
rG(d,e,f,g){return this.Aa(d,e,f,g,1,C.cG)},
anV(d,e){var w,v=this
if(J.f(v.d,d))return
w=v.d
if(w!=null&&w.zC(d)){d.l()
return}w=v.d
if(w!=null)w.l()
v.d=d
if(!e)v.b.$0()},
l(){var w=this,v=w.c
if(v!=null)v.I(0,new A.fg(w.gXy(),null,w.a.b))
v=w.d
if(v!=null)v.l()
w.d=null},
j(d){return"DecorationImagePainter(stream: "+A.m(this.c)+", image: "+A.m(this.d)+") for "+this.a.j(0)}}
B.fS.prototype={
X(d){var w=new B.ald()
this.ajR(d,new B.al6(this,d,w),new B.al7(this,w))
return w},
ajR(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new B.al3(r,f)
v=null
try{v=this.A4(d)}catch(s){u=A.ac(s)
t=A.aR(s)
w.$2(u,t)
return}v.bb(new B.al2(r,this,e,w),x.H).oF(w)},
Ap(d,e,f,g){var w,v
if(e.a!=null){w=$.mM.uV$
w===$&&A.b()
w.a7e(0,f,new B.al4(e),g)
return}w=$.mM.uV$
w===$&&A.b()
v=w.a7e(0,f,new B.al5(this,f),g)
if(v!=null)e.Su(v)},
ve(d,e){return B.b35()},
vf(d,e){return B.b35()},
j(d){return"ImageConfiguration()"}}
B.Kd.prototype={}
B.aAF.prototype={
L(){return"WebHtmlElementStrategy."+this.b}}
B.mI.prototype={
A4(d){return new A.dI(this,x.c)},
ve(d,e){return B.VG(this.kS(d,e),"MemoryImage("+("<optimized out>#"+A.bk(d.a))+")",null,d.b)},
vf(d,e){return B.VG(this.kS(d,e),"MemoryImage("+("<optimized out>#"+A.bk(d.a))+")",null,d.b)},
kS(d,e){return this.arb(d,e)},
arb(d,e){var w=0,v=A.B(x.p),u,t=this,s
var $async$kS=A.w(function(f,g){if(f===1)return A.y(g,v)
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
return e instanceof B.mI&&e.a===this.a&&e.b===this.b},
gC(d){return A.a_(A.f1(this.a),this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"MemoryImage("+("<optimized out>#"+A.bk(this.a))+", scale: "+C.i.ap(this.b,1)+")"}}
B.a2s.prototype={}
B.zi.prototype={
j(d){return this.b},
$ica:1}
B.ff.prototype={
NP(d){var w=this.a,v=w.b
v===$&&A.b()
return new B.ff(A.RH(v,w.c),this.b,this.c)},
zC(d){var w
if(d.gd9(d).zC(this.a)){w=this.b
w=w===w&&d.gjI()==this.c}else w=!1
return w},
gSM(){var w=this.a,v=w.b
v===$&&A.b()
v=v.a
v===$&&A.b()
v=J.aE(v.a.height())
w=w.b.a
w===$&&A.b()
return v*J.aE(w.a.width())*4},
l(){this.a.l()},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+A.kS(this.b)+"x"},
gC(d){return A.a_(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var w=this
if(e==null)return!1
if(J.a2(e)!==A.C(w))return!1
return x.J.b(e)&&e.gd9(e)===w.a&&e.gd5(e)===w.b&&e.gjI()==w.c},
gd9(d){return this.a},
gd5(d){return this.b},
gjI(){return this.c}}
B.ald.prototype={
Su(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.ai(w,d.gE7(d))
v.a.f=!1}},
a_(d,e){var w=this.a
if(w!=null)return w.a_(0,e)
w=this.b;(w==null?this.b=A.c([],x.v):w).push(e)},
I(d,e){var w,v=this.a
if(v!=null)return v.I(0,e)
for(w=0;v=this.b,w<v.length;++w)if(v[w].k(0,e)){v=this.b
v.toString
C.b.hf(v,w)
break}}}
B.Uj.prototype={
agA(d){++this.a.r},
l(){var w=this.a;--w.r
w.xg()
this.a=null}}
B.hc.prototype={
a_(d,e){var w,v,u,t,s,r,q=this
if(q.w)A.a1(A.a6(y.a))
q.a.push(e)
s=q.c
if(s!=null)try{e.a.$2(s.NP(0),!q.f)}catch(r){w=A.ac(r)
v=A.aR(r)
q.a7E(A.bS("by a synchronously-called image listener"),w,v)}s=q.d
if(s!=null&&e.c!=null)try{e.c.$2(s.a,s.b)}catch(w){u=A.ac(w)
t=A.aR(w)
if(!J.f(u,q.d.a))A.e2(new A.cm(u,t,"image resource service",A.bS("by a synchronously-called image error listener"),null,!1))}},
Q_(){if(this.w)A.a1(A.a6(y.a));++this.r
return new B.Uj(this)},
I(d,e){var w,v,u,t,s,r=this
if(r.w)A.a1(A.a6(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].k(0,e)){C.b.hf(w,v)
break}if(w.length===0){w=r.x
u=A.c(w.slice(0),A.a5(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.R)(u),++s)u[s].$0()
C.b.S(w)
r.xg()}},
Qr(){},
xg(){var w,v=this
if(v.w||v.a.length!==0||v.r!==0)return
C.b.S(v.b)
w=v.c
if(w!=null)w.l()
v.c=null
v.w=!0
v.Qr()},
azm(d){if(this.w)A.a1(A.a6(y.a))
this.x.push(d)},
a7u(d){if(this.w)A.a1(A.a6(y.a))
C.b.F(this.x,d)},
Il(d){var w,v,u,t,s,r,q,p=this
if(p.w)A.a1(A.a6(y.a))
t=p.c
if(t!=null)t.l()
p.c=d
C.b.S(p.b)
t=p.a
if(t.length===0)return
s=A.a8(t,x.y)
for(t=s.length,r=0;r<s.length;s.length===t||(0,A.R)(s),++r){w=s[r]
try{w.aIp(d.NP(0),!1)}catch(q){v=A.ac(q)
u=A.aR(q)
p.a7E(A.bS("by an image listener"),v,u)}}},
rS(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.cm(e,h,l,d,f,g)
s=m.a
s=A.a8(new A.d5(new A.al(s,new B.ale(),A.a5(s).i("al<1,~(J,dh?)?>")),x.I),x.d)
r=m.b
C.b.V(s,r)
C.b.S(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.R)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.ac(p)
t=A.aR(p)
if(!J.f(u,e)){o=A.bS("when reporting an error to an image listener")
n=$.la
if(n!=null)n.$1(new A.cm(u,t,l,o,null,!1))}}}if(!w){s=m.d
s.toString
A.e2(s)}},
a7E(d,e,f){return this.rS(d,e,null,!1,f)},
aKO(d,e){return this.rS(null,d,null,!1,e)},
aKP(d){var w,v,u,t
if(this.w)A.a1(A.a6(y.a))
w=this.a
if(w.length!==0){v=x.S
u=A.a8(new A.d5(new A.al(w,new B.alf(),A.a5(w).i("al<1,~(yG)?>")),v),v.i("r.E"))
for(w=u.length,t=0;t<u.length;u.length===w||(0,A.R)(u),++t)u[t].$1(d)}}}
B.W4.prototype={
agG(d,e){d.fd(this.gaaH(),new B.arg(this,e),x.H)}}
B.GB.prototype={
agF(d,e,f,g,h){this.e=f
e.fd(this.gan6(),new B.aqj(this,g),x.H)},
an7(d){this.z=d
if(this.a.length!==0)this.tu()},
amU(d){var w,v,u,t=this
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
t.Wo(new B.ff(A.RH(v,w.c),t.Q,t.e))
t.ax=d
w=t.at
t.ay=w.gyQ(w)
w=t.at
w.gd9(w).l()
t.at=null
w=t.z
if(w==null)return
u=C.i.iK(t.ch,w.gri())
if(t.z.gvB()===-1||u<=t.z.gvB()){t.tu()
return}t.z.l()
t.z=null
return}v=t.ax
v===$&&A.b()
t.CW=A.ch(new A.b6(C.i.aD(w.a-(d.a-v.a))),new B.aqi(t))},
tu(){var w=0,v=A.B(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$tu=A.w(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:m=r.at
if(m!=null)m.gd9(m).l()
r.at=null
t=4
w=7
return A.u(r.z.hP(),$async$tu)
case 7:r.at=e
t=2
w=6
break
case 4:t=3
l=s.pop()
q=A.ac(l)
p=A.aR(l)
r.rS(A.bS("resolving an image frame"),q,r.as,!0,p)
w=1
break
w=6
break
case 3:w=2
break
case 6:m=r.z
if(m==null){w=1
break}if(m.gri()===1){if(r.a.length===0){w=1
break}m=r.at
m=m.gd9(m)
n=m.b
n===$&&A.b()
r.Wo(new B.ff(A.RH(n,m.c),r.Q,r.e))
m=r.at
m.gd9(m).l()
r.at=null
m=r.z
if(m!=null)m.l()
r.z=null
w=1
break}r.ZZ()
case 1:return A.z(u,v)
case 2:return A.y(s.at(-1),v)}})
return A.A($async$tu,v)},
ZZ(){if(this.cx)return
this.cx=!0
$.bX.B_(this.gamT())},
Wo(d){this.Il(d);++this.ch},
a_(d,e){var w,v=this,u=!1
if(v.a.length===0){w=v.z
if(w!=null)u=v.c==null||w.gri()>1}if(u)v.tu()
v.acr(0,e)},
I(d,e){var w,v=this
v.act(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.aO(0)
v.CW=null}},
xg(){var w,v=this
v.acq()
if(v.w){v.y=null
w=v.z
if(w!=null)w.l()
v.z=null}}}
B.a3e.prototype={}
B.a3d.prototype={}
var z=a.updateTypes(["~(fg)","~(ff,K)","~(ff)","~(fy)","~(b6)"])
B.aqM.prototype={
$0(){var w=0,v=A.B(x.R),u,t=this,s,r,q
var $async$$0=A.w(function(d,e){if(d===1)return A.y(e,v)
while(true)switch(w){case 0:s=t.c
r=B
q=A
w=3
return A.u(t.a.wR(t.b),$async$$0)
case 3:u=r.VG(q.d1(e,x.p),s.a,null,s.b)
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$$0,v)},
$S:246}
B.aqN.prototype={
$0(){var w=0,v=A.B(x.R),u,t=this,s,r,q
var $async$$0=A.w(function(d,e){if(d===1)return A.y(e,v)
while(true)switch(w){case 0:r=B.bku()
q=t.b.a
r.src=q
w=3
return A.u(A.fr(r.decode(),x.X),$async$$0)
case 3:s=B.bex(A.d1(new B.wn(r,q),x.J),null)
s.e=q
u=s
w=1
break
case 1:return A.z(u,v)}})
return A.A($async$$0,v)},
$S:246}
B.aqK.prototype={
$1(d){var w=this.a,v=w.status,u=v>=200&&v<300,t=v>307&&v<400,s=u||v===0||v===304||t,r=this.b
if(s)r.cm(0,w)
else r.j1(new B.zi("HTTP request failed, statusCode: "+A.m(v)+", "+this.c.j(0)))},
$S:24}
B.aqL.prototype={
$1(d){return this.a.j1(new B.zi("HTTP request failed, statusCode: "+A.m(this.b.status)+", "+this.c.j(0)))},
$S:2}
B.aGy.prototype={
$1(d){var w=this.a
w.z=!0
if(w.as){d.xg()
return}w.Q!==$&&A.bL()
w.Q=d
d.a_(0,w.ga6e(0))},
$S:645}
B.aGz.prototype={
$2(d,e){this.a.rS(A.bS("resolving an image stream completer"),d,this.b,!0,e)},
$S:27}
B.aGA.prototype={
$2(d,e){this.a.Il(d)},
$S:128}
B.aGB.prototype={
$1(d){this.a.aKP(d)},
$S:232}
B.aGC.prototype={
$2(d,e){this.a.aKO(d,e)},
$S:227}
B.al6.prototype={
$2(d,e){this.a.Ap(this.b,this.c,d,e)},
$S(){return A.p(this.a).i("~(fS.T,~(J,dh?))")}}
B.al7.prototype={
$3(d,e,f){return this.a8E(d,e,f)},
a8E(d,e,f){var w=0,v=A.B(x.H),u=this,t
var $async$$3=A.w(function(g,h){if(g===1)return A.y(h,v)
while(true)switch(w){case 0:t=A.k1(null,x.P)
w=2
return A.u(t,$async$$3)
case 2:t=u.b
if(t.a==null)t.Su(new B.a2s(A.c([],x.v),A.c([],x.l),A.c([],x.u)))
t=t.a
t.toString
t.rS(A.bS("while resolving an image"),e,null,!0,f)
return A.z(null,v)}})
return A.A($async$$3,v)},
$S(){return A.p(this.a).i("ae<~>(fS.T?,J,dh?)")}}
B.al3.prototype={
a8D(d,e){var w=0,v=A.B(x.H),u,t=this,s
var $async$$2=A.w(function(f,g){if(f===1)return A.y(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}s.b=!0
t.b.$3(s.a,d,e)
case 1:return A.z(u,v)}})
return A.A($async$$2,v)},
$2(d,e){return this.a8D(d,e)},
$S:646}
B.al2.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=A.ac(u)
v=A.aR(u)
t.d.$2(w,v)}},
$S(){return A.p(this.b).i("aT(fS.T)")}}
B.al4.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:247}
B.al5.prototype={
$0(){var w=this.a,v=this.b,u=w.vf(v,$.mM.gaGp())
return u instanceof B.Kd?w.ve(v,$.mM.gaGn()):u},
$S:247}
B.ale.prototype={
$1(d){return d.c},
$S:648}
B.alf.prototype={
$1(d){return d.b},
$S:649}
B.arg.prototype={
$2(d,e){this.a.rS(A.bS("resolving a single-frame image stream"),d,this.b,!0,e)},
$S:27}
B.aqj.prototype={
$2(d,e){this.a.rS(A.bS("resolving an image codec"),d,this.b,!0,e)},
$S:27}
B.aqi.prototype={
$0(){this.a.ZZ()},
$S:0}
B.apC.prototype={
$1(d){return A.uX(this.a,A.bP(d,null,x.w).w.Oa(C.aI))},
$S:245};(function aliases(){var w=B.hc.prototype
w.acr=w.a_
w.act=w.I
w.acs=w.Qr
w.acq=w.xg})();(function installTearOffs(){var w=a._instance_2u,v=a._instance_1i,u=a._instance_1u
w(B.a1w.prototype,"gXy","anV",1)
var t
v(t=B.hc.prototype,"gE7","a_",0)
u(t,"gaaH","Il",2)
u(t=B.GB.prototype,"gan6","an7",3)
u(t,"gamT","amU",4)
v(t,"gE7","a_",0)})();(function inheritance(){var w=a.mixin,v=a.inherit,u=a.inheritMany
v(B.RE,A.ad)
u(A.J,[B.fS,B.a3d,B.wn,B.To,B.y6,B.a1w,B.zi,B.ff,B.a3e,B.Uj])
u(B.fS,[B.hD,B.mI])
u(A.fx,[B.aqM,B.aqN,B.al4,B.al5,B.aqi])
u(A.dW,[B.aqK,B.aqL,B.aGy,B.aGB,B.al7,B.al2,B.ale,B.alf,B.apC])
v(B.hc,B.a3d)
u(B.hc,[B.a2U,B.Kd,B.a2s,B.W4,B.GB])
u(A.ha,[B.aGz,B.aGA,B.aGC,B.al6,B.al3,B.arg,B.aqj])
u(A.k0,[B.DC,B.yH,B.aAF])
v(B.ald,B.a3e)
w(B.a3e,A.as)
w(B.a3d,A.as)})()
A.eQ(b.typeUniverse,JSON.parse('{"RE":{"ad":[],"h":[]},"hD":{"fS":["aVT"],"fS.T":"aVT"},"a2U":{"hc":[]},"wn":{"ff":[]},"aVT":{"fS":["aVT"]},"mI":{"fS":["mI"],"fS.T":"mI"},"Kd":{"hc":[]},"a2s":{"hc":[]},"zi":{"ca":[]},"W4":{"hc":[]},"GB":{"hc":[]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=A.a0
return{p:w("fy"),U:w("y6"),J:w("ff"),R:w("hc"),y:w("fg"),v:w("q<fg>"),T:w("q<N>"),s:w("q<l>"),u:w("q<~()>"),l:w("q<~(J,dh?)>"),w:w("fi"),a:w("mJ"),P:w("aT"),c:w("dI<mI>"),i:w("dI<hD>"),I:w("d5<~(J,dh?)>"),S:w("d5<~(yG)>"),x:w("aG<W>"),Z:w("a3<W>"),X:w("J?"),H:w("~"),d:w("~(J,dh?)")}})();(function constants(){D.m3=new B.DC(1,"contain")
D.m4=new B.DC(2,"cover")
D.m5=new B.DC(6,"scaleDown")
D.Se=new B.To(C.K,C.K)
D.TR=new B.yH(0,"repeat")
D.TS=new B.yH(1,"repeatX")
D.TT=new B.yH(2,"repeatY")
D.de=new B.yH(3,"noRepeat")
D.cC=new B.aAF(0,"never")})()};
(a=>{a["vve6hLidQm6n8QO7XNuEvISYHUs="]=a.current})($__dart_deferred_initializers__);