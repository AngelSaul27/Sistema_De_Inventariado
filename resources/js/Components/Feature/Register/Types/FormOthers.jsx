import Label from "@/Components/Common/Forms/Label.jsx";
import TextArea from "@/Components/Common/Forms/TextArea.jsx";
import {useEffect, useState} from "react";

const initialState = { information: ''}

export const FormOthers = ({setData, data, type}) => {
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }));};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <Label value={"Detalles del Equipo"} required={true}/>
        <TextArea
            name={"information"}
            value={data.details?.information}
            onChange={(e) => handleChange("information", e.target.value)}
        />
    </>
}
