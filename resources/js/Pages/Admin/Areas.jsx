import AuthenticatedLayout from '@/Layouts/App/AuthenticatedLayout.jsx';
import TableFilter from "@/Components/Common/TableFilter.jsx";
import Pagination from "@/Components/Common/Pagination.jsx";
import ListBoxAreas from "@/Pages/Admin/components/ListBoxAreas.jsx";
import Vincule from "@/Components/Common/Vincule.jsx";
import {Head} from "@inertiajs/react";

const HeaderOptions = () => (
    <div className={"flex gap-4 justify-center mb-2"}>
        <Vincule href={"/admin/agregar-area"}
                 className={"flex gap-2 items-center font-light bg-gray-700 p-2 rounded-md"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
            </svg>
            <span>Registrar Area</span>
        </Vincule>
    </div>
)
const Areas = ({ auth, areas, searched}) => {
    const {data, current_page, last_page, links, total, per_page} = areas;

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={"Listado de Areas"}/>
            <HeaderOptions />

            <TableFilter size_page={per_page} searched={searched} option={<option value={"12"}>12</option>}/>
            <ListBoxAreas data={data}/>
            <Pagination current_page={current_page} last_page={last_page} links={links} total={total} />
        </AuthenticatedLayout>
    )
}
export default Areas;
