import{W as p,j as e,a as f}from"./app-DlxOd3O2.js";import{A as j}from"./AuthenticatedLayout-BBydSdFm.js";import g from"./TableInventory-q4fXUFMm.js";import{P as v}from"./Pagination-CigNA4KB.js";import{S as r}from"./sweetalert2.all-CVyZbDsS.js";import"./ApplicationLogo-CGmQr1zU.js";import"./Dropdown-CompPyN9.js";import"./transition-BXDBP_67.js";import"./OptionsTableInventory-BUo810XX.js";const E=({auth:o,area:t,devices:n})=>{const{data:s,current_page:a,last_page:i,links:l,total:c}=n,{post:d}=p(),m=h=>{r.fire({title:"Seguro de esta acción?",showDenyButton:!0,showCancelButton:!1,denyButtonText:"Cancelar",confirmButtonText:"Confirmar",confirmButtonColor:"#2D8E4F",cancelButtonColor:"#8E2D2D",background:"#1f2937",color:"#d6d6d6",icon:"warning"}).then(u=>{u.isConfirmed&&d(`/admin/remover-area/${h}`,{onSuccess:()=>{r.fire({color:"#d6d6d6",background:"#1f2937",confirmButtonColor:"#2D8E4F",title:"¡Área Eliminada!",icon:"success",html:""})}})})},x=()=>e.jsxs("div",{className:"flex flex-col space-y-4 bg-gray-800 rounded-md md:max-w-md w-full",children:[e.jsx("img",{src:t.logotipo,alt:t.name,width:600,height:150,className:"rounded-t-md h-[150px] object-cover"}),e.jsxs("div",{className:"px-5 py-2 pb-2 relative",children:[e.jsxs("small",{className:"absolute -top-2 right-2 text-gray-500",children:[e.jsx("strong",{children:"Registro:"})," ",new Date(t.created_at).toLocaleDateString()]}),e.jsx("h1",{className:"text-xl font-bold",children:t.name}),e.jsxs("div",{className:"flex items-center justify-between pt-2",children:[e.jsx("div",{className:"cursor-pointer",onClick:()=>m(t.id),children:e.jsxs("div",{className:"text-sm text-gray-400 hover:text-red-900 flex items-center duration-300 transition-all gap-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})}),e.jsx("span",{children:"Eliminar"})]})}),e.jsx("a",{href:"/admin/editar-area/"+t.id,children:e.jsxs("div",{className:"text-sm text-gray-400 hover:text-blue-900 flex items-center duration-300 transition-all gap-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})}),e.jsx("span",{children:"Editar"})]})})]})]})]});return e.jsxs(j,{user:o.user,children:[e.jsx(f,{title:t.name?t.name:"Error"}),e.jsxs("div",{className:"flex flex-col gap-4 items-center justify-center",children:[e.jsx(x,{}),e.jsx(g,{datos:s||[]}),e.jsx("div",{className:"w-full",children:e.jsx(v,{current_page:a,last_page:i,links:l,total:c})})]})]})};export{E as default};
