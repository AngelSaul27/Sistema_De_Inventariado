<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Http\Request;

/**
 * @property mixed $id
 * @property mixed $name
 * @property mixed $area_id
 * @method static findOrFail(float|int|string $responsible_id)
 * @method static where(string $string, string $string1, $responsible_id)
 * @method static find($id)
 */
class Responsible extends Model
{
    protected $table = 'responsibles';

    protected $fillable = [
        'name',
        'area_id',
    ];

    public function area() : BelongsTo
    {
        return $this->belongsTo(Area::class);
    }

    public function devices(): HasMany
    {
        return $this->hasMany(Device::class);
    }

    public function SearchTerms(Request $request, Builder $query): void
    {
        $searchTerm = $request->query('searchTerm');
        $query->where(function ($query) use ($searchTerm) {
            $searchTermLower = strtolower($searchTerm);
            $query->WhereRaw('lower(name) like ?', ["%$searchTermLower%"])
                ->orWhereHas('area', function ($subquery) use ($searchTermLower) {
                    // Convertir el nombre del responsable a minúsculas y luego comparar
                    $subquery->whereRaw('lower(name) like ?', ["%$searchTermLower%"]);
                });
        });
    }
}
