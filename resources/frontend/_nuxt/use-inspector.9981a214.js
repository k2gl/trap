import{h as _,E as c}from"./file-attachment.vue.44781509.js";import{d,c as n,o as m,a as l,b as t,t as a,p as h,i as u,_ as b}from"./entry.8cc9a0a4.js";import"./layout-sidebar.vue.30b2544d.js";const e=s=>(h("data-v-41533833"),s=s(),u(),s),I={class:"inspector-stat-board"},S={class:"inspector-stat-board__item"},v=e(()=>t("h4",{class:"inspector-stat-board__item-name"},"Timestamp",-1)),E={class:"inspector-stat-board__item-value"},f={class:"inspector-stat-board__item"},g=e(()=>t("h4",{class:"inspector-stat-board__item-name"},"Duration",-1)),y={class:"inspector-stat-board__item-value"},N={class:"inspector-stat-board__item"},T=e(()=>t("h4",{class:"inspector-stat-board__item-name"},"Result",-1)),B={class:"inspector-stat-board__item-value"},C=d({__name:"inspector-stat-board",props:{transaction:{}},setup(s){const o=s,i=n(()=>_(o.transaction.timestamp).toLocaleString()),r=n(()=>(o.transaction.result||"success").toUpperCase());return(p,R)=>(m(),l("section",I,[t("div",S,[v,t("strong",E,a(i.value),1)]),t("div",f,[g,t("strong",y,a(p.transaction.duration)+" ms ",1)]),t("div",N,[T,t("span",B,a(r.value),1)])]))}}),x=b(C,[["__scopeId","data-v-41533833"]]),D=s=>{const o=s.payload[0];return{id:s.uuid,type:c.INSPECTOR,labels:[c.INSPECTOR],origin:{name:o.host.hostname,ip:o.host.ip,os:o.host.os},serverName:o.host.hostname,date:s.timestamp?new Date(s.timestamp*1e3):null,payload:s.payload}},O=()=>({normalizeInspectorEvent:D});export{x as I,O as u};
