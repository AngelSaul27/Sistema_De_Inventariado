import Label from "@/Components/Common/Forms/Label.jsx";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";
import {PERIPHERALS_CONNECTIONS, TYPE_PERIPHERALS} from "@/Util/UnchangeableValues.js";
import {useEffect, useState} from "react";


export const FormPeripherals = ({setData, data, type, initialStateData}) => {
    const initialState = {
        type_peripherals: initialStateData?.type_peripherals ? initialStateData.type_peripherals : '',
        connections: initialStateData?.connections ? initialStateData.connections : ''
    };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }))};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <Label value={"Tipo"} required={true}/>
        <SelectedCreate
            name={"type_peripherals"}
            setData={handleChange}
            options={TYPE_PERIPHERALS}
            input_props={{value: data.details?.type_peripherals}}
        />

        <Label value={"Conexiónes"} />
        <SelectedCreate
            name={"connections"}
            setData={handleChange}
            options={PERIPHERALS_CONNECTIONS}
            input_props={{value: data.details?.connections}}
        />
    </>
}
