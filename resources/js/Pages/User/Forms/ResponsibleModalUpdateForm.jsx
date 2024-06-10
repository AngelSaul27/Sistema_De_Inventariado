import {useForm} from "@inertiajs/react";
import Label from "@/Components/Common/Forms/Label.jsx";
import Input from "@/Components/Common/Forms/Input.jsx";
import SubmitButton from "@/Components/Common/Forms/SubmitButton.jsx";
import AlertErrors from "@/Components/Common/Forms/AlertErrors.jsx";
import {useEffect} from "react";
import Modal from "@/Components/Common/Modal.jsx";

const ResponsibleModalUpdateForm = ({showModal, setCloseModal, id, url = "area-editar-responsable"}) => {
    const { data, setData, post, processing, errors, reset, wasSuccessful} = useForm({id: id, name: ''});

    useEffect(() => {
        setData("id", id);
    }, [showModal]);

    useEffect(() => {
        if(wasSuccessful){
            setCloseModal();
            reset();
        }
    }, [wasSuccessful])

    const submit = (e) => {
        e.preventDefault();
        post(route(url));
    };

    return (
        <Modal show={showModal} onClose={setCloseModal} maxWidth={"md"}>
            <form onSubmit={submit} className={"p-4 space-y-4"}>
                <h1 className={"text-center text-xl font-bold text-gray-300"}>Actualizar Responsable</h1>
                <Label value={"Nombre del Responsable"} required={true}/>
                <Input
                    name={"name"}
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder={"Nombre de Responsable"}
                />
                <AlertErrors message={errors.name} className="mt-2" />
                <SubmitButton disabled={processing} className={"bg-gray-700 hover:bg-gray-700/25 justify-center py-3"}>
                    ACTUALIZAR
                </SubmitButton>
            </form>
        </Modal>
    );
}
export default ResponsibleModalUpdateForm;
