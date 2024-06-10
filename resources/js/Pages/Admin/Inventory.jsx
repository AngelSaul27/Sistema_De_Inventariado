import AuthenticatedLayout from '@/Layouts/App/AuthenticatedLayout.jsx';
import TableFilter from "@/Components/Common/TableFilter.jsx";
import TableInventory from "@/Pages/Admin/components/TableInventory.jsx";
import Pagination from "@/Components/Common/Pagination.jsx";
import {Head} from "@inertiajs/react";
import Vincule from "@/Components/Common/Vincule.jsx";

const Inventory = ({ auth, devices, searched, title}) => {
    const {data, current_page, last_page, links, total, per_page} = devices;

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={title}/>

            <div className={"flex items-center justify-center"}>
                <Vincule href={"/admin/agregar-equipo"} className={"flex gap-2 items-center font-light bg-gray-700 p-2 rounded-md"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/>
                    </svg>
                    <span>Registrar Equipos</span>
                </Vincule>
            </div>

            <TableFilter size_page={per_page} searched={searched}/>
            <TableInventory datos={data} />
            <Pagination current_page={current_page} last_page={last_page} links={links} total={total}/>
        </AuthenticatedLayout>
    )
}
export default Inventory;
