import{j as s}from"./app-DlxOd3O2.js";import{V as l}from"./Vincule-Cd07Viaf.js";const i=({data:a})=>{const r=({it:e,index:t})=>s.jsxs(l,{href:"/admin/ver-area/"+e.id,className:"bg-gray-800 rounded-md p-2 shadow-md hover:-translate-y-1 duration-300 ease-out",children:[s.jsx("div",{className:"rounded-sm overflow-hidden",children:s.jsx("img",{src:e.logotipo,className:"h-[100px] w-full object-cover",alt:"Sin imagen"})}),s.jsxs("div",{className:"text-gray-300 text-sm font-light pt-4 pb-2",children:[s.jsx("p",{className:"text-md font-bold",children:e.name}),s.jsxs("p",{className:"text-xs font-bold text-gray-400",children:[s.jsx("span",{children:"Equipos: "}),s.jsx("span",{className:"font-light text-gray-500",children:"Sin registro"})]}),s.jsxs("p",{className:"text-xs font-bold text-gray-400",children:[s.jsx("span",{children:"Responsables: "}),s.jsx("span",{className:"font-light text-gray-500",children:"Sin registro"})]}),s.jsxs("p",{className:"text-xs font-bold text-gray-400",children:[s.jsx("span",{children:"Registro: "}),s.jsx("span",{className:"font-light text-gray-500",children:new Date(e.created_at).toLocaleDateString()})]})]})]});return s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",children:a.length>0?a.map((e,t)=>s.jsx(r,{it:e},t)):s.jsx("p",{className:"text-gray-300 text-center py-10 col-span-6",children:"No hay areas disponibles"})})};export{i as default};