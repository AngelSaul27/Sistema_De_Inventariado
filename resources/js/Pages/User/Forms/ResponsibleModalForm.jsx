import {useForm} from "@inertiajs/react";
import Label from "@/Components/Common/Forms/Label.jsx";
import Input from "@/Components/Common/Forms/Input.jsx";
import SubmitButton from "@/Components/Common/Forms/SubmitButton.jsx";
import AlertErrors from "@/Components/Common/Forms/AlertErrors.jsx";
import {useEffect} from "react";
import Modal from "@/Components/Common/Modal.jsx";

const ResponsibleModalForm = ({showModal, setShowModal}) => {
    const { data, setData, post, processing, errors, reset, wasSuccessful} = useForm({name: ''});

    useEffect(() => {
        if(wasSuccessful){
            setShowModal(false);
            reset();
        }
    }, [wasSuccessful])

    const submit = (e) => {
        e.preventDefault();
        post(route('area-agregar-responsable'));
    };

    return (
        <Modal show={showModal} onClose={() => {setShowModal(false)}} maxWidth={"md"}>
            <form onSubmit={submit} className={"p-4 space-y-4"}>
                <h1 className={"text-center text-xl font-bold text-gray-300"}>Registrar Responsable</h1>
                <Label value={"Nombre del Responsable"} required={true}/>

                <Input
                    name={"name"}
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder={"Nombre de Responsable"}
                />
                <AlertErrors message={errors.name} className="mt-2" />
                <SubmitButton disabled={processing} className={"bg-gray-700 hover:bg-gray-700/25 justify-center py-3"}>
                    PROCESAR
                </SubmitButton>
            </form>
        </Modal>
    );
}
export default ResponsibleModalForm;
