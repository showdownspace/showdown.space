import{_ as o,u as d,g as c,c as t,e,F as u,h,f as _,o as n,t as f}from"./app.08c410cf.js";const p={setup(){const{site:s}=d();return{events:c(()=>s.value.themeConfig.sidebar.find(a=>a.link==="/events/").children)}}},D='{"title":"Event list","description":"","frontmatter":{},"headers":[],"relativePath":"events/index.md"}',v=e("h1",{id:"event-list",tabindex:"-1"},[_("Event list "),e("a",{class:"header-anchor",href:"#event-list","aria-hidden":"true"},"#")],-1),m=e("thead",null,[e("tr",null,[e("th",null,"Name")])],-1),x=["href"];function g(s,l,a,i,b,k){return n(),t("div",null,[v,e("table",null,[m,e("tbody",null,[(n(!0),t(u,null,h(i.events,r=>(n(),t("tr",null,[e("td",null,[e("a",{href:r.link},f(r.text),9,x)])]))),256))])])])}var E=o(p,[["render",g]]);export{D as __pageData,E as default};