import React from "react";

const OverviewBox = React.memo(({children, amount, text}) => (
    <div className={"bg-gray-800 p-4 text-gray-300 rounded-md shadow-md flex flex-col justify-center items-center gap-2"}>
        {children}
        <span className="text-lg tracking-wider font-bold">{text}: {amount}</span>
    </div>
));
export default OverviewBox;
