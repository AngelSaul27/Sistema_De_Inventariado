<?php

namespace App\Http\Requests\Admin;

use App\Models\Area;
use App\Models\User;
use Exception;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;

class CreateAreaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'username' => ['required', 'string'],
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
            'area' => ['required', 'string'],
        ];
    }

    public function register($request)
    {
        DB::beginTransaction();
        try{
            $area = new Area();
            $area->name = $request->area;

            if($request->file){
                $imagenPath = $request->file('file')->store('area', 'public');
                if ($imagenPath) {
                    $area->logotipo = "storage/".$imagenPath;
                }
            }

            $area->save();

            User::firstOrCreate(
                ['email' => $request->email],
                [
                    'name' => $request->username,
                    'role' => env('ROLE_AREA'),
                    'password' => bcrypt($request->password),
                    'area_id' => $area->id
                ]
            );
            DB::commit();
            return true;
        }catch (Exception $e) {
            DB::rollback();
            echo "Error: " . $e->getMessage();
        }
    }

}
