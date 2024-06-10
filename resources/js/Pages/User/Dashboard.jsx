import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import OverviewBox from "@/Components/Common/OverviewBox.jsx";
import TableFilter from "@/Components/Common/TableFilter.jsx";
import Pagination from "@/Components/Common/Pagination.jsx";
import OptionDevices from "@/Pages/User/Components/OptionDevices.jsx";
import OptionResponsible from "@/Pages/User/Components/OptionResponsible.jsx";
import {useState} from "react";
import TableMyInventory from "@/Pages/User/Components/TableMyInventory.jsx";

const IconDesktop = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
         className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"/>
    </svg>
);
const IconPeopleGroup = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
         className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
    </svg>
);

const Dashboard = ({auth, page_data, searched}) => {
    const [showModal, setShowModal] = useState(false);
    const {devices, count_responsibles} = page_data;
    const {data, current_page, last_page, links, total, per_page} = devices;

    return (
        <AuthenticatedLayout user={auth.user} title={"Panel"}>
            <OverviewInformation
                showModal={showModal}
                setShowModal={setShowModal}
                total_devices={total}
                total_responsibles={count_responsibles}
            />

            <TableFilter size_page={per_page} searched={searched} />
            <TableMyInventory datos={data ? data : []}/>
            <Pagination current_page={current_page} last_page={last_page} links={links} total={total}/>
        </AuthenticatedLayout>
    )
}

const OverviewInformation = ({setShowModal, showModal, total_devices, total_responsibles}) => (
    <>
        <div className={"flex gap-4 justify-center mb-2"}>
            <OptionDevices/>
            <OptionResponsible setShowModal={setShowModal} showModal={showModal}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OverviewBox text="Equipos" amount={total_devices} children={<IconDesktop/>}/>
            <OverviewBox text="Responsables" amount={total_responsibles} children={<IconPeopleGroup/>}/>
        </div>
    </>
)
export default Dashboard;
