<?php

namespace App\Services;

class AreaSearch
{

    public function SearchTerms($request, $query): void
    {
        $searchTerm = $request->query('searchTerm');
        $query->where(function ($query) use ($searchTerm) {
            // Convertir el término de búsqueda a minúsculas
            $searchTermLower = strtolower($searchTerm);
            // Unir la tabla de tipos para filtrar por nombre del area
            $query->WhereRaw('lower(name) like ?', ["%$searchTermLower%"]);
        });
    }

}
