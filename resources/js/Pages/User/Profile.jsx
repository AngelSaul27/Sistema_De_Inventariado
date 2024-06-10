import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";
import {useForm} from "@inertiajs/react";
import {ColumnFormLayout} from "@/Layouts/Form/FormContainerLayout.jsx";
import Label from "@/Components/Common/Forms/Label.jsx";
import Input from "@/Components/Common/Forms/Input.jsx";
import SubmitButton from "@/Components/Common/Forms/SubmitButton.jsx";
import AlertError from "@/Components/Common/AlertError.jsx";
import AlertSuccess from "@/Components/Common/AlertSuccess.jsx";
import {useEffect} from "react";

const Profile = ({auth, area}) => {

    const { data, setData, post, processing, errors, wasSuccessful, reset} = useForm({
        name: auth.user.name,
        logotipo: area.logotipo,
        email: auth.user.email,
        old_password: '',
        password: '',
        password_confirmation: ''
    });

    useEffect(() => {
        if(wasSuccessful){
            reset();
        }
    }, [wasSuccessful])

    const submitUpdateProfile = (e) => {
        e.preventDefault();
        post(route('area-editar-perfil'));
    }

    const submitUpdatePassword = (e) => {
        e.preventDefault();
        post(route('area-editar-credenciales'));
    }

    return (
        <AuthenticatedLayout user={auth.user} title={"Perfil"}>
            <AlertError errors={[
                errors.name, errors.logotipo,
                errors.email, errors.old_password,
                errors.password, errors.password_confirmation
            ]} processing={processing} />
            <AlertSuccess wasSuccess={wasSuccessful} />

            <ColumnFormLayout onSubmit={submitUpdateProfile} encType="multipart/form-data">
                <Label>
                    <div className={"relative flex justify-center hover:text-gray-500 cursor-pointer transition-all duration-300"}>
                        <div className={"absolute top-2 right-2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                            </svg>
                        </div>
                        <img src={data.logotipo} width={200} height={200}
                             className={"w-48 h-48 rounded-full object-cover"} alt={auth.user}/>
                    </div>
                    <Input
                        type={"file"}
                        name={"logotipo"}
                        className={"hidden"}
                        accept=".jpg, .jpeg, .png"
                        onChange={(e)=> setData('email', e.target.value)}
                    />
                </Label>
                <h1 className={"text-center text-xl font-bold text-gray-300"}>Información Básica</h1>

                <Label>Nombre de Area</Label>
                <Input
                    name={"name"}
                    value={data.name}
                    onChange={(e)=> setData('name', e.target.value)}
                />
                <Label>Correo de Recuperación</Label>
                <Input
                    type={"email"}
                    name={"email"}
                    value={data.email}
                    onChange={(e)=> setData('email', e.target.value)}
                />
                <SubmitButton disabled={processing} className={"bg-gray-700 hover:bg-gray-700/25 justify-center py-3"}>
                    Actualizar
                </SubmitButton>
            </ColumnFormLayout>
            <ColumnFormLayout onSubmit={submitUpdatePassword}>
                <h1 className={"text-center text-xl font-bold text-gray-300"}>Actualizar Contraseña</h1>
                <Label>Contraseña</Label>
                <Input
                    type={"password"}
                    name={"old_password"}
                    placeholder={"********"}
                    value={data.old_password}
                    onChange={(e)=> setData('old_password', e.target.value)}
                />
                <Label>Nueva Contraseña</Label>
                <Input
                    type={"password"}
                    name={"password"}
                    placeholder={"********"}
                    value={data.password}
                    onChange={(e)=> setData('password', e.target.value)}
                />
                <Label>Repetir Contraseña</Label>
                <Input
                    type={"password"}
                    name={"password_confirmation"}
                    placeholder={"********"}
                    value={data.password_confirmation}
                    onChange={(e)=> setData('password_confirmation', e.target.value)}
                />
                <SubmitButton disabled={processing} className={"bg-gray-700 hover:bg-gray-700/25 justify-center py-3"}>
                    Actualizar
                </SubmitButton>
            </ColumnFormLayout>
        </AuthenticatedLayout>
    )
}
export default Profile;
