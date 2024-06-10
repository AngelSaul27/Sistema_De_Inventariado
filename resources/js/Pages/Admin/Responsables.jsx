import AuthenticatedLayout from '@/Layouts/App/AuthenticatedLayout.jsx';
import TableFilter from "@/Components/Common/TableFilter.jsx";
import Pagination from "@/Components/Common/Pagination.jsx";
import TableResponsibles from "@/Pages/Admin/components/TableResponsibles.jsx";
import {Head} from "@inertiajs/react";

const Responsables = ({ auth, responsibles, searched, title}) => {
    const {data, current_page, last_page, links, total, per_page} = responsibles;

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={title}/>
            <TableFilter size_page={per_page} searched={searched}/>
            <TableResponsibles datos={data}/>
            <Pagination total={total} links={links} last_page={last_page} current_page={current_page}/>
        </AuthenticatedLayout>
    )
}
export default Responsables;
