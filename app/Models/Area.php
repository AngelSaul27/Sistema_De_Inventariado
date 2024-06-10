<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @method static paginate(int $int)
 * @method static where(string $string, string $condition, $area_id)
 * @property mixed $id
 */
class Area extends Model
{
    protected $table = 'areas';

    protected $fillable = [
        'name',
        'logotipo',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getKeyName(): string
    {
        return 'id';
    }
}
