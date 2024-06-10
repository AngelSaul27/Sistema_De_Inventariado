import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import {Head, useForm} from "@inertiajs/react";
import TableInventory from "@/Pages/Admin/components/TableInventory.jsx";
import Pagination from "@/Components/Common/Pagination.jsx";
import Swal from "sweetalert2";
import TableFilter from "@/Components/Common/TableFilter.jsx";

const AreaDetails = ({auth, area, devices, searched}) => {
    const {data, current_page, last_page, per_page, links, total} = devices;
    const {post} = useForm();

    const HandleDeleted = (id) => {
        Swal.fire({
            title: "Seguro de esta acción?",
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
                post(`/admin/remover-area/${id}`, {
                    onSuccess: () => {
                        Swal.fire({
                            color: "#d6d6d6",
                            background: "#1f2937",
                            confirmButtonColor: "#2D8E4F",
                            title:"¡Área Eliminada!",
                            icon:"success",
                            html:""
                        });
                    },
                });
            }
        });
    }

    const AreaInformation = () => (
        <div className={"flex flex-col space-y-4 bg-gray-800 rounded-md md:max-w-md w-full"}>
            <img src={area.logotipo} alt={area.name} width={600} height={150} className={"rounded-t-md h-[150px] object-cover"}/>
            <div className={"px-5 py-2 pb-2 relative"}>
                <small className={"absolute -top-2 right-2 text-gray-500"}>
                    <strong>Registro:</strong> {new Date(area.created_at).toLocaleDateString()}
                </small>
                <h1 className={"text-xl font-bold"}>{area.name}</h1>
                <div className={"flex items-center justify-between pt-2"}>
                    <div className={"cursor-pointer"} onClick={()=> HandleDeleted(area.id)}>
                        <div className={"text-sm text-gray-400 hover:text-red-900 flex items-center duration-300 transition-all gap-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                            </svg>
                            <span>Eliminar</span>
                        </div>
                    </div>
                    <a href={"/admin/editar-area/" + area.id}>
                        <div
                            className={"text-sm text-gray-400 hover:text-blue-900 flex items-center duration-300 transition-all gap-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                            </svg>
                            <span>Editar</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={area.name ? area.name : 'Error'}/>

            <div className={"flex flex-col gap-4 items-center justify-center"}>
                <AreaInformation/>

                <div className={"w-full"}>
                    <TableFilter size_page={per_page} searched={searched}/>
                </div>
                <TableInventory datos={data ? data : []}/>

                <div className={"w-full"}>
                    <Pagination current_page={current_page} last_page={last_page} links={links} total={total}/>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
export default AreaDetails;
