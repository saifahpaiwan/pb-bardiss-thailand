import{T as l,o as d,c as m,w as t,a as o,u as a,Z as c,b as e,d as f,n as p,e as u}from"./app-BFrOocPW.js";import{_}from"./GuestLayout-D0N7S9OW.js";import{_ as w,a as b,b as x}from"./TextInput-CsIhq7aG.js";import{_ as g}from"./PrimaryButton-CPssFN5H.js";const h=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V={class:"flex justify-end mt-4"},B={__name:"ConfirmPassword",setup(v){const s=l({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(y,r)=>(d(),m(_,null,{default:t(()=>[o(a(c),{title:"Confirm Password"}),h,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[o(w,{for:"password",value:"Password"}),o(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(x,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",V,[o(g,{class:p(["ms-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[f(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{B as default};
