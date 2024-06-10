import{r as _,j as s}from"./app-DlxOd3O2.js";import{L as p}from"./SubmitButton-UfTbJ6Yp.js";import{c as g,d as k,C as O,F as R,a as T,L as A,e as w,M as q,O as L,f as M,g as z,h as W,N as Y,i as G,j as B,P as H,k as U,S as P,I as K,l as J,R as V,m as Z,n as Q,o as X,p as $,q as S,r as D,s as i,t,b as a}from"./TextArea-C8hSbVa5.js";import{I}from"./Input-B9Jws8YF.js";import{C}from"./Checkbox-B2z4yyxr.js";const ee=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u;const d={type_storage:e!=null&&e.type_storage?e.type_storage:"",capacity_storage:e!=null&&e.capacity_storage?e.capacity_storage:""},[m,x]=_.useState(d),o=(j,f)=>{x(v=>({...v,[j]:f}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx(p,{value:"Tipo del Almacenamiento",required:!0}),s.jsx(g,{setData:o,name:"type_storage",options:k,input_props:{value:(l=r.details)==null?void 0:l.type_storage}}),s.jsx(p,{value:"Capacidad",required:!0}),s.jsx(g,{setData:o,name:"capacity_storage",options:O,input_props:{type:"number",value:(u=r.details)==null?void 0:u.capacity_storage}})]})},F=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u,j,f,v,h,E;const d={ram:e!=null&&e.ram?e.ram:"",processor:e!=null&&e.processor?e.processor:"",generation:e!=null&&e.generation?e.generation:"",storage:e!=null&&e.storage?e.storage:"",antivirus:e!=null&&e.antivirus?e.antivirus:"",ofimatica:e!=null&&e.ofimatica?e.ofimatica:"",operating_system:e!=null&&e.operating_system?e.operating_system:""},[m,x]=_.useState(d),o=(y,b)=>{x(N=>({...N,[y]:b}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsxs(R,{children:[s.jsxs(T,{children:[s.jsx(p,{value:"Procesador",required:!0}),s.jsx(g,{name:"processor",setData:o,options:A,input_props:{value:(l=r.details)==null?void 0:l.processor}})]}),s.jsxs(T,{children:[s.jsx(p,{value:"Generación",required:!0}),s.jsx(g,{name:"generation",setData:o,options:w,input_props:{value:(u=r.details)==null?void 0:u.generation}})]})]}),s.jsxs(R,{children:[s.jsxs(T,{children:[s.jsx(p,{value:"Memoria Ram",required:!0}),s.jsx(g,{name:"ram",setData:o,options:q,input_props:{value:(j=r.details)==null?void 0:j.ram,type:"number"}})]}),s.jsxs(T,{children:[s.jsx(p,{value:"Disco",required:!0}),s.jsx(g,{type:"number",name:"storage",setData:o,options:O,input_props:{type:"number",value:(f=r.details)==null?void 0:f.storage}})]})]}),s.jsxs(R,{children:[s.jsxs(T,{children:[s.jsx(p,{value:"Sistema Operativo",required:!0}),s.jsx(g,{name:"operating_system",setData:o,options:L,input_props:{value:(v=r.details)==null?void 0:v.operating_system}})]}),s.jsxs(T,{children:[s.jsx(p,{value:"Antivirus"}),s.jsx(g,{name:"antivirus",setData:o,options:M,input_props:{value:(h=r.details)==null?void 0:h.antivirus}})]})]}),s.jsx(p,{value:"Software de Ofimática"}),s.jsx(g,{name:"ofimatica",setData:o,options:z,input_props:{value:(E=r.details)==null?void 0:E.ofimatica}})]})},se=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u,j,f;const d={type_network:e!=null&&e.type_network?e.type_network:"",security_protocol:e!=null&&e.security_protocol?e.security_protocol:"",bandwidth:e!=null&&e.bandwidth?e.bandwidth:"",speed:e!=null&&e.speed?e.speed:""},[m,x]=_.useState(d),o=(v,h)=>{x(E=>({...E,[v]:h}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx(p,{value:"Tipo",required:!0}),s.jsx(g,{name:"type_network",setData:o,options:W,input_props:{value:(l=r.details)==null?void 0:l.type_network}}),s.jsx(p,{value:"Velocidad",required:!0}),s.jsx(g,{name:"speed",setData:o,options:Y,input_props:{value:(u=r.details)==null?void 0:u.speed,type:"number"}}),s.jsx(p,{value:"Ancho de Banda",required:!0}),s.jsx(g,{name:"bandwidth",setData:o,options:G,input_props:{value:(j=r.details)==null?void 0:j.bandwidth,type:"number"}}),s.jsx(p,{value:"Protocolo de Seguridad"}),s.jsx(I,{name:"security_protocol",placeholder:"WEP, WPA, WPA2",value:(f=r.details)!=null&&f.security_protocol?r.details.security_protocol:"",onChange:v=>{o("security_protocol",v.target.value)}})]})},re=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u,j,f,v,h,E;const d={type_printer:e!=null&&e.type_printer?e.type_printer:"",printing_technology:e!=null&&e.printing_technology?e.printing_technology:"",paper_sizes_supported:e!=null&&e.paper_sizes_supported?e.paper_sizes_supported:"",duplex_printing:e!=null&&e.duplex_printing?e.duplex_printing:"",ink_or_toner:e!=null&&e.ink_or_toner?e.ink_or_toner:""},[m,x]=_.useState(d),o=(y,b)=>{x(N=>({...N,[y]:b}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx(p,{value:"Tipo de Impresora",required:!0}),s.jsx(g,{name:"type_printer",setData:o,options:B,input_props:{value:(l=r.details)==null?void 0:l.type_printer}}),s.jsx(p,{value:"Tecnología de Impresión",required:!0}),s.jsx(g,{name:"printing_technology",setData:o,options:H,input_props:{value:(u=r.details)==null?void 0:u.printing_technology}}),s.jsx(p,{value:"Tamaños de Papel Soportados"}),s.jsx(g,{name:"paper_sizes_supported",setData:o,options:U,input_props:{value:(j=r.details)==null?void 0:j.paper_sizes_supported}}),s.jsxs(R,{children:[s.jsxs(T,{children:[s.jsx(p,{value:"Impresión Dúplex"}),s.jsx(P,{name:"duplex_printing",options:K,value:(f=r.details)!=null&&f.duplex_printing?(v=r.details)==null?void 0:v.duplex_printing:"",onChange:y=>{o("duplex_printing",y.target.value)}})]}),s.jsxs(T,{children:[s.jsx(p,{value:"Tinta o Tóner"}),s.jsx(P,{name:"ink_or_toner",options:J,value:(h=r.details)!=null&&h.ink_or_toner?(E=r.details)==null?void 0:E.ink_or_toner:"",onChange:y=>{o("ink_or_toner",y.target.value)}})]})]})]})},oe=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u,j;const d={resolution:e!=null&&e.resolution?e.resolution:"",panel_type:e!=null&&e.panel_type?e.panel_type:"",connections:e!=null&&e.connections?e.connections:""},[m,x]=_.useState(d),o=(f,v)=>{x(h=>({...h,[f]:v}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx(p,{value:"Resolución",required:!0}),s.jsx(g,{name:"resolution",setData:o,options:V,input_props:{value:(l=r.details)==null?void 0:l.resolution}}),s.jsx(p,{value:"Tipo de Pantalla",required:!1}),s.jsx(g,{name:"panel_type",setData:o,options:Z,input_props:{value:(u=r.details)==null?void 0:u.panel_type}}),s.jsx(p,{value:"Conexiónes",required:!1}),s.jsx(g,{name:"connections",setData:o,input_props:{value:(j=r.details)==null?void 0:j.connections}})]})},pe=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u;const d={type_peripherals:e!=null&&e.type_peripherals?e.type_peripherals:"",connections:e!=null&&e.connections?e.connections:""},[m,x]=_.useState(d),o=(j,f)=>{x(v=>({...v,[j]:f}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx(p,{value:"Tipo",required:!0}),s.jsx(g,{name:"type_peripherals",setData:o,options:Q,input_props:{value:(l=r.details)==null?void 0:l.type_peripherals}}),s.jsx(p,{value:"Conexiónes"}),s.jsx(g,{name:"connections",setData:o,options:X,input_props:{value:(u=r.details)==null?void 0:u.connections}})]})},ce=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u,j;const d={brightness:e!=null&&e.brightness?e.brightness:"",input_ports:e!=null&&e.input_ports?e.input_ports:"",wireless_capabilities:e!=null&&e.wireless_capabilities?e.wireless_capabilities:""},[m,x]=_.useState(d),o=(f,v)=>{x(h=>({...h,[f]:v}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx(p,{value:"Potencia de Brillo",required:!0}),s.jsx(g,{name:"brightness",setData:o,options:$,input_props:{value:(l=r.details)==null?void 0:l.brightness}}),s.jsx(p,{value:"Conexiónes Disponibles"}),s.jsx(g,{name:"input_ports",setData:o,options:S,input_props:{value:(u=r.details)==null?void 0:u.input_ports}}),s.jsx(p,{value:"Formas de Proyección"}),s.jsx(g,{name:"wireless_capabilities",setData:o,options:D,input_props:{value:(j=r.details)==null?void 0:j.wireless_capabilities}})]})},ne=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u,j,f;const d={screen_size:e!=null&&e.screen_size?e.screen_size:"",tablet_operating_system:e!=null&&e.tablet_operating_system?e.tablet_operating_system:"",tablet_processor:e!=null&&e.tablet_processor?e.tablet_processor:"",tablet_storage_capacity:e!=null&&e.tablet_storage_capacity?e.tablet_storage_capacity:""},[m,x]=_.useState(d),o=(v,h)=>{x(E=>({...E,[v]:h}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx(p,{value:"Tamaño de Pantalla"}),s.jsx(g,{setData:o,name:"screen_size",options:i,input_props:{value:(l=r.details)==null?void 0:l.screen_size}}),s.jsx(p,{value:"Capacidad de Almacenamiento",required:!0}),s.jsx(g,{setData:o,name:"tablet_storage_capacity",options:O,input_props:{type:"number",value:(u=r.details)==null?void 0:u.tablet_storage_capacity}}),s.jsx(p,{value:"Sistema Operativo",required:!0}),s.jsx(g,{setData:o,name:"tablet_operating_system",options:t,input_props:{value:(j=r.details)==null?void 0:j.tablet_operating_system}}),s.jsx(p,{value:"Procesador"}),s.jsx(I,{name:"tablet_processor",placeholder:"Qualcomm, MediaTek, Intel Atom, Etc.",value:(f=r.details)!=null&&f.tablet_processor?r.details.tablet_processor:"",onChange:v=>{o("tablet_processor",v.target.value)}})]})},ue=({setData:c,data:r,type:n,initialStateData:e})=>{var l,u,j,f,v;const d={speed_dial:e!=null&&e.speed_dial?e.speed_dial==="1":!1,caller_id:e!=null&&e.caller_id?e.caller_id==="1":!1,call_forwarding:e!=null&&e.call_forwarding?e.call_forwarding==="1":!1,voicemail_support:e!=null&&e.voicemail_support?e.voicemail_support==="1":!1,phone_lines:e!=null&&e.phone_lines?e.phone_lines==="1":!1},[m,x]=_.useState(d),o=(h,E)=>{x(y=>({...y,[h]:E}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"-mb-1 text-sm text-gray-300",children:"Detalles Telefónicos"}),s.jsxs("div",{className:"flex flex-wrap items-center justify-start gap-2",children:[s.jsxs(p,{className:"flex items-center",children:[s.jsx("span",{className:"text-gray-400",children:"Marcación Rápida"}),s.jsx(C,{className:"ml-2",defaultChecked:(l=r.details)==null?void 0:l.speed_dial,name:"speed_dial",onChange:h=>{o("speed_dial",h.target.checked)}})]}),s.jsxs(p,{className:"flex items-center",children:[s.jsx("span",{className:"text-gray-400",children:"Identificador de Llamada"}),s.jsx(C,{className:"ml-2",defaultChecked:(u=r.details)==null?void 0:u.caller_id,name:"caller_id",onChange:h=>{o("caller_id",h.target.checked)}})]}),s.jsxs(p,{className:"flex items-center",children:[s.jsx("span",{className:"text-gray-400",children:"Desvío de Llamadas"}),s.jsx(C,{className:"ml-2",defaultChecked:(j=r.details)==null?void 0:j.call_forwarding,name:"call_forwarding",onChange:h=>{o("call_forwarding",h.target.checked)}})]}),s.jsxs(p,{className:"flex items-center",children:[s.jsx("span",{className:"text-gray-400",children:"Buzón de Voz"}),s.jsx(C,{className:"ml-2",defaultChecked:(f=r.details)==null?void 0:f.voicemail_support,name:"voicemail_support",onChange:h=>{o("voicemail_support",h.target.checked)}})]}),s.jsxs(p,{className:"flex items-center",children:[s.jsx("span",{className:"text-gray-400",children:"Línea Telefónica"}),s.jsx(C,{className:"ml-2",defaultChecked:(v=r.details)==null?void 0:v.phone_lines,name:"phone_lines",onChange:h=>{o("phone_lines",h.target.checked)}})]})]})]})},_e=({setData:c,data:r,type:n,initialStateData:e})=>{var l;const d={information:e!=null&&e.information?e.information:""},[m,x]=_.useState(d),o=(u,j)=>{x(f=>({...f,[u]:j}))};return _.useEffect(()=>{c("details",m)},[m]),_.useEffect(()=>{x(d)},[n]),s.jsxs(s.Fragment,{children:[s.jsx(p,{value:"Detalles del Equipo",required:!0}),s.jsx(a,{name:"information",value:(l=r.details)==null?void 0:l.information,onChange:u=>o("information",u.target.value)})]})},ge=({type:c,setData:r,data:n,initialStateData:e})=>{switch(c){case"1":return s.jsx(ee,{setData:r,data:n,type:c,initialStateData:e});case"2":return s.jsx(F,{setData:r,data:n,type:c,initialStateData:e});case"3":return s.jsx(se,{setData:r,data:n,type:c,initialStateData:e});case"4":return s.jsx(re,{setData:r,data:n,type:c,initialStateData:e});case"5":return s.jsx(F,{setData:r,data:n,type:c,initialStateData:e});case"6":return s.jsx(oe,{setData:r,data:n,type:c,initialStateData:e});case"7":return s.jsx(pe,{setData:r,data:n,type:c,initialStateData:e});case"8":return s.jsx(ce,{setData:r,data:n,type:c,initialStateData:e});case"9":return s.jsx(ne,{setData:r,data:n,type:c,initialStateData:e});case"10":return s.jsx(ue,{setData:r,data:n,type:c,initialStateData:e});default:return s.jsx(_e,{setData:r,data:n,type:c,initialStateData:e})}};export{ge as T};