<?php

namespace App\Http\Requests\User;

use App\Http\Validations\BrandExist_If_Model_Is_Included;
use App\Models\Device;
use App\Models\DeviceBrand;
use App\Models\DeviceModel;
use App\Models\DeviceType;
use App\Services\BrandAndModelService;
use App\Services\DevicesRegistrationService;
use App\Services\DevicesUpdateService;
use App\Services\ResponsibleServices;
use Exception;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;

/**
 * @property mixed $responsible_id
 * @property mixed $comments
 * @property mixed $warranty
 * @property mixed $condition
 * @property mixed $acquisition
 * @property mixed $serial_number
 * @property mixed $brand_id
 */
class UserDeviceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            /* VALIDACIONES PARA CAMPOS COMUNES */
            'types_id' => ['required'], //Tipo de Dispositivo
            'brand_id' => ['nullable'], //Marca
            'model_id' => ['nullable'], //Modelo
            'condition' => ['required', 'string', 'max:255'], //Condición
            'acquisition' => ['nullable', 'date'], //Fecha de Adquisición
            'warranty' => ['nullable', 'date'], //Garantía
            'comments' => ['nullable', 'string', 'max:500'], //Comentarios
            'serial_number' => ['nullable', 'string', 'max:255'], //Numero de Serie

            /* VALIDACIÓN PARA CAMPOS GENERADOS */
            'details.type_storage' => ['sometimes', 'required', 'string', 'max:255'], //Tipo de Almacenamiento
            'details.capacity_storage' => ['sometimes', 'required', 'string', 'max:255'], //Tamaño de Almacenamiento

            'details.ram' => ['sometimes', 'required', 'max:255'], //Ram
            'details.storage' => ['sometimes', 'required', 'max:255'], //Storage
            'details.processor' => ['sometimes', 'required', 'string', 'max:255'], //Processor
            'details.operating_system' => ['sometimes', 'required', 'string', 'max:255'], //Operating System
            'details.generation' => ['sometimes', 'required', 'string', 'max:255'], //Generation
            'details.antivirus' => ['sometimes', 'nullable', 'string', 'max:255'], //Antivirus
            'details.ofimatica' => ['sometimes', 'nullable', 'string', 'max:255'], //Ofimatica

            'details.type_network' => ['sometimes', 'required', 'string', 'max:255'], //Tipo de Dispositivo de Red
            'details.bandwidth' => ['sometimes', 'required', 'max:255'], //Capacidad de Red
            'details.speed' => ['sometimes', 'required', 'max:255'], //Velocidad de la Red
            'details.security_protocol' => ['sometimes', 'nullable', 'string', 'max:255'], //Protocolo de Seguridad

            'details.duplex_printing' => ['sometimes', 'nullable', 'string', 'max:255'], //Impresión Dúplex
            'details.ink_or_toner' => ['sometimes', 'nullable', 'string', 'max:255'], //Tinta o Tóner
            'details.paper_sizes_supported' => ['sometimes', 'nullable', 'string', 'max:255'], //Tamaños de Papel Soportados
            'details.printing_technology' => ['sometimes', 'required', 'string', 'max:255'], //Tecnología de Impresión
            'details.type_printer' => ['sometimes', 'required', 'string', 'max:255'], //Tipo de Impresora

            'details.resolution' => ['sometimes', 'required', 'string', 'max:255'], //Resolución de Pantalla
            'details.connections' => ['sometimes', 'nullable', 'string', 'max:255'], //Conexiones de la Pantalla o de Periféricos
            'details.panel_type' => ['sometimes', 'nullable', 'string', 'max:255'], //Tipo de Panel de la Pantalla

            'details.type_peripherals' => ['sometimes', 'required', 'string', 'max:255'], // Tipo de Periférico

            'details.brightness' => ['sometimes', 'required', 'string', 'max:255'], //Potencia de Brillo
            'details.input_ports' => ['sometimes', 'nullable', 'string', 'max:255'], //Conexiones Disponibles
            'details.wireless_capabilities' => ['sometimes', 'nullable', 'string', 'max:255'], //Capacidad de Proyección

            'details.screen_size' => ['sometimes', 'nullable', 'string', 'max:255'], //Tamaño de Pantalla de Tablet
            'details.tablet_operating_system' => ['sometimes', 'required', 'string', 'max:255'], //Tablet Sistema Operativo
            'details.tablet_processor' => ['sometimes', 'nullable', 'string', 'max:255'], //Table Procesador
            'details.tablet_storage_capacity' => ['sometimes', 'required', 'string', 'max:255'], //Table capacidad de almacenamiento

            'details.phone_lines' => ['sometimes', 'boolean'], //Línea Telefonica
            'details.voicemail_support' => ['sometimes', 'boolean'], //Soporte de Llamada
            'details.call_forwarding' => ['sometimes', 'boolean'], //Desvío de Llamadas
            'details.caller_id' => ['sometimes', 'boolean'], //Identificador de Llamadas
            'details.speed_dial' => ['sometimes', 'boolean'], //Marcación Rápida

            'details.information' => ['sometimes', 'required', 'string', 'max:255'] //Información
        ];
    }

    public function messages(): array
    {
        return [
            //CAMPOS COMUNES
            'types_id.required' => 'Tipo de Equipo: Campo requerido',
            'condition.required' => 'Estado del Equipo: Campo requerido',
            'acquisition.date' => 'Fecha de Adquisición: Error al procesar la fecha',
            'warranty.date' => 'Fecha de Garantía: Error al procesar la fecha',
            'comments.max' => 'Observaciones: Limite de 500 caracteres excedidos',
            'condition.max' => 'Estado del Equipo: Limite de 255 caracteres excedidos',
            'serial_number.max' => 'Numero de Serie: Limite de 255 caracteres excedidos',

            'details.type_storage.required' => 'Tipo de Almacenamiento: Campo requerido',
            'details.capacity_storage.required' => 'Capacidad de Almacenamiento: Campo requerido',
            'details.type_storage.string' => 'Tipo de Almacenamiento: Campos no valido (solo texto)',
            'details.capacity_storage.string' => 'Capacidad de Almacenamiento: Campo no valido (solo texto)',
            'details.type_storage.max' => 'Tipo de Almacenamiento: Limite de 255 caracteres excedidos',
            'details.capacity_storage.max' => 'Capacidad de Almacenamiento: Limite de 255 caracteres excedidos',

            'details.ram.required' => 'Memoria Ram: Campo requerido',
            'details.storage.required' => 'Disco: Campo requerido',
            'details.processor.required' => 'Procesador: Campo requerido',
            'details.operating_system.required' => 'Sistema Operativo: Campo requerido',
            'details.generation.required' => 'Generación: Campo requerido',
            'details.antivirus.string' => 'Antivirus: Campo no valido (solo texto)',
            'details.ofimatica.string' => 'Ofimatica: Campo no valido (solo texto)',

            'details.type_network.required' => 'Tipo de Dispositivo de Red: Campo requerido',
            'details.bandwidth.required' => 'Ancho de Banda de la Red: Campo requerido',
            'details.speed.required' => 'Velocidad de la Red: Campo requerido',
            'details.type_network.string' => 'Tipo de Dispositivo de Red: Campo no valido (solo texto)',
            'details.security_protocol.string' => 'Protocolo de Red: Campos no valido (solo texto)',
            'details.type_network.max' => 'Tipo de Dispositivo de Red: Limite de 255 caracteres excedidos',
            'details.bandwidth.max' => 'Ancho de Banda de la Red: Limite de 255 caracteres excedidos',
            'details.speed.max' => 'Velocidad de la Red: Limite de 255 caracteres excedidos',
            'details.security_protocol.max' => 'Protocolo de Red: Limite de 255 caracteres excedidos',

            'details.duplex_printing.string' => 'Impresión Dúplex: Campo no valido (solo texto)',
            'details.duplex_printing.max' => 'Impresión Dúplex: Limite de 255 caracteres excedidos',
            'details.ink_or_toner.string' => 'Tinta o Tóner: Campo no valido (solo texto)',
            'details.ink_or_toner.max' => 'Tinta o Tóner: Limite de 255 caracteres excedidos',
            'details.paper_sizes_supported.string' => 'Tamaños de Papel Soportados: Campo no valido (solo texto)',
            'details.paper_sizes_supported.max' => 'Tamaños de Papel Soportados: Limite de 255 caracteres excedidos',
            'details.printing_technology.required' => 'Tecnología de Impresión: Campo requerido',
            'details.printing_technology.string' => 'Tecnología de Impresión: Campo no valido (solo texto)',
            'details.printing_technology.max' => 'Tecnología de Impresión: Limite de 255 caracteres excedidos',
            'details.type_printer.required' => 'Tipo de Impresora: Campo requerido',
            'details.type_printer.string' => 'Tipo de Impresora: Campo no valido (solo texto)',
            'details.type_printer.max' => 'Tipo de Impresora: Limite de 255 caracteres excedidos',

            'details.resolution.required' => 'Resolución: Campo requerido',
            'details.resolution.string' => 'Resolución: Campo no valido (solo texto)',
            'details.panel_type.string' => 'Tipo de Pantalla: Campo no valido (solo texto)',
            'details.connections.string' => 'Conexiones de la Pantalla: Campo no valido (solo texto)',
            'details.resolution.max' => 'Resolución: Limite de 255 caracteres excedidos',
            'details.panel_type.max' => 'Tipo de Pantalla: Limite de 255 caracteres excedidos',
            'details.connections.max' => 'Conexiones de la Pantalla: Limite de 255 caracteres excedidos',

            'details.type_peripherals.required' => 'Tipo de Periféricos: Campo requerido',
            'details.type_peripherals.string' => 'Tipo de Periféricos: Campo no valido (solo texto)',
            'details.type_peripherals.max' => 'Tipo de Periféricos: Limite de 255 caracteres excedidos',

            'details.brightness.required' => 'Potencia de Brillo: Campo requerido',
            'details.brightness.string' => 'Potencia de Brillo: Campo no valido (solo texto)',
            'details.brightness.max' => 'Potencia de Brillo: Limite de 255 caracteres excedidos',
            'details.input_ports.string' => 'Conexiónes Disponibles: Campo no valido (solo texto)',
            'details.input_ports.max' => 'Conexiónes Disponibles: Limite de 255 caracteres excedidos',
            'details.wireless_capabilities.string' => 'Formas de Proyección: Campo no valido (solo texto)',
            'details.wireless_capabilities.max' => 'Formas de Proyección: Limite de 255 caracteres excedidos',

            'details.tablet_operating_system.required' => 'Sistema Operativo: Campo requerido',
            'details.tablet_operating_system.string' => 'Sistema Operativo:  Campo no valido (solo texto)',
            'details.tablet_operating_system.max' => 'Sistema Operativo: Limite de 255 caracteres excedidos',
            'details.tablet_storage_capacity.required' => 'Capacidad de Almacenamiento: Campo requerido',
            'details.tablet_storage_capacity.string' => 'Capacidad de Almacenamiento:  Campo no valido (solo texto)',
            'details.tablet_storage_capacity.max' => 'Capacidad de Almacenamiento: Limite de 255 caracteres excedidos',
            'details.screen_size.string' => 'Tamaño de Pantalla:  Campo no valido (solo texto)',
            'details.screen_size.max' => 'Tamaño de Pantalla: Limite de 255 caracteres excedidos',
            'details.tablet_processor.string' => 'Procesador:  Campo no valido (solo texto)',
            'details.tablet_processor.max' => 'Procesador: Limite de 255 caracteres excedidos',

            'details.phone_lines.boolean' => 'Línea telefonica: Campo no valido (Solo valores de selección)',
            'details.voicemail_support.boolean' => 'Soporte de Llamada de Voz: Campo no valido (Solo valores de selección)',
            'details.call_forwarding.boolean' => 'Desvío de Llamadas: Campo no valido (Solo valores de selección)',
            'details.caller_id.boolean' => 'Identificador de Llamadas: Campo no valido (Solo valores de selección)',
            'details.speed_dial.boolean' => 'Marcación Rápida: Campo no valido (Solo valores de selección)',

            'details.information.required' => 'Información: Campo requerido',
            'details.information.string' => 'Información:  Campo no valido (solo texto)',
            'details.information.max' => 'Información: Limite de 255 caracteres excedidos',
        ];
    }

    /**
     * @throws Exception
     */
    public function createDevice($request): void
    {
        try{
            DB::beginTransaction();
            new BrandExist_If_Model_Is_Included($request);

            if(auth()->user()->area === null){
                throw new Exception("Error: información del área no encontrada", 400);
            }

            if(is_numeric($request->types_id)){
                $type = DeviceType::findOrFail($request->types_id);
            }else{
                $type = new DeviceType();
                $type->name = $request->types_id;
                $type->description = $request->types_id;
                $type->save();
            }

            self::FeatureRegisterDevices($type, $request);

            DB::commit();
        }catch (Exception $e){
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * @throws Exception
     */
    public function update(UserDeviceRequest $userDeviceRequest, $device): void
    {
        try{
            DB::beginTransaction();

            if($device){
                if($userDeviceRequest->responsible_id !== $device->responsible_id){
                    $responsible = (new ResponsibleServices())->RegisterOrGetResponsible($userDeviceRequest);
                    $device->responsible_id = $responsible->id;
                }

                $device->serial_number = $userDeviceRequest->serial_number;
                $device->condition = $userDeviceRequest->condition;
                $device->acquisition = $userDeviceRequest->acquisition;
                $device->warranty = $userDeviceRequest->warranty;
                $device->comments = $userDeviceRequest->comments;

                (new DevicesUpdateService())
                    ->UpdateDetailsDeviceByType($device->types->name, $userDeviceRequest, $device->id);

                $device->save();
            }

            DB::commit();
        }catch (Exception $e){
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * @throws Exception
     */
    private function FeatureRegisterDevices($type, $request): void
    {
        $responsible = (new ResponsibleServices())->RegisterOrGetResponsible($request);
        $device = self::RegisterDevice($request, $type->id, $responsible?->id);
        (new DevicesRegistrationService())->RegisterDetailsDeviceByType($type->name, $request, $device->id);
    }

    private function RegisterDevice($REQUEST, $TYPE_ID, $RESPONSIBLE_ID): Device
    {
        $device = new Device();
        $device->area_id = auth()->user()->area->id;
        $device->types_id = $TYPE_ID;
        $device->responsible_id = $RESPONSIBLE_ID;
        $device->serial_number = $REQUEST->serial_number;
        $device->condition = $REQUEST->condition;
        $device->acquisition = $REQUEST->acquisition;
        $device->warranty = $REQUEST->warranty;
        $device->comments = $REQUEST->comments;

        $brand = (new BrandAndModelService())->RegisterBrandAndModel($REQUEST, $TYPE_ID);

        if($brand !== null){
            $device->brand_id = $brand->id;
        }

        $device->save();
        return $device;
    }

}
