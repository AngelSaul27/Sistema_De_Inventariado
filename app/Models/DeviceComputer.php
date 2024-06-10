<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed processor
 * @property mixed ram
 * @property mixed storage
 * @property mixed operating_system
 * @property mixed antivirus
 * @property mixed ofimatica
 * @property mixed generation
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static findOrFail($DEVICE_ID)
 */
class DeviceComputer extends Model
{
    protected $table = 'devices_computers';

    protected $fillable = [
        'device_id',
        'processor',
        'ram',
        'storage',
        'operating_system',
        'antivirus',
        'ofimatica',
        'generation'
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
