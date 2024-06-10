<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed screen_size
 * @property mixed operating_system
 * @property mixed processor
 * @property mixed storage_capacity
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static select(string $string, string $string1, string $string2, string $string3)
 * @method static findOrFail($DEVICE_ID)
 */
class DeviceTablet extends Model
{
    protected $table = 'devices_tablets';

    protected $fillable = [
        'device_id',
        'screen_size',
        'operating_system',
        'processor',
        'storage_capacity',
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
