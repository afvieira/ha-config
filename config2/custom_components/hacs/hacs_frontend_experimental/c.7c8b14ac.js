import{c as e}from"./c.6eb9fcd4.js";import{d as t}from"./c.aa335625.js";import{bS as s,a5 as i}from"./main-aeda8d41.js";import{s as a}from"./c.874c8cfd.js";const n=(t,s,i)=>t.name_by_user||t.name||i&&((t,s)=>{for(const i of s||[]){const s="string"==typeof i?i:i.entity_id,a=t.states[s];if(a)return e(a)}})(s,i)||s.localize("ui.panel.config.devices.unnamed_device","type",s.localize(`ui.panel.config.devices.type.${t.entry_type||"device"}`)),r=e=>e.sendMessagePromise({type:"config/device_registry/list"}),c=(e,s)=>e.subscribeEvents(t((()=>r(e).then((e=>s.setState(e,!0)))),500,!0),"device_registry_updated"),o=(e,t)=>s("_dr",r,c,e,t),d=(e,t)=>{const s={};for(const i of t){const t=e[i.entity_id];null!=t&&t.domain&&null!==i.device_id&&(s[i.device_id]||(s[i.device_id]=[]),s[i.device_id].push(t.domain))}return s},_=(t,s)=>{if(s.name)return s.name;const i=t.states[s.entity_id];return i?e(i):s.original_name?s.original_name:s.entity_id},y=e=>e.sendMessagePromise({type:"config/entity_registry/list"}),m=(e,s)=>e.subscribeEvents(t((()=>y(e).then((e=>s.setState(e,!0)))),500,!0),"entity_registry_updated"),f=(e,t)=>s("_entityRegistry",y,m,e,t),g=i((e=>{const t={};for(const s of Object.values(e))t[s.id]=s;return t})),p=(e,t)=>e.callWS({type:"config/area_registry/create",...t}),u=e=>e.sendMessagePromise({type:"config/area_registry/list"}).then((e=>e.sort(((e,t)=>a(e.name,t.name))))),l=(e,s)=>e.subscribeEvents(t((()=>u(e).then((e=>s.setState(e,!0)))),500,!0),"area_registry_updated"),v=(e,t)=>s("_areaRegistry",u,l,e,t);export{n as a,v as b,_ as c,f as d,g as e,p as f,d as g,o as s};
