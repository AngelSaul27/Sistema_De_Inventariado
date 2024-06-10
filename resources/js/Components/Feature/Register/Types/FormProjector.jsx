import {useEffect, useState} from "react";
import Label from "@/Components/Common/Forms/Label.jsx";
import {PROJECTOR_BRIGHTNESS, PROJECTOR_PORTS, PROJECTOR_WIRELESS} from "@/Util/UnchangeableValues.js";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";

const initialState = {
    brightness: '', //brillo del proyector
    input_ports: '', //puertos de entrada (HDMI, VGA, USB, RCA)
    wireless_capabilities: '', //capacidades inalámbricas (proyección inalámbrica)
}

export const FormProjector = ({setData, data, type}) => {
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }))};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <Label value={"Potencia de Brillo"} required={true}/>
        <SelectedCreate
            name={"brightness"}
            setData={handleChange}
            options={PROJECTOR_BRIGHTNESS}
            input_props={{value: data.details?.brightness}}
        />

        <Label value={"Conexiónes Disponibles"}/>
        <SelectedCreate
            name={"input_ports"}
            setData={handleChange}
            options={PROJECTOR_PORTS}
            input_props={{value: data.details?.input_ports}}
        />

        <Label value={"Formas de Proyección"}/>
        <SelectedCreate
            name={"wireless_capabilities"}
            setData={handleChange}
            options={PROJECTOR_WIRELESS}
            input_props={{value: data.details?.wireless_capabilities}}
        />
    </>
}
