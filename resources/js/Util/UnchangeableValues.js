//NETWORK
export const TYPE_NETWORK = [
    {id: 'Modem', description: 'Modem'},
    {id: 'Gateway', description: 'Gateway'},
    {id: 'HUB', description: 'HUB'},
    {id: 'Switch', description: 'Switch'},
    {id: 'Router', description: 'Router'},
    {id: 'Servidor', description: 'Servidor'},
    {id: 'Access Point', description: 'Access Point'},
    {id: 'Adaptador', description: 'Adaptador'},
]
export const NETWORK_SPEED = [
    {id: '20', description: '20 Mbps'},
    {id: '30', description: '30 Mbps'},
    {id: '50', description: '50 Mbps'},
    {id: '60', description: '60 Mbps'},
    {id: '80', description: '80 Mbps'},
    {id: '90', description: '90 Mbps'},
    {id: '100', description: '100 Mbps'},
    {id: '150', description: '150 Mbps'},
    {id: '200', description: '200 Mbps'},
    {id: '300', description: '300 Mbps'},
    {id: '600', description: '600 Mbps'},
    {id: '1', description: '1 Gbps'},
]
export const NETWORK_BANDWIDTH = [
    {id: '2.4', description: '2.4 GHz'},
    {id: '5', description: '5 GHz'},
]

//MONITOR
export const MONITOR_CONNECTIONS = [
    {id: 'HDMI', description: 'HDMI'},
    {id: 'VGA', description: 'VGA'},
    {id: 'DISPLAYPORT', description: 'DISPLAYPORT'},
    {id: 'HDMI, VGA', description: 'HDMI, VGA'},
    {id: 'HDMI, DISPLAYPORT', description: 'HDMI, DISPLAYPORT'},
    {id: 'TODAS', description: 'Todas las anteriores'},
]
export const RESOLUTION_MONITOR = [
    {id: '21', description: '21 Pulgadas'},
    {id: '27', description: '27 Pulgadas'},
    {id: '29', description: '29 Pulgadas'},
    {id: '32', description: '32 Pulgadas'},
    {id: '34', description: '34 Pulgadas'},
]
export const TYPE_MONITOR = [
    {id: 'LCD', description: 'LCD'},
    {id: 'LED', description: 'LED'},
]

//PERIPHERALS
export const PERIPHERALS_CONNECTIONS = [
    {id: 'USB', description: 'USB'},
    {id: 'BLUETOOTH', description: 'BLUETOOTH'},
    {id: 'JACK 3.5', description: 'JACK 3.5'},
]
export const TYPE_PERIPHERALS = [
    {id: 'MOUSE', description: 'Mouse'},
    {id: 'TECLADO', description: 'Teclado'},
    {id: 'AURICULARES', description: 'Auriculares'},
    {id: 'WEB CAM', description: 'WEBCAM'},
    {id: 'BOCINAS', description: 'BOCINAS'},
]

//PROJECTOR
export const PROJECTOR_BRIGHTNESS = [
    {id: 'Menos de 1000 lúmenes', description: 'Menos de 1000 lúmenes'},
    {id: '1000 - 2000 lúmenes', description: '1000 - 2000 lúmenes'},
    {id: '2001 - 3000 lúmenes', description: '2001 - 3000 lúmenes'},
    {id: '3001 - 4000 lúmenes', description: '3001 - 4000 lúmenes'},
    {id: '4001 - 5000 lúmenes', description: '4001 - 5000 lúmenes'},
    {id: '5001 - 6000 lúmenes', description: '5001 - 6000 lúmenes'},
    {id: '6001 - 7000 lúmenes', description: '6001 - 7000 lúmenes'},
]
export const PROJECTOR_WIRELESS = [
    {id: 'Wi-Fi', description: 'Wi-Fi'},
    {id: 'Bluetooth', description: 'Bluetooth'}
]
export const PROJECTOR_PORTS = [
    {id: 'HDMI', description: 'HDMI'},
    {id: 'VGA', description: 'VGA'},
    {id: 'USB', description: 'USB'},
    {id: 'DisplayPort', description: 'DisplayPort'},
    {id: 'HDMI, VGA, USB, DisplayPort', description: 'Todas las anteriores'},
]

