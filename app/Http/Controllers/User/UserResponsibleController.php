<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserResponsibleRequest;
use App\Models\Responsible;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserResponsibleController extends Controller
{

    public function index(Request $request): Response
    {
        $area_id = auth()->user()->area->id;
        $pageSize = $request->query('size', 10);
        $query = Responsible::where('area_id', '=', $area_id)->withCount('devices');

        if ($request->has('searchTerm')) {
            $searchTerm = $request->query('searchTerm');
            $searchTermLower = strtolower($searchTerm);

            $query->WhereRaw('lower(name) like ?', ["%$searchTermLower%"]);
        }

        $responsibles = $query->paginate($pageSize);

        return Inertia::render("User/Responsible",
            [
                'responsibles' => $responsibles,
                'searched' => $request->has('searchTerm'),
                'title' => "Mis Responsables"
            ]
        );
    }

    public function create(): Response
    {
        return Inertia::render("User/Forms/DeviceForm", ["title" => "Registro de Resposables"]);
    }

    public function store(UserResponsibleRequest $createResponsableRequest): RedirectResponse
    {
        $createResponsableRequest->register($createResponsableRequest);
        return redirect()->back();
    }

    public function update(UserResponsibleRequest $responsableRequest): RedirectResponse
    {
        $responsableRequest->update($responsableRequest);
        return redirect()->back();
    }

    /**
     * @throws \Throwable
     */
    public function delete(Responsible $responsible): RedirectResponse
    {
        if($responsible->area_id === auth()->user()->area->id){
            $responsible->deleteOrFail();
        }

        return redirect()->back();
    }

}
