<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed $id
 * @property mixed area_id
 * @property mixed types_id
 * @property mixed responsible_id
 * @property mixed brand_id
 * @property mixed serial_number
 * @property mixed condition
 * @property mixed acquisition
 * @property mixed warranty
 * @property mixed comments
 * @method static find(mixed $id)
 * @method static where(string $string, $AREA_ID)
 * @method static where(string $string, String $condition, $AREA_ID)
 */
class Device extends Model
{
    protected $table = 'devices';

    protected $fillable = [
        'area_id',
        'types_id',
        'responsible_id',
        'brand_id',
        'serial_number',
        'condition',
        'acquisition',
        'warranty',
        'comments'
    ];


    public function area() : BelongsTo
    {
        return $this->belongsTo(Area::class);
    }

    public function responsible(): BelongsTo
    {
        return $this->belongsTo(Responsible::class);
    }

    public function types() : BelongsTo
    {
        return $this->belongsTo(DeviceType::class);
    }

    public function brand() : BelongsTo
    {
        return $this->belongsTo(DeviceBrand::class);
    }
}
