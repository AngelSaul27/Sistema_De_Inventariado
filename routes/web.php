<?php
use App\Http\Controllers\Admin\AreasController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DeviceController;
use App\Http\Controllers\Admin\ResponsibleController;
use App\Http\Controllers\User\UserDeviceController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\User\UserResponsibleController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth'])->group(function () {
    Route::get('/', function () {
        $userRole = Auth::user()->role;

        if($userRole === "ADMIN"){
            return redirect()->to('/admin');
        }else if($userRole === "AREA"){
            return redirect()->to('/area');
        }else{
            abort(403, 'Unauthorized action.');
        }
    });
});

Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/admin', [DashboardController::class, 'index']);

    Route::get('/admin/equipos', [DeviceController::class, 'index']);
    Route::get('/admin/agregar-equipo', [DeviceController::class, 'create']);
    Route::get('/admin/ver-equipo/{device:id}', [DeviceController::class, 'show']);
    Route::get('/admin/editar-equipo/{device:id}', [DeviceController::class, 'edit']);
    Route::post('/admin/editar-equipo', [DeviceController::class, 'update'])->name("admin-editar-equipo");
    Route::post('/admin/agregar-equipo', [DeviceController::class, 'store'])->name("admin-agregar-equipo");
    Route::post('/admin/remover-equipo/{device:id}', [DeviceController::class, 'delete'])->name("admin-remover-equipo");

    Route::get('/admin/areas', [AreasController::class, 'index']);
    Route::get('/admin/agregar-area', [AreasController::class, 'create']);
    Route::get('/admin/ver-area/{area:id}', [AreasController::class, 'show']);
    Route::get('/admin/editar-area/{area:id}', [AreasController::class, 'edit']);
    Route::post('/admin/editar-area', [AreasController::class, 'update'])->name("admin-editar-area");
    Route::post('/admin/agregar-area', [AreasController::class, 'store'])->name("admin-agregar-area");
    Route::post('/admin/remover-area/{area:id}', [AreasController::class, 'delete'])->name("admin-remover-area");

    Route::get('/admin/responsables', [ResponsibleController::class, 'index']);
    Route::get('/admin/agregar-responsable', [ResponsibleController::class, 'create']);
    Route::get('/admin/ver-responsable/{responsible:id}', [ResponsibleController::class, 'show']);
    Route::post('/admin/editar-responsable', [ResponsibleController::class, 'update'])->name("admin-editar-responsable");
    Route::post('/admin/agregar-responsable', [ResponsibleController::class, 'store'])->name("admin-agregar-responsable");
    Route::post('/admin/remover-responsable/{responsible:id}', [ResponsibleController::class, 'delete'])->name("admin-remover-responsable");
});

Route::middleware(['auth', 'verified', 'area'])->group(function () {
    Route::get('/area', [UserController::class, 'index']);

    Route::get('/area/perfil', [ProfileController::class, 'index']);
    Route::post('/area/editar-perfil', [ProfileController::class, 'update'])->name("area-editar-perfil");
    Route::post('/area/editar-credenciales', [ProfileController::class, 'credentials'])->name("area-editar-credenciales");

    Route::get('/area/mis-equipos', [UserDeviceController::class, 'index']);
    Route::get('/area/agregar-equipo', [UserDeviceController::class, 'create']);
    Route::get('/area/ver-equipo/{device:id}', [UserDeviceController::class, 'show']);
    Route::get('/area/editar-equipo/{device:id}', [UserDeviceController::class, 'edit']);
    Route::post('/area/editar-equipo', [UserDeviceController::class, 'update'])->name("area-editar-equipo");
    Route::post('/area/agregar-equipo', [UserDeviceController::class, 'store'])->name("area-agregar-equipo");
    Route::post('/area/remover-equipo/{device:id}', [UserDeviceController::class, 'delete'])->name("area-remover-equipo");

    Route::get('/area/responsables', [UserResponsibleController::class, 'index']);
    Route::post('/area/editar-responsable', [UserResponsibleController::class, 'update'])->name("area-editar-responsable");
    Route::post('/area/agregar-responsable', [UserResponsibleController::class, 'store'])->name("area-agregar-responsable");
    Route::post('/area/remover-responsable/{responsible:id}', [UserResponsibleController::class, 'delete'])->name("area-remover-responsable");
});

require __DIR__.'/auth.php';
