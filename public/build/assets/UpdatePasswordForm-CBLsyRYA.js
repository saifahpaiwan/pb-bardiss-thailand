import{l as p,T as _,o as i,f as m,b as r,a as e,u as o,w,s as g,e as v,d as y,g as V}from"./app-BFrOocPW.js";import{a as n,b as l,_ as d}from"./TextInput-CsIhq7aG.js";import{_ as x}from"./PrimaryButton-CPssFN5H.js";const b=r("header",null,[r("h2",{class:"text-lg font-medium text-gray-900"},"Update Password"),r("p",{class:"mt-1 text-sm text-gray-600"}," Ensure your account is using a long, random password to stay secure. ")],-1),k={class:"form-group"},P={class:"form-group"},S={class:"form-group"},h={class:"flex items-center gap-4"},N={key:0,class:"text-sm text-gray-600"},E={__name:"UpdatePasswordForm",setup(U){const u=p(null),c=p(null),s=_({current_password:"",password:"",password_confirmation:""}),f=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),c.value.focus())}})};return(C,a)=>(i(),m("section",null,[b,r("form",{onSubmit:v(f,["prevent"]),class:"mt-6 space-y-6"},[r("div",k,[e(d,{for:"current_password",value:"Current Password"}),e(n,{id:"current_password",ref_key:"currentPasswordInput",ref:c,modelValue:o(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>o(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),e(l,{message:o(s).errors.current_password,class:"mt-2"},null,8,["message"])]),r("div",P,[e(d,{for:"password",value:"New Password"}),e(n,{id:"password",ref_key:"passwordInput",ref:u,modelValue:o(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>o(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:o(s).errors.password,class:"mt-2"},null,8,["message"])]),r("div",S,[e(d,{for:"password_confirmation",value:"Confirm Password"}),e(n,{id:"password_confirmation",modelValue:o(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>o(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),e(l,{message:o(s).errors.password_confirmation,class:"mt-2"},null,8,["message"])]),r("div",h,[e(x,{disabled:o(s).processing,class:"w-100"},{default:w(()=>[y("Save")]),_:1},8,["disabled"]),e(g,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:w(()=>[o(s).recentlySuccessful?(i(),m("p",N,"Saved.")):V("",!0)]),_:1})])],32)]))}};export{E as default};
