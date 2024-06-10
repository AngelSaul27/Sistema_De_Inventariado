import Label from "@/Components/Common/Forms/Label.jsx";
import Checkbox from "@/Components/Common/Forms/Checkbox.jsx";
import {useEffect, useState} from "react";

export const FormTelephony = ({setData, data, type, initialStateData}) => {
    const initialState = {
        speed_dial: initialStateData?.speed_dial ? initialStateData.speed_dial === "1" : false,
        caller_id: initialStateData?.caller_id ? initialStateData.caller_id === "1" : false,
        call_forwarding: initialStateData?.call_forwarding ? initialStateData.call_forwarding === "1" : false,
        voicemail_support: initialStateData?.voicemail_support ? initialStateData.voicemail_support === "1" : false,
        phone_lines: initialStateData?.phone_lines ? initialStateData.phone_lines === "1" : false
    };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }));};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <span className={"-mb-1 text-sm text-gray-300"}>Detalles Telefónicos</span>
        <div className={"flex flex-wrap items-center justify-start gap-2"}>
            <Label className={"flex items-center"}>
                <span className={"text-gray-400"}>Marcación Rápida</span>
                <Checkbox
                    className={"ml-2"}
                    defaultChecked={data.details?.speed_dial}
                    name={"speed_dial"}
                    onChange={(e) => {
                        handleChange('speed_dial', e.target.checked)
                    }}
                />
            </Label>
            <Label className={"flex items-center"}>
                <span className={"text-gray-400"}>Identificador de Llamada</span>
                <Checkbox
                    className={"ml-2"}
                    defaultChecked={data.details?.caller_id}
                    name={"caller_id"}
                    onChange={(e) => {
                        handleChange('caller_id', e.target.checked)
                    }}
                />
            </Label>
            <Label className={"flex items-center"}>
                <span className={"text-gray-400"}>Desvío de Llamadas</span>
                <Checkbox
                    className={"ml-2"}
                    defaultChecked={data.details?.call_forwarding}
                    name={"call_forwarding"}
                    onChange={(e) => {
                        handleChange('call_forwarding', e.target.checked)
                    }}
                />
            </Label>
            <Label className={"flex items-center"}>
                <span className={"text-gray-400"}>Buzón de Voz</span>
                <Checkbox
                    className={"ml-2"}
                    defaultChecked={data.details?.voicemail_support}
                    name={"voicemail_support"}
                    onChange={(e) => {
                        handleChange('voicemail_support', e.target.checked)
                    }}
                />
            </Label>
            <Label className={"flex items-center"}>
                <span className={"text-gray-400"}>Línea Telefónica</span>
                <Checkbox
                    className={"ml-2"}
                    defaultChecked={data.details?.phone_lines}
                    name={"phone_lines"}
                    onChange={(e) => {
                        handleChange('phone_lines', e.target.checked)
                    }}
                />
            </Label>
        </div>
    </>
}
