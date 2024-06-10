<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed id
 * @property mixed name
 * @property mixed brand_id
 * @method static findOrFail(float|int|string $brand_id)
 * @method static find(mixed $model_id)
 * @method static where(string $string, string $string1, mixed $brand_id)
 */
class DeviceModel extends Model
{
    protected $table = 'devices_models';

    protected $fillable = [
        'name',
        'brand_id'
    ];

    public function brand() : BelongsTo
    {
        return $this->belongsTo(DeviceBrand::class);
    }
}
