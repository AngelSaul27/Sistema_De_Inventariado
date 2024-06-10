import Label from "@/Components/Common/Forms/Label.jsx";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";
import {CAPACITY_STORAGES, TYPE_STORAGES} from "@/Util/UnchangeableValues.js";
import {useEffect, useState} from "react";

const initialState = {
    type_storage: '',
    capacity_storage: ''
};

const initialOptions = {
    'Storage' : TYPE_STORAGES,
    'Capacity' : CAPACITY_STORAGES
}

export const FormStorage = ({setData, data, type}) => {
    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        setFormData(initialState);
    }, [type]); // Resetear el estado cuando type cambia

    const handleChange = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
        setData('details', formData);
    }, [formData]);

    return <>
        <Label value={"Tipo del Almacenamiento"} required={true}/>
        <SelectedCreate
            setData={handleChange}
            name={"type_storage"}
            options={initialOptions.Storage}
            input_props={{ value: data.details?.type_storage}}
        />
        <Label value={"Capacidad"} required={true}/>
        <SelectedCreate
            setData={handleChange}
            name={"capacity_storage"}
            options={initialOptions.Capacity}
            input_props={{type: "number", value: data.details?.capacity_storage}}
        />
    </>
}
