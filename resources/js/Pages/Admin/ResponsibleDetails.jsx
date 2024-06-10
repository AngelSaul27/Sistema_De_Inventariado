import AuthenticatedLayout from '@/Layouts/App/AuthenticatedLayout.jsx';
import {Head} from "@inertiajs/react";
import TableFilter from "@/Components/Common/TableFilter.jsx";
import Pagination from "@/Components/Common/Pagination.jsx";
import TableResponsiblesDevices from "@/Pages/Admin/components/TableResponsiblesDevices.jsx";

const ResponsibleDetails = ({ auth, responsibles, devices, searched, title}) => {

    const {data, current_page, last_page, links, total, per_page} = devices;
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={title}/>

            <div className={"bg-gray-800 rounded-md p-2 shadow-md"}>
                <div className={"text-gray-300 text-center text-sm py-2"}>
                    <p className={"text-xl font-bold"}>{responsibles.name}</p>
                    <div className={"flex gap-5 items-center justify-center"}>
                        <p className={"text-md font-bold text-gray-400"}>
                            <span>ÁREA: </span>
                            <span className={"font-normal text-gray-500"}>{responsibles.area.name}</span>
                        </p>
                        <p className={"text-md font-bold text-gray-400"}>
                            <span>REGISTRADO: </span>
                            <span className={"font-normal text-gray-500"}>
                                {new Date(responsibles.created_at).toLocaleDateString()}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <TableFilter size_page={per_page} searched={searched}/>
            <TableResponsiblesDevices datos={data}/>
            <Pagination total={total} links={links} last_page={last_page} current_page={current_page}/>
        </AuthenticatedLayout>
    )
}
export default ResponsibleDetails;
