import InputDark from "@/Components/Common/Forms/InputDark.jsx";
import {IcAcrobat, IcArrowDown, IcExcel, IcEyes, IcPrint} from "../../../icons/dashborad.jsx";
import {useState} from "react";

const TableFilter = ({size_page, searched, option}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handlePageSizeChange = (e) => {
        const newSize = e.target.value;
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('size', newSize);
        window.location.search = searchParams.toString();
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmitSearch = () => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('searchTerm', searchTerm);
        window.location.search = searchParams.toString();
    };

    const handleResetSearch = () => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.delete('searchTerm');
        window.location.search = searchParams.toString();
    };

    return (
        <div className="flex items-center flex-col md:flex-row justify-between gap-y-2">
            <div className="pagination flex items-center gap-2 text-gray-300">
                <select
                    className="dark:bg-gray-800 dark:shadow-sm rounded-md border-none outline-none"
                    onChange={handlePageSizeChange}
                    defaultValue={size_page}
                >
                    <option value={""} className={"hidden"}>Seleccionar</option>
                    {option}
                    <option value={"10"}>10</option>
                    <option value={"20"}>20</option>
                    <option value={"40"}>40</option>
                    <option value={"80"}>80</option>
                    <option value={"100"}>100</option>
                </select>
                <span> por pagina</span>
            </div>
            <div className="search w-full md:w-[40%]">
                <div className={"flex gap-2"}>
                    <InputDark onChange={handleSearchChange} placeholder={"Buscar"} className={"w-full"}/>
                    {searchTerm &&
                        <button onClick={handleSubmitSearch} className={"bg-gray-800 rounded-md px-2"}>
                            Buscar
                        </button>
                    }
                    {searched && !searchTerm &&
                        <button onClick={handleResetSearch} className={"bg-gray-800 rounded-md px-2"}>
                            Limpiar
                        </button>
                    }
                </div>
            </div>

            <div className="report flex items-center dark:text-gray-300">
                <button className="bg-red-900 h-[40px] px-3 rounded-l hidden">
                    <IcAcrobat/>
                </button>

                <button className="bg-green-900 h-[40px] px-3 rounded-l">
                    <IcExcel/>
                </button>

                <button className="bg-amber-900 h-[40px] px-3">
                    <IcPrint/>
                </button>

                <button className="bg-blue-900 h-[40px] flex items-center px-3 rounded-r">
                    <IcEyes/>
                    <IcArrowDown/>
                </button>
            </div>
        </div>
    )
}
export default TableFilter;
