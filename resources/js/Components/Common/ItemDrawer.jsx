import {Link} from "@inertiajs/react";
import React from "react";

const ItemDrawer = React.memo(({className = '', children, text, ...props}) => {

    return (
        <Link className={'flex flex-col items-center hover:text-gray-500 duration-300 w-full text-gray-300'+className} {...props}>
            {children}
            <span className="text-[12px] text-center font-light">{text}</span>
        </Link>
    )
});
export default ItemDrawer;
