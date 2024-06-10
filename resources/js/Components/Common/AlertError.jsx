import {useEffect} from "react";
import FeatureAlertCollapse from "@/Util/FeatureAlertCollapse.js";

const AlertError = ({errors = [], processing}) => {
    useEffect(() => {
        FeatureAlertCollapse();
    }, [processing]);

    return (
        <>
            { errors.length > 0 &&
                <div className={"fixed top-5 right-5 z-[100]"}>
                    <div className={"flex flex-col items-end w-full h-full space-y-2"}>
                        {errors.map((error, index) => {
                            if(error !== undefined) {
                                return <div key={index} className={"alert-item p-2 rounded-md shadow-md bg-red-900 w-max"}>
                                    <p>{error}</p>
                                </div>
                            }
                        })}
                    </div>
                </div>
            }
        </>
    );
}
export default AlertError;
