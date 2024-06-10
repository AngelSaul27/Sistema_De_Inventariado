<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed name
 * @property mixed description
 * @method static findOrFail(float|int|string $types_id)
 */
class DeviceType extends Model
{

    protected $table = 'devices_types';

    protected $fillable = [
        'name',
        'description'
    ];
}
