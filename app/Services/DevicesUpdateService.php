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

class DevicesUpdateService
{

    public function UpdateDetailsDeviceByType($TYPE, $REQUEST, $DEVICE_ID)
    : DeviceComputer|DeviceProjector|DeviceStorage|DeviceMonitor|DevicePrinter|
        DevicePeripheral|DeviceTablet|DeviceNetwork|DeviceTelephony|DeviceOther
    {
        return match ($TYPE) {
            "Almacenamiento" => $this->UpdateStorage($REQUEST, $DEVICE_ID),
            "Computadora", "Laptop" => $this->UpdateComputer($REQUEST, $DEVICE_ID),
            "Red" => $this->UpdateNetwork($REQUEST, $DEVICE_ID),
            "Impresoras" => $this->UpdatePrinter($REQUEST, $DEVICE_ID),
            "Monitor" => $this->UpdateMonitor($REQUEST, $DEVICE_ID),
            "Perifericos" => $this->UpdatePeripherals($REQUEST, $DEVICE_ID),
            "Proyector" => $this->UpdateProjector($REQUEST, $DEVICE_ID),
            "Tablets" => $this->UpdateTablet($REQUEST, $DEVICE_ID),
            "Telefonia" => $this->UpdateTelephony($REQUEST, $DEVICE_ID),
            default => $this->UpdateInformation($REQUEST, $DEVICE_ID),
        };
    }

    private function UpdateStorage($REQUEST, $DEVICE_ID): DeviceStorage
    {
        $storage = DeviceStorage::where('device_id', '=', $DEVICE_ID)->first();
        if($storage){
            $storage->type = $REQUEST['details.type_storage'];
            $storage->capacity = $REQUEST['details.capacity_storage'];
            $storage->save();
        }
        return $storage;
    }

    private function UpdateComputer($REQUEST, $DEVICE_ID): DeviceComputer
    {
        $computer = DeviceComputer::where('device_id', '=', $DEVICE_ID)->first();
        if($computer){
            $computer->processor = $REQUEST['details.processor'];
            $computer->ram = $REQUEST['details.ram'];
            $computer->storage = $REQUEST['details.storage'];
            $computer->operating_system = $REQUEST['details.operating_system'];
            $computer->antivirus = $REQUEST['details.antivirus'];
            $computer->ofimatica = $REQUEST['details.ofimatica'];
            $computer->generation = $REQUEST['details.generation'];
            $computer->save();
        }
        return $computer;
    }

    private function UpdateNetwork($REQUEST, $DEVICE_ID): DeviceNetwork
    {
        $network = DeviceNetwork::where('device_id', '=', $DEVICE_ID)->first();
        if($network){
            $network->type = $REQUEST['details.type_network'];
            $network->speed = $REQUEST['details.speed'];
            $network->bandwidth = $REQUEST['details.bandwidth'];
            $network->security_protocol = $REQUEST['details.security_protocol'];
            $network->save();
        }
        return $network;
    }

    private function UpdatePrinter($REQUEST, $DEVICE_ID): DevicePrinter
    {
        $printer = DevicePrinter::where('device_id', '=', $DEVICE_ID)->first();
        if($printer){
            $printer->printing_technology = $REQUEST['details.printing_technology'];
            $printer->paper_sizes_supported = $REQUEST['details.paper_sizes_supported'];
            $printer->duplex_printing = $REQUEST['details.duplex_printing'];
            $printer->ink_or_toner = $REQUEST['details.ink_or_toner'];
            $printer->type = $REQUEST['details.type_printer'];
            $printer->save();
        }
        return $printer;
    }

    private function UpdateMonitor($REQUEST, $DEVICE_ID): DeviceMonitor
    {
        $monitor = DeviceMonitor::where('device_id', '=', $DEVICE_ID)->first();
        if($monitor){
            $monitor->resolution = $REQUEST['details.resolution'];
            $monitor->panel_type = $REQUEST['details.panel_type'];
            $monitor->connections = $REQUEST['details.connections'];
            $monitor->save();
        }
        return $monitor;
    }

    private function UpdatePeripherals($REQUEST, $DEVICE_ID): DevicePeripheral
    {
        $peripherals = DevicePeripheral::where('device_id', '=', $DEVICE_ID)->first();
        if($peripherals){
            $peripherals->type = $REQUEST['details.type_peripherals'];
            $peripherals->connection_type = $REQUEST['details.connections'];
            $peripherals->save();
        }
        return $peripherals;
    }

    private function UpdateProjector($REQUEST, $DEVICE_ID): DeviceProjector
    {
        $projector = DeviceProjector::where('device_id', '=', $DEVICE_ID)->first();
        if($projector){
            $projector->brightness = $REQUEST['details.brightness'];
            $projector->input_ports = $REQUEST['details.input_ports'];
            $projector->wireless_capabilities = $REQUEST['details.wireless_capabilities'];
            $projector->save();
        }
        return $projector;
    }

    private function UpdateTablet($REQUEST, $DEVICE_ID): DeviceTablet
    {
        $tablet = DeviceTablet::where('device_id', '=', $DEVICE_ID)->first();
        if($tablet){
            $tablet->screen_size = $REQUEST['details.screen_size'];
            $tablet->operating_system = $REQUEST['details.tablet_operating_system'];
            $tablet->processor = $REQUEST['details.tablet_processor'];
            $tablet->storage_capacity = $REQUEST['details.storage_capacity'];
            $tablet->save();
        }
        return $tablet;
    }

    private function UpdateTelephony($REQUEST, $DEVICE_ID): DeviceTelephony
    {
        $tel = DeviceTelephony::where('device_id', '=', $DEVICE_ID)->first();
        if($tel){
            $tel->phone_lines = $REQUEST['details.phone_lines'];
            $tel->voicemail_support = $REQUEST['details.voicemail_support'];
            $tel->call_forwarding = $REQUEST['details.call_forwarding'];
            $tel->caller_id = $REQUEST['details.caller_id'];
            $tel->speed_dial = $REQUEST['details.speed_dial'];
            $tel->save();
        }
        return $tel;
    }

    private function UpdateInformation($REQUEST, $DEVICE_ID): DeviceOther
    {
        $other = DeviceOther::where('device_id', '=', $DEVICE_ID)->first();
        if($other){
            $other->information = $REQUEST['details.information'];
            $other->save();
        }
        return $other;
    }

}
