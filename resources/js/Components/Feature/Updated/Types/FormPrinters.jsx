import {useEffect, useState} from "react";
import Label from "@/Components/Common/Forms/Label.jsx";
import SelectedCreate from "@/Components/Feature/Updated/SelectedCreate.jsx";
import {
    INK_OR_TONER,
    IS_DUPLEX,
    PAPER_SIZE_SUPPORTED,
    PRINTING_TECHNOLOGY,
    TYPE_PRINTER
} from "@/Util/UnchangeableValues.js";
import {FieldsContainer, FieldSpace} from "@/Layouts/Form/FieldsContainer.jsx";
import Selected from "@/Components/Common/Forms/Selected.jsx";

export const FormPrinters = ({setData, data, type, initialStateData}) => {
    const initialState = {
        type_printer: initialStateData?.type_printer ? initialStateData.type_printer: '', //tipo de impresora
        printing_technology: initialStateData?.printing_technology ? initialStateData.printing_technology: '', //tecnología de impresión
        paper_sizes_supported: initialStateData?.paper_sizes_supported ? initialStateData.paper_sizes_supported: '', //tamaños de papel soportados
        duplex_printing: initialStateData?.duplex_printing ? initialStateData.duplex_printing: '', //es impresión dúplex
        ink_or_toner: initialStateData?.ink_or_toner ? initialStateData.ink_or_toner: '' //tinta o tóner
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (name, value) => {setFormData(prevState => ({ ...prevState, [name]: value }));};
    useEffect(() => { setData('details', formData); }, [formData]);
    useEffect(() => { setFormData(initialState); }, [type]);

    return <>
        <Label value={"Tipo de Impresora"} required={true}/>
        <SelectedCreate
            name={"type_printer"}
            setData={handleChange}
            options={TYPE_PRINTER}
            input_props={{value: data.details?.type_printer}}
        />

        <Label value={"Tecnología de Impresión"} required={true}/>
        <SelectedCreate
            name={"printing_technology"}
            setData={handleChange}
            options={PRINTING_TECHNOLOGY}
            input_props={{value: data.details?.printing_technology}}
        />

        <Label value={"Tamaños de Papel Soportados"}/>
        <SelectedCreate
            name={"paper_sizes_supported"}
            setData={handleChange}
            options={PAPER_SIZE_SUPPORTED}
            input_props={{value: data.details?.paper_sizes_supported}}
        />

       <FieldsContainer>
           <FieldSpace>
               <Label value={"Impresión Dúplex"}/>
               <Selected
                   name={"duplex_printing"}
                   options={IS_DUPLEX}
                   value={data.details?.duplex_printing ? data.details?.duplex_printing : ''}
                   onChange={(e) => { handleChange("duplex_printing",e.target.value) }}
               />
           </FieldSpace>
           <FieldSpace>
               <Label value={"Tinta o Tóner"}/>
               <Selected
                   name={"ink_or_toner"}
                   options={INK_OR_TONER}
                   value={data.details?.ink_or_toner ? data.details?.ink_or_toner : ''}
                   onChange={(e) => { handleChange("ink_or_toner",e.target.value) }}
               />
           </FieldSpace>
       </FieldsContainer>
    </>
}
