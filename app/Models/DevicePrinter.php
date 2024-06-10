<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed device_id
 * @property mixed type
 * @property mixed printing_technology
 * @property mixed paper_sizes_supported
 * @property mixed duplex_printing
 * @property mixed ink_or_toner
 * @method static where(string $string, string $string1, $DEVICE_ID)
 * @method static select(string $string, string $string1, string $string2, string $string3, string $string4)
 * @method static findOrFail($DEVICE_ID)
 */
class DevicePrinter extends Model
{
    protected $table = 'devices_printers';

    protected $fillable = [
        'device_id',
        'type',
        'printing_technology',
        'paper_sizes_supported',
        'duplex_printing',
        'ink_or_toner'
    ];

    public function devices() : BelongsTo
    {
        return $this->belongsTo(Device::class);
    }
}
