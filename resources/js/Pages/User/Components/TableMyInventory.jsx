import Dropdown from "@/Components/Common/Dropdown.jsx";
import ActionTableData from "@/Pages/User/Components/OptionsTables.jsx";

const TableMyInventory = ({datos}) => {

    return (
        <div className="md:overflow-x-visible overflow-x-auto">
            <table className="w-full rounded-lg">
                <thead className="bg-gray-800 font-bold text-gray-300 shadow-sm rounded-md">
                    <tr>
                        <th className="px-3 text-left py-2">#</th>
                        <th className="px-3 text-left py-2">EQUIPO</th>
                        <th className="px-3 text-left py-2">RESPONSABLE</th>
                        <th className="px-3 text-left py-2">N° SERIE</th>
                        <th className="px-3 text-left py-2">GARANTÍA</th>
                        <th className="px-3 text-left py-2">ESTADO</th>
                        <th className="px-3 text-left py-2">OBSERVACIONES</th>
                        <th className="px-3 text-left py-2">REGISTRO</th>
                        <th className="px-3 text-left py-2"></th>
                    </tr>
                </thead>
                <tbody className="text-left bg-gray-700 text-gray-300">
                    { datos.length > 0 ? datos.map((datos, index) => (
                        <tr className="font-light text-sm" key={index}>
                            <td className="py-2 px-2">{index}</td>
                            <td className="py-2 px-2">{datos?.types?.name}</td>
                            <td className="py-2 px-2">{datos?.responsible?.name ? datos?.responsible?.name : 'Sin responsable'}</td>
                            <td className="py-2 px-2">{datos?.serial_number ? datos?.serial_number : 'Sin numero de serie'}</td>
                            <td className="py-2 px-2">{datos?.warranty ? new Date(datos?.warranty).toLocaleDateString(): 'Sin información'}</td>
                            <td className="py-2 px-2">{datos?.condition}</td>
                            <td className="py-2 px-2">{datos?.comments ? datos?.comments : 'Sin observaciones'}</td>
                            <td className="py-2 px-2">{new Date(datos?.created_at).toLocaleDateString()}</td>
                            <td className="p-2">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="flex items-center gap-1 px-2 py-2 bg-neutral-900 rounded-md mx-auto">
                                            <span className="text-xs">Acciones</span>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content width={"max"} contentClasses={"bg-neutral-900 py-2 z-100"}>
                                        <ActionTableData id={datos?.id} />
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
    )
}
export default TableMyInventory;
