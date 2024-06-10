<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed resolution
 * @property mixed panel_type
 * @property mixed connections
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static findOrFail($DEVICE_ID)
 */
class DeviceMonitor extends Model
{
    protected $table = 'devices_monitor';

    protected $fillable = [
        'device_id',
        'resolution',
        'panel_type',
        'connections',
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
