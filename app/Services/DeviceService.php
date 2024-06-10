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

class DeviceService
{
    public function GetDetailsDeviceByType($TYPE, $DEVICE_ID)
    {
        return match ($TYPE) {
            "Almacenamiento" => DeviceStorage::where("device_id", "=", $DEVICE_ID)->first(),
            "Computadora", "Laptop" => DeviceComputer::where("device_id", "=", $DEVICE_ID)->first(),
            "Red" => DeviceNetwork::where("device_id", "=", $DEVICE_ID)->first(),
            "Impresoras" => DevicePrinter::where("device_id", "=", $DEVICE_ID)->first(),
            "Monitor" => DeviceMonitor::where("device_id", "=", $DEVICE_ID)->first(),
            "Perifericos" => DevicePeripheral::where("device_id", "=", $DEVICE_ID)->first(),
            "Proyector" => DeviceProjector::where("device_id", "=", $DEVICE_ID)->first(),
            "Tablets" => DeviceTablet::where("device_id", "=", $DEVICE_ID)->first(),
            "Telefonia" => DeviceTelephony::where("device_id", "=", $DEVICE_ID)->first(),
            default => DeviceOther::where("device_id", "=", $DEVICE_ID)->first()
        };
    }

    public function GetDetailsDeviceByTypeForEdit($TYPE, $DEVICE_ID)
    {
        return match ($TYPE) {
            "Almacenamiento" =>
                DeviceStorage::select('type as type_storage', 'capacity as capacity_storage')
                    ->where("device_id", "=", $DEVICE_ID)->first(),
            "Computadora", "Laptop" => DeviceComputer::where("device_id", "=", $DEVICE_ID)->first(),
            "Red" =>
                DeviceNetwork::select('type as type_network', 'speed', 'bandwidth', 'security_protocol')
                    ->where("device_id", "=", $DEVICE_ID)->first(),
            "Impresoras" =>
                DevicePrinter::select(
                    'type as type_printer', 'paper_sizes_supported',
                    'duplex_printing', 'ink_or_toner', 'printing_technology'
                )->where("device_id", "=", $DEVICE_ID)->first(),
            "Monitor" => DeviceMonitor::where("device_id", "=", $DEVICE_ID)->first(),
            "Perifericos" =>
                DevicePeripheral::select('type as type_peripherals', 'connection_type as connections')
                    ->where("device_id", "=", $DEVICE_ID)->first(),
            "Proyector" => DeviceProjector::where("device_id", "=", $DEVICE_ID)->first(),
            "Tablets" =>
                DeviceTablet::select(
                    'screen_size', 'operating_system as tablet_operating_system',
                    'processor as tablet_processor', 'storage_capacity as tablet_storage_capacity'
                )->where("device_id", "=", $DEVICE_ID)->first(),
            "Telefonia" => DeviceTelephony::where("device_id", "=", $DEVICE_ID)->first(),
            default => DeviceOther::where("device_id", "=", $DEVICE_ID)->first()
        };
    }
}
