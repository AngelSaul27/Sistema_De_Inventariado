import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import {Head, useForm} from "@inertiajs/react";
import Label from "@/Components/Common/Forms/Label.jsx";
import Input from "@/Components/Common/Forms/Input.jsx";
import Checkbox from "@/Components/Common/Forms/Checkbox.jsx";
import SubmitButton from "@/Components/Common/Forms/SubmitButton.jsx";
import React from "react";
import AlertErrors from "@/Components/Common/Forms/AlertErrors.jsx";
import {ColumnFormLayout} from "@/Layouts/Form/FormContainerLayout.jsx";

const AreaForm = ({auth, title}) => {
    const [sameNames, setSameNames] = React.useState(false);
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        password: '',
        email: '',
        area: '',
        file: null
    });

    React.useEffect(() => {
        if (sameNames) {
            setData('area', data.username.trim() !== '' ? data.username : '');
        }
    }, [data.username, sameNames]);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin-agregar-area'));
    };

    const handleCheckBox = () => {
        const newSameNames = !sameNames;
        setSameNames(newSameNames);
        setData('area', newSameNames && data.username.trim() !== '' ? data.username : '');
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={title ? title : 'Formulario'}/>

            <ColumnFormLayout onSubmit={submit}>
                <div className={"absolute left-24 top-5"}>
                    {Object.keys(errors).length > 0 && <h1 className={"font-bold"}>Errores:</h1>}
                    <AlertErrors message={errors.username} className="mt-2" />
                    <AlertErrors message={errors.password} className="mt-2" />
                    <AlertErrors message={errors.email} className="mt-2" />
                    <AlertErrors message={errors.area} className="mt-2" />
                    <AlertErrors message={errors.file} className="mt-2" />
                </div>

                <h1 className={"text-center text-xl font-bold"}>{title}</h1>

                <Label value={"Nombre de Usuario"} required/>
                <Input
                    id={"username"}
                    name={"username"}
                    value={data.username}
                    onChange={(e) => setData('username', e.target.value)}
                    autoComplete={"username"}
                    placeholder={"Nombre de Usuario"}
                />
                <Label value={"Correo de Acceso"} required/>
                <Input
                    id={"email"}
                    name={"email"}
                    type={"email"}
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    autoComplete={"email"}
                    placeholder={"Email de Acceso"}
                />
                <Label value={"Contraseña Acceso"} required/>
                <Input
                    id={"password"}
                    name={"password"}
                    type={"password"}
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    autoComplete={"password"}
                    placeholder={"Contraseña de Acceso"}
                />

                <div className={"flex flex-col space-y-4"}>
                    <div className={"flex justify-between"}>
                        <Label value={"Nombre del Area"} required/>
                        <div className={"flex items-center gap-2"}>
                            <Label value={"Igual al anterior"}/>
                            <Checkbox
                                onChange={handleCheckBox}
                                name={"name"}
                                type={"checkbox"}
                                placeholder={"Nombre del Area"}
                            />
                        </div>
                    </div>

                    <Input
                        id={"area"}
                        name={"area"}
                        value={data.area}
                        onChange={(e) => setData('area', e.target.value)}
                        autoComplete={"area"}
                        placeholder={"Nombre del Area"}/>
                </div>

                <Label value={"Logo"}/>
                <Input
                    id={"file"}
                    name={"file"}
                    type={"file"}
                    onChange={(e) => setData('file', e.target.files[0])}
                    autoComplete={"file"}
                    accept=".png,.jpg,.webp"
                    placeholder={"logotipo"}
                />

                <SubmitButton disabled={processing} className={"bg-gray-700 hover:bg-gray-700/25 justify-center py-3"}>
                    PROCESAR
                </SubmitButton>
            </ColumnFormLayout>
        </AuthenticatedLayout>
    )
}
export default AreaForm;
