import AuthenticatedLayout from "@/Layouts/App/AuthenticatedLayout.jsx";

const ShowDevice = ({auth, device, details, model}) => {

    const TypeDetails = (type) => {
        switch (type) {
            case "Almacenamiento":
                return DeviceStorage(details);
            case "Laptop":
            case "Computadora":
                return DeviceComputer(details);
            case "Red":
                return DeviceNetwork(details);
            case "Impresoras":
                return DevicePrinter(details);
            case "Monitor":
                return DeviceMonitor(details);
            case "Perifericos":
                return DevicePeripheral(details);
            case "Proyector":
                return DeviceProjector(details);
            case "Tablets":
                return DeviceTablet(details);
            case "Telefonia":
                return DeviceTelephony(details);
            default:
                return DeviceOther(details);
        }
    }

    return (
        <AuthenticatedLayout user={auth.user} title={"Equipo de "+device.types.name}>
            <div className={"flex flex-col justify-center items-center gap-4"}>
                <LayoutBox>
                    <div className={"flex gap-2 items-center justify-between"}>
                        <span className={"text-xl font-bold text-center"}>{device.types.name}</span>
                        <div className={"flex gap-2"}>
                            <a href={"/area/editar-equipo/" + device.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={"fill-white w-5 h-5"}>
                                    <path d="M20 10.3V8H4V21H11V19.13L19.39 10.74C19.57 10.56 19.78 10.42 20 10.3M15 13H9V11.5C9 11.22 9.22 11 9.5 11H14.5C14.78 11 15 11.22 15 11.5V13M21 7H3V3H21V7M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </LayoutBox>
                <LayoutBox>
                    <span className={"text-xl font-bold mb-1 block"}>Información Básica</span>
                    <div className={"flex gap-1"}>
                        <span className={"text-gray-400"}>Responsable: </span>
                        <span className={"text-gray-600"}>
                            {device.responsible?.name ? device.responsible.name : 'Sin información'}
                        </span>
                    </div>
                    <div className={"flex gap-1"}>
                        <span className={"text-gray-400"}>Condiciones: </span>
                        <span className={"text-gray-600"}>
                            {device.condition ? device.condition : 'Sin información'}
                        </span>
                    </div>
                    <div className={"flex gap-1"}>
                        <span className={"text-gray-400"}>Marca: </span>
                        <span className={"text-gray-600"}>
                            {device.brand?.name ? device.brand.name : 'Sin información'}
                        </span>
                    </div>
                    <div className={"flex gap-1"}>
                        <span className={"text-gray-400"}>Modelo: </span>
                        <span className={"text-gray-600"}>
                            {model?.name ? model.name : 'Sin información'}
                        </span>
                    </div>
                    <div className={"flex gap-1"}>
                        <span className={"text-gray-400"}>Numero de Serie: </span>
                        <span className={"text-gray-600"}>
                            {device.serial_number ? device.serial_number : 'Sin información'}
                        </span>
                    </div>
                    <div className={"flex gap-1"}>
                        <span className={"text-gray-400"}>Fecha de Adquisición: </span>
                        <span className={"text-gray-600"}>
                            {device.acquisition ? new Date(device.acquisition).toLocaleDateString() : 'Sin información'}
                        </span>
                    </div>
                    <div className={"flex gap-1"}>
                        <span className={"text-gray-400"}>Fecha de Garantía: </span>
                        <span className={"text-gray-600"}>
                            {device.warranty ? new Date(device.warranty).toLocaleDateString() : 'Sin información'}
                        </span>
                    </div>
                </LayoutBox>
                <LayoutBox>
                    <span className={"text-xl font-bold mb-1 block"}>Detalles del Equipo</span>
                    {TypeDetails(device.types.name)}
                    <div className={"flex flex-col gap-1"}>
                        <span className={"text-gray-400"}>Observaciones: </span>
                        <span className={"text-gray-600"}>
                            {device.comments ? device.comments : 'Sin información'}
                        </span>
                    </div>
                </LayoutBox>
            </div>
        </AuthenticatedLayout>
    )
}
export default ShowDevice;

const DeviceStorage = (details) => (
    <>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Tipo: </span>
            <span className={"text-gray-600"}>
                {details.type ? details.type : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Capacidad: </span>
            <span className={"text-gray-600"}>
                {details.capacity ? details.capacity : 'Sin información'}
            </span>
        </div>
    </>
)

const DeviceComputer = (details) => (
    <>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Procesador: </span>
            <span className={"text-gray-600"}>
                {details.processor ? details.processor : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Generación: </span>
            <span className={"text-gray-600"}>
                {details.generation ? details.generation : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Generación: </span>
            <span className={"text-gray-600"}>
                {details.ofimatica ? details.ofimatica : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Antivirus: </span>
            <span className={"text-gray-600"}>
                {details.antivirus ? details.antivirus : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Sistema Operativo: </span>
            <span className={"text-gray-600"}>
                {details.operating_system ? details.operating_system : 'Sin información'}
            </span>
        </div>

        <div className={"grid grid-cols-2 gap-2"}>
            <div className={"flex gap-1"}>
                <span className={"text-gray-400"}>Espacio de Disco: </span>
                <span className={"text-gray-600"}>
                    {details.storage ? details.storage : 'Sin información'}
                </span>
            </div>
            <div className={"flex gap-1"}>
                <span className={"text-gray-400"}>Ram: </span>
                <span className={"text-gray-600"}>
                    {details.ram ? details.ram : 'Sin información'}
                </span>
            </div>
        </div>
    </>
)

const DeviceNetwork = (details) => (
    <>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Tipo: </span>
            <span className={"text-gray-600"}>
                {details.type ? details.type : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Velocidad: </span>
            <span className={"text-gray-600"}>
                {details.speed ? details.speed : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Ancho de Banda: </span>
            <span className={"text-gray-600"}>
                {details.bandwidth ? details.bandwidth : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Protocolo de Seguridad: </span>
            <span className={"text-gray-600"}>
                {details.security_protocol ? details.security_protocol : 'Sin información'}
            </span>
        </div>
    </>
)

const DevicePrinter = (details) => (
    <>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Tipo: </span>
            <span className={"text-gray-600"}>
                {details.type ? details.type : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Tecnología de Impresión: </span>
            <span className={"text-gray-600"}>
                {details.printing_technology ? details.printing_technology : 'Sin información'}
            </span>
        </div>
        <div className={"grid grid-cols-2 gap-2"}>
            <div className={"flex gap-1"}>
                <span className={"text-gray-400"}>Tinta o Toner: </span>
                <span className={"text-gray-600"}>
                    {details.ink_or_toner ? details.ink_or_toner : 'Sin información'}
                </span>
            </div>
            <div className={"flex gap-1"}>
                <span className={"text-gray-400"}>Impresión Duplex: </span>
                <span className={"text-gray-600"}>
                    {details.duplex_printing ? details.duplex_printing : 'Sin información'}
                </span>
            </div>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Tamaños de Papel: </span>
            <span className={"text-gray-600"}>
                {details.paper_sizes_supported ? details.paper_sizes_supported : 'Sin información'}
            </span>
        </div>
    </>
)

const DeviceMonitor = (details) => (
    <>
        <div className={"grid grid-cols-2 gap-1"}>
            <div className={"flex gap-1"}>
                <span className={"text-gray-400"}>Resolución: </span>
                <span className={"text-gray-600"}>
                    {details.resolution ? details.resolution : 'Sin información'}
                </span>
            </div>
            <div className={"flex gap-1"}>
                <span className={"text-gray-400"}>Tipo de Panel: </span>
                <span className={"text-gray-600"}>
                    {details.panel_type ? details.panel_type : 'Sin información'}
                </span>
            </div>
        </div>

        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Conexiones: </span>
            <span className={"text-gray-600"}>
                {details.connections ? details.connections : 'Sin información'}
            </span>
        </div>
    </>
)

const DevicePeripheral = (details) => (
    <>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Tipo: </span>
            <span className={"text-gray-600"}>
                {details.type ? details.type : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Tipo de Conexión: </span>
            <span className={"text-gray-600"}>
                {details.connection_type ? details.connection_type : 'Sin información'}
            </span>
        </div>
    </>
)

const DeviceProjector = (details) => (
    <>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Potencia de Brillo: </span>
            <span className={"text-gray-600"}>
                {details.brightness ? details.brightness : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Conexiones Disponibles: </span>
            <span className={"text-gray-600"}>
                {details.input_ports ? details.input_ports : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Formas de Proyección: </span>
            <span className={"text-gray-600"}>
                {details.wireless_capabilities ? details.wireless_capabilities : 'Sin información'}
            </span>
        </div>
    </>
)

const DeviceTablet = (details) => (
    <>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Tamaño de Pantalla: </span>
            <span className={"text-gray-600"}>
                {details.screen_size ? details.screen_size : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Capacidad de Almacenamiento: </span>
            <span className={"text-gray-600"}>
                {details.capacity_storage ? details.capacity_storage : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Sistema Operativo: </span>
            <span className={"text-gray-600"}>
                {details.operating_system ? details.operating_system : 'Sin información'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Procesador: </span>
            <span className={"text-gray-600"}>
                {details.processor ? details.processor : 'Sin información'}
            </span>
        </div>
    </>
)

const DeviceTelephony = (details) => (
    <>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Desvío de Llamadas: </span>
            <span className={"text-gray-600"}>
                {details.call_forwarding && details.call_forwarding !== "0" ? 'Si' : 'No'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Identificador de Llamada: </span>
            <span className={"text-gray-600"}>
                {details.caller_id && details.caller_id !== "0" ? 'Si' : 'No'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Línea Telefónica: </span>
            <span className={"text-gray-600"}>
                {details.phone_lines && details.phone_lines !== "0" ? 'Si' : 'No'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Marcación Rápida: </span>
            <span className={"text-gray-600"}>
                {details.speed_dial && details.speed_dial !== "0" ? 'Si' : 'No'}
            </span>
        </div>
        <div className={"flex gap-1"}>
            <span className={"text-gray-400"}>Buzón de Voz: </span>
            <span className={"text-gray-600"}>
                {details.voicemail_support && details.voicemail_support !== "0" ? 'Si' : 'No'}
            </span>
        </div>
    </>
)

const DeviceOther = (details) => (
    <>
        <div className={"flex flex-col gap-1"}>
            <span className={"text-gray-400"}>Información: </span>
            <span className={"text-gray-600"}>
                {details.information ? details.information : 'Sin información'}
            </span>
        </div>
    </>
)

const LayoutBox = ({children}) => (
    <div className={"bg-gray-800 py-5 px-10 rounded-md md:max-w-md w-full"}>
        {children}
    </div>
)
