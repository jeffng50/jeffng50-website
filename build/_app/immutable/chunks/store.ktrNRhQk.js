import{w as s}from"./index.rJuzXNYa.js";function l(){const e="isdark",a=localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):!1,{subscribe:r,update:o}=s(a);return{subscribe:r,toggle:()=>o(t=>(localStorage.setItem(e,JSON.stringify(!t)),!t))}}const g=l();export{g as i};
