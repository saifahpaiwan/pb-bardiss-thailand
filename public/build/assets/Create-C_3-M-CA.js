import{Q as k,l as p,T as V,o as i,f as r,a as o,u as e,w as _,F as m,Z as C,b as s,t as n,e as $,B as f,j as B,d as h,n as D,i as I,v as j,q,s as A}from"./app-Dat7NQfq.js";import{_ as F}from"./AuthenticatedLayout-B6AQ82LV.js";import{_ as N,S as U}from"./PageTitleBox-C707x_k7.js";import{_ as M}from"./PrimaryButton-jInroTuA.js";import{_ as O,a as T}from"./InputLabel-J-m_3B1H.js";import{_ as z}from"./TextInput-pJG54JQR.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const d=c=>(q("data-v-3dc5e493"),c=c(),A(),c),L={class:"row"},Q={class:"col-lg-12"},Z={class:"card"},G={class:"card-body"},H={class:"row mb-1"},J={class:"col-md-6 responsive-mobile-title"},K=d(()=>s("h4",{class:"header-title"}," เพิ่มข้อมูลสิทธิ์ผู้ใช้งาน (Roles) ",-1)),P={class:"sub-header"},W={class:"row"},X={class:"col-md-12"},Y={class:"form-group"},R={class:"col-md-12"},ss={class:"row"},es={class:"box-title-roles"},ts={class:"box-content-roles"},os=["onUpdate:modelValue","id","value"],as=["for"],cs={class:"text-danger"},ls={class:"col-md-12 text-right"},is=d(()=>s("hr",null,null,-1)),rs=d(()=>s("i",{class:"fe-chevron-left"},null,-1)),ns=d(()=>s("i",{class:"fe-save"},null,-1)),ds={__name:"Create",props:{permissionArr:{type:Object}},setup(c){const v=k(),b=p([{message:"รายการข้อมูลสิทธิ์ผู้ใช้งาน"},{message:"เพิ่มข้อมูลสิทธิ์ผู้ใช้งาน"}]),g=c.permissionArr,w=new Date().toDateString(),t=V({name:"",permission:p([])}),x=()=>{t.post(route("roles.store"),{onFinish:()=>{U.fire({title:"Successfully.",text:v.props.flash.success,icon:"success",showConfirmButton:!1,timer:1500})}})};return(y,u)=>(i(),r(m,null,[o(e(C),{title:"Roles Create"}),o(F,null,{default:_(()=>[o(N,{titlemain:"แดชบอร์ด",subtitles:b.value},null,8,["subtitles"]),s("div",L,[s("div",Q,[s("div",Z,[s("div",G,[s("div",H,[s("div",J,[K,s("p",P," ข้อมูลประจำวันที่ : "+n(e(w)),1)])]),s("form",{onSubmit:$(x,["prevent"]),enctype:"multipart/form-data"},[s("div",W,[s("div",X,[s("div",Y,[o(O,{for:"name",value:"ชื่อสิทธิ์การใช้งานระบบ : ",required:""}),o(z,{id:"name",type:"text",modelValue:e(t).name,"onUpdate:modelValue":u[0]||(u[0]=l=>e(t).name=l),required:""},null,8,["modelValue"]),o(T,{class:"mt-2",message:e(t).errors.name},null,8,["message"])])]),s("div",R,[s("div",ss,[(i(!0),r(m,null,f(e(g),l=>(i(),r("div",{class:"col-md-4",key:l.id},[s("div",es,n(l.name),1),s("div",ts,[(i(!0),r(m,null,f(l.list,a=>(i(),r("div",{class:"custom-control custom-checkbox",key:a.id},[I(s("input",{type:"checkbox",class:"custom-control-input","onUpdate:modelValue":S=>e(t).permission=S,id:a.id,value:a.id},null,8,os),[[j,e(t).permission]]),s("label",{class:"custom-control-label",for:a.id},[s("div",null,n(a.name),1),s("div",cs,"("+n(a.description)+")",1)],8,as)]))),128))])]))),128))])]),s("div",ls,[is,o(e(B),{href:y.route("roles.index"),class:"btn btn-dark waves-effect waves-light"},{default:_(()=>[rs,h(" ย้อนกลับ ")]),_:1},8,["href"]),o(M,{class:D({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:_(()=>[ns,h(" บันทึก ")]),_:1},8,["class","disabled"])])])],32)])])])])]),_:1})],64))}},ws=E(ds,[["__scopeId","data-v-3dc5e493"]]);export{ws as default};