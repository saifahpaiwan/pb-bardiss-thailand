import{C as a,l as r,D as n,i,q as p,o as c,f as d}from"./app-CkCTHuVw.js";const v={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(u,{expose:l}){const o=a(u,"modelValue"),e=r(null);return n(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),l({focus:()=>e.value.focus()}),(f,t)=>i((c(),d("input",{class:"form-control","onUpdate:modelValue":t[0]||(t[0]=s=>o.value=s),ref_key:"input",ref:e},null,512)),[[p,o.value]])}};export{v as _};