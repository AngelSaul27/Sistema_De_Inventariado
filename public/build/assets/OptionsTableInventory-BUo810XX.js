import{W as i,j as e}from"./app-DlxOd3O2.js";import{S as s}from"./sweetalert2.all-CVyZbDsS.js";const d=({id:t})=>{const{post:o}=i(),r=()=>{s.fire({title:"Seguro de esta acción?",showDenyButton:!0,showCancelButton:!1,denyButtonText:"Cancelar",confirmButtonText:"Confirmar",confirmButtonColor:"#2D8E4F",cancelButtonColor:"#8E2D2D",background:"#1f2937",color:"#d6d6d6",icon:"warning"}).then(a=>{a.isConfirmed&&o(`/admin/remover-equipo/${t}`,{onSuccess:()=>{s.fire({color:"#d6d6d6",background:"#1f2937",confirmButtonColor:"#2D8E4F",title:"¡Equipo Eliminado!",icon:"success",html:""})}})})};return e.jsxs("div",{className:"flex flex-col space-y-2 text-gray-500 select-none",children:[e.jsx("a",{href:"/admin/ver-equipo/"+t,target:"_blank",children:e.jsx(n,{text:"Explorar",className:"hover:text-green-600",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})})}),e.jsx("a",{href:"/admin/editar-equipo/"+t,target:"_blank",children:e.jsx(n,{text:"Editar",className:"hover:text-blue-600",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})})})}),e.jsx("div",{onClick:r,children:e.jsx(n,{text:"Eliminar",className:"hover:text-red-600 cursor-pointer",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})})})})]})},n=({children:t,text:o,className:r})=>e.jsxs("span",{className:"flex px-5 py-1 gap-2 items-center hover:-translate-x-1 w-max transition-all duration-300 "+r,children:[t,e.jsx("span",{className:"text-s",children:o})]});export{d as default};
