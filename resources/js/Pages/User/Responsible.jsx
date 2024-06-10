import {useState} from "react";
import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import TableFilter from "@/Components/Common/TableFilter.jsx";
import OptionResponsible from "@/Pages/User/Components/OptionResponsible.jsx";
import TableMyResponsibles from "@/Pages/User/Components/TableMyResponsibles.jsx";
import Pagination from "@/Components/Common/Pagination.jsx";

const Responsible = ({auth, responsibles, searched}) => {
    const [showModal, setShowModal] = useState(false);
    const {data, current_page, last_page, links, total, per_page} = responsibles;

    return (
        <AuthenticatedLayout user={auth.user} title={"Responsables"}>
            <div className={"flex gap-4 justify-center mb-2"}>
                <OptionResponsible setShowModal={setShowModal} showModal={showModal}/>
            </div>

            <TableFilter size_page={per_page} searched={searched}/>
            <TableMyResponsibles datos={data}/>
            <Pagination total={total} links={links} last_page={last_page} current_page={current_page}/>
        </AuthenticatedLayout>
    );
}
export default Responsible;
