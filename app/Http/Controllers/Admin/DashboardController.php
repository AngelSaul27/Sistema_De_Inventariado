<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Area;
use App\Models\Device;
use App\Models\DeviceType;
use App\Models\Responsible;
use App\Services\AreaDevicesSearch;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{

    public function index(Request $request): Response
    {
        $pageSize = $request->query('size', 10);
        $query = Device::with(['responsible', 'types']);

        if ($request->has('searchTerm')) {
            $services = new AreaDevicesSearch();
            $services->SearchTerms($request, $query);
        }

        $dispositivos = $query->paginate($pageSize);

        $datos = [
            'total_responsibles' => Responsible::all()->count(),
            'total_areas' => Area::all()->count(),
            'total_devices' => Device::all()->count(),
            'devices' => $dispositivos,
        ];

        return Inertia::render("Admin/Dashboard", [
            'datos' => $datos,
            'searched' => $request->has('searchTerm')
        ]);
    }

}
