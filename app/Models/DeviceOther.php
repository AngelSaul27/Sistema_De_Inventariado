<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed information
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static findOrFail($DEVICE_ID)
 */
class DeviceOther extends Model
{
    protected $table = 'devices_others';

    protected $fillable = [
        'device_id',
        'information',
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
