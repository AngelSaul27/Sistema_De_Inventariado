import {Head, useForm} from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import AlertErrors from "@/Components/Common/Forms/AlertErrors.jsx";
import Label from "@/Components/Common/Forms/Label.jsx";
import Input from "@/Components/Common/Forms/Input.jsx";
import Checkbox from "@/Components/Common/Forms/Checkbox.jsx";
import SubmitButton from "@/Components/Common/Forms/SubmitButton.jsx";
import {ColumnFormLayout} from "@/Layouts/Form/FormContainerLayout.jsx";

const AreaFormEdit = ({area, user, auth, title}) => {
    const initialState = {
        username: user.name,
        area: area.name,
        email: user.email,
        password: '',
        file: ''
    }

    const [sameNames, setSameNames] = React.useState(false);
    const { data, setData, post, processing, errors } = useForm({initialState});

    React.useEffect(() => {
        if (sameNames) setData('area', data.username.trim() !== '' ? data.username : '');
    }, [data.username, sameNames]);

    React.useEffect(() => {
        setData(initialState);
    }, [])

    const submit = (e) => {
        e.preventDefault();
        //post(route('admin-editar-area'));
    };

    const handleCheckBox = () => {
        const newSameNames = !sameNames;
        setSameNames(newSameNames);
        setData('area', newSameNames && data.username.trim() !== '' ? data.username : '');
    };

    return (
        <>
            <Head title={title ? title : 'Formulario'}/>
            <AuthenticatedLayout user={auth.user}>
                <ColumnFormLayout onSubmit={submit}>
                    <Errors errors={errors} />

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
                    <Label value={"Contraseña Acceso"}/>
                    <Input
                        id={"password"}
                        name={"password"}
                        type={"password"}
                        value={data.password}
                        autoComplete={"password"}
                        placeholder={"Contraseña de Acceso"}
                        onChange={(e) => setData('password', e.target.value)}
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
                        ACTUALIZAR
                    </SubmitButton>
                </ColumnFormLayout>
            </AuthenticatedLayout>
        </>
    )
}
export default AreaFormEdit;
const Errors = ({errors}) => (
    <div className={"absolute left-24 top-5"}>
        <AlertErrors message={errors?.username} className="mt-2"/>
        <AlertErrors message={errors?.password} className="mt-2"/>
        <AlertErrors message={errors?.email} className="mt-2"/>
        <AlertErrors message={errors?.area} className="mt-2"/>
        <AlertErrors message={errors?.file} className="mt-2"/>
    </div>
);
