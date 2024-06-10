import AlertError from "@/Components/Common/AlertError.jsx";

const TypeErrors = ({errors, processing}) => (
    <AlertError errors={[
        errors.area_id,
        errors.responsible_id, errors.types_id,
        errors.brand_id, errors.model_id,
        errors.serial_number, errors.condition,
        errors.acquisition, errors.warranty,
        errors.comments, errors.details,

        errors['details.type_storage'], errors['details.capacity_storage'],

        errors['details.ram'], errors['details.processor'],
        errors['details.generation'], errors['details.storage'],
        errors['details.antivirus'], errors['details.ofimatica'],
        errors['details.operating_system'],

        errors['details.type_network'], errors['details.speed'],
        errors['details.bandwidth'], errors['details.security_protocol'],

        errors['details.duplex_printing'], errors['details.ink_or_toner'],
        errors['details.paper_sizes_supported'], errors['details.printing_technology'],
        errors['details.type_printer'],

        errors['details.resolution'], errors['details.panel_type'],
        errors['details.connections'],
        errors['details.type_peripherals'],

        errors['details.brightness'], errors['details.input_ports'],
        errors['details.wireless_capabilities'],

        errors['details.screen_size'], errors['details.tablet_operating_system'],
        errors['details.tablet_processor'], errors['details.storage_capacity'],

        errors['details.speed_dial'], errors['details.caller_id'],
        errors['details.call_forwarding'], errors['details.voicemail_support'],
        errors['details.phone_lines'],

        errors['details.information'],
    ]} processing={processing} />
)
export default TypeErrors;
