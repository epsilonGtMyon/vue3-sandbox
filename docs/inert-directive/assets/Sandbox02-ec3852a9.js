import{d as v,r as u,c,a as t,w as d,u as x,v as _,o as i,p as f,b,_ as h}from"./index-372dc8a6.js";function r(n,e){e.oldValue!==e.value&&(n.inert=e.value)}const m={mounted(n,e){r(n,e)},updated(n,e){r(n,e)}},a=n=>(f("data-v-cced5530"),n=n(),b(),n),I={class:"sandbox02"},S=a(()=>t("h1",null,"Sandbox02",-1)),g=a(()=>t("div",null,[t("p",null,"inert用のディレクティブを作成し、それ経由で変更する。"),t("p",null,"ディレクティブを経由することでbinding以外のものも判定条件に使えたりするとかかな？")],-1)),V={class:"sandbox02-inertArea"},k=a(()=>t("h2",null,"inert領域",-1)),w={class:"sandbox02-noinertArea"},A=a(()=>t("h2",null,"非inert領域",-1)),B=v({__name:"Sandbox02",setup(n){const e=u(!1),o=u("");function p(){e.value=!e.value}return(y,s)=>(i(),c("div",I,[S,g,t("div",{class:"sandbox02-buttonArea"},[t("button",{onClick:p},"toggleInert")]),d((i(),c("div",V,[k,d(t("input",{"onUpdate:modelValue":s[0]||(s[0]=l=>o.value=l)},null,512),[[_,o.value]])])),[[x(m),e.value]]),t("div",w,[A,d(t("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>o.value=l)},null,512),[[_,o.value]])])]))}});const U=h(B,[["__scopeId","data-v-cced5530"]]);export{U as default};