import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import {Head, useForm} from "@inertiajs/react";
import React, {useEffect, useState} from "react";
import TypeErrors from "@/Components/Feature/TypeErros.jsx";
import AlertSuccess from "@/Components/Common/AlertSuccess.jsx";
import {ColItemFormLayout, RowFormLayout} from "@/Layouts/Form/FormContainerLayout.jsx";
import Label from "@/Components/Common/Forms/Label.jsx";
import SelectedCreate from "@/Components/Feature/Register/SelectedCreate.jsx";
import Selected from "@/Components/Common/Forms/Selected.jsx";
import {DEVICE_CONDITIONS} from "@/Util/UnchangeableValues.js";
import {FieldsContainer, FieldSpace} from "@/Layouts/Form/FieldsContainer.jsx";
import Input from "@/Components/Common/Forms/Input.jsx";
import TypesRegisterDevices from "@/Components/Feature/Register/TypesRegisterDevices.jsx";
import TextArea from "@/Components/Common/Forms/TextArea.jsx";
import SubmitButton from "@/Components/Common/Forms/SubmitButton.jsx";

const initialState = {
    responsible_id: '',
    area_id: '',
    types_id: '',
    brand_id: '',
    model_id: '',
    serial_number: '',
    condition: '',
    acquisition: '',
    warranty: '',
    comments: '',
    details: {}
}

const DeviceForm = ({auth, title, datos}) => {
    const { devicesTypes, devicesBrands, devicesModels, areaResponsibles, areas } = datos;
    const [areaResponsibleFilter, setAreaResponsibleFilter] = useState(areaResponsibles);
    const [devicesBrandsFilter, setDevicesBrandsFilter] = useState(devicesBrands);
    const [devicesModelsFilter, setDevicesModelsFilter] = useState(devicesModels);
    const {
        data, setData, post, processing,
        reset, errors, clearErrors, hasErrors,
        wasSuccessful, setDefaults
    } = useForm(initialState);

    const submit = (e) => {
        e.preventDefault();
        clearErrors();
        post(route('admin-agregar-equipo'));
    };

    useEffect(() => {
        if(!hasErrors && !errors.lenght > 0){
            setDefaults(initialState);
            reset();
        }
    }, [wasSuccessful])

    useEffect(() => {
        if(data.area_id){
            const filter = areaResponsibles.filter(responsible => (responsible.area_id).toString() === data.area_id);
            setAreaResponsibleFilter(filter)
        }
    }, [data.area_id]);

    useEffect(() => {
        if(data.types_id){
            const filter = devicesBrands.filter(brand => (brand?.type_id).toString() === data.types_id);
            setDevicesBrandsFilter(filter);
        }
    }, [data.types_id]);

    useEffect(() => {
        if(data.brand_id){
            const filter = devicesModels.filter(model => (model?.brand_id).toString() === data.brand_id);
            setDevicesModelsFilter(filter);
        }
    }, [data.brand_id]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={title ? title : 'Formulario'}/>

            <TypeErrors errors={errors} processing={processing} />
            <AlertSuccess wasSuccess={wasSuccessful} />

            <RowFormLayout onSubmit={submit}>
                <ColItemFormLayout>
                    <h1 className={"text-center text-xl font-bold text-gray-300"}>{title}</h1>

                    <Label value={"Area"} required/>
                    <Selected
                        name={"area_id"}
                        onChange={(e) => { setData('area_id', e.target.value) }}
                        options={areas}
                        input_props={{value: data.area_id}}
                    />

                    <Label value={"Responsable del Equipo"}/>
                    <SelectedCreate
                        name={"responsible_id"}
                        setData={setData}
                        options={areaResponsibleFilter}
                        input_props={{value: data.responsible_id}}
                    />

                    <Label value={"Tipo de Equipo"} required/>
                    <SelectedCreate
                        name={"types_id"}
                        setData={setData}
                        options={devicesTypes}
                        input_props={{value: data.types_id}}
                    />

                    <FieldsContainer>
                        <FieldSpace>
                            <Label value={"Marca del Equipo"}/>
                            <SelectedCreate
                                name={"brand_id"}
                                setData={setData}
                                options={devicesBrandsFilter}
                                input_props={{value: data.brand_id}}
                            />
                        </FieldSpace>
                        <FieldSpace>
                            <Label value={"Modelo del Equipo"} required={false}/>
                            <SelectedCreate
                                name={"model_id"}
                                setData={setData}
                                options={devicesModelsFilter}
                                input_props={{value: data.model_id}}
                            />
                        </FieldSpace>
                    </FieldsContainer>

                    <Label value={"Estado del Equipo"} required={true}/>
                    <Selected
                        name={"condition"}
                        value={data.condition}
                        options={DEVICE_CONDITIONS}
                        onChange={(e) => setData('condition', e.target.value)}
                    />

                    <Label value={"N° de Serie del Equipo"} required={false}/>
                    <Input
                        name={"serial_number"}
                        value={data.serial_number}
                        onChange={(e) => setData('serial_number', e.target.value)}
                        placeholder={"###-####-###"}
                    />
                </ColItemFormLayout>

                <ColItemFormLayout>
                    { data.types_id &&
                        <TypesRegisterDevices type={data.types_id} setData={setData} data={data} />
                    }

                    <FieldsContainer>
                        <FieldSpace>
                            <Label value={"Fecha de Adquisición"} required={false}/>
                            <Input
                                type={"date"}
                                name={"acquisition"}
                                value={data.acquisition}
                                onChange={(e) => setData('acquisition', e.target.value)}
                            />
                        </FieldSpace>
                        <FieldSpace>
                            <Label value={"Fecha de Garantía"} required={false}/>
                            <Input
                                type={"date"}
                                name={"warranty"}
                                value={data.warranty}
                                onChange={(e) => setData('warranty', e.target.value)}
                            />
                        </FieldSpace>
                    </FieldsContainer>

                    <Label value={"Observaciones"} required={false}/>
                    <TextArea
                        name={"comments"}
                        value={data.comments}
                        onChange={(e) => setData('comments', e.target.value)}
                        placeholder={"Nombre de Usuario"}
                        className={"resize-none min-h-[115px]"}
                    />

                    <SubmitButton disabled={processing} className={"bg-gray-700 hover:bg-gray-700/25 justify-center py-3"}>
                        PROCESAR
                    </SubmitButton>
                </ColItemFormLayout>

            </RowFormLayout>
        </AuthenticatedLayout>
    )
}
export default DeviceForm;
