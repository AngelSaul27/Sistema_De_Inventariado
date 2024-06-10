import Vincule from "@/Components/Common/Vincule.jsx";

const ListBoxAreas = ({data}) => {

    const ItemArea = ({it, index}) => (
        <Vincule href={"/admin/ver-area/"+it.id} className={"bg-gray-800 rounded-md p-2 shadow-md hover:-translate-y-1 duration-300 ease-out"}>
            <div className={"rounded-sm overflow-hidden"}>
                <img src={it.logotipo} className={"h-[100px] w-full object-cover"} alt={"Sin imagen"}/>
            </div>
            <div className={"text-gray-300 text-sm font-light pt-4 pb-2"}>
                <p className={"text-md font-bold"}>{it.name}</p>
                <p className={"text-xs font-bold text-gray-400"}>
                    <span>Equipos: </span>
                    <span className={"font-light text-gray-500"}>Sin registro</span>
                </p>
                <p className={"text-xs font-bold text-gray-400"}>
                    <span>Responsables: </span>
                    <span className={"font-light text-gray-500"}>Sin registro</span>
                </p>
                <p className={"text-xs font-bold text-gray-400"}>
                    <span>Registro: </span>
                    <span className={"font-light text-gray-500"}>
                        {new Date(it.created_at).toLocaleDateString()}
                    </span>
                </p>
            </div>
        </Vincule>
    )

    return (
        <div className={"grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"}>
            {data.length > 0 ?
                data.map((it, index) => (
                    <ItemArea it={it} key={index} />
                ))
                :
                <p className={"text-gray-300 text-center py-10 col-span-6"}>No hay areas disponibles</p>
            }
        </div>
    )

}
export default ListBoxAreas;
