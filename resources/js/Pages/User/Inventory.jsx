import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import TableFilter from "@/Components/Common/TableFilter.jsx";
import OptionDevices from "@/Pages/User/Components/OptionDevices.jsx";
import Pagination from "@/Components/Common/Pagination.jsx";
import TableMyInventory from "@/Pages/User/Components/TableMyInventory.jsx";

const Inventory = ({auth, devices, searched, title}) => {
    const {data, current_page, last_page, links, total, per_page} = devices;

    return (
        <AuthenticatedLayout user={auth.user} title={title}>
            <div className={"flex gap-4 justify-center mb-2"}>
                <OptionDevices/>
            </div>

            <TableFilter size_page={per_page} searched={searched} />
            <TableMyInventory datos={data ? data : []} />
            <Pagination current_page={current_page} last_page={last_page} links={links} total={total}/>
        </AuthenticatedLayout>
    )
}
export default Inventory;