//TABLETS
export const TABLETS_SCREEN_SIZE = [
    {id: '8 pulgadas', description: '8 Pulgadas'},
    {id: '8 a 10 pulgadas', description: '8 a 10 Pulgadas'},
]
export const TABLETS_OPERATING_SYSTEM = [
    {id: 'Android 6', description: 'Android 6'},
    {id: 'Android 9', description: 'Android 9'},
    {id: 'Android 10', description: 'Android 10'},
    {id: 'Android 12', description: 'Android 12'},
    {id: 'Android 13', description: 'Android 13'},
    {id: 'Android 14', description: 'Android 14'},
]

//DESKTOP - LAPTOP
export const LIST_PROCESSORS = [
    {id: 'AMD A6', description: 'AMD A6'},
    {id: 'AMD A6-5200', description: 'AMD A6-5200'},
    {id: 'AMD A8', description: 'AMD A8'},
    {id: 'AMD E-300', description: 'AMD E-300'},
    {id: 'AMD E1', description: 'AMD E1'},
    {id: 'AMD E1-1200', description: 'AMD E1-1200'},
    {id: 'AMD E1-2500', description: 'AMD E1-2500'},
    {id: 'AMD E2', description: 'AMD E2'},
    {id: 'AMD E2-7110', description: 'AMD E2-7110'},
    {id: 'AMD Athlon', description: 'AMD Athlon'},
    {id: 'AMD Athlon II X2 250', description: 'AMD Athlon II X2 250'},
    {id: 'AMD RYZEN 3', description: 'AMD RYZEN 3'},
    {id: 'AMD RYZEN 9', description: 'AMD RYZEN 9'},
    {id: 'ARM Cortex-A7', description: 'ARM Cortex-A7'},
    {id: 'Intel Core 2 Quad', description: 'Intel Core 2 Quad'},
    {id: 'Intel Core 2 Duo', description: 'Intel Core 2 Duo'},
    {id: 'i3', description: 'i3'},
    {id: 'i5', description: 'i5'},
    {id: 'i5 Pro', description: 'i5 Pro'},
    {id: 'i7', description: 'i7'},
    {id: 'Pentium', description: 'Pentium'},
    {id: 'Pentium Celeron', description: 'Pentium Celeron'},
    {id: 'Pentium Dual-Core', description: 'Pentium Dual-Core'},
    {id: 'Xeon', description: 'Xeon'},
    {id: 'Xeon E5', description: 'Xeon E5'},
]
export const LIST_PROCESSORS_GENERATIONS = [
    {id: '2th Generación', description: '2th Generación'},
    {id: '3th Generación', description: '3th Generación'},
    {id: '4th Generación', description: '4th Generación'},
    {id: '5th Generación', description: '5th Generación'},
    {id: '6th Generación', description: '6th Generación'},
    {id: '7th Generación', description: '7th Generación'},
    {id: '8th Generación', description: '8th Generación'},
    {id: '9th Generación', description: '9th Generación'},
    {id: '10th Generación', description: '10th Generación'},
    {id: '12va Generación', description: '12va Generación'},
    {id: 'Sin Generación', description: 'Sin Generación'},
]
export const MEMORY_RAM = [
    {id: '2GB', description: '2GB'},
    {id: '4GB', description: '4GB'},
    {id: '8GB', description: '8GB'},
    {id: '16GB', description: '16GB'},
    {id: '32GB', description: '32GB'},
    {id: '64GB', description: '64GB'},
    {id: '128GB', description: '128GB'},
]
export const OPERATING_SYSTEMS = [
    {id: 'Windows 7', description: 'Windows 7'},
    {id: 'Windows 8.0 o 8.1', description: 'Windows 8.0 / 8,1'},
    {id: 'Windows 10', description: 'Windows 10'},
]
export const SOFTWARES_ANTIVIRUS = [
    {id: 'Avast Free Antivirus', description: 'Avast Free Antivirus'},
    {id: 'AVG Internet Security', description: 'AVG Internet Security'},
    {id: 'Bitdefender Internet Security', description: 'Bitdefender Internet Security'},
    {id: 'Kaspersky Internet Security', description: 'Kaspersky Internet Security'},
    {id: 'McAfee Total Protection', description: 'McAfee Total Protection'},
    {id: 'Microsoft Windows Defender', description: 'Microsoft Windows Defender'},
    {id: 'ESET Internet Security', description: 'ESET Internet Security'},
    {id: 'Malwarebytes', description: 'Malwarebytes'},
    {id: 'Panda', description: 'Panda.'},
]
export const SOFTWARES_OFIMATICA = [
    {id: 'Office 2007', description: 'Microsoft Office 2007'},
    {id: 'Office 2010', description: 'Microsoft Office 2010'},
    {id: 'Office 2013', description: 'Microsoft Office 2013'},
    {id: 'Office 2016', description: 'Microsoft Office 2016'},
    {id: 'Office 2019', description: 'Microsoft Office 2019'},
    {id: 'Office 2021', description: 'Microsoft Office 2021'},
    {id: 'Microsoft 365', description: 'Microsoft 365'},
]

