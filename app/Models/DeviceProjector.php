<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed brightness
 * @property mixed input_ports
 * @property mixed wireless_capabilities
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static findOrFail($DEVICE_ID)
 */
class DeviceProjector extends Model
{
    protected $table = 'devices_projector';

    protected $fillable = [
        'device_id',
        'brightness',
        'input_ports',
        'wireless_capabilities',
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
