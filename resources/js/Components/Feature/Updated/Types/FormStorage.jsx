import Label from "@/Components/Common/Forms/Label.jsx";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";
import {CAPACITY_STORAGES, TYPE_STORAGES} from "@/Util/UnchangeableValues.js";
import {useEffect, useState} from "react";

export const FormStorage = ({setData, data, type, initialStateData}) => {
    const initialState = {
        type_storage: initialStateData?.type_storage ? initialStateData.type_storage : '',
        capacity_storage: initialStateData?.capacity_storage ? initialStateData.capacity_storage : ''
    };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }));};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <Label value={"Tipo del Almacenamiento"} required={true}/>
        <SelectedCreate
            setData={handleChange}
            name={"type_storage"}
            options={TYPE_STORAGES}
            input_props={{ value: data.details?.type_storage}}
        />
        <Label value={"Capacidad"} required={true}/>
        <SelectedCreate
            setData={handleChange}
            name={"capacity_storage"}
            options={CAPACITY_STORAGES}
            input_props={{type: "number", value: data.details?.capacity_storage}}
        />
    </>
}
