<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\UserDeviceRequest;
use App\Models\Device;
use App\Models\DeviceBrand;
use App\Models\DeviceModel;
use App\Models\DeviceType;
use App\Models\Responsible;
use App\Services\AreaDevicesSearch;
use App\Services\DeviceService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class UserDeviceController extends Controller
{
    public function index(Request $request): Response
    {
        $pageSize = $request->query('size', 10);
        $AREA_ID = auth()->user()->area->id;
        $query = Device::where('area_id', $AREA_ID)->with(['responsible', 'types']);

        if ($request->has('searchTerm')) {
            $services = new AreaDevicesSearch();
            $services->SearchTerms($request, $query);
        }

        $dispositivos = $query->paginate($pageSize);

        return Inertia::render("User/Inventory", [
            'devices' => $dispositivos,
            'searched' => $request->has('searchTerm'),
            'title' => 'Mis Dispositivos'
        ]);
    }

    public function create(): Response
    {
        $datos = [
            'types_devices' => DeviceType::all()->toArray(),
            'brands_devices' => DeviceBrand::all()->toArray(),
            'models_devices' => DeviceModel::all()->toArray(),
            'responsibles' => Responsible::all()
                ->where('area_id', '=', auth()->user()->area->id)
                ->toArray()
       ];

        return Inertia::render("User/Forms/DeviceForm", ['title' => 'Registrar Equipo', 'datos' => $datos]);
    }

    /**
     * @throws Exception
     */
    public function store(UserDeviceRequest $userDeviceRequest): RedirectResponse
    {
        $userDeviceRequest->createDevice($userDeviceRequest);
        return redirect()->back();
    }

    /**
     * @throws Throwable
     */
    public function delete(Device $device): RedirectResponse
    {
        if($device->area_id === auth()->user()->area->id){
            $device->deleteOrFail();
        }

        return redirect()->back();
    }

    public function show(Device $device): Response
    {
        if($device->area_id === auth()->user()->area->id){
            $device->load('area', 'responsible', 'types', 'brand');
            $details = (new DeviceService())->GetDetailsDeviceByType($device->types->name, $device->id);

            $model = [];

            if($device->brand){
                $model = DeviceModel::where("brand_id", "=", $device->brand->id)->first();
            }

            return Inertia::render("User/ShowDevice", [
                'device' => $device,
                'details' => $details,
                'model' => $model,
                'title' => $device->types->name
            ]);
        }else{
            return abort(404, 'No se encontró el recurso que estás buscando.');
        }
    }

    public function edit(Device $device): Response
    {
        $datos = [
            'types_devices' => DeviceType::all()->toArray(),
            'brands_devices' => DeviceBrand::all()->toArray(),
            'models_devices' => DeviceModel::all()->toArray(),
            'responsibles' => Responsible::all()
                ->where('area_id', '=', auth()->user()->area->id)
                ->toArray(),
            'device_detail' => (new DeviceService())->GetDetailsDeviceByTypeForEdit($device->types->name, $device->id),
            'device_model' => $device->brand_id ? DeviceModel::where('brand_id', '=', $device->brand_id)->first() : []
        ];

        return Inertia::render("User/Forms/EditDeviceForm", [
            'title' => 'Actualizar Equipo',
            'datos' => $datos,
            'device' => $device
        ]);
    }

    public function update(UserDeviceRequest $userDeviceRequest): RedirectResponse
    {
        $device = Device::find($userDeviceRequest->id);
        if($device->area_id === auth()->user()->area->id){
            $device->load('area', 'responsible', 'types', 'brand');
            $userDeviceRequest->update($userDeviceRequest, $device);
            return redirect()->to('/area/mis-equipos');
        }else{
            return abort(404, 'No se encontró el recurso que estás buscando.');
        }
    }
}
