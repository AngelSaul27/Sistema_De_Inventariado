<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CreateDeviceRequest;
use App\Models\Area;
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

class DeviceController extends Controller
{

    public function index(Request $request): Response
    {
        $pageSize = $request->query('size', 10);
        $query = Device::with(['responsible', 'types', 'area']);

        if ($request->has('searchTerm')) {
            $services = new AreaDevicesSearch();
            $services->SearchTerms($request, $query);
        }

        $dispositivos = $query->paginate($pageSize);

        return Inertia::render("Admin/Inventory", [
            'devices' => $dispositivos,
            'searched' => $request->has('searchTerm'),
            'title' => 'Dispositivos'
        ]);
    }

    public function create(): Response
    {
        $datos = [
            'devicesTypes' => DeviceType::all()->toArray(),
            'devicesBrands' => DeviceBrand::all()->toArray(),
            'devicesModels' => DeviceModel::all()->toArray(),
            'areaResponsibles' => Responsible::all()->toArray(),
            'areas' => Area::all()->toArray(),
        ];

        return Inertia::render("Admin/Forms/DeviceForm",
            ['title' => 'Registro de Equipos', 'datos' => $datos]
        );
    }

    /**
     * @throws Exception
     */
    public function store(CreateDeviceRequest $createDeviceRequest): RedirectResponse
    {
        $createDeviceRequest->createDevice($createDeviceRequest);
        return redirect()->back();
    }

    public function show(Device $device): Response
    {
        if($device){
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
        $area = Area::where("id", "=", $device->area_id)->first();
        $responsibles = Responsible::where('area_id', '=', $area->id)->get()->values()->toArray();

        $datos = [
            'types_devices' => DeviceType::all()->toArray(),
            'brands_devices' => DeviceBrand::all()->toArray(),
            'models_devices' => DeviceModel::all()->toArray(),
            'responsibles' => $responsibles,
            'device_detail' => (new DeviceService())->GetDetailsDeviceByTypeForEdit($device->types->name, $device->id),
            'device_model' => $device->brand_id ? DeviceModel::where('brand_id', '=', $device->brand_id)->first() : [],
            'area' => $area
        ];

        return Inertia::render("Admin/Forms/DeviceFormEdit", [
            'title' => 'Actualizar Equipo',
            'datos' => $datos,
            'device' => $device
        ]);
    }

    /**
     * @throws Exception
     */
    public function update(CreateDeviceRequest $updateDeviceRequest): RedirectResponse
    {
        $device = Device::find($updateDeviceRequest->id);
        $device->load('area', 'responsible', 'types', 'brand');
        $updateDeviceRequest->update($updateDeviceRequest, $device);
        return redirect()->to('/area/mis-equipos');
    }

    /**
     * @throws \Throwable
     */
    public function delete(Device $device): RedirectResponse
    {
        $device->deleteOrFail();

        return redirect()->back();
    }

}
