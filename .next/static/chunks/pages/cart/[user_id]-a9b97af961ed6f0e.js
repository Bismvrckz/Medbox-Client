(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8974],{92333:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart/[user_id]",function(){return c(19545)}])},56045:function(a,b,c){"use strict";var d=c(47568),e=c(34051),f=c.n(e),g=c(85893),h=c(67294),i=c(77220),j=c(84221),k=c(87674),l=c(48641),m=c(83234),n=c(57026),o=c(47741);b.Z=function(a){var b=a.isOpen,c=a.onClose,e=a.setSelectedDeliveryCost,p=a.setSelectedCourier,q=(0,h.useState)(""),r=q[0],s=q[1],t=(0,h.useState)(""),u=t[0],v=t[1],w=(0,h.useState)([]),x=w[0],y=w[1],z=(0,j.pm)();(0,h.useEffect)(function(){r&&D()},[r]);var A,B=function(a){s(a.target.value)},C=function(a){v(a.target.value)},D=(A=(0,d.Z)(f().mark(function b(){var c,d,e,g,h;return f().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,c="153",d=a.destination,e=1e3,g=r,b.next=7,i.default.get("rajaongkir/ongkos/".concat(c,"/").concat(d,"/").concat(e,"/").concat(g));case 7:y((h=b.sent).data.rajaongkir.results[0].costs),b.next=14;break;case 11:b.prev=11,b.t0=b.catch(0),console.log(b.t0.message);case 14:case"end":return b.stop()}},b,null,[[0,11]])})),function(){return A.apply(this,arguments)});return(0,g.jsxs)(k.u_,{isOpen:b,onClose:c,children:[(0,g.jsx)(k.ZA,{}),(0,g.jsxs)(k.hz,{backgroundColor:"white",padding:5,maxWidth:600,children:[(0,g.jsx)(k.xB,{fontWeight:600,fontSize:19,children:"Pilih Jenis Pengiriman"}),(0,g.jsx)(k.ol,{}),(0,g.jsx)(k.fe,{children:(0,g.jsxs)(l.gC,{align:"start",fontSize:15,fontWeight:500,children:[(0,g.jsx)(l.gC,{children:(0,g.jsxs)(m.NI,{children:[(0,g.jsx)(m.lX,{fontSize:"sm",children:"Kurir Pengiriman"}),(0,g.jsxs)(n.Ph,{_focusVisible:!0,name:"courier",fontSize:{base:"13",md:"14"},fontWeight:400,placeholder:"Pilih Kurir",variant:"filled",width:510,onChange:B,children:[(0,g.jsx)("option",{value:"jne",children:"JNE"}),(0,g.jsx)("option",{value:"tiki",children:"TIKI"}),(0,g.jsx)("option",{value:"pos",children:"POS Indonesia"})]})]})}),(0,g.jsx)(l.gC,{paddingTop:3,children:(0,g.jsxs)(m.NI,{children:[(0,g.jsx)(m.lX,{fontSize:"sm",children:"Jenis Pengiriman"}),(0,g.jsx)(n.Ph,{_focusVisible:!0,name:"deliveryCost",fontSize:14,fontWeight:400,placeholder:"Pilih Jenis Pengiriman",variant:"filled",width:510,onChange:C,children:x.map(function(a){return(0,g.jsx)("option",{value:"".concat(a.service,",").concat(a.cost[0].value),children:"".concat(a.description," (").concat(a.service,"), Biaya Pengiriman: ").concat(a.cost[0].value)},a.service)})})]})})]})}),(0,g.jsx)(k.mz,{children:(0,g.jsx)(o.zx,{height:9,fontSize:15,fontWeight:500,colorScheme:"messenger",onClick:function(){p(r),e(u),z({description:"Select Delivery Method Success",position:"top",status:"success",duration:3e3,isClosable:!0}),c()},children:"Submit"})})]})]})}},38644:function(a,b,c){"use strict";var d=c(47568),e=c(34051),f=c.n(e),g=c(85893),h=c(3382),i=c(33299),j=c(77220),k=c(48641),l=c(47741),m=c(87674),n=c(67294),o=c(55573);b.Z=function(a){var b,c=a.isOpen,e=a.onClose,p=a.userAllAddress,q=a.chooseAddress,r=(0,n.useState)(p),s=r[0],t=r[1],u=(0,n.useState)(!1),v=u[0],w=u[1],x=(0,n.useState)(""),y=x[0],z=x[1],A=(0,n.useState)(""),B=A[0],C=A[1],D=(0,n.useState)(""),E=D[0],F=D[1],G=(0,n.useState)(""),H=G[0],I=G[1];(0,n.useEffect)(function(){K()},[]),(0,n.useEffect)(function(){},[y,B,E,H,]);var J,K=(b=(0,d.Z)(f().mark(function a(){var b,c,d,e;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,i.getSession)();case 3:if(b=a.sent){a.next=6;break}return a.abrupt("return",{redirect:{destination:"/login"}});case 6:return c=b.user.user_token,d={headers:{Authorization:"Bearer ".concat(c)}},a.next=10,j.default.get("/addresses/useraddresslists",d);case 10:t((e=a.sent).data.data),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(0),console.log({error:a.t0});case 17:case"end":return a.stop()}},a,null,[[0,14]])})),function(){return b.apply(this,arguments)});return(0,g.jsxs)(m.u_,{isOpen:c,onClose:e,children:[(0,g.jsx)(m.ZA,{}),(0,g.jsxs)(m.hz,{backgroundColor:"white",paddingTop:{md:"4"},paddingBottom:{md:"9"},paddingX:{md:"5"},maxWidth:500,children:[(0,g.jsx)(m.xB,{fontWeight:600,fontSize:{base:"16",md:"19"},children:"Pilih Alamat"}),(0,g.jsx)(m.ol,{margin:5}),(0,g.jsx)(m.fe,{children:(0,g.jsx)(k.gC,{children:(J=e,s.map(function(a){return(0,g.jsxs)(k.Ug,{children:[(0,g.jsx)(l.zx,{height:"auto",width:"45",bgColor:"white",_hover:"white",children:(0,g.jsx)(k.xu,{paddingY:2,paddingLeft:2,border:"2px",borderColor:"gray.300",borderRadius:"md",width:390,onClick:function(){q(a),J()},children:(0,g.jsx)(k.Ug,{children:(0,g.jsxs)(k.gC,{align:"start",fontWeight:500,fontSize:13,color:"gray.600",width:320,children:[(0,g.jsxs)(k.xv,{children:["Penerima: ",a.recipient]}),(0,g.jsx)(k.xv,{children:a.addressDetail}),(0,g.jsxs)(k.xv,{children:[a.city_name,", ",a.province,", ",a.postalCode]})]})})},a.address_id)}),(0,g.jsxs)(l.zx,{height:4,width:4,colorScheme:"white",variant:"solid",size:"xxs",onClick:function(){z(a.address_id),C(a.addressDetail),F(a.recipient),I(a.postalCode),w(!0)},children:[(0,g.jsx)(h.dY,{w:4,h:4,color:"#004776",marginRight:6}),(0,g.jsx)(o.Z,{isOpen:v,onClose:function(){return w(!1)},address_id:y,editAddressDetail:B,editRecipient:E,editPostalCode:H,RenderUserAddresses:K})]})]},a.address_id)}))})})]})]})}},19545:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return C},default:function(){return D}});var d=c(47568),e=c(34051),f=c.n(e),g=c(85893),h=c(33299),i=c(67294),j=c(56556),k=c(77220),l=c(39653),m=c(84221),n=c(48641),o=c(43699),p=c(47741),q=c(53749),r=c(25675),s=c.n(r);c(2067);var t=c(20979),u=c(3382),v=c(39499);function w(a){var b,c=a.product,e=a.quantity,j=a.totalPrice,l=a.fetchCarts,n=(0,i.useState)(e),o=n[0],q=n[1],r=(0,m.pm)();j(o);var w,x,y=(b=(0,d.Z)(f().mark(function a(){var b,d,e,g,i,j;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,h.getSession)();case 3:return d=(b=a.sent).user.user_token,e={headers:{Authorization:"Bearer ".concat(d)}},g=c.product_id,a.next=9,k.default.delete("carts/".concat(g),e);case 9:i=a.sent,window.location.reload(),a.next=18;break;case 13:a.prev=13,a.t0=a.catch(0),console.log({error:a.t0}),r({title:"Unexpected Fail!",description:(null===(j=a.t0.response.data)|| void 0===j?void 0:j.message)?a.t0.response.data.message:a.t0.message,position:"top",status:"error",duration:3e3,isClosable:!0});case 18:case"end":return a.stop()}},a,null,[[0,13]])})),function(){return b.apply(this,arguments)}),z=(w=(0,d.Z)(f().mark(function a(){var b,d,e,g,i,j;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=c.product_id,a.prev=1,q(o+1),a.next=5,(0,h.getSession)();case 5:return e=(d=a.sent).user.user_token,g={headers:{Authorization:"Bearer ".concat(e)}},i={quantity:o+1},a.next=11,k.default.patch("carts/patchCart/".concat(b),i,g);case 11:l(),a.next=19;break;case 14:a.prev=14,a.t0=a.catch(1),console.log({error:a.t0}),r({title:"Unexpected Fail!",description:(null===(j=a.t0.response.data)|| void 0===j?void 0:j.message)?a.t0.response.data.message:a.t0.message,position:"top",status:"error",duration:3e3,isClosable:!0});case 19:case"end":return a.stop()}},a,null,[[1,14]])})),function(){return w.apply(this,arguments)}),A=(x=(0,d.Z)(f().mark(function a(){var b,d,e,g,i,m;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=c.product_id,a.prev=1,q(o-1),a.next=5,(0,h.getSession)();case 5:return e=(d=a.sent).user.user_token,g={headers:{Authorization:"Bearer ".concat(e)}},i={quantity:o-1},j(o-1),a.next=12,k.default.patch("carts/patchCart/".concat(b),i,g);case 12:l(),a.next=20;break;case 15:a.prev=15,a.t0=a.catch(1),console.log({error:a.t0}),r({title:"Unexpected Fail!",description:(null===(m=a.t0.response.data)|| void 0===m?void 0:m.message)?a.t0.response.data.message:a.t0.message,position:"top",status:"error",duration:3e3,isClosable:!0});case 20:case"end":return a.stop()}},a,null,[[1,15]])})),function(){return x.apply(this,arguments)});return(0,g.jsxs)("div",{className:"w-[78vH] ml-[8vh] my-[4vh] columns-3 ",children:[(0,g.jsx)(s(),{unoptimized:!0,alt:"resep-logo",width:80,height:80,src:v.api_origin+c.productImage}),(0,g.jsx)("p",{className:"text-[17px] font-[500]",children:c.productName}),(0,g.jsxs)("div",{className:" text-[#6E6E6E] text-[14px] font-[500]",children:["Harga: Rp. ",c.productPrice.toLocaleString("id")]}),(0,g.jsxs)("div",{className:"flex justify-between font-semibold ",children:[e<2?(0,g.jsx)(p.zx,{isDisabled:!0,width:"50px",marginRight:2,onClick:function(){A()},colorScheme:"linkedin",children:"-"}):(0,g.jsx)(p.zx,{width:"50px",marginRight:2,onClick:function(){A()},colorScheme:"linkedin",children:"-"}),(0,g.jsx)(t.II,{htmlSize:4,width:"70px",variant:"outline",value:o}),(0,g.jsx)(p.zx,{width:"50px",marginLeft:2,onClick:function(){z()},colorScheme:"messenger",children:"+"}),(0,g.jsx)(p.zx,{onClick:function(){y()},size:"xl",variant:"ghost",ml:3,children:(0,g.jsx)(u.pJ,{})})]})]})}var x=c(12703),y=c(38644),z=c(25301),A=c(11163),B=c(56045),C=!0,D=function(a){var b=(0,A.useRouter)(),c=(0,i.useState)([]),e=c[0],r=c[1],t=(0,i.useState)(!1),v=t[0],C=t[1],D=(0,i.useState)(a.userAllAddress),E=D[0];D[1];var F=(0,i.useState)(a.defaultAddress),G=F[0],H=F[1],I=(0,i.useState)(),J=I[0],K=I[1],L=(0,i.useState)(),M=L[0],N=L[1],O=(0,i.useState)(!1),P=O[0],Q=O[1],R=(0,i.useState)(!1),S=R[0],T=R[1],U=(0,l.qY)(),V=U.isOpen,W=U.onOpen,X=U.onClose;a.user_id;var Y=(0,i.useState)([]),Z=(Y[0],Y[1]),$=(0,m.pm)();(0,i.useEffect)(function(){ai()},[]),(0,i.useEffect)(function(){ah()},[]);var _,aa,ab,ac,ad,ae,af,ag=function(a){H(a)},ah=(_=(0,d.Z)(f().mark(function a(){var b,c,d,e,g;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,h.getSession)();case 3:if(b=a.sent){a.next=6;break}return a.abrupt("return",{redirect:{destination:"/login"}});case 6:return c=b.user.user_token,d={headers:{Authorization:"Bearer ".concat(c)}},a.next=10,k.default.get("/addresses/userdefaultaddress",d);case 10:H((e=a.sent).data.data),a.next=19;break;case 14:a.prev=14,a.t0=a.catch(0),console.log({error:a.t0}),$({title:"Unexpected Fail!",description:(null===(g=a.t0.response.data)|| void 0===g?void 0:g.message)?a.t0.response.data.message:a.t0.message,position:"top",status:"error",duration:3e3,isClosable:!0});case 19:case"end":return a.stop()}},a,null,[[0,14]])})),function(){return _.apply(this,arguments)}),ai=(aa=(0,d.Z)(f().mark(function b(){var c,d,e,g,i,j;return f().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,b.next=3,(0,h.getSession)();case 3:return c=b.sent,d=a.user_id,e=c.user.user_token,g={headers:{Authorization:"Bearer ".concat(e)}},b.next=9,k.default.get("/carts/getCarts/".concat(d),g);case 9:r((i=b.sent).data.data),i.data.data.length||C(!0),b.next=19;break;case 14:b.prev=14,b.t0=b.catch(0),console.log({error:b.t0}),$({title:"Unexpected Fail!",description:(null===(j=b.t0.response.data)|| void 0===j?void 0:j.message)?b.t0.response.data.message:b.t0.message,position:"top",status:"error",duration:3e3,isClosable:!0});case 19:case"end":return b.stop()}},b,null,[[0,14]])})),function(){return aa.apply(this,arguments)}),aj=function(a){return e.reduce(function(a,b){return a+b.quantity*b.product.productPrice},0)},ak=(ab=(0,d.Z)(f().mark(function c(){var d,e,g,i,j,l,m,n;return f().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,Z(aj()),c.next=4,(0,h.getSession)();case 4:return d=c.sent,e=a.user_id,g=d.user.user_token,i={headers:{Authorization:"Bearer ".concat(g)}},l=parseInt((j=M.split(","))[1]),m={totalPrice:aj(),address_id:G.address_id,courier:J,deliveryCost:l},c.next=13,k.default.post("/transactions/createTransaction/",m,i);case 13:$({description:(n=c.sent).data.message,position:"top",status:"success",duration:3e3,isClosable:!0}),setTimeout(function(){b.replace("/transaction/".concat(e))},1e3),c.next=22;break;case 18:c.prev=18,c.t0=c.catch(0),console.log({error:c.t0}),$({description:"Alamat dan Kurir Tidak Boleh Kosong",position:"top",status:"error",duration:3e3,isClosable:!0});case 22:case"end":return c.stop()}},c,null,[[0,18]])})),function(){return ab.apply(this,arguments)});return(0,g.jsxs)(o.xjn,{theme:x.Z,children:[(0,g.jsx)(j.Z,{}),v?(0,g.jsxs)(n.gC,{marginTop:105,children:[(0,g.jsx)(s(),{src:"/admin/Empty-Transaction.png",width:250,height:250}),(0,g.jsx)(n.xv,{paddingTop:6,fontSize:18,children:"Wah! keranjang anda kosong!"})]}):(0,g.jsxs)(n.Ug,{children:[(0,g.jsxs)(n.gC,{marginLeft:105,width:"110vH",alignSelf:"start",children:[(0,g.jsxs)(n.xu,{width:"110vH",boxShadow:"md",marginTop:5,rounded:"md",padding:6,children:[(0,g.jsx)(n.xv,{fontWeight:600,children:"Alamat Pengiriman"}),G?(0,g.jsxs)(n.gC,{align:"start",marginTop:5,children:[(0,g.jsxs)(n.xv,{fontWeight:500,fontSize:15,color:"gray.600",children:["Penerima: ",G.recipient]}),(0,g.jsx)(n.xv,{fontWeight:500,fontSize:15,color:"gray.600",children:G.addressDetail}),(0,g.jsxs)(n.xv,{fontWeight:500,fontSize:15,color:"gray.600",children:[G.city_name,", ",G.province,","," ",G.postalCode]}),E?(0,g.jsx)(n.gC,{children:(0,g.jsxs)(p.zx,{marginTop:3,bgColor:"white",_hover:"white",size:"xxl",variant:"solid",color:"#1068A3",fontSize:13,onClick:function(){return Q(!0)},children:["Pilih alamat lain",(0,g.jsx)(y.Z,{isOpen:P,onClose:function(){return Q(!1)},userAllAddress:E,chooseAddress:ag,RenderUserAddresses:ah})]})}):null]}):(0,g.jsxs)(n.gC,{align:"start",marginTop:5,children:[(0,g.jsx)(n.xv,{fontWeight:500,fontSize:15,color:"gray.600",children:"Belum ada alamat"}),(0,g.jsx)(n.gC,{align:"start",paddingTop:3,children:(0,g.jsxs)(p.zx,{bgColor:"white",_hover:"white",size:"xxl",variant:"solid",color:"#1068A3",fontSize:13,onClick:W,children:[(0,g.jsx)(u.dt,{w:2.5,h:2.5,color:"#004776"}),(0,g.jsx)(n.xv,{paddingLeft:1.5,paddingTop:.3,children:"Tambahkan Alamat Baru"}),(0,g.jsx)(z.Z,{isOpen:V,onClose:X,RenderUserAddresses:ah})]})})]})]}),(0,g.jsxs)(n.xu,{width:"110vH",boxShadow:"md",rounded:"md",padding:6,children:[(0,g.jsx)(n.xv,{fontWeight:600,children:"Daftar Pesanan"}),e.map(function(b,c){return(0,g.jsx)(w,{product:b.product,quantity:b.quantity,fetchCarts:ai,totalPrice:aj,props:a},b.cart_id)})]})]}),(0,g.jsx)(n.gC,{alignSelf:"start",children:(0,g.jsxs)(n.xu,{width:"57vH",boxShadow:"md",rounded:"md",padding:6,marginLeft:1,marginTop:5,children:[(0,g.jsx)(n.xv,{fontWeight:600,children:"Metode Pengiriman"}),(0,g.jsx)(n.Ug,{marginY:6,children:(0,g.jsxs)(p.zx,{bgColor:"white",_hover:"white",size:"xxl",variant:"solid",color:"#1068A3",fontSize:13,onClick:function(){return T(!0)},children:[(0,g.jsx)(n.xv,{paddingTop:.3,children:"Pilih Metode Pengiriman"}),(0,g.jsx)(B.Z,{isOpen:S,onClose:function(){return T(!1)},destination:null==G?void 0:G.city_id,setSelectedDeliveryCost:N,setSelectedCourier:K})]})}),(0,g.jsx)(n.xv,{fontWeight:600,children:"Ringkasan Pembayaran"}),(0,g.jsxs)(n.Ug,{justifyContent:"space-between",marginTop:6,children:[(0,g.jsx)(n.xv,{fontWeight:500,fontSize:15,color:"gray.600",children:"Sub Total"}),(0,g.jsx)(n.Ug,{fontWeight:550,fontSize:15,paddingRight:"",children:(0,g.jsxs)(n.xv,{children:["Rp ",aj().toLocaleString("id")]})})]}),(0,g.jsx)(n.Ug,{justifyContent:"space-between",marginTop:4,marginBottom:2,w:"100%",children:(0,g.jsx)(n.Ug,{w:"100%",children:(0,g.jsx)(n.xv,{children:M&&(ac=parseInt(M.split(",")[1]).toLocaleString("id"),(0,g.jsxs)(n.Ug,{fontWeight:500,fontSize:15,justify:"space-between",minWidth:393,children:[(0,g.jsxs)(n.Ug,{color:"gray.600",children:[(0,g.jsx)(n.xv,{children:"Biaya Pengiriman :"}),";",(0,g.jsx)(n.xv,{children:M&&(M.split(","),af="".concat(J.toUpperCase()),(0,g.jsx)(n.xv,{children:af}))}),";"]}),(0,g.jsx)(n.Ug,{fontWeight:600,children:(0,g.jsxs)(n.xv,{children:["Rp ",ac]})})]}))})})}),(0,g.jsx)(s(),{src:"/profile/line.png",width:400,height:1.5}),(0,g.jsxs)(n.Ug,{justifyContent:"space-between",marginTop:4,children:[(0,g.jsx)(n.xv,{fontWeight:600,fontSize:15,color:"gray.600",children:"Total"}),(0,g.jsx)(n.xv,{fontWeight:550,fontSize:15,color:"#004776",children:M&&(ad=parseInt(M.split(",")[1]),ae=parseInt(aj())+ad,(0,g.jsxs)(n.xv,{children:["Rp ",ae.toLocaleString("id")]}))})]}),(0,g.jsx)(n.gC,{align:"start",marginTop:"10",children:(0,g.jsx)(n.xv,{fontWeight:600,fontSize:15,children:"Metode Pembayaran"})}),(0,g.jsx)(n.gC,{align:"start",marginTop:"2",children:(0,g.jsx)(q.XZ,{fontWeight:500,color:"gray.600",size:"sm",children:"Transfer Bank BCA"})}),(0,g.jsx)(n.gC,{marginTop:8,children:(0,g.jsx)(p.zx,{fontSize:13,color:"white",colorScheme:"messenger",fontWeight:500,width:250,onClick:ak,children:"Lanjutkan Pembayaran"})})]})})]})]})}}},function(a){a.O(0,[9669,1490,4426,900,5551,1453,7674,3382,8124,6403,3570,9774,2888,179],function(){var b;return a(a.s=92333)}),_N_E=a.O()}])