import{Q as I,l as q,T as C,o as _,f as p,a,u as e,w as f,F as E,Z as $,b as s,t as h,e as B,g as F,i as b,s as V,j as N,d as v,n as P,p as R,m as j}from"./app-CkCTHuVw.js";import{_ as M}from"./AuthenticatedLayout-CkNAQ8BR.js";import{_ as z,s as A,S as L}from"./PageTitleBox-BAV6fs-R.js";import{_ as O}from"./PrimaryButton-XWavIjy8.js";import{_ as i,a as r}from"./InputLabel-CuOhZHiZ.js";import{_ as m}from"./TextInput-BEoD4pju.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const n=c=>(R("data-v-eb8842a5"),c=c(),j(),c),Q={class:"row"},Z={class:"col-lg-12"},G={class:"card"},H={class:"card-body"},J={class:"row mb-1"},K={class:"col-md-6 responsive-mobile-title"},W=n(()=>s("h4",{class:"header-title"}," แก้ไขข้อมูลผู้ใช้งาน (Users) ",-1)),X={class:"sub-header"},Y={class:"row"},ss={class:"col-md-5"},es={class:"form-group"},os={class:"col-md-5"},as={class:"form-group"},ts={class:"col-md-2"},ls={class:"form-group"},ds={class:"col-md-4"},is={class:"form-group"},rs={class:"col-md-4"},ns={class:"form-group"},ms={class:"col-md-4"},cs={class:"form-group"},us={class:"col-md-4"},_s={class:"form-group"},ps={class:"mt-2 img-file-upload-1"},fs={class:"box-image-no"},gs=["src"],hs=n(()=>s("div",{class:"mt-1 mb-1"}," Size image 690 × 690 px 2MB. ",-1)),vs={class:"col-md-4"},ws={class:"form-group"},bs=n(()=>s("label",{for:"status-1"},[v(" สถานะการแสดงผล "),s("span",{class:"text-danger"},"*")],-1)),Vs={class:"mt-2"},ys={class:"radio radio-success form-check-inline"},xs=n(()=>s("label",{for:"status-1"},[s("span",{class:"badge badge-success p-1"}," Enable ")],-1)),Ss={class:"radio radio-secondary form-check-inline"},Us=n(()=>s("label",{for:"status-0"},[s("span",{class:"badge badge-secondary p-1"}," Disable ")],-1)),Ds={class:"col-md-4"},ks={class:"form-group"},Is={key:0,class:"flex align-items-center"},qs={key:1},Cs={class:"col-md-12 text-right"},Es=n(()=>s("hr",null,null,-1)),$s=n(()=>s("i",{class:"fe-chevron-left"},null,-1)),Bs=n(()=>s("i",{class:"fe-save"},null,-1)),Fs={__name:"Edit",props:{roles:{type:Array},user:{type:Object,default:()=>({})},roleID:{type:Number}},setup(c){const y=I(),x=q([{message:"รายการข้อมูลผู้ใช้งาน"},{message:"แก้ไขข้อมูลผู้ใช้งาน"}]),g=c,w=g.roles,d=g.user,S=new Date().toDateString(),o=C({code:d.empolyee_code,password:"",email:d.email,phone:d.phone,username:d.username,password:"",confirmPassword:"",status:d.status,roles:w.find(u=>u.id===g.roleID),filename:d.images_name!=null?"/storage/images/users/"+d.images_name:null}),U=u=>{const l=u.target.files[0];if(l){const t=new FileReader;t.onload=k=>{o.filename=k.target.result},t.readAsDataURL(l)}else o.filename=null},D=()=>{o.put(route("users.update",d.id),{onFinish:()=>{L.fire({title:"Successfully.",text:y.props.flash.success,icon:"success",showConfirmButton:!1,timer:1500})}})};return(u,l)=>(_(),p(E,null,[a(e($),{title:"Users Edit"}),a(M,null,{default:f(()=>[a(z,{titlemain:"แดชบอร์ด",subtitles:x.value},null,8,["subtitles"]),s("div",Q,[s("div",Z,[s("div",G,[s("div",H,[s("div",J,[s("div",K,[W,s("p",X," ข้อมูลประจำวันที่ : "+h(e(S)),1)])]),s("form",{onSubmit:B(D,["prevent"]),enctype:"multipart/form-data"},[s("div",Y,[s("div",ss,[s("div",es,[a(i,{for:"code",value:"รหัส : ",required:""}),a(m,{id:"code",type:"text",modelValue:e(o).code,"onUpdate:modelValue":l[0]||(l[0]=t=>e(o).code=t),required:""},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(o).errors.code},null,8,["message"])])]),s("div",os,[s("div",as,[a(i,{for:"email",value:"อีเมล (Email) : ",required:""}),a(m,{id:"email",type:"email",modelValue:e(o).email,"onUpdate:modelValue":l[1]||(l[1]=t=>e(o).email=t),required:""},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(o).errors.email},null,8,["message"])])]),s("div",ts,[s("div",ls,[a(i,{for:"phone",value:"เบอร์โทร (Phone) : "}),a(m,{id:"phone",type:"text",modelValue:e(o).phone,"onUpdate:modelValue":l[2]||(l[2]=t=>e(o).phone=t)},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(o).errors.phone},null,8,["message"])])]),s("div",ds,[s("div",is,[a(i,{for:"username",value:"Username : ",required:""}),a(m,{id:"username",type:"text",modelValue:e(o).username,"onUpdate:modelValue":l[3]||(l[3]=t=>e(o).username=t),required:""},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(o).errors.username},null,8,["message"])])]),s("div",rs,[s("div",ns,[a(i,{for:"password",value:"รหัสผ่าน (Password) : "}),a(m,{id:"password",type:"password",modelValue:e(o).password,"onUpdate:modelValue":l[4]||(l[4]=t=>e(o).password=t)},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(o).errors.password},null,8,["message"])])]),s("div",ms,[s("div",cs,[a(i,{for:"confirm-password",value:"ยืนยันรหัสผ่าน (Confirm confirm-password) : "}),a(m,{id:"confirm-password",type:"password",modelValue:e(o).confirmPassword,"onUpdate:modelValue":l[5]||(l[5]=t=>e(o).confirmPassword=t)},null,8,["modelValue"]),a(r,{class:"mt-2",message:e(o).errors.confirmPassword},null,8,["message"])])]),s("div",us,[s("div",_s,[a(i,{for:"images_name",value:"รูปพนักงานขาย : "}),s("div",ps,[s("div",fs,[e(o).filename?(_(),p("img",{key:0,src:e(o).filename,alt:"Selected Image"},null,8,gs)):F("",!0)])]),hs,s("input",{type:"file",id:"images_name",onChange:U},null,32)]),a(r,{class:"mt-2",message:e(o).errors.filename},null,8,["message"])]),s("div",vs,[s("div",ws,[bs,s("div",Vs,[s("div",ys,[b(s("input",{type:"radio",id:"status-1",value:"1","onUpdate:modelValue":l[6]||(l[6]=t=>e(o).status=t)},null,512),[[V,e(o).status]]),xs]),s("div",Ss,[b(s("input",{type:"radio",id:"status-0",value:"0","onUpdate:modelValue":l[7]||(l[7]=t=>e(o).status=t)},null,512),[[V,e(o).status]]),Us])])])]),s("div",Ds,[s("div",ks,[a(i,{for:"roles",value:"สิทธิ์ผู้ใช้งาน : ",required:""}),a(e(A),{modelValue:e(o).roles,"onUpdate:modelValue":l[8]||(l[8]=t=>e(o).roles=t),options:e(w),filter:"",optionLabel:"name",placeholder:"Select a Roles",class:"w-100"},{value:f(t=>[t.value?(_(),p("div",Is,[s("div",null,h(t.value.name),1)])):(_(),p("span",qs,h(t.placeholder),1))]),_:1},8,["modelValue","options"]),a(r,{class:"mt-2",message:e(o).errors.roles},null,8,["message"])])]),s("div",Cs,[Es,a(e(N),{href:u.route("users.index"),class:"btn btn-dark waves-effect waves-light"},{default:f(()=>[$s,v(" ย้อนกลับ ")]),_:1},8,["href"]),a(O,{class:P({"opacity-25":e(o).processing}),disabled:e(o).processing},{default:f(()=>[Bs,v(" บันทึก ")]),_:1},8,["class","disabled"])])])],32)])])])])]),_:1})],64))}},Os=T(Fs,[["__scopeId","data-v-eb8842a5"]]);export{Os as default};