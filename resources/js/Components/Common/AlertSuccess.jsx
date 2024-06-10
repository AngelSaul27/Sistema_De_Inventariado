import {useEffect} from "react";
import FeatureAlertCollapse from "@/Util/FeatureAlertCollapse.js";

const AlertError = ({wasSuccess}) => {
    useEffect(() => {
        FeatureAlertCollapse();
    }, [wasSuccess]);

    return (
        <>
            { wasSuccess &&
                <div className={"fixed top-5 right-5 z-[100]"}>
                    <div className={"flex flex-col items-end w-full h-full space-y-2"}>
                        <div className={"alert-item p-2 rounded-md shadow-md bg-green-900 w-max"}>
                            <p>¡Proceso exitoso!</p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default AlertError;
