import Label from "@/Components/Common/Forms/Label.jsx";
import {FieldsContainer, FieldSpace} from "@/Layouts/Form/FieldsContainer.jsx";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";
import {
    CAPACITY_STORAGES,
    LIST_PROCESSORS,
    LIST_PROCESSORS_GENERATIONS,
    MEMORY_RAM,
    OPERATING_SYSTEMS,
    SOFTWARES_ANTIVIRUS,
    SOFTWARES_OFIMATICA
} from "@/Util/UnchangeableValues.js";
import {useEffect, useState} from "react";

export const FormComputers = ({setData, data, type, initialStateData}) => {
    const initialState = {
        ram: initialStateData?.ram ? initialStateData.ram : '',
        processor: initialStateData?.processor ? initialStateData.processor : '',
        generation: initialStateData?.generation ? initialStateData.generation : '',
        storage: initialStateData?.storage ? initialStateData.storage : '',
        antivirus: initialStateData?.antivirus ? initialStateData.antivirus : '',
        ofimatica: initialStateData?.ofimatica ? initialStateData.ofimatica : '',
        operating_system: initialStateData?.operating_system ? initialStateData.operating_system : ''
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }));};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return (
        <>
            <FieldsContainer>
                <FieldSpace>
                    <Label value={"Procesador"} required={true} />
                    <SelectedCreate
                        name={"processor"}
                        setData={handleChange}
                        options={LIST_PROCESSORS}
                        input_props={{value: data.details?.processor}}
                    />
                </FieldSpace>
                <FieldSpace>
                    <Label value={"Generación"} required={true}/>
                    <SelectedCreate
                        name={"generation"}
                        setData={handleChange}
                        options={LIST_PROCESSORS_GENERATIONS}
                        input_props={{value: data.details?.generation}}
                    />
                </FieldSpace>
            </FieldsContainer>
            <FieldsContainer>
                <FieldSpace>
                    <Label value={"Memoria Ram"} required={true}/>
                    <SelectedCreate
                        name={"ram"}
                        setData={handleChange}
                        options={MEMORY_RAM}
                        input_props={{ value: data.details?.ram, type: "number"}}
                    />
                </FieldSpace>
                <FieldSpace>
                    <Label value={"Disco"} required={true}/>
                    <SelectedCreate
                        type={"number"}
                        name={"storage"}
                        setData={handleChange}
                        options={CAPACITY_STORAGES}
                        input_props={{type: "number", value: data.details?.storage}}
                    />
                </FieldSpace>
            </FieldsContainer>
            <FieldsContainer>
                <FieldSpace>
                    <Label value={"Sistema Operativo"} required={true}/>
                    <SelectedCreate
                        name={"operating_system"}
                        setData={handleChange}
                        options={OPERATING_SYSTEMS}
                        input_props={{value: data.details?.operating_system}}
                    />
                </FieldSpace>
                <FieldSpace>
                    <Label value={"Antivirus"}/>
                    <SelectedCreate
                        name={"antivirus"}
                        setData={handleChange}
                        options={SOFTWARES_ANTIVIRUS}
                        input_props={{value: data.details?.antivirus}}
                    />
                </FieldSpace>
            </FieldsContainer>
            <Label value={"Software de Ofimática"}/>
            <SelectedCreate
                name={"ofimatica"}
                setData={handleChange}
                options={SOFTWARES_OFIMATICA}
                input_props={{value: data.details?.ofimatica}}
            />
        </>
    )
}
