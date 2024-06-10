import {useEffect, useState} from "react";
import Label from "@/Components/Common/Forms/Label.jsx";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";
import {CAPACITY_STORAGES, TABLETS_OPERATING_SYSTEM, TABLETS_SCREEN_SIZE} from "@/Util/UnchangeableValues.js";
import Input from "@/Components/Common/Forms/Input.jsx";

export const FormTablets = ({setData, data, type, initialStateData}) => {
    const initialState = {
        screen_size: initialStateData?.screen_size ? initialStateData.screen_size : '',
        tablet_operating_system: initialStateData?.tablet_operating_system ? initialStateData.tablet_operating_system : '',
        tablet_processor: initialStateData?.tablet_processor ? initialStateData.tablet_processor : '',
        tablet_storage_capacity: initialStateData?.tablet_storage_capacity ? initialStateData.tablet_storage_capacity : '',
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }));};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <Label value={"Tamaño de Pantalla"}/>
        <SelectedCreate
            setData={handleChange}
            name={"screen_size"}
            options={TABLETS_SCREEN_SIZE}
            input_props={{value: data.details?.screen_size}}
        />

        <Label value={"Capacidad de Almacenamiento"} required={true}/>
        <SelectedCreate
            setData={handleChange}
            name={"tablet_storage_capacity"}
            options={CAPACITY_STORAGES}
            input_props={{type: "number", value: data.details?.tablet_storage_capacity}}
        />

        <Label value={"Sistema Operativo"} required={true}/>
        <SelectedCreate
            setData={handleChange}
            name={"tablet_operating_system"}
            options={TABLETS_OPERATING_SYSTEM}
            input_props={{value: data.details?.tablet_operating_system}}
        />

        <Label value={"Procesador"}/>
        <Input
            name={"tablet_processor"}
            placeholder={"Qualcomm, MediaTek, Intel Atom, Etc."}
            value={data.details?.tablet_processor ? data.details.tablet_processor : ''}
            onChange={(e) => {
                handleChange('tablet_processor', e.target.value)
            }}
        />
    </>
}
