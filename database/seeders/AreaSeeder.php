<?php

namespace Database\Seeders;

use App\Models\Area;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;

class AreaSeeder extends Seeder
{
    private array $NAME_AREAS;

    public function __construct()
    {
        $this->NAME_AREAS = Config::get('areas');
    }

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->NAME_AREAS as $NAME) {
            Area::firstOrCreate(
                ['name' => $NAME],
                ['logotipo' => 'https://placehold.co/600x400']
            );
        }
    }
}
