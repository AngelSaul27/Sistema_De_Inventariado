<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed phone_lines
 * @property mixed voicemail_support
 * @property mixed call_forwarding
 * @property mixed caller_id
 * @property mixed speed_dial
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static findOrFail($DEVICE_ID)
 */
class DeviceTelephony extends Model
{
    protected $table = 'devices_telephony';

    protected $fillable = [
        'device_id',
        'phone_lines',
        'voicemail_support',
        'call_forwarding',
        'caller_id',
        'speed_dial',
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
