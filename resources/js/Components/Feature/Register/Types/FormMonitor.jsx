import Label from "@/Components/Common/Forms/Label.jsx";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";
import {RESOLUTION_MONITOR, TYPE_MONITOR} from "@/Util/UnchangeableValues.js";
import {useEffect, useState} from "react";

const initialState = {
    resolution: '',
    panel_type: '',
    connections: ''
};

export const FormMonitor = ({setData, data, type}) => {
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }));};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <Label value={"Resolución"} required={true}/>
        <SelectedCreate
            name={"resolution"}
            setData={handleChange}
            options={RESOLUTION_MONITOR}
            input_props={{value: data.details?.resolution}}
        />
        <Label value={"Tipo de Pantalla"} required={false}/>
        <SelectedCreate
            name={"panel_type"}
            setData={handleChange}
            options={TYPE_MONITOR}
            input_props={{value: data.details?.panel_type}}
        />
        <Label value={"Conexiónes"} required={false}/>
        <SelectedCreate
            name={"connections"}
            setData={handleChange}
            input_props={{value: data.details?.connections}}
        />
    </>
}
