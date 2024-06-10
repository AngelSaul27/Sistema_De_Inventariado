<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;

class UserSeeder extends Seeder
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
        $ROLE_AREA = env('ROLE_AREA');
        $ROLE_ADMIN = env('ROLE_ADMIN');
        $PSW_ADMIN = env('PSW_ADMIN');
        $DEFAULT_PSW_AREA = env('DEFAULT_PSW_AREA');
        $EMAIL_ADMIN = env('EMAIL_ADMIN');
        $COUNT = 1;

        User::firstOrCreate(
            ['email' => $EMAIL_ADMIN],
            [
                'name' => 'administrador',
                'role' => $ROLE_ADMIN,
                'password' => bcrypt($PSW_ADMIN),
            ]
        );

        foreach ($this->NAME_AREAS as $NAME) {
            User::firstOrCreate(
                ['email' => strtolower(str_replace(' ', '_', $NAME)) . '@inventariado.com'],
                [
                    'name' => $NAME,
                    'role' => $ROLE_AREA,
                    'password' => bcrypt($DEFAULT_PSW_AREA),
                    'area_id' => $COUNT
                ]
            );

            $COUNT++;
        }
    }
}
