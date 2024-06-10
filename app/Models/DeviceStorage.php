<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed type
 * @property mixed capacity
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static select(string $string, string $string1)
 * @method static findOrFail($DEVICE_ID)
 */
class DeviceStorage extends Model
{
    protected $table = 'devices_storages';

    protected $fillable = [
        'device_id',
        'type',
        'capacity'
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
