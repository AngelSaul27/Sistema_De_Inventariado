import {IcArrowLeft, IcArrowRight} from "../../../icons/dashborad.jsx";
import React from "react";

const Pagination = ({current_page, last_page, links, total}) => {

    if(links.length <= 0 || total <= 0){
        return null
    }

    const PrevButton = () => (
        <>
            {current_page !== 1 ?
                <a href={'?page='+(current_page -1)} className="rounded-l-md bg-gray-800 p-2 text-gray-300 text-sm">
                    <IcArrowLeft/>
                </a>
                :
                <button className="rounded-l-md bg-gray-500 opacity-20 p-2 text-gray-300 text-sm" disabled={true}>
                    <IcArrowLeft/>
                </button>
            }
        </>
    )

    const NextButton = () => (
        <>
            {current_page !== last_page ?
                <a href={'?page='+(current_page + 1)} className="rounded-r-md bg-gray-800 p-2 text-gray-300 text-sm">
                    <IcArrowRight/>
                </a>
                :
                <button className="rounded-r-md bg-gray-500 opacity-20 p-2 text-gray-300 text-sm">
                    <IcArrowRight/>
                </button>
            }
        </>
    )

    const ItemLinks = () => (
        links.map((link, index) => {
            if(index !== 0 && index !== last_page+1){
                return (
                    <a href={'?page='+index} key={index} className={"px-3 py-2 text-gray-300 text-sm "+(link.active ? "bg-gray-700" : "bg-gray-800")}>
                        <strong>{link.label}</strong>
                    </a>
                )
            }else{
                return null
            }
        })
    )

    return (
        <div className="pagination flex flex-col sm:flex-row justify-between items-center gap-y-2 sm:items-start">
            <span
                className="text-gray-300 text-sm font-[200]">Elementos {current_page} - {last_page} ({last_page})</span>
            <div className="flex items-center">
                <PrevButton />
                {ItemLinks()}
                <NextButton />
            </div>
        </div>
    )
}
export default Pagination;
