<?php

namespace App\Services;

use App\Models\DeviceComputer;
use App\Models\DeviceMonitor;
use App\Models\DeviceNetwork;
use App\Models\DeviceOther;
use App\Models\DevicePeripheral;
use App\Models\DevicePrinter;
use App\Models\DeviceProjector;
use App\Models\DeviceStorage;
use App\Models\DeviceTablet;
use App\Models\DeviceTelephony;

class DevicesRegistrationService
{

    public function RegisterDetailsDeviceByType($TYPE, $REQUEST, $DEVICE_ID)
    : DeviceComputer|DeviceProjector|DeviceStorage|DeviceMonitor|DevicePrinter|
        DevicePeripheral|DeviceTablet|DeviceNetwork|DeviceTelephony|DeviceOther
    {
        return match ($TYPE) {
            "Almacenamiento" => $this->RegisterStorage($REQUEST, $DEVICE_ID),
            "Computadora", "Laptop" => $this->RegisterComputer($REQUEST, $DEVICE_ID),
            "Red" => $this->RegisterNetwork($REQUEST, $DEVICE_ID),
            "Impresoras" => $this->RegisterPrinter($REQUEST, $DEVICE_ID),
            "Monitor" => $this->RegisterMonitor($REQUEST, $DEVICE_ID),
            "Perifericos" => $this->RegisterPeripherals($REQUEST, $DEVICE_ID),
            "Proyector" => $this->RegisterProjector($REQUEST, $DEVICE_ID),
            "Tablets" => $this->RegisterTablet($REQUEST, $DEVICE_ID),
            "Telefonia" => $this->RegisterTelephony($REQUEST, $DEVICE_ID),
            default => $this->RegisterInformation($REQUEST, $DEVICE_ID),
        };
    }

    private function RegisterStorage($REQUEST, $DEVICE_ID): DeviceStorage
    {
        $storage = new DeviceStorage();
        $storage->device_id = $DEVICE_ID;
        $storage->type = $REQUEST['details.type_storage'];
        $storage->capacity = $REQUEST['details.capacity_storage'];
        $storage->save();
        return $storage;
    }

    private function RegisterComputer($REQUEST, $DEVICE_ID): DeviceComputer
    {
        $computer = new DeviceComputer();
        $computer->device_id = $DEVICE_ID;
        $computer->processor = $REQUEST['details.processor'];
        $computer->ram = $REQUEST['details.ram'];
        $computer->storage = $REQUEST['details.storage'];
        $computer->operating_system = $REQUEST['details.operating_system'];
        $computer->antivirus = $REQUEST['details.antivirus'];
        $computer->ofimatica = $REQUEST['details.ofimatica'];
        $computer->generation = $REQUEST['details.generation'];
        $computer->save();
        return $computer;
    }

    private function RegisterNetwork($REQUEST, $DEVICE_ID): DeviceNetwork
    {
        $network = new DeviceNetwork();
        $network->device_id = $DEVICE_ID;
        $network->type = $REQUEST['details.type_network'];
        $network->speed = $REQUEST['details.speed'];
        $network->bandwidth = $REQUEST['details.bandwidth'];
        $network->security_protocol = $REQUEST['details.security_protocol'];
        $network->save();
        return $network;
    }

    private function RegisterPrinter($REQUEST, $DEVICE_ID): DevicePrinter
    {
        $printer = new DevicePrinter();
        $printer->device_id = $DEVICE_ID;
        $printer->printing_technology = $REQUEST['details.printing_technology'];
        $printer->paper_sizes_supported = $REQUEST['details.paper_sizes_supported'];
        $printer->duplex_printing = $REQUEST['details.duplex_printing'];
        $printer->ink_or_toner = $REQUEST['details.ink_or_toner'];
        $printer->type = $REQUEST['details.type_printer'];
        $printer->save();
        return $printer;
    }

    private function RegisterMonitor($REQUEST, $DEVICE_ID): DeviceMonitor
    {
        $monitor = new DeviceMonitor();
        $monitor->device_id = $DEVICE_ID;
        $monitor->resolution = $REQUEST['details.resolution'];
        $monitor->panel_type = $REQUEST['details.panel_type'];
        $monitor->connections = $REQUEST['details.connections'];
        $monitor->save();
        return $monitor;
    }

    private function RegisterPeripherals($REQUEST, $DEVICE_ID): DevicePeripheral
    {
        $peripherals = new DevicePeripheral();
        $peripherals->device_id = $DEVICE_ID;
        $peripherals->type = $REQUEST['details.type_peripherals'];
        $peripherals->connection_type = $REQUEST['details.connections'];
        $peripherals->save();
        return $peripherals;
    }

    private function RegisterProjector($REQUEST, $DEVICE_ID): DeviceProjector
    {
        $projector = new DeviceProjector();
        $projector->device_id = $DEVICE_ID;
        $projector->brightness = $REQUEST['details.brightness'];
        $projector->input_ports = $REQUEST['details.input_ports'];
        $projector->wireless_capabilities = $REQUEST['details.wireless_capabilities'];
        $projector->save();
        return $projector;
    }

    private function RegisterTablet($REQUEST, $DEVICE_ID): DeviceTablet
    {
        $tablet = new DeviceTablet();
        $tablet->device_id = $DEVICE_ID;
        $tablet->screen_size = $REQUEST['details.screen_size'];
        $tablet->operating_system = $REQUEST['details.tablet_operating_system'];
        $tablet->processor = $REQUEST['details.tablet_processor'];
        $tablet->storage_capacity = $REQUEST['details.storage_capacity'];
        $tablet->save();
        return $tablet;
    }

    private function RegisterTelephony($REQUEST, $DEVICE_ID): DeviceTelephony
    {
        $tel = new DeviceTelephony();
        $tel->device_id = $DEVICE_ID;
        $tel->phone_lines = $REQUEST['details.phone_lines'];
        $tel->voicemail_support = $REQUEST['details.voicemail_support'];
        $tel->call_forwarding = $REQUEST['details.call_forwarding'];
        $tel->caller_id = $REQUEST['details.caller_id'];
        $tel->speed_dial = $REQUEST['details.speed_dial'];
        $tel->save();
        return $tel;
    }

    private function RegisterInformation($REQUEST, $DEVICE_ID): DeviceOther
    {
        $other = new DeviceOther();
        $other->device_id = $DEVICE_ID;
        $other->information = $REQUEST['details.information'];
        $other->save();
        return $other;
    }

}
