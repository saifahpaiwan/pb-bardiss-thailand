import{T as c,o as p,c as _,w as n,a,u as s,Z as w,b as r,d,j as g,n as V,e as v}from"./app-CkCTHuVw.js";import{_ as b}from"./GuestLayout-Bx4W0xeS.js";import{_ as t,a as m}from"./InputLabel-CuOhZHiZ.js";import{_ as y}from"./PrimaryButton-XWavIjy8.js";import{_ as i}from"./TextInput-BEoD4pju.js";const x={class:"mt-4"},k={class:"mt-4"},$={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},j={__name:"Register",setup(N){const e=c({name:"",email:"",password:"",password_confirmation:""}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(f,o)=>(p(),_(b,null,{default:n(()=>[a(s(w),{title:"Register"}),r("form",{onSubmit:v(u,["prevent"])},[r("div",null,[a(t,{for:"name",value:"Name"}),a(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",x,[a(t,{for:"email",value:"Email"}),a(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",k,[a(t,{for:"password",value:"Password"}),a(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",$,[a(t,{for:"password_confirmation",value:"Confirm Password"}),a(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",q,[a(s(g),{href:f.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(y,{class:V(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
