import{R as i,r as l,j as a,A as r,F as c,a as n,T as g}from"./index-CjFxtYej.js";const p=i.memo(({categories:t,handleDelete:s,handleSearch:d,searchQuery:m})=>{const o=l.useMemo(()=>[{key:"_id",label:"ID",render:e=>`C${e._id.substring(0,6)}`},{key:"logo",label:"Logo",render:e=>a.jsx("img",{src:e.logo,className:"avatar",alt:e.name,"aria-label":"Category Logo"})},{key:"name",label:"Category Name"},{key:"priority",label:"Priority",render:e=>e.priority||"0"},{key:"actions",label:"Actions",render:e=>a.jsxs("div",{className:"d-flex gap-2 justify-content-center",children:[a.jsx(r,{to:`/categoryedit/${e._id}`,icon:c,className:"ml-4"}),a.jsx(r,{onClick:()=>s(e._id),icon:n,className:"ml-4"})]})}],[s]);return a.jsx(g,{title:"Categories",imageSrc:"/top-selling-product-icon.png",tableTitle:"Categories List",listData:t,columns:o,searchPlaceholder:"Search categories..."})});export{p as default};