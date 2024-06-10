<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property mixed id
 * @property mixed name
 * @property mixed type_id
 * @method static findOrFail(float|int|string $brand_id)
 */
class DeviceBrand extends Model
{

    protected $table = 'devices_brands';

    protected $fillable = [
        'name',
        'type_id'
    ];

    public function type() : BelongsTo
    {
        return $this->belongsTo(DeviceType::class);
    }

    public function model(): HasMany
    {
        return $this->hasMany(DeviceModel::class);
    }
}
