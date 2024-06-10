<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed type
 * @property mixed speed
 * @property mixed bandwidth
 * @property mixed security_protocol
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static select(string $string, string $string1, string $string2, string $string3)
 * @method static findOrFail($DEVICE_ID)
 */
class DeviceNetwork extends Model
{
    protected $table = 'devices_network';

    protected $fillable = [
        'device_id',
        'type',
        'speed',
        'bandwidth',
        'security_protocol'
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
