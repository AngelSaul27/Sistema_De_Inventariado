import {useEffect} from "react";
import {useForm} from "@inertiajs/react";
import {ColItemFormLayout, RowFormLayout} from "@/Layouts/Form/FormContainerLayout.jsx";
import {FieldsContainer, FieldSpace} from "@/Layouts/Form/FieldsContainer.jsx";
import {DEVICE_CONDITIONS} from "@/Util/UnchangeableValues.js";
import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import Label from "@/Components/Common/Forms/Label.jsx";
import Selected from "@/Components/Common/Forms/Selected.jsx";
import Input from "@/Components/Common/Forms/Input.jsx";
import TextArea from "@/Components/Common/Forms/TextArea.jsx";
import SubmitButton from "@/Components/Common/Forms/SubmitButton.jsx";
import AlertSuccess from "@/Components/Common/AlertSuccess.jsx";
import TypeErrors from "@/Components/Feature/TypeErros.jsx";
import SelectedCreate from "@/Components/Feature/Register/SelectedCreate.jsx";
import TypesRegisterDevices from "@/Components/Feature/Register/TypesRegisterDevices.jsx";

const initialState = {
    responsible_id: '',
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
    const { types_devices, brands_devices, models_devices, responsibles } = datos;
    const { data, setData, post, processing, reset, errors, clearErrors, hasErrors, wasSuccessful, setDefaults} = useForm(initialState);

    const submit = (e) => {
        e.preventDefault();
        clearErrors();
        post(route('area-agregar-equipo'));
    };

    useEffect(() => {
        if(!hasErrors && !errors.lenght > 0){
            setDefaults(initialState);
            reset();
        }
    }, [wasSuccessful])

    return (
        <AuthenticatedLayout user={auth.user} title={"Registrar Equipo"}>
            <TypeErrors errors={errors} processing={processing} />
            <AlertSuccess wasSuccess={wasSuccessful} />

            <RowFormLayout onSubmit={submit}>

                <ColItemFormLayout>
                    <h1 className={"text-center text-xl font-bold text-gray-300"}>{title}</h1>

                    <Label value={"Responsable del Equipo"} required={false}/>
                    <SelectedCreate
                        name={"responsible_id"}
                        setData={setData}
                        options={responsibles}
                        input_props={{value: data.responsible_id}}
                    />

                    <Label value={"Tipo de Equipo"} required={true}/>
                    <SelectedCreate
                        name={"types_id"}
                        setData={setData}
                        options={types_devices}
                        input_props={{value: data.types_id}}
                    />

                    <Label value={"Estado del Equipo"} required={true}/>
                    <Selected
                        name={"condition"}
                        value={data.condition}
                        options={DEVICE_CONDITIONS}
                        onChange={(e) => setData('condition', e.target.value)}
                    />

                    <FieldsContainer>
                        <FieldSpace>
                            <Label value={"Marca del Equipo"}/>
                            <SelectedCreate
                                name={"brand_id"}
                                setData={setData}
                                options={brands_devices}
                                input_props={{value: data.brand_id}}
                            />
                        </FieldSpace>
                        <FieldSpace>
                            <Label value={"Modelo del Equipo"} required={false}/>
                            <SelectedCreate
                                name={"model_id"}
                                setData={setData}
                                options={models_devices}
                                input_props={{value: data.model_id}}
                            />
                        </FieldSpace>
                    </FieldsContainer>

                    <Label value={"N° de Serie del Equipo"} required={false}/>
                    <Input
                        name={"serial_number"}
                        value={data.serial_number}
                        onChange={(e) => setData('serial_number', e.target.value)}
                        placeholder={"###-####-###"}
                    />

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
                </ColItemFormLayout>

                <ColItemFormLayout>
                    { data.types_id &&
                        <TypesRegisterDevices type={data.types_id} setData={setData} data={data} />
                    }

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
    );
}
export default DeviceForm;