//STORAGE
export const TYPE_STORAGES = [
    {id: 'Disco duro', description: 'Disco Duro'},
    {id: 'Unidad SSD', description: 'Unidad SSD'},
    {id: 'Unidad USB', description: 'Unidad USB'},
    {id: 'Tarjeta SD', description: 'Tarjeta SD'},
    {id: 'Tarjeta MICRO SD', description: 'Tarjeta MICRO SD'},
    {id: 'Discos', description: 'Discos'},
]
export const CAPACITY_STORAGES = [
    {id: '200GB', description: '200 GB'},
    {id: '240GB', description: '240 GB'},
    {id: '300GB', description: '300 GB'},
    {id: '360GB', description: '360 GB'},
    {id: '450GB', description: '450 GB'},
    {id: '500GB', description: '500 GB'},
    {id: '600GB', description: '600 GB'},
    {id: '1 TB', description: '1 TB'},
    {id: '2 TB', description: '2 TB'},
    {id: '5 TB', description: '5 TB'},
    {id: '8 TB', description: '8 TB'},
]

//PRINTER
export const TYPE_PRINTER = [
    {id: 'Impresora de Inyección de Tinta', description: 'Impresora de Inyección de Tinta'},
    {id: 'Impresora de Matriz de Puntos', description: 'Impresora de Matriz de Puntos'},
    {id: 'Impresora de Sublimación de Tinta', description: 'Impresora de Sublimación de Tinta'},
    {id: 'Impresora de Transferencia Térmica', description: 'Impresora de Transferencia Térmica'},
    {id: 'Impresora Láser', description: 'Impresora Láser'},
    {id: 'Impresora Térmica', description: 'Impresora Térmica'},
]
export const PRINTING_TECHNOLOGY = [
    {id: 'Inyección de Tinta', description: 'Inyección de Tinta'},
    {id: 'Láser', description: 'Láser'},
    {id: 'Matriz de Puntos', description: 'Matriz de Puntos'},
    {id: 'Térmica', description: 'Térmica'},
]
export const PAPER_SIZE_SUPPORTED = [
    {id: 'A3', description: 'A3'},
    {id: 'A4', description: 'A4'},
    {id: 'A5', description: 'A5'},
    {id: 'A6', description: 'A6'},
    {id: 'Carta', description: 'Carta (8.5" x 11")'},
    {id: 'Legal', description: 'Legal (8.5" x 14")'},
    {id: 'Media carta', description: 'Media carta (5.5" x 8.5")'},
    {id: 'Oficio', description: 'Oficio (8.5" x 13.4")'},
    {id: 'Sobres', description: 'Sobres (#10, DL, C5, etc.)'},
    {id: 'Todas las Anteriores', description: 'Todas las Anteriores'}
]
export const IS_DUPLEX = [
    {id: 'Si', description: 'Sí'},
    {id: 'No', description: 'No'},
]
export const INK_OR_TONER = [
    {id: 'Tinta', description: 'Tinta'},
    {id: 'Toner', description: 'Toner'},
]

//GLOBAL
export const DEVICE_CONDITIONS = [
    {id: 'Nuevo', description: 'Nuevo'},
    {id: 'Usado', description: 'Usado'},
    {id: 'Reacondicionado', description: 'Reacondicionado'},
    {id: 'Dañado', description: 'Dañado'}
];
