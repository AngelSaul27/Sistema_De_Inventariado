<?php

namespace App\Services;

class AreaDevicesSearch
{

    public function SearchTerms($request, $query): void
    {
        $searchTerm = $request->query('searchTerm');
        $query->where(function ($query) use ($searchTerm) {
            // Convertir el término de búsqueda a minúsculas
            $searchTermLower = strtolower($searchTerm);

            // Unir la tabla de tipos para filtrar por nombre de tipo de equipo
            $query->whereHas('types', function ($subquery) use ($searchTermLower) {
                // Convertir el nombre del tipo de equipo a minúsculas y luego comparar
                $subquery->whereRaw('lower(name) like ?', ["%$searchTermLower%"]);
            })
                // Unir la tabla de responsables para filtrar por nombre de responsable
                ->orWhereHas('responsible', function ($subquery) use ($searchTermLower) {
                    // Convertir el nombre del responsable a minúsculas y luego comparar
                    $subquery->whereRaw('lower(name) like ?', ["%$searchTermLower%"]);
                })
                ->orWhereHas('area', function ($subquery) use ($searchTermLower) {
                    // Convertir el nombre del responsable a minúsculas y luego comparar
                    $subquery->whereRaw('lower(name) like ?', ["%$searchTermLower%"]);
                })
                // Convertir el número de serie a minúsculas y luego comparar
                ->orWhereRaw('lower(serial_number) like ?', ["%$searchTermLower%"]);
        });
    }

    public function SearchTermsMinified($request, $query): void
    {
        $searchTerm = $request->query('searchTerm');
        $query->where(function ($query) use ($searchTerm) {
            // Convertir el término de búsqueda a minúsculas
            $searchTermLower = strtolower($searchTerm);

            // Unir la tabla de tipos para filtrar por nombre de tipo de equipo
            $query->whereHas('types', function ($subquery) use ($searchTermLower) {
                // Convertir el nombre del tipo de equipo a minúsculas y luego comparar
                $subquery->whereRaw('lower(name) like ?', ["%$searchTermLower%"]);
            })
                // Convertir el número de serie a minúsculas y luego comparar
                ->orWhereRaw('lower(serial_number) like ?', ["%$searchTermLower%"]);
        });
    }

    public function SearchTermsByArea($request, $query): void
    {
        $searchTerm = $request->query('searchTerm');
        $query->where(function ($query) use ($searchTerm) {
            // Convertir el término de búsqueda a minúsculas
            $searchTermLower = strtolower($searchTerm);

            // Unir la tabla de tipos para filtrar por nombre de tipo de equipo
            $query->whereHas('types', function ($subquery) use ($searchTermLower) {
                // Convertir el nombre del tipo de equipo a minúsculas y luego comparar
                $subquery->whereRaw('lower(name) like ?', ["%$searchTermLower%"]);
            })
                // Unir la tabla de responsables para filtrar por nombre de responsable
                ->orWhereHas('responsible', function ($subquery) use ($searchTermLower) {
                    // Convertir el nombre del responsable a minúsculas y luego comparar
                    $subquery->whereRaw('lower(name) like ?', ["%$searchTermLower%"]);
                })
                // Convertir el número de serie a minúsculas y luego comparar
                ->orWhereRaw('lower(serial_number) like ?', ["%$searchTermLower%"]);
        });
    }
}
