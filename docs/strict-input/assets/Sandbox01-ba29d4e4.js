import{r as i,c as x,w,o as S,a as h,u as C,i as I,b as k,d as a,e as l,f,t as v,g as b,v as y}from"./index-6d02c524.js";const B=["value"],V={__name:"StrictInput",props:{modelValue:{type:String,required:!0},filter:{type:String,default:""}},emits:["update:model-value"],setup(g,{emit:p}){const d=g,s=i(null),o=x({get:()=>d.modelValue,set:t=>{s.value.value=t,p("update:model-value",t)}});w(()=>d.filter,()=>{o.value=c(o.value)});const n=i(!1),m=()=>{n.value=!0},U=t=>{n.value=!1;const r=t.target.value;o.value=c(r)},e=t=>{if(n.value)return;const r=t.target.value;o.value=c(r)},u=I(k,new Map),_=x(()=>{const t=u.get(d.filter);return t??(r=>r)});function c(t){return _.value(t)}return(t,r)=>(S(),h("input",{ref_key:"input",ref:s,value:C(o),onInput:e,onCompositionstart:m,onCompositionend:U},null,40,B))}},F=l("h2",null,"直接指定",-1),N=l("h2",null,"動的",-1),M={__name:"Sandbox01",setup(g){const p=i(""),d=i(""),s=i(""),o=i(""),n=i("number"),m=i("");return(U,e)=>(S(),h("div",null,[a(" Sandbox01 "),l("div",null,[F,l("div",null,[l("label",null,[a("number: "),f(V,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=u=>p.value=u),filter:"number"},null,8,["modelValue"])]),a(" "+v(p.value),1)]),l("div",null,[l("label",null,[a("half-alpha: "),f(V,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=u=>d.value=u),filter:"half-alpha"},null,8,["modelValue"])]),a(" "+v(d.value),1)]),l("div",null,[l("label",null,[a("half-alpha-num: "),f(V,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=u=>s.value=u),filter:"half-alpha-num"},null,8,["modelValue"])]),a(" "+v(s.value),1)]),l("div",null,[l("label",null,[a("指定なし: "),f(V,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=u=>o.value=u)},null,8,["modelValue"])]),a(" "+v(o.value),1)])]),l("div",null,[N,l("div",null,[l("div",null,[l("label",null,[b(l("input",{type:"radio","onUpdate:modelValue":e[4]||(e[4]=u=>n.value=u),value:"number"},null,512),[[y,n.value]]),a("数値 ")]),l("label",null,[b(l("input",{type:"radio","onUpdate:modelValue":e[5]||(e[5]=u=>n.value=u),value:"half-alpha"},null,512),[[y,n.value]]),a("英字 ")]),l("label",null,[b(l("input",{type:"radio","onUpdate:modelValue":e[6]||(e[6]=u=>n.value=u),value:"half-alpha-num"},null,512),[[y,n.value]]),a(" 英数 ")])]),l("div",null,[l("label",null,[a(v(n.value)+": ",1),f(V,{modelValue:m.value,"onUpdate:modelValue":e[7]||(e[7]=u=>m.value=u),filter:n.value},null,8,["modelValue","filter"])]),a(" "+v(m.value),1)])])])]))}};export{M as default};
