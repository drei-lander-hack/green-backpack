var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,a=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n;import{d as r,m as o,u as c,c as l,a as p,F as i,r as u,w as m,p as d,b,o as f,t as k,e as v,f as g,g as w}from"./vendor.14302df0.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,r)=>{const o=new URL(e,n);if(self[t].moduleMap[o])return s(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),a(l)},onload(){s(self[t].moduleMap[o]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/green-backpack/assets/");var y=r({setup:()=>({store:c()}),computed:((e,r)=>{for(var o in r||(r={}))t.call(r,o)&&a(e,o,r[o]);if(s)for(var o of s(r))n.call(r,o)&&a(e,o,r[o]);return e})({},o(["sections"]))});const h=m();d("data-v-20182e78");const j=p("h1",null,"Der Grüne Rucksack",-1),O=p("p",null," Entscheide, an welchen Stellschrauben Du deinen Rucksack verändern willst: ",-1),R={class:"sections"},L=p("div",{class:"copyright"}," Bild von http://pngimg.com/image/6353 unter CC-BY 4.0 ",-1);b();const M=h(((e,t,s,n,a,r)=>(f(),l(i,null,[j,O,p("div",R,[(f(!0),l(i,null,u(e.sections,(e=>(f(),l("div",{key:e},k(e),1)))),128))]),L],64))));y.render=M,y.__scopeId="data-v-20182e78";var U=r({name:"App",components:{GreenBackpack:y}});const _=p("img",{class:"logo",alt:"Der Grüne Rucksack Logo",src:"/green-backpack/assets/backpack.c0353e25.png"},null,-1);U.render=function(e,t,s,n,a,r){const o=v("GreenBackpack");return f(),l(i,null,[_,p(o)],64)};const B=g({state:{sections:["Dienstreisen","Arbeitsweg","Mittagessen"]}}),D=w(U);D.use(B),D.mount("#app");