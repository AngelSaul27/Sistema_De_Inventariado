<?php

namespace Database\Seeders;

use App\Models\DeviceType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;

class DeviceTypeSeeder extends Seeder
{
    private array $TYPES_DEVICES;

    public function __construct()
    {
        $this->TYPES_DEVICES = Config::get('typedevices');
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->TYPES_DEVICES as $TYPE){
            DeviceType::firstOrCreate(
                ['name' => $TYPE['value']],
                ['description' => $TYPE['label']],
            );
        }
    }
}
