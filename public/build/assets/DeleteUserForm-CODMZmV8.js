import{o as d,f as u,r as y,l as f,T as b,a as t,w as l,i as v,x as g,b as s,u as a,y as k,n as x,z as $,d as c}from"./app-Dat7NQfq.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as B,_ as C}from"./InputLabel-J-m_3B1H.js";import{_ as S}from"./TextInput-pJG54JQR.js";const V={},U={class:"btn btn-danger"};function A(r,o){return d(),u("button",U,[y(r.$slots,"default")])}const m=D(V,[["render",A]]),N=["type"],P={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(r){return(o,n)=>(d(),u("button",{type:r.type,class:"btn btn-secondary"},[y(o.$slots,"default")],8,N))}},T={class:"space-y-6"},z=s("header",null,[s("h2",{class:""},"Delete Account"),s("p",{class:""}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),E={class:"mt-2 p-1",style:{border:"1px solid #eee"}},F=s("h2",{class:""}," Are you sure you want to delete your account? ",-1),I=s("p",{class:""}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),K={class:"form-group"},O={class:"form-group flex justify-end"},J={__name:"DeleteUserForm",setup(r){const o=f(!1),n=f(null),e=b({password:""}),w=()=>{o.value=!0,$(()=>n.value.focus())},i=()=>{e.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>p(),onError:()=>n.value.focus(),onFinish:()=>e.reset()})},p=()=>{o.value=!1,e.reset()};return(j,_)=>(d(),u("section",T,[z,t(m,{onClick:w},{default:l(()=>[c("Delete Account")]),_:1}),v(s("div",E,[F,I,s("div",K,[t(C,{for:"password",value:"Password",class:"sr-only"}),t(S,{id:"password",ref_key:"passwordInput",ref:n,modelValue:a(e).password,"onUpdate:modelValue":_[0]||(_[0]=h=>a(e).password=h),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:k(i,["enter"])},null,8,["modelValue"]),t(B,{message:a(e).errors.password,class:"mt-2"},null,8,["message"])]),s("div",O,[t(P,{onClick:p,class:"mr-1"},{default:l(()=>[c(" Cancel ")]),_:1}),t(m,{class:x({"opacity-25":a(e).processing}),disabled:a(e).processing,onClick:i},{default:l(()=>[c(" Delete Account ")]),_:1},8,["class","disabled"])])],512),[[g,o.value]])]))}};export{J as default};