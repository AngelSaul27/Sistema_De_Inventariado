import Label from "@/Components/Common/Forms/Label.jsx";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";
import {NETWORK_BANDWIDTH, NETWORK_SPEED, TYPE_NETWORK} from "@/Util/UnchangeableValues.js";
import Input from "@/Components/Common/Forms/Input.jsx";
import {useEffect, useState} from "react";

export const FormNetwork = ({setData, data, type, initialStateData}) => {
    const initialState = {
        type_network: initialStateData?.type_network ? initialStateData.type_network : '',
        security_protocol: initialStateData?.security_protocol ? initialStateData.security_protocol : '',
        bandwidth: initialStateData?.bandwidth ? initialStateData.bandwidth : '',
        speed: initialStateData?.speed ? initialStateData.speed : ''
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }))};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <Label value={"Tipo"} required={true}/>
        <SelectedCreate
            name={"type_network"}
            setData={handleChange}
            options={TYPE_NETWORK}
            input_props={{value: data.details?.type_network}}
        />
        <Label value={"Velocidad"} required={true}/>
        <SelectedCreate
            name={"speed"}
            setData={handleChange}
            options={NETWORK_SPEED}
            input_props={{value: data.details?.speed, type: "number"}}
        />
        <Label value={"Ancho de Banda"} required={true}/>
        <SelectedCreate
            name={"bandwidth"}
            setData={handleChange}
            options={NETWORK_BANDWIDTH}
            input_props={{value: data.details?.bandwidth, type: "number"}}
        />
        <Label value={"Protocolo de Seguridad"}/>
        <Input
            name={"security_protocol"}
            placeholder={"WEP, WPA, WPA2"}
            value={data.details?.security_protocol ? data.details.security_protocol : ''}
            onChange={(e) => {
                handleChange('security_protocol', e.target.value)
            }}
        />
    </>
}
