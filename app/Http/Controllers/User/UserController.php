<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Device;
use App\Models\Responsible;
use App\Services\AreaDevicesSearch;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{

    public function index(Request $request): Response
    {
        $area_id = auth()->user()->area->id;
        $pageSize = $request->query('size', 10);
        $responsibles = Responsible::where('area_id', $area_id)->count();
        $query = Device::where('area_id', $area_id)->with(['responsible', 'types']);

        if ($request->has('searchTerm')) {
            $services = new AreaDevicesSearch();
            $services->SearchTerms($request, $query);
        }

        $dispositivos = $query->paginate($pageSize);

        return Inertia::render("User/Dashboard",
            [
                'page_data' => ['count_responsibles' => $responsibles, 'devices' => $dispositivos],
                'searched' => $request->has('searchTerm'),
                'title' => 'Panel'
            ]
        );
    }

}
