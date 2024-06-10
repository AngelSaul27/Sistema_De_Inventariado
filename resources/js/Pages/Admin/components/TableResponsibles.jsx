import Dropdown from "@/Components/Common/Dropdown.jsx";
import {useEffect, useState} from "react";
import ResponsibleModalUpdateForm from "@/Pages/User/Forms/ResponsibleModalUpdateForm.jsx";
import Swal from "sweetalert2";
import {useForm} from "@inertiajs/react";

const IconEdit = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
    </svg>
)

const IconDelete = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
         stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
    </svg>
)

const IconView = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
    </svg>
)

const TableResponsibles = ({datos}) => {
    const {post} = useForm();
    const [showModal, setShowModal] = useState(false);
    const [idSelect, setIdSelect] = useState(null);

    const HandleOpenModal = (id) => {
        setIdSelect(id);
    }

    const HandleCloseModal = () => {
        setShowModal(false);
        setIdSelect(null);
    }

    const HandleDeleteResponsible = (id) => {
        Swal.fire({
            title: "Seguro de esta acción?",
            text: "Todos los equipos asociados serán eliminados.",
            showDenyButton: true,
            showCancelButton: false,
            denyButtonText: "Cancelar",
            confirmButtonText: "Confirmar",
            confirmButtonColor: "#2D8E4F",
            cancelButtonColor: "#8E2D2D",
            background: "#1f2937",
            color: "#d6d6d6",
            icon: "warning"
        }).then((result) => {
            if (result.isConfirmed) {
                post(`/admin/remover-responsable/${id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            color: "#d6d6d6",
                            background: "#1f2937",
                            confirmButtonColor: "#2D8E4F",
                            title:"¡Responsable Eliminado!",
                            icon:"success",
                            html:""
                        });
                    },
                });
            }
        });
    }

    useEffect(() => {
        if (idSelect !== null) {
            setShowModal(true);
        }
    }, [idSelect]);

    return (
        <>
            <div className="md:overflow-x-visible overflow-x-auto">
                <table className="w-full rounded-lg">
                    <thead className="bg-gray-800 font-bold text-gray-300 shadow-sm rounded-md">
                    <tr>
                        <th className="px-3 text-left w-max">#</th>
                        <th className="px-3 text-left py-2 ">AREA</th>
                        <th className="px-3 text-left py-2 ">NOMBRE</th>
                        <th className="px-3 text-left py-2 ">RESGUARDOS</th>
                        <th className="px-3 text-left py-2 ">REGISTRO</th>
                        <th className="px-3 text-left py-2 "></th>
                    </tr>
                    </thead>
                    <tbody className="text-left bg-gray-700 text-gray-300">
                    {datos.length > 0 ? datos.map((datos, index) => (
                            <tr className="font-light text-sm" key={index}>
                                <td className="p-2">{index}</td>
                                <td className="p-2">{datos.area.name}</td>
                                <td className="p-2">{datos.name}</td>
                                <td className="p-2">{datos.devices_count}</td>
                                <td className="p-2">{new Date(datos.created_at).toLocaleString()}</td>
                                <td className="p-2">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <button
                                                className="flex items-center gap-1 px-2 py-2 bg-neutral-900 rounded-md mx-auto">
                                                <span className="text-xs">Acciones</span>
                                            </button>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content width={"max"} contentClasses={"bg-neutral-900 py-2 z-100"} align={"ltr:origin-top-right rtl:origin-left-left -top-2 right-24"}>
                                            <div className="flex flex-col space-y-2 text-gray-500 select-none">
                                                <a href={"/admin/ver-responsable/" + datos.id} target={"_blank"}
                                                   className={"cursor-pointer"}>
                                                    <Item
                                                        text={"Explorar"}
                                                        className={"hover:text-blue-600"}
                                                        children={<IconView/>}
                                                    />
                                                </a>
                                                <div onClick={() => HandleOpenModal(datos.id)}
                                                     className={"cursor-pointer"}>
                                                    <Item
                                                        text={"Editar"}
                                                        className={"hover:text-blue-600"}
                                                        children={<IconEdit/>}
                                                    />
                                                </div>
                                                <div onClick={() => HandleDeleteResponsible(datos.id)}
                                                     className={"cursor-pointer"}>
                                                    <Item
                                                        text={"Eliminar"}
                                                        className={"hover:text-red-600"}
                                                        children={<IconDelete/>}
                                                    />
                                                </div>
                                            </div>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </td>
                            </tr>
                        )) :
                        <tr>
                            <td className="py-2 px-2" colSpan={10}>
                                <p className={"text-center font-light text-xl"}>Sin información</p>
                            </td>
                        </tr>
                    }
                    </tbody>
                </table>
            </div>

            <ResponsibleModalUpdateForm
                url={"admin-editar-responsable"}
                showModal={showModal} setCloseModal={HandleCloseModal} id={idSelect}/>
        </>
    );
}
export default TableResponsibles;
const Item = ({children, text, className}) => (
    <span
        className={"flex px-5 py-1 gap-2 items-center hover:-translate-x-1 w-max transition-all duration-300 " + className}>
        {children}
        <span className={"text-s"}>{text}</span>
    </span>
)
