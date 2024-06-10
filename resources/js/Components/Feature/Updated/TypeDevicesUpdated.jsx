import {FormStorage} from "@/Components/Feature/Updated/Types/FormStorage.jsx";
import {FormComputers} from "@/Components/Feature/Updated/Types/FormComputers.jsx";
import {FormNetwork} from "@/Components/Feature/Updated/Types/FormNetwork.jsx";
import {FormPrinters} from "@/Components/Feature/Updated/Types/FormPrinters.jsx";
import {FormMonitor} from "@/Components/Feature/Updated/Types/FormMonitor.jsx";
import {FormPeripherals} from "@/Components/Feature/Updated/Types/FormPeripherals.jsx";
import {FormProjector} from "@/Components/Feature/Updated/Types/FormProjector.jsx";
import {FormTablets} from "@/Components/Feature/Updated/Types/FormTablets.jsx";
import {FormTelephony} from "@/Components/Feature/Updated/Types/FormTelephony.jsx";
import {FormOthers} from "@/Components/Feature/Updated/Types/FormOthers.jsx";

const TypeDevicesUpdated = ({ type, setData, data, initialStateData }) => {
    switch (type) {
        case "1":
            return <FormStorage setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "2":
            return <FormComputers setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "3":
            return <FormNetwork setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "4":
            return <FormPrinters setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "5":
            return <FormComputers setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "6":
            return <FormMonitor setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "7":
            return <FormPeripherals setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "8":
            return <FormProjector setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "9":
            return <FormTablets setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        case "10":
            return <FormTelephony setData={setData} data={data} type={type} initialStateData={initialStateData} />;
        default:
            return <FormOthers setData={setData} data={data} type={type} initialStateData={initialStateData} />;
    }
};

export default TypeDevicesUpdated;
