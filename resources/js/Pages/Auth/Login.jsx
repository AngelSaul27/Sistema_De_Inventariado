import GuestLayout from '@/Layouts/App/GuestLayout.jsx';
import AlertErrors from '@/Components/Common/Forms/AlertErrors.jsx';
import Label from '@/Components/Common/Forms/Label.jsx';
import SubmitButton from '@/Components/Common/Forms/SubmitButton.jsx';
import {Head, useForm} from '@inertiajs/react';
import InputDark from "@/Components/Common/Forms/InputDark.jsx";

export default function Login({status}) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title={"Acceso"} />
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="email" value="Usuario" />
                    <InputDark
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <AlertErrors message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label htmlFor="password" value="Contraseña" />

                    <InputDark
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <AlertErrors message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <SubmitButton className="ms-4 hover:bg-gray-700 bg-gray-800 text-gray-300" disabled={processing} children={"Iniciar Sesión"} />
                </div>
            </form>
        </GuestLayout>
    );
}
