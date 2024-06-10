import {FormStorage} from "@/Components/Feature/Register/Types/FormStorage.jsx";
import {FormComputers} from "@/Components/Feature/Register/Types/FormComputers.jsx";
import {FormNetwork} from "@/Components/Feature/Register/Types/FormNetwork.jsx";
import {FormPrinters} from "@/Components/Feature/Register/Types/FormPrinters.jsx";
import {FormMonitor} from "@/Components/Feature/Register/Types/FormMonitor.jsx";
import {FormPeripherals} from "@/Components/Feature/Register/Types/FormPeripherals.jsx";
import {FormProjector} from "@/Components/Feature/Register/Types/FormProjector.jsx";
import {FormTablets} from "@/Components/Feature/Register/Types/FormTablets.jsx";
import {FormTelephony} from "@/Components/Feature/Register/Types/FormTelephony.jsx";
import {FormOthers} from "@/Components/Feature/Register/Types/FormOthers.jsx";

const TypesRegisterDevices = ({ type, setData, data }) => {
    switch (type) {
        case "1":
            return <FormStorage setData={setData} data={data} type={type} />;
        case "2":
            return <FormComputers setData={setData} data={data} type={type} />;
        case "3":
            return <FormNetwork setData={setData} data={data} type={type} />;
        case "4":
            return <FormPrinters setData={setData} data={data} type={type} />;
        case "5":
            return <FormComputers setData={setData} data={data} type={type} />;
        case "6":
            return <FormMonitor setData={setData} data={data} type={type} />;
        case "7":
            return <FormPeripherals setData={setData} data={data} type={type} />;
        case "8":
            return <FormProjector setData={setData} data={data} type={type} />;
        case "9":
            return <FormTablets setData={setData} data={data} type={type} />;
        case "10":
            return <FormTelephony setData={setData} data={data} type={type} />;
        default:
            return <FormOthers setData={setData} data={data} type={type} />;
    }
};
export default TypesRegisterDevices;
