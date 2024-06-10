<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ResponsibleRequest;
use App\Models\Device;
use App\Models\Responsible;
use App\Services\AreaDevicesSearch;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class ResponsibleController extends Controller
{
    public function index(Request $request): Response
    {
        $pageSize = $request->query('size', 10);
        $query = Responsible::with(['area'])->withCount('devices');

        if ($request->has('searchTerm')) {
            $services = new Responsible();
            $services->SearchTerms($request, $query);
        }

        $responsibles = $query->paginate($pageSize);

        return Inertia::render("Admin/Responsables", [
            'responsibles' => $responsibles,
            'searched' => $request->has('searchTerm'),
            'title' => 'Listado de Responsables'
        ]);
    }

    public function show(Responsible $responsible, Request $request): Response
    {
        $responsible->load('area');
        $pageSize = $request->query('size', 10);
        $query = Device::with(['types'])->where('responsible_id', '=', $responsible->id);

        if ($request->has('searchTerm')) {
            $services = new AreaDevicesSearch();
            $services->SearchTermsMinified($request, $query);
        }

        $devices = $query->paginate($pageSize);

        return Inertia::render("Admin/ResponsibleDetails", [
            'responsibles' => $responsible,
            'devices' => $devices,
            'searched' => $request->has('searchTerm'),
            'title' => $responsible->name
        ]);
    }


    public function update(ResponsibleRequest $responsibleRequest): RedirectResponse
    {
        $responsibleRequest->update($responsibleRequest);
        return redirect()->back();
    }

    /**
     * @throws Throwable
     */
    public function delete(Responsible $responsible): RedirectResponse
    {
        $responsible->deleteOrFail();
        return redirect()->back();
    }
}
