<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateAreaRequest;
use App\Models\Area;
use App\Models\Device;
use App\Models\User;
use App\Services\AreaDevicesSearch;
use App\Services\AreaSearch;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AreasController extends Controller
{

    public function index(Request $request): Response
    {
        $pageSize = $request->query('size', 12);
        $query = Area::query();

        if ($request->has('searchTerm')) {
            $services = new AreaSearch();
            $services->SearchTerms($request, $query);
        }

        $area = $query->paginate($pageSize);

        return Inertia::render("Admin/Areas", [
            'areas' => $area,
            'searched' => $request->has('searchTerm')
        ]);
    }

    public function show(Area $area, Request $request): Response
    {
        $pageSize = $request->query('size', 12);
        $query = Device::where('area_id', $area->id)->with(['responsible', 'types']);

        if ($request->has('searchTerm')) {
            $services = new AreaDevicesSearch();
            $services->SearchTermsByArea($request, $query);
        }

        $devices = $query->paginate($pageSize);

        return Inertia::render("Admin/AreaDetails",
            ['area' => $area, 'devices' => $devices, 'searched' => $request->has('searchTerm')]
        );
    }

    public function create(): Response
    {
        return Inertia::render("Admin/Forms/AreaForm", ['title' => 'Registro de Areas']);
    }

    public function store(CreateAreaRequest $request): RedirectResponse
    {
        if($request->register($request)){
            return redirect()->to("/admin/areas");
        }

        return redirect()->back();
    }

    public function delete(Area $area): RedirectResponse
    {
        $area->delete();
        return redirect()->to("/admin/areas");
    }

    public function edit(Area $area): Response|RedirectResponse
    {
        $user = User::where('area_id', $area->id)->first();

        return Inertia::render("Admin/Forms/AreaFormEdit", [
            'area' => $area, 'user' => $user, 'title' => "Editar Área"
        ]);
    }

    public function update(): RedirectResponse
    {

        return redirect()->back();
    }

}
